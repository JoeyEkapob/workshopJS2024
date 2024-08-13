const container = document.getElementById('container')
const imgs = document.querySelectorAll('#container img')

const leftbtn = document.getElementById('left')
const rightbtn = document.getElementById('right')

/* console.log(imgs) */
let idx = 0;

 let intercal =setInterval(slide,3000) 

function slide(){
    idx++
    changeimg();
}
function changeimg(){
    if(idx>imgs.length-1){
        idx=0
    }else if(idx<0){
        idx = imgs.length-1
    }
    container.style.transform=`translateX(${-idx*500}px)`
   /*  console.log(`translateX(${-idx*500}px)`)  */

}

leftbtn.addEventListener('click',()=>{
    idx--
    changeimg();
    resetinterval();
})
rightbtn.addEventListener('click',()=>{
    idx++
    changeimg();
    resetinterval();
})

function resetinterval(){
    clearInterval(intercal)
    intercal =setInterval(slide,3000) 
}