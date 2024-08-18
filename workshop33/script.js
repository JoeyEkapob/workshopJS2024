const textaren = document.querySelector('textarea')
const amount = document.querySelector('.amount')
const limit = document.querySelector('.limit')


textaren.addEventListener('keyup',()=>{
    let conut = textaren.value.length
    amount.innerText = conut
    if(conut > 20 ){
        limit.classList.add('active')
        textaren.classList.add('active')
    }else{
        textaren.classList.remove('active')
        limit.classList.remove('active')
    }
})