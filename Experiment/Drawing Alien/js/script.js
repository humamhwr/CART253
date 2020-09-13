/**************************************************
Template p5 project
Hummam Houara

Drawing an Alein!
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
createCanvas(640,480);

  background(255,153,1153);
  noStroke();

  //drawing the head
  fill (155,163,163);
  ellipse(320,480,300,200);

// drawing the face
  fill(99,105,105);
  ellipse(320,240,250,400);

    //drawing the eyes
    fill(0);
    ellipse (250,240,80,250);
    ellipse (390,240,80,250);

    //nostrills
    ellipse(300,350,10,10);
    ellipse(340,350,10,10);

    //drawing the mouth
    stroke(235,9,54);
    strokeWeight(5);
    rectMode(CENTER);
    rect(320,390,100,25)







}

// draw()
//
// Description of draw() goes here.
function draw() {

}
