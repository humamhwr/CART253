class Vehicle {
  constructor(x, y, vx) {
    this.x = x;
    this.y = y;
    this.width = undefined;
    this.height = undefined;
    this.vx = 0;
    this.vy = 0;
  }

  // Move the vehicle according to its velocity
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  // Wrap the vehicle if it reaches the right edge
  wrap() {
    if (this.x > width) {
      this.x -= width;
    }
  }

  // Display the vehicle
  display() {
    push();
    rectMode(CENTER);
    noStroke();
    // NOTE: We don't set a fill() because this will be handled in the subclass
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
