// 5. Images and generative artwork
// 25.Concept : using image

let catImage;
function preload() {
  catImage = loadImage("https://placecats.com/400/400");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(catImage,0,0);
}