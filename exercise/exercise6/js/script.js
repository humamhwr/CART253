let mic;
let birdImage = {
  x: undefined,
  y: undefined,
  width: 2,
  height: 2,
};



let clouds = [];
let numclouds = 5;


function preload() {
  birdImage = loadImage('assets/images/bird.png')
  cloudImage = loadImage('assets/images/cloud.png')
};


function setup() {
  let cnv = createCanvas(600, 600);
  cnv.mousePressed(userStartAudio);

  mic = new p5.AudioIn();
  mic.start();

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


  micLevel = mic.getLevel();
  let y = height - micLevel * height;
  image(birdImage, width / 2, y);
}
