const items =document.querySelectorAll('.item')

items.forEach((item)=>{
    item.addEventListener('click',()=>{
        removeaction()
        item.classList.add('active')
    })
})

function removeaction(){
    items.forEach((item)=>{
        item.classList.remove('active')
    })
}