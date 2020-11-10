class Car extends Vehicle {
  constructor(x, y) {
    super(x, y);

    this.width = 50;
    this.height = 20;
    this.vx = 5;
  }

  display() {
    push();
    // NEW! First we set the red fill
    fill(255, 0, 0);
    // NEW! Then we call the superclass's version of display(), which will display
    // a rectangle with the Car's dimensions at the Car's position. Because we set
    // the fill to red before this, the rectangle will be red.
    super.display();
    pop();
  }
}
