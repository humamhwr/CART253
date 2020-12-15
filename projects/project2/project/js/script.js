"use Strict "
//defining variables
let backgroundMusic;
let allowedTime = 5;
let = state = 'title';
let titlePic = {
  x: undefined,
  y: undefined,
  image: undefined
}

let panelPic = {
  x: undefined,
  y: undefined,
  image: undefined
}

let machine = {
  x: undefined,
  y: undefined,
  image: undefined
}

let gameOver = {
  x: undefined,
  y: undefined,
  image: undefined
}

let arcade = {
  x: undefined,
  y: undefined,
  image: undefined,
}
let amazon = {
  x: undefined,
  y: undefined,
  width: 1,
  height: 1,
  image: undefined,
}

let walmart = {
  x: undefined,
  y: undefined,
  width: 1,
  height: 1,
  image: undefined,
}
let vaccine = {
  x: undefined,
  y: undefined,
  width: 1,
  height: 1,
  image: undefined,
}

let security = {
  x: undefined,
  y: undefined,
  width: 1,
  height: 1,
  image: undefined,
}

let js = {
  x: undefined,
  y: undefined,
  width: 1,
  height: 1,
  image: undefined,
}

let box = {
  x: undefined,
  y: undefined,
  width: 1,
  height: 1,
  image: undefined,
}

let key = {
  x: undefined,
  y: undefined,
  width: 1,
  height: 1,
  image: undefined,
}

let x1 = 320;
let x2 = 320;
var y1 = 353;
var y2 = 353;

let segaFont;

//pre loading media, assests, audio and fonts
function preload() {
  //can't use a loop beacuse file format varries
  titlePic.image = loadImage("assets/images/titlepic.gif");
  arcade.image = loadImage("assets/images/arcade.png");
  panelPic.image = loadImage("assets/images/panel.jpg");
  machine.image = loadImage('assets/images/machine.png');
  gameOver.image = loadImage('assets/images/end.gif');
  amazon.image = loadImage('assets/images/amazon.png');
  walmart.image = loadImage('assets/images/walmart.png');
  vaccine.image = loadImage('assets/images/vaccine.png');
  security.image = loadImage('assets/images/security.jpg');
  js.image = loadImage('assets/images/Js.png');
  box.image = loadImage('assets/images/box.JPG');
  key.image = loadImage('assets/images/key.png');
  segaFont = loadFont('assets/SEGA.TTF');
  backgroundMusic = loadSound(`assets/sounds/background.mp3`);

};
// setup()
//
//Setup of the canvas.

function setup() {
  createCanvas(900, 600);
}

// draw()
//
// drawing states and changing them.
function draw() {
  if (state === `title`) {
    title();
  } else if (state === 'instructions') {
    instructions();
  } else if (state === 'simulation') {
    simulation();
  } else if (state === `lose`) {
    lose();
  }
}
//defining the timer
let timer = 30



//the main state, the simulation
function simulation() {
  //background which is the machine and the arcade-themed neon lights
  background(machine.image);

  //setting up the timer
  push();
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(80);
  text(timer, 100, 120);
  pop();
  if (frameCount % 60 == 0 && timer > 0) {
    timer--;
  }
  if (timer == 0) {
    state = `lose`;
  }
  //displaying all prizes and images on the machine
  prizes();
  bars();

  //drawing the bars

}

//first state details:
function title() {
  // image(arcade.image, 200, 250 , 100, 100);

  push();
  background(titlePic.image);
  textSize(30);
  fill(0, 255, 3);
  textAlign(CENTER, CENTER);
  text(`Press the space bar to read the instrcutions`, width / 2, 400);
  textSize(20);
  fill(100, 100, 100);
  text(`*Music will be playing*`, width / 2, 500);
  textSize(10);
  pop();
  push();
  imageMode(CENTER);
  image(arcade.image, 450, 120, 400, 200);
  pop();

}

//instructions state
function instructions() {
  push();
  background(panelPic.image);
  textSize(60);
  fill(250);
  textAlign(CENTER, CENTER);
  textFont(segaFont);
  textStyle(BOLD);
  text(`Instructions`, width / 2, 200);
  fill(255, 0, 0);
  textSize(25);
  text(`Use the arrow keys as a joystick to move left and right `, width / 2, 300);
  text(`and the space bar as the button to go up and down`, width / 2, 400);
  text(`You have 31 seconds to win a prize`, width / 2, 500);
  textSize(20);
  fill(255)
  text(`Press the pace bar to start the game`, width / 2, 550)
  pop();
}

//losing state
function lose() {
  push();
  strokeWeight(5);
  line(200, 300, 500, 600);
  background(255);
  textSize(60);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`Try again!`, width / 2, height / 2);
  textSize(10);
}


function prizes() {
  image(amazon.image, 450, 230, 90, 50);
  image(walmart.image, 350, 230, 90, 50);
  image(vaccine.image, 460, 85, 120, 130);
  image(security.image, 410, 120, 80, 80);
  image(js.image, 330, 120, 80, 80);
  image(box.image, 385, 475, 110, 90);
  push();
  imageMode(CENTER);
  image(key.image, x1, y2, 110, 75);
  pop();


}

//moving states and playing sounds
function keyPressed() {
  if (state === `title` && keyCode === 32) {
    state = 'instructions';
    // backgroundMusic.play();
  } else if (state === 'instructions' && keyCode === 32) {
    state = 'simulation';

  } else if (state === 'simulation' && keyCode === 39 === true) {
    x1++;
   x2++;
  } else if (state === 'simulation' && keyCode === 38) {
    y1 = y1 - 5;
    y2 = y2 - 5;
  } else if (state === 'lose' && keyCode === 32) {
    state = 'instructions';
  }
}

//drawing the bars
function bars () {
strokeWeight(5);
fill(255);
line(x1, 80, x2, 380);
line(305, y1, 555, y2)

if (x1 >= 600) {
  x1 = 0;
}
}
