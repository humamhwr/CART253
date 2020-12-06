"use Strict "
let backgroundMusic;

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
let arcade = {
  x:undefined,
  y:undefined,
  image:undefined,
}

let segaFont;

function preload() {
  titlePic.image = loadImage("assets/images/titlePic.gif");
  arcade.image = loadImage("assets/images/arcade.jpg");
  panelPic.image = loadImage("assets/images/panel.jpg");
  machine.image = loadImage('assets/images/machine.png')
  segaFont = loadFont('assets/SEGA.TTF');
  backgroundMusic = loadSound(`assets/sounds/background.mp3`);

  };
// setup()
//
// Description of setup() goes here.

function setup() {
  createCanvas(900, 600);
}

// draw()
//
// Description of draw() goes here.
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

let timer = 3




function simulation() {
  background(machine.image);


}

//first state details:
function title() {
  push();
  background(titlePic.image)

  textSize(30);
  fill(0, 255, 3);
  textAlign(CENTER, CENTER);
  text(`Space bar to read the instrcutions`, width / 2, 400);
  textSize(10);
  pop();
  // image(arcade, 200, 250);
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
  fill(255,0,0);
  textSize(40);
  text(`Use the arrow keys as a joystick `, width / 2, 400);
  text(`and the space bar as the button`, width / 2, 500);
  textSize(20);
  fill(255)
  text(`Space bar to start the game`, width / 2, 550)
  pop();
}

//losing state
function lose() {
  push();
  background(losingPic.image);
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
    backgroundMusic.play();
  } else if (state === 'instructions' && keyCode === 32) {
    state = 'simulation';
  } else if (state === 'lose' && keyCode === 32) {
      state = 'instructions';
}
}
