class Car extends Vehicle {
  // Create a new Car object that moves to the right
  constructor(x, y) {
    super(x, y);
    this.width = 50;
    this.height = 20;
    this.vx = 5;
  }

  // Display the car
  display() {
    push();
    fill(255, 0, 0);
    super.display();
    pop();
  }
}
