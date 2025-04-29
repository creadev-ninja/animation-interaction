// Paint App 2.0
function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
  
  
}

function mouseDragged() {
  fill(0,0,0);
  noStroke();
  ellipse(mouseX,mouseY,20,20);
}

function mousePressed(){
  fill(255,0,0);
  ellipse(mouseX,mouseY,50,50);
}