// Making 3D Holographic ilusion Using Pepper's Ghost Pyramid
let angle = 0;  
let r = 20;
let a = 0;
let s = 10;

function setup() {
    createCanvas(720, 500, WEBGL);
    art = createGraphics(400, 400);
}

function draw() {
    angle += 0.01;
    background(0);

    push()
    let x = r + s + cos(a);
    let y = r + s + sin(a);
    art.fill(255, r+y, x+a);
    art.ellipse(x+200, y+200, 20, 20);
    a+=0.3;
    s+=0.4;
    pop();

    push();
    translate(0, 150);
    fill(255,0,0); // red
    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);
    box(70);
    pop();

    push()
    texture(art);
    translate(0,-150);
    fill(0,0,255); // blue
    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);
    box(70);
    pop();

    push()
    translate(150, 0);
    fill(0, 255, 0); // green
    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);
    box(70);
    pop();

    push()
    translate(-150, 0);
    fill(255,255,0,255); // yellow
    //fill(255,0,255); // purple
    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);
    box(70);
    pop();
}