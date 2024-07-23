const content = document.querySelectorAll('.content');

document.addEventListener('scroll',showtext);

function showtext(){
    content.forEach((section)=>{
        const imgel = section.querySelector('img');
        const textel=section.querySelector('.text');

        const scrollpos= window.pageYOffset;
        const textpos = imgel.offsetTop + imgel.offsetHeight / 50
        

        if(scrollpos > textpos){
            textel.classList.add('show-reveal');
            console.log('1')
        }else{
            textel.classList.remove('show-reveal')

        }

    });
}
