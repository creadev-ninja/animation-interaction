const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
//console.log(ctx);
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600; 

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575; 
const spriteHeight = 523; 
let frameX = 0; // on va pouvoir 
let frameY = 0; // animer la bête
let gameFrame = 0;
let staggerFrames = 5; // cadre décaléé

function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight); // dog
    if(gameFrame % staggerFrames == 0) { 
        if(frameX < 6) {
            frameX++; 
        }else{
            frameX = 0; // blanking and fast
        }  
    }
 

    gameFrame++;
    requestAnimationFrame(animate);
}
animate();
