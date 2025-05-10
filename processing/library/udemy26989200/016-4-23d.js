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
  background(222,108,128); // rouge
  
  for(x=size/2; x<400; x=x+size) {
    for(y=size/2; y<400; y=y+size) {
      push();
      translate(x, y);
      rotate(mouseX);
      scale(mouseY/200);
      noStroke();
      fill(250,197,192); // jaune
      rect(0,0, size/2, size/2);
      fill(144,183,156); // vert
      rect(0,0, size/4, size/4);
      pop();
    }
  }
  r=r+1;
}

/*
Palette
bottom       : #DE6C80  222 108 128
square big   : #FAC5C0  250 197 192
square small : #90B79C  144 183 156
*/