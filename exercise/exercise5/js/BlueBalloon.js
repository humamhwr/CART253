class BlueBalloon {

  constructor(x,y){
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxspeed = 5;
    this.size = 40;
    this.active = true;
  }

  gravity(force){
    this.ay += force;
  }

  move(){
    this.vx += this.ax;
    this.vy += this.ay;

    this.vx = constrain(this.vx, -this.maxspeed, this.maxspeed);
    this.vy = constrain(this.vy, -this.maxspeed, this.maxspeed);

    this.x +=this.vx;
    this.y +=this.vy;

    if (this.y > windowHeight){
      this.active = false;
      keptUp -= 1;
      activeballCount -=1;
    }
  }

  bounce(hand){
    if(this.x > hand.x - hand.width/2 &&
      this.x < hand.x + hand.width/2 &&
      this.y + this.size/2 > hand.y - hand.height/2 &&
      this.y - this.size/2 < hand.y + hand.height/2){

        //bounce
        let dx = this.x - hand.x;
        this.vx = map(dx, - hand.width/2,hand.width/2,2,-2);

        this.vy = -this.vy;
        this.ay = 0;
    }
  }

  display(){
    push();
    stroke(0);
    fill(0,0,255);
    ellipse(this.x,this.y,this.size);
    pop();
  }

}
