const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
//console.log(ctx);
const CANVAS_WIDTH = canvas.width = 600; // same as CSS
const CANVAS_HEIGHT = canvas.height = 600; // same as CSS

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575; // 6876px on 12 colonms soit 6876/12=573
const spriteHeight = 523; // 5230 on 10 rows 5230/10=523
function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(
    // the images shadow_dog.png
        playerImage, 
    // crop out the rectangle of a dog
        1 * spriteWidth, // line 0 image 1 horizontaly
        2 * spriteHeight,// line 1 image 2 verticaly
        spriteWidth,
        spriteHeight, 
    // where I place the crop out on canvas
        0,
        0,
        spriteWidth,
        spriteHeight
    ); // dog
    requestAnimationFrame(animate);
}
animate();
