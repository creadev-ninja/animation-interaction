// Making a Spaceship in 3D with key controls
let img;
let img2;
let z = 0;
let x = 0;
function preload() {
    img = loadImage("img/iron1.jpg");
    img2 = loadImage("img/space1.jpg");
}

function setup() {
    createCanvas(700,500,WEBGL);
}

function draw() {
    background(175); 
    noStroke();
    texture(img2);
    //sphere(700);

    translate(x, 0, z);
    //normalMaterial();
    texture(img);
    sphere(20);
    cone(-50, -30, 24);
    if(keyCode === UP_ARROW) {
        z -= 1;
    }else if(keyCode === DOWN_ARROW) {
        z += 1;
    }else if(keyCode === RIGHT_ARROW) {
        x += 1;
    }else if(keyCode === LEFT_ARROW) {
        x -= 1;
    }

}

/*
    https://p5js.org/reference/p5/sphere/

*/
