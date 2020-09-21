/**************************************************
Exercise 1
Hummam Houara

I Like to move it move it!
**************************************************/


let bg = {
  r: 0,
  g: 0,
  b: 0
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
let circle2 = {
  x: 500,
  y: 250,
  size: 75,
  sizeRatio: 0.5,
  speed: -1,
  fill:255,
  alpha: 200
};
let square = {
  x: 250,
  y: 400,
  size: 100,
  sizeRatio: 2,
  speed: 0.2,
  alpha: 200
};

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);
  noStroke();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  //background
  background(bg.r, bg.g, bg.b);
// bg.r = map(circle1.size,100,width,0,255);


  //Left circle
  circle1.x = circle1.x + circle1.speed;
  circle1.x = constrain(circle1.x,0,width/2);
  circle1.size = circle1.size + circle1.growthrate;
  circle1.size = constrain(circle1.size,0,width,500);
  fill(circle1.fill,circle1.alpha);
  ellipse(circle1.x,circle1.y,circle1.size);

  //Right Cirlce
  circle2.x = circle2.x + circle2.speed;
  circle2.x = constrain(circle2.x,width/2,width);
  circle2.size = circle1.size * circle2.sizeRatio;
  fill(circle2.fill,circle2.alpha);
  ellipse(circle2.x,circle2.y,circle2.size);


//square
square.x = square.x + square.speed;
square.x = constrain(square.x,width/2,width);
square.size = square.size * square.sizeRatio;
fill(50,205,50,square.alpha);
rect(square.x,square.y,square.size);
}
