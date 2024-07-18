const switchtoggle = document.querySelector('input[type="checkbox"]');
const toggleicon =document.getElementById('toggle-icon')
const nav = document.getElementById('nav')
const img1 = document.getElementById('image1');
const img2 = document.getElementById('image2');
const img3 = document.getElementById('image3');
function switchmode(e){
    if(e.target.checked){
        document.documentElement.setAttribute('datatheme','dark')
        darkmode();
        imageswicth('dark');
    }else{
        document.documentElement.setAttribute('datatheme','light')
        lightmode();
        imageswicth('light');

    }

}
function darkmode(){
    toggleicon.children[0].textContent="โหมดกลางคืน";
    toggleicon.children[1].classList.replace('fa-sun','fa-moon');
    nav.style.backgroundColor=' rgb(0 0 0/50%)';

    
}
function lightmode(){
    toggleicon.children[0].textContent="โหมดกลางวัน";
    toggleicon.children[1].classList.replace('fa-moon','fa-sun');
    nav.style.backgroundColor=' rgb(255 255 255/50%)';


}
function imageswicth(mode){
    img1.src=`img/undraw_Projections_${mode}.svg`;
    img2.src=`img/undraw_Raining_${mode}.svg`;
    img3.src=`img/undraw_Freelancer_${mode}.svg`;

    console.log(img1)

}
switchtoggle.addEventListener('change',switchmode);