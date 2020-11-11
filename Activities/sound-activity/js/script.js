"use strict"
/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.

let balls = [];


function setup() {
  createCanvas(600, 600);
  userStartAudio();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.move();
    ball.bounce();
    ball.display();
  }
}

function mousePressed(){
  createBall(mouseX,mouseY);
}

function createBall(x, y) {
  let ball = new Ball(x,y);
  balls.push(ball);
}
