const img = document.querySelector('img')
const file = document.querySelector('input')

file.addEventListener('change',()=>{
    img.src=URL.createObjectURL(file.files[0])
})