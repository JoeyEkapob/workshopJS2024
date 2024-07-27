const musiccontainereltel = document.getElementById('music-container')
const titleel = document.getElementById('title')
const progresscontainerel = document.getElementById('progress-container')
const progessel = document.getElementById('progess')
const audioel = document.getElementById('audio')
const coverel = document.getElementById('cover')
const prevel= document.getElementById('prev')
const playel = document.getElementById('play')
const nextel = document.getElementById('next')

const songs=["Contra","HavestMoon","Mario"];

let index=0;


function loadsong(songs){
    titleel.innerText=`เพลง ชื่อ ${songs}.mp3`
    coverel.src=`cover/${songs}.jpg`
    audioel.src=`music/${songs}.mp3`
}

loadsong(songs[index])

playel.addEventListener('click',()=>{
    const isplay=musiccontainereltel.classList.contains('play')
    if(isplay){
        pausesong();
    }else{
        playsong();
    }
})
function nextsong(){

    index++;
    if(index>songs.length-1){
        index=0
    }
    loadsong(songs[index])
    playsong();

}
nextel.addEventListener('click',nextsong)

prevel.addEventListener('click',()=>{
    index--;
    if(index<0){
        index=songs.length-1;
    }
    loadsong(songs[index])
    playsong();
})

function playsong(){
    musiccontainereltel.classList.add('play')
    playel.querySelector('i.fas').classList.remove('fa-play')
    playel.querySelector('i.fas').classList.add('fa-pause')
    audioel.play()
}

function pausesong(){
    musiccontainereltel.classList.remove('play')
    playel.querySelector('i.fas').classList.remove('fa-pause')
    playel.querySelector('i.fas').classList.add('fa-play')
    audioel.pause()
}
audioel.addEventListener('timeupdate',updataprogress)

function updataprogress(e){

    const {duration,currentTime} =e.srcElement;
    const progessper = (currentTime/duration)*100
    progessel.style.width=`${progessper}%`

}

progresscontainerel.addEventListener('click',setprogress)

function setprogress(e){
    const  width=this.clientWidth;
    const clickx=e.offsetX;
    const duration = audioel.duration;
    console.log(width,clickx,duration)
    audioel.currentTime=(clickx/width)*duration
}

audioel.addEventListener('ended',nextsong)