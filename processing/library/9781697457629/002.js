// Creating 2D Texture On A 3D Shape
let r=0;
let angle=0;
let art;

function setup() {
  createCanvas(400,400,WEBGL);
  art = createGraphics(400,400);
}

function draw() {
  background(220);
  push();
  for(let i=0; i < width-50; i+=50) {
    art.noFill();
    art.stroke(r,i + mouseX, i);
    art.strokeWeight(5);
    r = r + 0.4;
    art. ellipse(i,i,r+i,r+i);
    
    noFill();
    stroke(r,i,i);
    strokeWeight(5);
    r = r + 0.4;
    ellipse(i,i,r+i,r+i);
    
    if(r>width || r<0 || r>height || r<0) {
      r=0;
    }
  }
  pop();
  
  push();
  texture(art);
  noStroke();
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  box(200);
  angle += 0.003;
  pop();
}
/*
  https://p5js.org/reference/p5/push/
  https://p5js.org/reference/p5/WEBGL/
*/