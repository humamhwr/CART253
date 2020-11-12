//moving clouds for a nice sky effect
class Cloud {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 3000;
    this.height = 500;
    this.vx = 3;
    this.vy = 0;
  }

  // Moving the cloud using the velocity
  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  // Wrap the cloud when it reaches the edge
  wrap() {
    if (this.x > width) {
      this.x -= width;
    }
  }

  // Display the cloud with it's features
  display() {
    image(cloudImage, this.vx, this.vy, this.width, this.height, this.x, this.y);
  }
}
