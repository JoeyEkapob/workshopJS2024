const icon = document.querySelector("i")
const img = document.querySelector(".container")

img.addEventListener('dblclick',()=>{
    icon.style.opacity=1
    icon.classList.add("fa-beat-fade")
    setTimeout(()=>{
        icon.style.opacity=0;
        icon.classList.remove("fa-beat-fade")

    },2000)
})