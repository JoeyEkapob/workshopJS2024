const days= document.getElementById('days')
const hours= document.getElementById('้hour')
const minutes= document.getElementById('minutes')
const seconds= document.getElementById('seconds')
const counddown= document.getElementById('container')

const years = new Date().getFullYear();
const newyears = new Date( `January 01 ${years+1} 00:00:00`)


function updatetime(){
    const time = new Date();
    const diff = newyears - time
    const d = Math.floor(diff/1000/60/60/24)
    const h = Math.floor(diff/1000/60/60)%24
    const m = Math.floor(diff/1000/60)%60
    const s = Math.floor(diff/1000)%60

    days.innerHTML=d < 10 ? '0'+d:d;
    hours.innerHTML=h < 10 ? '0'+h:h;
    minutes.innerHTML=m < 10 ? '0'+m:m;
    seconds.innerHTML=s < 10 ? '0'+s:s;
}
setInterval(updatetime,1000);