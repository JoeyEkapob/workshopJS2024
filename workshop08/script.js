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