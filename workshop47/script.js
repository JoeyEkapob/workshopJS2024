let board ;
let boardwidth=800;
let boardheight=300;
let context;

let playerwidth = 64;
let playerheight = 64;
let playerX = 50;
let playerY = boardheight-playerheight
let playerimg
let player={
    x:playerX,
    y:playerY,
    width:playerwidth,
    height:playerheight
}


window.onload=function(){
    
    board = document.getElementById('borad')
     board.height=boardheight
    board.width=boardwidth
    context=board.getContext('2d')
    playerimg=new Image()
    playerimg.src="./img/player.png"
    playerimg.onload=function(){
        
            console.log(playerimg)
            context.drawImage(playerimg,player.x,player.y,player.width,player.height)
        
    }
}

/* const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const img = new Image()
img.src="./img/player.png"
img.onload=function(){
    context.drawImage(img,10,20,100,100)
} */
/* context.font="bold italic 50px Arial"
context.fillStyle="red"
context.fillText('ekapob',50,75)
context.strokeStyle="blue"
context.strokeText('joey',50,120)
 */

/* context. */

/* context.fillStyle="green"
context.fillRect(10,10,50,50) */
/* context.strokeStyle="green"
context.strokeRect(10,10,50,50) */
/* context.beginPath()
context.moveTo(40, 40);
context.lineTo(240, 40);
context.lineTo(240, 240);
context.lineTo(40, 240);
context.closePath()
context.lineWidth = 5;
context.strokeStyle = "red";
context.stroke();

context.fillStyle="yellow"
context.fill()
 */