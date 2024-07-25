const music_container = document.getElementById('music-container');
const playbtn = document.getElementById('play')
const prevbtn = document.getElementById('prev')
const nextbtn = document.getElementById('next')
const audio = document.getElementById('audio')
const progess = document.getElementById('progess')
const progesscontainer = document.getElementById('progess-container')
const title = document.getElementById('title')
const cover = document.getElementById('cpver')

const songs =["Contra","Havestmoon","Mario"]
let index=1;

function loadsongs(song){
    title.innerHTML=`ชื่อ ${song}.mp3`;
    cover.src=`cover/${song}.jpg`;
    audio.src=`music/${song}.mp3`

}

loadsongs(songs[index])

playbtn.addEventListener('click',()=>{
    const isplay = music_container.classList.contains('play')

    if(isplay){
        pausesong();

    }else{
        playsong();
    }
})

function pausesong(){
    music_container.classList.add('play')
    playbtn.querySelector('i.fas').classList.remove('fa-play')
    playbtn.querySelector('i.fas').classList.add('fa-pause')
    audio.play();
}
function playsong(){
    music_container.classList.remove('play')
    playbtn.querySelector('i.fas').classList.remove('fa-pause')
    playbtn.querySelector('i.fas').classList.add('fa-play')
    audio.pause();
}