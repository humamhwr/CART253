//EXERCISE 3
//Hummam Houara

// the program will start with a red background and "Match the couples" text and to start L the user needs to click on L.
//there will be 5 moving characters, two men, two women, one child. if the two men touch, it is a match, if the two women touch they will match, if a man and a woman touch they will also match.
// the user controls the child, if the child touches anyone the game will stop


let man1 = {
  string: '👨🏻‍',
  x: undefined,
  y: 500,
  vx: 0,
  vy: 0,
  speed: 6
}

let man2 = {
  string: '🧔🏼',
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 6
}
let woman1 = {
  string: '👱🏻‍♀️',
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 6
}
let woman2 = {
  string: '👩🏽‍🦰',
  x: undefined,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 6
}
let child = {
  string: '👶🏻',
  x: 0,
  y: 0,
}



let state = `title`; // can be: title, simulation,love,sadness


function setup() {
  createCanvas(windowWidth, windowHeight);
  setupCircles();
}


function setupCircles() {
  man1.x = width / 3;
  man2.x = 2 * width / 3;
  woman1.x = width / 3;
  woman2.x = 2 * width / 3;

  man1.vx = random(-man1.speed, man1.speed);
  man1.vy = random(-man1.speed, man1.speed);

  man2.vx = random(-man2.speed, man2.speed);
  man2.vy = random(-man2.speed, man2.speed);

  woman1.vx = random(-woman1.speed, woman1.speed);
  woman1.vy = random(-woman1.speed, woman1.speed);

  woman2.vx = random(-woman2.speed, woman2.speed);
  woman2.vy = random(-woman2.speed, woman2.speed);
}
// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  if (state === `title`) {
    title();
  } else if (state === 'simulation') {
    simulation();
  } else if (state === `love`) {
    love();
  } else if (state === `sadness`) {
    sadness();
  }
}

function title() {
  push();
  textSize(60);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`Who's gonna match?`, width / 2, height / 2);
  text(`press L to start`, width / 2, height / 1.5);
  textSize(40);
  text(`adults can match, use the mouse to not catch a charge`, width / 2, height / 1.3);
  pop();
}

function simulation() {
  move();
  checkOffscreen();
  checkOverlap();
  display();
}

function love() {
  push();
  textSize(64);
  fill(255, 150, 150);
  textAlign(CENTER, CENTER);
  text(`LOVE!`, width / 2, height / 2);
  pop();
}

function sadness() {
  push();
  textSize(40);
  fill(150, 150, 255);
  textAlign(CENTER, CENTER);
  text(`no matches were made today😕`, width / 2, height / 2);
  pop();
}

function move() {
  man1.x = man1.x + man1.vx;
  man1.y = man1.y + man1.vy;

  man2.x = man2.x + man2.vx;
  man2.y = man2.y + man2.vy;

  woman1.x = woman1.x + woman1.vx;
  woman1.y = woman1.y + woman1.vy;

  woman2.x = woman2.x + woman2.vx;
  woman2.y = woman2.y + woman2.vy;
}

function checkOffscreen() {
  if (man1.x < 0 || man1.x > width || man1.y < 0 || man1.y > height || man2.x < 0 || man2.x > width || man2.y < 0 || man2.y > height) {
    state = 'sadness';
  }
}

function checkOverlap() {
  //check if the circles overlap
  let d = dist(man1.x, man1.y, man2.x, man2.y);
  if (d < man1.size / 2 + man2.size / 2) {
    state = 'love';
  }
}

function display() {
  textSize(100);
  text(man1.string, man1.x, man1.y);
  text(man2.string, man2.x, man2.y);
  text(woman1.string, woman1.x, woman1.y);
  text(woman2.string, woman2.x, woman2.y);

}

function mousePressed() {
  if (state === `title`) {
    state = 'simulation';
  }
}
