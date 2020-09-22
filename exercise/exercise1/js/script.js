/**************************************************
Excersie #1
Hummam Houara

Drew 5 circles that 4 of them cross sides and change sizes;
 the 5th circle is transparent and it gets bigger in the middle lastly there
 is a square in the middle that can change sizes according to the mouse's movment.
 The background changes colour from black to green.
**************************************************/
let bg = {
  r: 0,
  g: 0,
  b: 0
};

let upperLcircle = {
  x: 0,
  y: 0,
  size: 100,
  speed: 1,
};
let bottomLcircle = {
  x: 0,
  y: 500,
  size: 100,
  speed: 1,
};
let upperRcircle = {
  x: 500,
  y: 0,
  size: 100,
  speed: -1,
};
let bottomRcircle = {
  x: 500,
  y: 500,
  size: 100,
  speed: -1,
};

let midCircle = {
  x: 250,
  y: 250,
  size: 100,
  growthrate: 1,
  speed: 1,
  fill: 255,
  alpha:200
};
let square = {
x: 250,
y: 250,
size:100
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
  background(bg.r, bg.g, bg.b);
bg.g = map(upperLcircle.size,100,width,20,238,27);


//drawing the Upper Left Circle
  upperLcircle.x = upperLcircle.x + upperLcircle.speed;
  upperLcircle.x = constrain(upperLcircle.x,0,width);
  upperLcircle.size = map(upperLcircle.x, 0, width, 100, 300);
  noStroke();
  fill(255,255,0);
  ellipse(upperLcircle.x, upperLcircle.y, upperLcircle.size);

 //drawing the Bottom Left Circle
  bottomLcircle.x = bottomLcircle.x + bottomLcircle.speed;
  bottomLcircle.x = constrain(bottomLcircle.x,0,width);
  bottomLcircle.size = map(bottomLcircle.x, 0, width, 100, 300);
  noStroke();
  fill(255,255,0);
  ellipse(bottomLcircle.x, bottomLcircle.y, bottomLcircle.size);

  // //drawing the Upper Right Circle
    upperRcircle.x = upperRcircle.x + upperRcircle.speed;
    upperRcircle.x = constrain(upperRcircle.x,0,width);
    upperRcircle.size = map(upperRcircle.x, 0, width, 100, 300);
    noStroke();
    fill(255,0,0);
    ellipse(upperRcircle.x, upperRcircle.y, upperRcircle.size);

    //drawing the Bottom Right Circle
      bottomRcircle.x = bottomRcircle.x + bottomRcircle.speed;
      bottomRcircle.x = constrain(bottomRcircle.x,0,width);
      bottomRcircle.size = map(bottomRcircle.x, 0, width, 100, 300);
      noStroke();
      fill(255,0,0);
      ellipse(bottomRcircle.x, bottomRcircle.y, bottomRcircle.size);


  //drawing the middle circle
  midCircle.x = midCircle.x + midCircle.speed;
  midCircle.x = constrain(midCircle.x,0,width/2);
  midCircle.size = midCircle.size + midCircle.growthrate;
  midCircle.size = constrain(midCircle.size,0,width,500);
  fill(midCircle.fill,midCircle.alpha);
  ellipse(midCircle.x,midCircle.y,midCircle.size);

//drawing the square
  fill(0,0,255);
  rectMode(CENTER);
  rect(square.x,square.y,mouseX,mouseY);
}
