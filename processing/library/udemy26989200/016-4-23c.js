// Grids, Loops and animations
// 23. Making a grid with a translate
let size = 50;
let x, y;
let r = 0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  frameRate(10);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  for(x=size/2; x<400; x=x+size) {
    for(y=size/2; y<400; y=y+size) {
      push();
      translate(x, y);
      rotate(mouseX);
      scale(mouseY/200);
      rect(0,0, size/2, size/2);
      pop();
    }
  }
  r=r+1;
}