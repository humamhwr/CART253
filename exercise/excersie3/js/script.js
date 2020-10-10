//EXERCISE 3
//Hummam Houara

// the program will start with a red background and "Match the couples" text and to start L the user needs to click on L.
//there will be 5 moving characters, two men, two women, one child. if the two men touch, it is a match, if the two women touch they will match, if a man and a woman touch they will also match.
// the user controls the child, if the child touches anyone the game will stop


let man1 = {
  string: '👨🏻‍',
  x: undefined,
  y: 500,
  size: 100,
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
  size: 100,
}
let heart = {
  x: 0,
  y: 0,
  image: undefined,
}


let state = `title`;
function preLoad() {
  heart.image = loadImage("assets/images/heart.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupEmojis();
}


function setupEmojis() {
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
  } else if (state === `loveM`) {
    loveM();
  } else if (state === `loveF`) {
    loveF();
  } else if (state === `loveC`) {
    loveC();
  } else if (state === `loveB`) {
    loveB();
  } else if (state === `sadness`) {
    sadness();
  } else if (state === `charge`) {
    charge();
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
  checkOverlapM();
  checkOverlapF();
  checkOverlapC();
  checkOverlapB();
  checkOverlapcharge();
  checkOverlapchargeA();
  checkOverlapchargeB();
  checkOverlapchargeC();
  display();
}

function loveM() {
  push();
  background(255,102,102);
  textSize(64);
  fill(255, 150, 150);
  textAlign(CENTER, CENTER);
  text(`MATCH!‍👨‍❤️‍👨`, width / 2, height / 2);
  pop();
}

function loveF() {
  push();
  background(255,102,102);
  textSize(64);
  fill(255, 150, 150);
  textAlign(CENTER, CENTER);
  text(`MATCH!👩‍❤️‍👩`, width / 2, height / 2);
  pop();
}

function loveC() {
  push();
  background(255,102,102);
  textSize(64);
  fill(255, 150, 150);
  textAlign(CENTER, CENTER);
  text(`MATCH!👩‍❤️‍👨`, width / 2, height / 2);
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

function charge() {
  push();
  textSize(40);
  fill(150, 150, 255);
  textAlign(CENTER, CENTER);
  text(`🚨CHARGE!🚨`, width / 2, height / 2);
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

  // user movment
  child.x = mouseX
  child.y = mouseY
  noCursor();
}

//if three characters leave the screen the state changes
function checkOffscreen() {
  if ((man1.x < 0 || man1.x > width || man1.y < 0 || man1.y > height) && (man2.x < 0 || man2.x > width || man2.y < 0 || man2.y > height) && (woman1.x < 0 || woman1.x > width || woman1.y < 0 || woman1.y > height)) {
    state = 'sadness';
  }


}

function checkOverlapM() {

  //check if the circles overlap
  let d = dist(man1.x, man1.y, man2.x, man2.y);
  if (d < man1.size / 2 + man2.size / 2) {
    state = 'loveM';
  }
}

function checkOverlapF() {
  //check if the circles overlap
  let d = dist(woman1.x, woman1.y, woman2.x, woman2.y);
  if (d < man1.size / 2 + man2.size / 2) {
    state = 'loveF';
  }
}

function checkOverlapC() {
  //check if the circles overlap
  let d = dist(man1.x, man1.y, man2.x, man2.y, woman1.x, woman1.y, woman2.x, woman2.y);
  if (d < man1.size / 2 + man2.size / 2) {
    state = 'loveC';
  }
}

function checkOverlapB() {
  //check if the circles overlap
  let d = dist(man1.x, man1.y, woman1.x, woman1.y);
  if (d < man1.size / 2 + man2.size / 2) {
    state = 'loveC';
  }
}

function checkOverlapcharge() {
  let a = dist(child.x, child.y, man1.x, man1.y, )

  if (a < man1.size / 2 + child.size / 2) {
    state = 'charge';


  }
}

function checkOverlapchargeA() {
  let d = dist(child.x, child.y, man2.x, man2.y, )

  if (d < man2.size / 2 + child.size / 2) {
    state = 'charge';

  }
}

function checkOverlapchargeB() {
  let d = dist(child.x, child.y, woman1.x, woman1.y, )

  if (d < woman1.size / 2 + child.size / 2) {
    state = 'charge';

  }
}

function checkOverlapchargeC() {
  let d = dist(child.x, child.y, woman2.x, woman2.y, )

  if (d < woman2.size / 2 + child.size / 2) {
    state = 'charge';

  }
}

function display() {
  textSize(100);
  text(man1.string, man1.x, man1.y);
  text(man2.string, man2.x, man2.y);
  text(woman1.string, woman1.x, woman1.y);
  text(woman2.string, woman2.x, woman2.y);
  text(child.string, child.x, child.y)

}

function keyPressed() {
  if (state === `title` && keyCode === 76) {
    state = 'simulation';
  }
}
