let size;
let x;
let y;
function setup() {
  createCanvas(400, 400);
  size = 50;
  x = 400;
  y = 400;
  background(220);
}

function draw() {
  
  ellipse(x,y,size,size); // x,y,w,h
  x=x-5;
  y=y-5;
}