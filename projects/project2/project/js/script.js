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

let segaFont;

//pre loading media, assests, audio and fonts
function preload() {
  titlePic.image = loadImage("assets/images/titlePic.gif");
  arcade.image = loadImage("assets/images/arcade.jpg");
  panelPic.image = loadImage("assets/images/panel.jpg");
  machine.image = loadImage('assets/images/machine.png')
  gameOver.image = loadImage('assets/images/end.gif')
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




//moving states and playing sounds
function keyPressed() {
  if (state === `title` && keyCode === 32) {
    state = 'instructions';
    // backgroundMusic.play();
  } else if (state === 'instructions' && keyCode === 32) {
    state = 'simulation';
  } else if (state === 'lose' && keyCode === 32) {
    state = 'instructions';
  }
}
