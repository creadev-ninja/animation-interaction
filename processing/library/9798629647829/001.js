let r=20
let a=0

function setup() {
  createCanvas(400, 400);
  background(175);
   
}

function draw() {
  
  push()
  let x=r*cos(a)
  let y=r*sin(a)

  translate(200,200)
  //noFill()
  fill(mouseX,r,mouseY+y)
  noStroke()
  //stroke(r,x,y)
  ellipse(x,y,x,y)
  r+=0.08
  a+=1
  
  pop()
  
}
/*
  https://editor.p5js.org/ri1/sketches/gF5dWrxd     
  https://p5js.org/reference/p5/push/

*/