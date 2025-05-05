// Grids, Loops and animations
// 22. Rotation Painting App
let i;
let segment;

function setup() {
  createCanvas(400, 400);
  background(246,191,86);
  angleMode(DEGREES);
  segment=8;
}

function draw() {
  
  push();
  translate(width/2, height/2);
  for(i=0; i<segment; i=i+1) {
    rotate(360/segment);
    //line(0,0,400,0);
  }
  pop();

  // buttons
  fill(255,76,48);
  rect(0,0,50,50); // 4 segments
  
  fill(192,0,48);
  rect(width-50,0,50,50); // 8 segments
  
  fill(132,14,54);
  rect(0,height-50,50,50); // 16 segments
  
  fill(77,23,59);
  rect(width-50,height-50,50,50); // 32 segments
}

function mouseDragged() {
  push();
  translate(width/2, height/2);
  for(i=0; i<segment; i=i+1) {
    rotate(360/segment);
    line(mouseX,mouseY,pmouseX,pmouseY);
  }
  pop();
  
}

function mousePressed() {
  
  if(mouseX<50 && mouseX>0 && mouseY<50 && mouseY>0){
     print("4 segments");
     segment = 4;
     stroke(255,76,48);
     strokeWeight(4);
  }else if(mouseX<width && mouseX>width-50 && mouseY<50 && mouseY>0){
     print("8 segments");
     segment = 8;
     stroke(192,0,48);
     strokeWeight(4);
  }else if(mouseX<50 && mouseX>0 && mouseY<height && mouseY>height-50){
     print("16 segments");
     segment = 16;
     stroke(132,14,54);
     strokeWeight(4);
  }else if(mouseX<width && mouseX>width-50 && mouseY<height && mouseY>height-50){
     print("32 segments");
     segment = 32;
     stroke(77,23,59);
     strokeWeight(4);
  }
}
/*  Palette
bottom    : 246 191  86 
couleur 1 : 255  76  48
couleur 2 : 192   0  48 
couleur 3 : 132  14  54
couleur 4 :  77  23  59
*/