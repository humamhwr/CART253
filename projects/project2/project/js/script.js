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
  x: 450,
  y: 230,
  w: 90,
  h: 50,
  image: undefined,
}

let walmart = {
  x: 350,
  y: 230,
  w: 90,
  h: 50,
  image: undefined,
  size: 100,
}
let vaccine = {
  x: 460,
  y: 85,
  w: 120,
  h: 130,
  image: undefined,
}

let security = {
  x: 410,
  y: 120,
  w: 80,
  h: 80,
  image: undefined,
}

let js = {
  x: 330,
  y: 120,
  w: 80,
  h:80,
  image: undefined,
}

let box = {
  x: 385,
  y: 475,
  w: 110,
  h: 90,
  image: undefined,
}

let key = {
  x: 330,
  y: 320,
  w: 1,
  h: 1,
  image: undefined,
  size: 100
}

var x1 = 320;
var x2 = 320;

var y1 = 353;
var y2 = 353;

var x3 = 330;
var y3 = 320;

var x4 = 330;
var y4 = 380;


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
let timer = 70



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
  win();
}


//first state details:
function title() {
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

// displaying the prizes/pictures in a function
function prizes() {
  image(amazon.image, amazon.x, amazon.y, amazon.w, amazon.h);
  image(walmart.image, walmart.x, walmart.y, walmart.w, walmart.h);
  image(vaccine.image, vaccine.x, vaccine.y, vaccine.w, vaccine.h);
  image(security.image, security.x, security.y, security.w, security.h);
  image(js.image, js.x, js.y, js.w, js.h);
  image(box.image, box.x, box.y, box.w,box.h);
  push();
  imageMode(CENTER);
  image(key.image, x3, y3, 90, 65);
  pop();
}

//drawing the bars
function bars() {
  strokeWeight(5);
  line(x1, 80, x2, 380);
  line(305, y1, 555, y2)
  line(x3, y3, x4, y4);

  if (x1 >= 600) {
    x1 = 0;
  }

  if (y3 >= 330) {
    y3 = 330;
  }

}

//moving states and playing sounds
function keyPressed() {
  if (state === `title` && keyCode === 32) {
    state = 'instructions';
    // backgroundMusic.play();
  } else if (state === 'instructions' && keyCode === 32) {
    state = 'simulation';

  } else if (state === 'simulation' && keyCode === 39 === true) {
    x1 = x1 + 5;
    x2 = x2 + 5;
    x3 = x3 + 5;
    x4 = x4 + 5;

  } else if (state === 'simulation' && keyCode === 38) {
    y1 = y1 - 5;
    y2 = y2 - 5;
    y3 = y3 - 5;
    y4 = y4 - 5;
  } else if (state === 'simulation' && keyCode === 32) {
    y3 = y3 - 10;
    key.y = key.y - 10;


  } else if (state === 'lose' && keyCode === 32) {
    state = 'instructions';
  }
}

function win() {
  //JS
  let d1 = dist(key.x, key.y, js.x, js.y);
  if (d1 < key.size / 2 + js.size / 2) {
    text(`Congratulations! you won 0 JS errors for the rest of your life`, width / 2, height / 2);
    image(js.image, 385, 475, 90, 50);
  }
  //Cyber privacy
  let d2 = dist(key.x, key.y, security.x, security.y);
  if (d2 < key.size / 2 + security.size / 2) {
    text(`Congratulations! you won Cyber privacy for the rest of your life`, width / 2, height / 2);
    image(security.image, 385, 475, 90, 50);
  }
  //covid-19
  let d3 = dist(key.x, key.y, vaccine.x, vaccine.y);
  if (d3 < key.size / 2 + vaccine.size / 2) {
    text(`Congratulations! you won a COVId-19 Vaccine shot`, width / 2, height / 2);
    image(vaccine.image, 385, 475, 90, 50);
  }

  //walmart
  let d4 = dist(key.x, key.y, walmart.x, walmart.y);
  if (d4 < key.size / 2 + walmart.size / 2) {
    text(`Congratulations! you won 500$ walmart card -500$ from local buiness`, width / 2, height / 2);
    image(walmart.image, 385, 475, 90, 50);
  }

  //amazon
  let d5 = dist(key.x, key.y, amazon.x, amazon.y);
  if (d5 < key.size / 2 + amazon.size / 2) {
    text(`Congratulations! you won 50$ gift card from a capitalist store`, width / 2, height / 2);
    image(amazon.image, 385, 475, 90, 50);
  }


}
