// Paint Art 6.0 ()
let brush;
let redColour;
let yellowColour;
let noLines;

function setup() {
  createCanvas(600, 600);
  background(150,206,180);
  redColour = color(255,111,105);
  yellowColour = color(255,204,92);
  noLines = 2;
  brush = redColour;
}

function draw() {
  strokeWeight(1);
  // buttons to select colour
  // red button
  fill(redColour);
  noStroke();
  rect(0,0,50,50);
  // yellow button
  fill(yellowColour);
  noStroke();
  rect(0,50,50,50);
  
  // button to select symeetry
  // get single line
  stroke(0,0,0);
  fill(2555,238,173);
  rect(width-50,0,50,50);
  stroke(0,0,0);
  fill(0,0,0);
  text("1",width-25,20);
  
  // get double line
  fill(2555,238,173);
  rect(width-50,50,50,50);
  stroke(0,0,0);
  fill(0,0,0);
  text("2",width-25,70);
  
  
  // get four line
  fill(2555,238,173);
  rect(width-50,100,50,50);
  stroke(0,0,0);
  fill(0,0,0);
  text("4",width-25,120);
}

function mouseDragged(){
  stroke(brush);
  strokeWeight(5);
  if(noLines == 2){
    line(mouseX,mouseY,pmouseX, pmouseY);
    line(width-mouseX,mouseY,width-pmouseX, pmouseY);
  }else if(noLines == 1){
    line(mouseX,mouseY,pmouseX, pmouseY);
  }else if(noLines == 4){
    line(mouseX,mouseY,pmouseX, pmouseY);
    line(mouseX,height-mouseY,pmouseX,height-pmouseY);
    line(width-mouseX,mouseY,width-pmouseX, pmouseY);
    line(width-mouseX,height-mouseY,width-pmouseX,height-pmouseY);
  }
 
}

function mousePressed(){
  if(mouseX>0 && mouseX<50 && mouseY>0 && mouseY<50){
     brush = redColour;
  }else  if(mouseX>0 && mouseX<50 && mouseY>50 && mouseY<100){
     brush = yellowColour;
  }else if(mouseX>width-50 && mouseX<width && mouseY>0 && mouseY<50){
     noLines = 1;      
  }else if(mouseX>width-50 && mouseX<width && mouseY>50 && mouseY<100){
     noLines = 2;      
  }else if(mouseX>width-50 && mouseX<width && mouseY>100 && mouseY<150){
     noLines = 4;      
  }
}
/*
  https://www.color-hex.com/color-palette/895

*/