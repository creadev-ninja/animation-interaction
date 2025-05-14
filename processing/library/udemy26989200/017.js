// 5. Images and generative artwork
// 25.Concept : using image

let catImage;
let color;
function preload() {
  //catImage = loadImage("https://placecats.com/400/400");
  catImage = loadImage("./images/catimage.jpg",catImage ,handleError);
}
function handleError(event) {
  console.error('Oops ', event);
}

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  //background(220);
  //image(catImage,0,0);
  color = catImage.get(mouseX,mouseY);
  fill(color);
  noStroke();
  ellipse(mouseX,mouseY,10,10);
}
