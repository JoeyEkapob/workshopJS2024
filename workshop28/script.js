const slidercontainer = document.querySelector('.sildercontainer');
const sliderright = document.querySelector('.rightcontant')
const sliderleft = document.querySelector('.leftcontant')
const downbtn = document.querySelector('.downbtn')
const upbtn = document.querySelector('.upbtn')

const sliderlength = sliderright.querySelectorAll('div').length

let activeindex=0;


upbtn.addEventListener('click',()=>changeimg("up"))
downbtn.addEventListener('click',()=>changeimg("down"))


function changeimg(dir){
    const slideHeight = sliderright.clientHeight;
    if(dir==="up"){
        activeindex++
        if(activeindex>sliderlength-1){
            activeindex=0
        }
    }else if(dir==="down"){
        activeindex--
        if(activeindex<0){
            activeindex=sliderlength-1
        }
    }
    console.log(slideHeight)
    sliderleft.style.transform =`translateY(-${activeindex*slideHeight}px)`
 /*    console.log(`translateY(-${activeindex*sliderhrght}px)`) */
    sliderright.style.transform =`translateY(-${activeindex*slideHeight}px)`

}