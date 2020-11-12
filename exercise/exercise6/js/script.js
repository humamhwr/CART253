//Humam Houara
// this simulation is to experemint with audio, the user shoud keep making noise for the bird to fly.
// once the bird drops, the playes loses.
//*****************************************

let = state = 'title';
let mic;
let birdImage = {
  x: 10,
  y: undefined,
  width: 2,
  height: 2,
};
let clouds = [];
let numclouds = 10;

//preloading media
function preload() {
  birdImage = loadImage('assets/images/bird.png')
  cloudImage = loadImage('assets/images/cloud.png')
};

function setup() {
  //creating canvas and accessing audio input
  let cnv = createCanvas(600, 600);
  cnv.mousePressed(userStartAudio);

  mic = new p5.AudioIn();
  mic.start();

  //showing the cloud
  for (let i = 0; i < numclouds; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let cloud = new Cloud(x, y);
    clouds.push(cloud);
  }
}

function draw() {
  if (state === `title`) {
    title();
  } else if (state === 'simulation') {
    simulation();
  } else if (state === `lose`) {
    lose();
  }

  //the simulation
  function simulation() {
    background(135, 206, 235);
    for (let i = 0; i < clouds.length; i++) {
      let cloud = clouds[i];
      cloud.move();
      cloud.wrap();
      cloud.display();
    }
    // check for the bird falling
    if (birdImage.x > 600) {
      state = 'lose';
    }
  }
  //making the effect of the bird flying from the mic input
  micLevel = mic.getLevel();
  let y = height - micLevel * height;
  image(birdImage, width / 2, y);
}

//first state details:
function title() {
  push();
  background(0)
  textSize(30);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`Keep the bird flying by using your voice!`, width / 2, height / 2);
  text(`Press spacebar to start`, width / 2, height / 1.5);
  textSize(10);
  pop();
}

//losing state
function lose() {
  push();
  background(losingPic.image);
  textSize(60);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`Game Over!`, width / 2, height / 2);
  textSize(10);
  pop();
}

//changing from title to simulation
function keyPressed() {
  if (state === `title` && keyCode === 32) {
    state = 'simulation';
  }
}
