const levelbtn = document.getElementById("levelbtn");
const wordel = document.getElementById("word");
const textel = document.getElementById("text");
const seting = document.getElementById("seting");
const levelform = document.getElementById("levelform");
const timeel = document.getElementById("time");
const scoreel = document.getElementById("score");
const gameoever = document.getElementById("gameoeverctaniter");
const levelel = document.getElementById("level");

const words = ["หมู", "หมา", "กา"];

let rendomword;
let score = 0;
let time = 10;
const mode = localStorage.getItem('mode') !==null ? localStorage.getItem('mode') :'medium';

let level = 'medium';

const timeinterval = setInterval(updatetime, 1000);

function getrandomword() {
  return words[Math.floor(Math.random() * words.length)];
}

function displaywordtoui() {
  rendomword = getrandomword();
  wordel.innerText = rendomword;
  timeel.innerHTML = time;
  


}

textel.addEventListener("input", (e) => {
  const inputtext = e.target.value;
 
  if (inputtext === rendomword) {
    time+=2;
    if(mode == 'easy'){
        time+=5;
    }else if(mode == 'medium'){
        time+=3;
    }else{
        time+=2;
    }
    displaywordtoui();
    displayscore();
    e.target.value = "";
  }
});

function displayscore() {
  score += 10;
  scoreel.innerHTML = score;
}

function updatetime() {
  time--;
  timeel.innerHTML = time;
  if (time === 0) {
    clearInterval(timeinterval);
    time+=2;
    gameOver();
  }
}
function gameOver(){
    gameoever.innerHTML=`
    <h1>จบเกมแล้วนะครับ</h1>
    <p>คะแนนของคุณ = ${score} แต้ม</p>
    <button onclick="location.reload()">เล่นอีกครั้ง</button>
    `;
    gameoever.style.display='flex';
}
levelbtn.addEventListener('click',()=>{
    seting.classList.toggle('hine');
})


levelel.addEventListener('change',(e)=>{
    level=e.target.value
    console.log(level)
    localStorage.setItem("mode",level)

})
function startgame(){

    levelel.value=mode
   
     if(mode == 'easy'){
        time=15;
    }else if(mode == 'medium'){
        time=10;
    }else{
        time=5;
    } 
   
    displaywordtoui();
}
startgame();
textel.focus();
