// Grids, Loops and animations
//

let x;
let size;

function setup() {
  createCanvas(400, 400);
  size=40;
}

function draw() {
  background(220);
  for(x=size/2; x<400; x=x+size){
    for(y=size/2; y<400; y=y+size){
      ellipse(x,y,size,size);
    }
  }
}