class Cloud {
  
  constructor(x, y) {
      this.x = x;
      this.y = y;
      this.width = 50;
      this.height = 20;
      this.vx = 10;
    }

    // Move the cloud according to its velocity
    move() {
      this.x += this.vx;
      this.y += this.vy;
    }

    // Wrap the cloud if it reaches the right edge
    wrap() {
      if (this.x > width) {
        this.x -= width;
      }
    }

    // Display the cloud as a rectangle
    image(cloudImage)
    }
  }
