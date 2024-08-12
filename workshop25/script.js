const textel = document.getElementById('text')
const speedel = document.getElementById('speed')

console.log(speedel.value)

const text = "Hello World";
let speed = 100/speedel.value;

let charactorid = 1;

function writetext(){
    textel.innerText=text.slice(0,charactorid)
    charactorid++;
    if(charactorid>text.length){
        charactorid = 1
    }
    console.log(speed)
    setTimeout(writetext,speed);
}

speedel.addEventListener('input',(e)=>{
    speed = 100/e.target.value

})



writetext()