const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
//console.log(ctx);
const CANVAS_WIDTH = canvas.width = 600; // same as CSS
const CANVAS_HEIGHT = canvas.height = 600; // same as CSS

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';

function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    //ctx.fillRect(100,50,100,100); // black square x,y,w,h
    //ctx.drawImage(image, sx,sy,sw,sh, dx,dy,dw,dh);
    /*  image : you want to draw
        source :      sx,sy,sw,sh = x,y,w,h  cut out
        destination : dx,dy,dw,dh = x,y,w,h
    */
    ctx.drawImage(playerImage, 0,0,600,600, 0,0,CANVAS_WIDTH,CANVAS_HEIGHT); // dog
    /*  sx,sy,sw,sh découpe le chien, un chien à la fois
         0,0,CANVAS_WIDTH,CANVAS_HEIGHT : où on place le chien
    */
    requestAnimationFrame(animate);
}
animate();
