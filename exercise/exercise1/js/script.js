/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let bg = {
  r: 0,
  g: 0,
  b: 0
};
let sun = {
  x: 250,
  y: 0,
  size: 100,
  speed: 1,
};
let circle1 = {
  x: 0,
  y: 250,
  size: 100,
  growthrate: 1,
  speed: 1,
  fill: 255,
  alpha:200
};
let sun2 = {
  x: 250,
  y: 400,
  size: 100,
  speed: 1,
};
// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(255,69,0);
bg.r = map(sun.size,100,width,0,255);


//drawing the sun and it's rising
  sun.x = sun.x + sun.speed;
  sun.x = constrain(sun.x,0,width);
  sun.size = map(sun.x, 0, width, 100, 300);
  noStroke();
  fill(255,255,0);
  ellipse(sun.x, sun.y, sun.size);

  //drawing a circle
  circle1.x = circle1.x + circle1.speed;
  circle1.x = constrain(circle1.x,0,width/2);
  circle1.size = circle1.size + circle1.growthrate;
  circle1.size = constrain(circle1.size,0,width,500);
  fill(circle1.fill,circle1.alpha);
  ellipse(circle1.x,circle1.y,circle1.size);

  sun2.x = sun2.x + sun2.speed;
  sun2.x = constrain(sun2.x,0,width);
  sun2.size = map(sun2.x, 0, width, 100, 300);
  noStroke();
  fill(255,255,0);
  ellipse(sun2.x, sun2.y, sun2.size);

}
