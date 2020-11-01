class Hand {

  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height / 2;
    this.image = {
      x:0,
      y:0,
    }
  }
  preload() {
    this.image = loadImage("assets/images/hand.png");
  }

  move() {
    this.x = mouseX;
  }

  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}
