const categories = document.querySelectorAll('.category')

window.addEventListener('scroll',showcategory)

function showcategory(){
    const calculatheight = window.innerHeight-300

    categories.forEach(item => {
         const topposition = item.getBoundingClientRect().top
         console.log(topposition) 
        if(topposition < calculatheight){
            /* console.log("Slide") */
            item.classList.add('active')
        }else{
            item.classList.remove('active')

        } 
    });
}