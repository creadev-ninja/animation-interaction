function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // head
  ellipse(200,200,300,300);
  // eyes
  ellipse(150,150,15,15); // x y w h
  ellipse(250,150,15,15)
  // mouth
  ellipse(200,250,40,40)
  strokeWeight(4); 
}