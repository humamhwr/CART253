//plan:
// green germs as circles on a white background
// randomly moving sneezing guy

let sneeze = {
  x: 0,
  y: 250,
  image: undefined,
  vx: 0,
  vy: 0,
  speed: 10
};
let group = {
  x: 250,
  y: 250,
  image: undefined
};

// upload images
function preload() {
  sneeze.image = loadImage("assets/images/sneeze.png");
  group.image = loadImage("assets/images/group.png");

    // Creating the canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  sneeze.y = random(0, height);
  sneeze.vx = sneeze.speed;
};
  // draw()
//
// Creating COVID-19 simulation.
function draw() {

  //Creating background
  background(255);

  //showing germs static
  let numStatic = 1000;
  for (let i = 0; i < numStatic; i++) {
    let x = random(0, width);
    let y = random(0, height);
    fill(19, 163, 51);
    noStroke();
    circle(x, y, 60);
  }

  // moving the sneezing guy
  sneeze.x = sneeze.x + sneeze.vx;
  sneeze.y = sneeze.y + sneeze.vy;
if (sneeze.x > width) {
  sneeze.x = 0;
  sneeze.y = random(0, height);
}
// the group moving
user.x = mouseX
user.y = mouseY
}
}
