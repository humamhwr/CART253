"use strict";


let key = {
  x: 0,
  y: 0,
  w: 10,
  h: 100
};


let prize1;
let prize2;
let prize3;
let prize4;
let prize5;
let prize6;
let prize7;
let prize8;
let prize9;



let platform = {
  x: 0,
  y: 0,
  w: 0,
  h: 5,
}

function setup() {
  createCanvas(600, 600);

  prize1 = createPrize(200, 150);
  prize2 = createPrize(275, 150);
  prize3 = createPrize(350, 150);
  prize4 = createPrize(200, 250);
  prize5 = createPrize(275, 250);
  prize6 = createPrize(350, 250);
  prize7 = createPrize(200, 350);
  prize8 = createPrize(275, 350);
  prize9 = createPrize(350, 350);




}

function createPrize(x, y) {
  let prize = {
    x: x,
    y: y,
    size: 50,
    eaten: false,
  };
  return prize;
}

function draw() {
  background(0);



  // Move the key
  moveKey();

  // Check whether the key has won the prize
  checkPrize(prize1);
  checkPrize(prize2);
  checkPrize(prize3);
  checkPrize(prize4);
  checkPrize(prize5);
  checkPrize(prize6);
  checkPrize(prize7);
  checkPrize(prize8);
  checkPrize(prize9);

  // Display the key and prizes
  displayKey();
  displayPrize(prize1);
  displayPrize(prize2);
  displayPrize(prize3);
  displayPrize(prize4);
  displayPrize(prize5);
  displayPrize(prize6);
  displayPrize(prize7);
  displayPrize(prize8);
  displayPrize(prize9);


}

// Sets the user position to the mouse position
function moveKey() {
  key.x = mouseX;
  key.y = mouseY;
}

// Checks if the user overlaps the prize object and eats it if so
function checkPrize(prize) {
  if (!prize.eaten) {
    let d = dist(key.x, key.y, prize.x, prize.y);
    if (d < key.w / 2 + prize.size / 2) {
      prize.eaten = true;
    }
  }
}

// Draw the user as a circle
function displayKey() {
  push();
  fill(255);
  rect(key.x, key.y, key.w, key.h);
  pop();
}

// Draw the prize as a circle
function displayPrize(prize) {
  // Check if the prize is still available to be eaten
  if (!prize.eaten) {
    // Display the prize as its position and with its size
    push();
    stroke(255);
    fill(255, 100, 100);
    rect(prize.x, prize.y, prize.size);
    pop();
  }


}
