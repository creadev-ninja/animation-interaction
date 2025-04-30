// Paint Art 5.0 (uses random)
let brushSize = 1;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
 
}

function mouseDragged(){
  brushSize = random(1,20);
  stroke(random(0,255),random(0,255),random(0,255));
  strokeWeight(brushSize);
  line(mouseX,mouseY,pmouseX,pmouseY);
}
