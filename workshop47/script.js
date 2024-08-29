let board;
let boardwidth = 800;
let boardheight = 300;
let context;

let playerwidth = 64;
let playerheight = 64;
let playerX = 50;
let playerY = boardheight - playerheight
let playerimg
let player = {
    x: playerX,
    y: playerY,
    width: playerwidth,
    height: playerheight
}
let velocity = 0;
let gravity = 0.25;

let treeimg;
let treewidth=70;
let treeheight=90;
let treeX=700;
let treeY=boardheight-treeheight;

let treearray=[];
let treespeed=-3;
let score = 0;
let gameover=false

window.onload = function () {

    board = document.getElementById('borad')
    board.height = boardheight
    board.width = boardwidth
    context = board.getContext('2d')
    playerimg = new Image()
    playerimg.src = "./img/player.png"
    playerimg.onload = function () {


        context.drawImage(playerimg, player.x, player.y, player.width, player.height)


    }
    treeimg=new Image();
    treeimg.src="./img/tree.png"
    requestAnimationFrame(update)
    setInterval(createtree,3000)
    document.addEventListener('keydown', movePlayer)

}

function update() {
    requestAnimationFrame(update)
    if(gameover){
        return
    }
    context.clearRect(0, 0, board.width, board.height)
    velocity += gravity
    // create player

    player.y = Math.min(player.y + velocity, playerY)/* Math.min(player.y+velocity,playerY) */
    context.drawImage(playerimg, player.x, player.y, player.width, player.height)
    // create tree 
    for(let i=0;i<treearray.length;i++){
        let tree = treearray[i]
        tree.x+=treespeed
        context.drawImage(tree.img,tree.x,tree.y,tree.width,tree.height)
    if(oncollision(player,tree)){
        gameover=true
        context.font="normal bold 40px Arial"
       
        context.textAlign="center"
        context.fillStyle="red"
        context.fillText("Game Over",boardwidth/2,boardheight/2)
        
    }
    }

    score++
    context.font="normal bold 15px Arial"
    context.textAlign="left"
    context.fillStyle="red"
    context.fillText(score++,755,20)
}

function movePlayer(e) {
    if(gameover){
        return
    }
    if (e.code === "Space" && player.y == playerY) {

        velocity = -10
    }
}
function createtree(){
    if(gameover){
        return
    }
    let tree={
        img:treeimg,
        x:treeX,
        y:treeY,
        width:treewidth,
        height:treeheight
    }
    treearray.push(tree)
    if(treearray.length>5){
        treearray.shift()
        
    }
    /* console.log(treearray) */
    // display
   
    
}

function oncollision(obj1,obj2){
    return obj1.x<obj2.x+obj2.width && obj1.x+obj1.width>obj2.x 
    && obj1.y<obj2.y+obj2.height && obj1.y+obj1.height>obj2.y

}
function restart(){
    location.reload()
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