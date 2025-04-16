// Making A floating illusion in 3D
let pic;
let angle = 0;

function preload() {
    pic = loadImage("img/hline4.png")
}

function setup() {
    createCanvas(700,500,WEBGL);
}

function draw() {
    background(255);
    noStroke();
    texture(pic);

    push();
    rotateX(sin(angle));
    sphere(900);
    pop();

    push();
    sphere(80);
    pop();
    angle+=0.005;
}