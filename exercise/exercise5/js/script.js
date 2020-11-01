"use strict"

let gravityForce = 0.0025;

//a second avatar at player's control
let pin;
let hand;
let balls = [];
let numBlueBalloons = 1;
let numRedBalloons = 1;
let activeballCount = 2;

let platform = {
  x:0,
  y:0,
  w:0,
  h:5,
}

let state = `intro`;

let keptUp = 0;
let popped = 0;



function setup() {
  createCanvas(windowWidth,windowHeight);

  hand = new Hand(300,20);

  for(let i = 0 ; i < numBlueBalloons; i++){
    let x = random(0,width);
    let y = random(-400,-100);
    let blueballoon = new BlueBalloon(x,y);
    balls.push(blueballoon);
  }

  for(let i = 0 ; i < numRedBalloons; i++){
    let x = random(0,width);
    let y = random(-400,-100);
    let redBalloon = new RedBalloon(x,y);
    balls.push(redBalloon);
  }


//set a platform across screen
  platform.w =windowWidth;
  platform.x = windowWidth/2;
  platform.y = windowHeight - 100;

//spawn pin at the center of platform
  pin = new Pin(windowWidth/2,platform.y-platform.h/2-25);
}

function draw() {
  background(0);

  //spawn hand
  hand.move();
  hand.display();

  //spawn pin
  pin.move();
  pin.display();

  if (state === `intro`){
    textSize(32);
    fill(255,0,0);
    textAlign(CENTER);
    text(`UP & POP`,windowWidth/2,windowHeight/2 - 200);
    textSize(30);
    fill(255);
    text(`How to play:\n`,windowWidth/2,windowHeight/2-100);
    textSize(30);
    fill(0,0,255);
    text(`\n\n use the mouse to move the hand and keep the blue balloons up
     \n use the arrows to move the pin left and right to pop the red balloons \n
      \nCLICK anywhere to start `,windowWidth/2,windowHeight/2-100);

    //click to start simulation
    if(mouseIsPressed){
      state = `simulation`;
    }
  }


  if (state === `simulation`){

    textSize(24);
    fill(250,0,0);
    text(`Balloons popped ` + `${popped}`,width/3, 100);
    fill(0,0,250);
    text(`Balloons kept up ` + `${keptUp}`,width*2/3, 100,);


    //spawn balls
    for (let i = 0; i < balls.length; i++){
      let blueballoon = balls[i];
      if (blueballoon.active){
        blueballoon.gravity(gravityForce);
        blueballoon.move();
        blueballoon.bounce(hand);
        blueballoon.display();


        for (let i = 0; i < balls.length; i++){
          let redballoon = balls[i];
          if (redballoon.active){
            redballoon.gravity(gravityForce);
            redballoon.move();
            redballoon.bounce(hand);
          redballoon.display();


        //checks distance between the ball and the pin
        let dd = dist(pin.x,pin.y,blueballoon.x,blueballoon.y);
        if(dd <= blueballoon.size/2 + pin.size/2){
          textSize(32);
          fill(100,200,100);
          textAlign(CENTER);
          text(`press SPACE!`,pin.x,pin.y -100);
          //press space to catch the ball
          if(keyIsDown(32)){
            popped +=1;
            redBalloon.active = false;
            activeballCount -=1;
          }
        }
      }
    }
}
}
  if(popped >= balls.length){
    state = `win`;
    textSize(32);
    fill(100,200,100);
    textAlign(CENTER);
    text(`CONGRATS \n You caught all the balls! \n Refresh to Restart`,windowWidth/2,windowHeight/2 - 200);
  }


  if(keptUp <3 && activeballCount<=0){
    state = `over`;
    textSize(32);
    fill(100,200,100);
    textAlign(CENTER);
    text(`simulation Over \n You caught ${popped} balls! \n Refresh to Restart`,windowWidth/2,windowHeight/2 - 200);
  }
}
}
