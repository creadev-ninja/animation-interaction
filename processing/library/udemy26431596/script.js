const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
//console.log(ctx);
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600; 

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575; 
const spriteHeight = 523; 
let playerState = 'run';
//let frameX = 0; // on va pouvoir 
//let frameY = 4; // animer la bête <---------------------------
let gameFrame = 0;
const staggerFrames = 5; // cadre décaléé
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 9,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    }
];
animationStates.forEach((state, index)=>{
    let frames = {
        loc: [],
    }
    for(let j=0; j<state.frames; j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length; 
    /*  6 frames (animations)
        gameFrame/staggerFrames         position
        0/5 = 0     Math.floor(0) = 0   0%6 = 0             0%6 = 0  <--
        1/5 = 0.2   Math.floor(0.2)=0   0%6 = 0             1%6 = 1
        2/5 = 0.4   Math.floor(0.4)=0   0%6 = 0             2%6 = 2
        3/5 = 0.6   Math.floor(0.6)=0   0%6 = 0             3%6 = 3
        4/5 = 0.8   Math.floor(0.8)=0   0%6 = 0             4%6 = 4
        5/5 = 1     Math.floor(1) = 1   1%6 = 1             5%6 = 5
                                                            6%6 = 0  <--
                                                            7%6 = 1
                                                            ...
    */
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight,0,0,spriteWidth, spriteHeight); // dog
    
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();
