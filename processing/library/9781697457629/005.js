// How To Make Planetary Motion in WEBGL

let angle = 0;

function setup() {
    createCanvas(700,500,WEBGL);
}

function draw() {
    background(220); 
    normalMaterial();
    rotateZ(angle);
    
    push();
    translate(100, 0, 0); // sphere 1
    sphere(40);
        push();
        translate(100, 0, 0); // sphere 2
        sphere(25);
        pop();
    pop();

    angle += 0.03; 
}

/*
    https://p5js.org/reference/p5/sphere/

*/
