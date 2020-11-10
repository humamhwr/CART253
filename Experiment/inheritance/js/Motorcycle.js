class Motorcycle extends Vehicle {
  constructor(x, y) {
    super(x, y);

    this.width = 30;
    this.height = 10;
    this.vx = 10;
  }

  display() {
    push();
    // NEW! First we set the fill to yellow
    fill(255, 255, 0);
    // NEW! Then we call the superclass's version of display(), which will display
    // a rectangle with the Motorcycle's dimensions at the Motorcycle's position
    super.display();
    pop();
  }
}
