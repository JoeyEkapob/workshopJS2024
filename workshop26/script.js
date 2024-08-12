const panel = document.getElementById('panel')
const ratingcontainer = document.querySelector('.ratingcontainer')
const rating = document.querySelectorAll('.rating')
const sendbtn = document.getElementById('send')

let selected ;
let statuel ;
ratingcontainer.addEventListener('click',(e)=>{
    if(e.target.parentNode.classList.contains('rating')){
        removeactive()
        e.target.parentNode.classList.add('active')
        selected = e.target.nextElementSibling.innerHTML;
        console.log(selected)
    }else{

    }
})

function removeactive(){
    rating.forEach(rating=>{
        rating.classList.remove('active')
    })
}
sendbtn.addEventListener('click',()=>{
    rating.forEach(e=>{
        console.log(e.classList.value)
        if(e.classList.value ==='rating active'){
            statuel = true
        }
    })
    if(statuel){
    panel.innerHTML=`
    <img src="image/heart.svg" class="imgcomplete">
    <h2>ขอบคุณที่ใช้บริการของเรา</h2>
    <p>ผลการประเมิน ${selected}</p>
    `;
    }else{
       alert('กรุณาเลือกผลการประเมิน')
    }
})