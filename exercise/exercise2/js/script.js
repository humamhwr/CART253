//plan:
// green germs as circles on a white background
// randomly moving sneezing guy

let sneeze = {
  x: 0,
  y: 250,
  w: 150,
  vx: 0,
  vy: 0,
  speed: 10,
};

let group = {
  x: 250,
  y: 250,
  w: 150,
  h: 150,
  image: undefined,
  tint: {
    r: 100,
    g: 100,
    b: 200,
},
};

let numStatic = 500;
    // Creating the canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
};
  // draw()
//
// Creating COVID-19 simulation.
function draw() {
  //Creating background
  background(255);
  //showing germs static
  for (let i = 0; i < numStatic; i++) {
    let x = random(0, width);
    let y = random(0, height);
    fill(19, 163, 51);
    stroke(200, 100, 100);
    ellipse(x, y, 50);
  }
};
