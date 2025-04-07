let pic;
let pic2;
let pic3;
let pic4;
let x = 0;
let y = 0;
let d1 = 80;
let d2 = 180;

function preload() {
  pic = loadImage("img/aerostat1.png");
  pic2 = loadImage("img/aerostat2.png");
  pic3 = loadImage("img/aerostat3.png");
  pic4 = loadImage("img/cloud1.png");
}

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(135, 206, 235);
  //1st balloon horizontal
  image(pic, 400 - x, 50, 70, 90);

  //2nd balloon diagonal downwards with increase in    size
  image(pic2, 50 + x, 50 + y, d1, d1 + 20);

  //3rd balloon vertical upwards & decrease in size
  image(pic3, 220, 300 - y, d2, d2 + 20);


  //cloud 1
  image(pic4, 10, 50, 300, 200);
  //cloud 2
  image(pic4, 400, 120, 300, 200);
  //cloud 3
  //image(pic4,,220,400,400)
  if (x > width && y > height) {
    x = 0;
    y = 0;
    d1 = 80;
    d2 = 180;
  } else {
    x += 0.4;
    y += 0.4;
    d1 += 0.2;
    d2 -= 0.12;
  }


}

/*
  https://editor.p5js.org/ri1/sketches/CyCVigTJY
  https://p5js.org/reference/p5/loadImage/
  https://p5js.org/reference/p5/createCanvas/
  https://p5js.org/reference/p5/vertex/
  You need to open your pages in a (local) server to load the images.
*/