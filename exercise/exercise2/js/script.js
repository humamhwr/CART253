//plan:
// green germs as circles on a yellow background
// randomly moving sneezing person and masked grouped person; if the group touches the masked guy nothing happens while if they touch the sneezing person the application collapse.

let sneeze = {
  x: 0,
  y: 250,
  w: 150,
  h: 150,
  image: undefined,
  vx: 0,
  vy: 0,
  speed: 10,
  size: 100
};
let group = {
  x: 250,
  y: 250,
  w: 150,
  h: 150,
  image: undefined,
  size: 100
};
let masked = {
  x: 250,
  y: 250,
  w: 150,
  h: 150,
  image: undefined,
  vx: 0,
  vy: 0,
  speed: 10,
};
let circlesNum = 500;


//Loading images.
function preload() {
  sneeze.image = loadImage("assets/images/sneeze.png");
  group.image = loadImage("assets/images/group.png");
  masked.image = loadImage("assets/images/masked.png");
};


// Creating the canvas
function setup() {
  createCanvas(windowWidth, windowHeight);

  sneeze.y = random(0, height);
  sneeze.vx = sneeze.speed;

  masked.y = random(0, height);
  masked.vx = masked.speed;
  noCursor();
}

// draw()
//
// Creating COVID-19 simulation.
function draw() {
  //Creating background
  background(255, 255, 0);

  //Display static
  for (let i = 0; i < circlesNum; i++) {
    let x = random(0, width);
    let y = random(0, height);
    fill(109, 197, 15);
    noStroke();
    ellipse(x, y, 25);
  };

  //Creating  movement
  noStroke();

  sneeze.x += sneeze.vx;
  sneeze.y += sneeze.vy;

  // noStroke();
  masked.x += masked.vx;
  masked.y += masked.vy;

  if (sneeze.x > width) {
    sneeze.x = 0;
    sneeze.y = random(0, height);
  }

  if (masked.x > width) {
    masked.x = 0;
    masked.y = random(0, height);
  }

  // user movment
  group.x = mouseX
  group.y = mouseY

  // check for catching covid19
  let d = dist(group.x, group.y, sneeze.x, sneeze.y);
  if (d < sneeze.size / 2 + group.size / 2) {
    noLoop();
  }
// making the two objects not come behind or infront of eachother
  if(sneeze.y < width/2){
    masked.y > width/2
  }

  //Display sneeze image
  image(sneeze.image, sneeze.x, sneeze.y, sneeze.w, sneeze.h);
  //Display group image
  image(group.image, group.x, group.y, group.w, group.h);
  //Display masked image
  image(masked.image, masked.x, masked.y, masked.w, masked.h);

}
