const setting = document.getElementById('setting')
const text = document.querySelector('p')
const reset = document.getElementById('reset')
const body = document.querySelector('body')

setting.addEventListener('change',()=>{
    localStorage.setItem("nightmode",setting.checked)
    loadtheme()
})

reset.addEventListener('click',()=>{
    localStorage.clear()
    loadtheme()
})
function loadtheme(){
    const status = JSON.parse(localStorage.getItem('nightmode'))
    setting.checked = status
    if(status){
        text.innerText="โหมดกลางคืน"
        body.style.background="black"
        body.style.color="white"
        body.style.transition="0.5s"

    }else{
        text.innerText="โหมดกลางวัน"
        body.style.background="white"
        body.style.color="black"
        body.style.transition="0.5s"



    }
}


loadtheme()
