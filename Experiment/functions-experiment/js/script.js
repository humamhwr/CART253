let bg = 0;

function setup(){
  createCanvas(500,500)
}

function draw (){
  background(bg);

  textAlign(CENTER,CENTER);
  textSize(64);
  fill(255);
  text(keyCode,width/2,height/2);
}

function keyPressed(){
  if (keyCode === 38) {
    bg = bg +10;
    bg = constrain(bg,0,255);
  }
  else if (keyCode === 40) {
    bg = bg -10;
    bg = constrain(bg,0,255);
  }
  }
