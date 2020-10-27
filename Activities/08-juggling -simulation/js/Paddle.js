class Paddle {

  constructor(w, h) {
    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = (height - 10) - this.height/2;
  }

  move() {
    this.x = mouseX;
  }

  display() {
    push();
    fill(266);
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }

}
