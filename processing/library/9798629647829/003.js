let posY=0
let speed=2
let pic

//function preload() { pic=loadImage('space3b.jpg'); }
function setup()   { createCanvas(700, 500); }
function draw() {
  background(220);
  //image(pic,0,0,700,500);
  text(mouseX,200,30);
  text(mouseY,240,30);
  strokeWeight(2);
  
  //body
  fill(150);
  stroke(0);
  beginShape();
  vertex(250,315+posY);
  vertex(190,315+posY);
  vertex(190,150+posY);
  vertex(220,110+posY);
  vertex(250,150+posY);
  vertex(250,315+posY);
  endShape();
  
  //booster
  fill(175);
  beginShape();
  vertex(198,315+posY);
  vertex(192,327+posY);
  vertex(248,327+posY);
  vertex(242,315+posY);
  endShape();
  
  //red wing1
  fill(255,0,0);
  beginShape();
  vertex(190,265+posY);
  vertex(170,290+posY);
  vertex(170,315+posY);
  vertex(190,310+posY);
  endShape();
  
  //red wing2
  fill(255,0,0);
  beginShape();
  vertex(250,265+posY);
  vertex(270,290+posY);
  vertex(270,315+posY);
  vertex(250,310+posY);
  endShape();
  
  //flame
  fill(255,180,0);
  beginShape();
  vertex(196,327+posY);
  vertex(202,363+posY);
  vertex(212,336+posY);
  vertex(220,375+posY);
  vertex(230,336+posY);
  vertex(240,363+posY);
  vertex(245,327+posY);
  endShape();
 
  
  fill(175);
  stroke(255,100,0);
  strokeWeight(3);
  beginShape();
  vertex(230,185+posY);
  vertex(210,185+posY);
  vertex(210,220+posY);
  vertex(230,220+posY);
  vertex(230,185+posY);
  endShape();
  
  if(posY<-300) {
     posY=500
  }else{
     posY-=speed
  }
  
}

/*
  https://editor.p5js.org/ri1/sketches/BVUE9cb3H
  https://p5js.org/reference/p5/loadImage/
  https://p5js.org/reference/p5/createCanvas/
  https://p5js.org/reference/p5/vertex/
*/