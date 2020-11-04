class KeyMaster {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.w = 10;
    this.h = 150;
  }

  move() {
    if (keyIsDown(37)) {
      this.x -= this.speed;
    }
    if (keyIsDown(39)) {
      this.x += this.speed;
    }

  }

  display() {
    push();
    stroke(0);
    fill(150, 150, 150);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
