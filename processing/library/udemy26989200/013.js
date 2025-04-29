// Paint App 3.0
let brush;

function setup() {
  createCanvas(400, 400);
  background(220);
  brush=color(255,0,0); // red
  thickness = 10;
}

function draw() {
  // black button
  fill(0,0,0);
  noStroke();
  rect(0,0,40,40);
  
  // red button
  fill(255,0,0);
  rect(0,40,40,40);
  
  // small  button
  stroke(0,0,0);
  strokeWeight(2);
  fill(255,255,255);
  rect(0,360,20,40);
  
  // large button
  rect(30,360,40,40);
}

function mouseDragged(){
  stroke(brush); 
  strokeWeight(thickness);
  line(mouseX,mouseY,pmouseX,pmouseY);
}

function mousePressed(){
  if(mouseX>0 && mouseX<40 && mouseY>0 && mouseY<40){
    // print("black button clicked");
    brush = color(0,0,0); // black
  }else if(mouseX>0 && mouseX<40 && mouseY>0 && mouseY<80){
     brush = color(255,0,0); // red
  }else if(mouseX>0 && mouseX<20 && mouseY>360 && mouseY<400) {
     thickness = 10;
  }else if(mouseX>30 && mouseX<70 && mouseY>360 && mouseY<400) {
     thickness = 30;
  }
}

/*
  https://p5js.org/reference/p5/mouseX/
  https://p5js.org/reference/p5/pmouseX/
*/