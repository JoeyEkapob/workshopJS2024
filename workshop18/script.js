const toggle = document.getElementById('toggle')
const open = document.getElementById('open')
const modalcontainer = document.getElementById('modal-container')
const closebtn = document.getElementById('closebtn')

toggle.addEventListener('click',()=>{
  document.body.classList.toggle('show-nav')
})

open.addEventListener('click',()=>{
    modalcontainer.classList.add('show-modal')
})
closebtn.addEventListener('click',()=>{
    modalcontainer.classList.remove('show-modal')
    console.log('sdfsdf')
})

window.addEventListener('click',e=>e.target == modalcontainer ? modalcontainer.classList.remove('show-modal'):false)