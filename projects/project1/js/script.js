/**************************************************
Project 1:
A keyboard piano where the user has to press the key of the letter that will randomly pop on the screen
and if they click the wrong key the user loses.
The program will have three states; intro, simulation and ending.

**************************************************/
let = state = 'title';
let a;
let b;
let c;
let d;
let e;
let f;
let g;
let ab;
let bb;
let db;
let eb;
let gb;
let gg;
let titlePic = {
  x: undefined,
  y: undefined,
  image: undefined
}
let letter = {
  string: ["A", "AB"],
  x: 0,
  y: 100,
  vx: 3,
  vy: 0,
  speed: 3
}



// setup()
//
// Description of setup() goes here.
function preload() {
  a = loadSound(`assets/sounds/A.mp3`);
  b = loadSound(`assets/sounds/B.mp3`);
  c = loadSound(`assets/sounds/C.mp3`);
  d = loadSound(`assets/sounds/D.mp3`);
  e = loadSound(`assets/sounds/E.mp3`);
  f = loadSound(`assets/sounds/F.mp3`);
  g = loadSound(`assets/sounds/G.mp3`);
  ab = loadSound(`assets/sounds/Ab.mp3`);
  bb = loadSound(`assets/sounds/Bb.mp3`);
  db = loadSound(`assets/sounds/Db.mp3`);
  eb = loadSound(`assets/sounds/Eb.mp3`);
  gb = loadSound(`assets/sounds/Gb.mp3`);
  gg = loadSound(`assets/sounds/A.mp3`);

  titlePic.image = loadImage("assets/images/title_cover.png");
};


function setup() {
  createCanvas(900, 800);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  if (state === `title`) {
    title();
  } else if (state === 'instructions') {
    instructions();
  } else if (state === 'simulation') {
    simulation();
  } else if (state === `lose`) {
    lose();
  }
}

let timer = 5

function generateRandomLetter() {
  var result = '';
  var characters = ["A", "AB", "B", "Bb", "C", "D"];
  var charactersLength = characters.length;

  for (var i = 0; i < charactersLength; i++) {
    result = characters[Math.floor(Math.random() * charactersLength)];
  }
  return result;
}

x = generateRandomLetter();

function myFunction() {
  myVar = setInterval(generateRandomLetter, 3000);
}


function simulation() {
  pinao();
  //generateRandomLetter();
  //text(generateRandomLetter());
  //letter.x = letter.x + letter.vx;
  //text(letter.string, letter.x, letter.y)
textAlign(CENTER, CENTER);
textSize(100);
text(timer, 150, 150);

if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
  timer --;
}
if (timer == 0) {
  state = `lose`;
}
  text(x, 450, 250);

  if (keyCode == x.charCodeAt(0)){
    x = generateRandomLetter();
    timer = 5;
  }
  changeState = false
  i = 0;
  while (i < 10 && changeState == false) {
     i++;
   }


//}



  // setupLetters();
}

// function setupLetters(length) {
//    var text           = '';
//    var characters       = 'ABCDEFG' ;
//    var charactersLength = characters.length;
//    for ( var i = 0; i < length; i++ ) {
//       text += characters.charAt(Math.floor(Math.random() * charactersLength));
//    }
//    return text;
// }

//first state details:
function title() {
  push();
  background(titlePic.image)
  textSize(60);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`welcome to the piano school!`, width / 2, height / 2);
  text(`press spacebar for instructions`, width / 2, height / 1.5);
  textSize(10);
  pop();
}

function instructions() {
  push();
  background(0);
  textSize(60);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`instructions`, width / 2, height / 2);
  text(`press spacebar for instructions`, width / 2, height / 1.5);
  textSize(10);
  text(`Use the keyboard to press the letters that come up on your screen!`, width / 2, height / 1.3);
  pop();
}

function lose() {
  push();
  background(0);
  textSize(60);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`losing state!`, width / 2, height / 2);
  text(`press spacebar to play again`, width / 2, height / 1.5);
  textSize(10);
}


function pinao() {
  pianoF();
  pianoA();
  pianoB();
  pianoC();
  pianoD();
  pianoE();
  pianoG();
  pianoGg();
  pianoAb();
  pianoEb();
  pianoBb();
  pianoDb();
  pianoGb();
}
//add a spotlight affect
function pianoA() {
  background(0, 100, 250);
  rect(300 - 50, 400, 80, 250);
  push();
  textSize(40);
  fill(0);
  text(`A`, 265, 630);
  pop();
}

function pianoB() {
  rect(360 - 50, 400, 80, 250);
  push();
  textSize(40);
  fill(0);
  text(`B`, 325, 630);
  pop();
}
// white 2
function pianoC() {
  rect(420 - 50, 400, 80, 250);
  push();
  textSize(40);
  fill(0);
  text(`C`, 385, 630);
  pop();
}

function pianoD() {
  rect(480 - 50, 400, 80, 250);
  push();
  textSize(40);
  fill(0);
  text(`D`, 445, 630)
  pop();
}

function pianoE() {
  rect(540 - 50, 400, 80, 250);
  push();
  textSize(40);
  fill(0);
  text(`E`, 505, 630)
  pop();
}

function pianoF() {
  rect(600 - 50, 400, 80, 250);
  push();
  textSize(40);
  fill(0);
  text(`A`, 505, 630)
  pop();
}

function pianoG() {
  rect(600 - 50, 400, 80, 250);
  push();
  textSize(40);
  fill(0);
  text(`F`, 620, 630)
  pop();
}

function pianoGg() {
  rect(660 - 50, 400, 80, 250);
  push();
  textSize(40);
  fill(0);
  text(`G`, 620, 630)
  pop();
}

function pianoAb() {
  push();
  fill(0);
  rect(340 - 50, 400, 40, 130);
  push();
  textSize(20);
  fill(255, 255, 255);
  text(`Ab`, 297, 520)
  pop();
  pop();
}

function pianoBb() {
  push();
  fill(0);
  rect(400 - 50, 400, 40, 130);
  push();
  textSize(20);
  fill(255, 255, 255);
  text(`Bb`, 357, 520)
  pop();
  pop();
}

function pianoDb() {
  push();
  fill(0);
  rect(520 - 50, 400, 40, 130);
  push();
  textSize(20);
  fill(255, 255, 255);
  text(`Db`, 479, 520)
  pop();
  pop();
}

function pianoEb() {
  push();
  fill(0);
  rect(580 - 50, 400, 40, 130);
  push();
  textSize(20);
  fill(255, 255, 255);
  text(`Eb`, 539, 520)
  pop();
  pop();
}

function pianoGb() {
  push();
  fill(0);
  rect(640 - 50, 400, 40, 130);
  push();
  textSize(20);
  fill(255, 255, 255);
  text(`Gb`, 599, 520)
  pop();
  pop();
}

function keyPressed() {
  if (state === `title` && keyCode === 32) {
    state = 'instructions';
  } else if (state === 'instructions' && keyCode === 32) {
    state = 'simulation';
  } else if (state === 'simulation' && keyCode === 65) {
    a.play()
  }

}