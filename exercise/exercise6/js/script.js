//Humam Houara
// this simulation is to experemint with audio, the user shoud keep making noise for the bird to fly.
// once the bird drops, the playes loses.
//*****************************************


let mic;
let birdImage = {
  x: undefined,
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
  background(135, 206, 235);

  for (let i = 0; i < clouds.length; i++) {
    let cloud = clouds[i];
    cloud.move();
    cloud.wrap();
    cloud.display();
  }
  //making the effect of the bird flying from the mic input
  micLevel = mic.getLevel();
  let y = height - micLevel * height;
  image(birdImage, width / 2, y);
}
