const header = document.getElementById('header')
const title = document.getElementById('title')
const description = document.getElementById('description')
const profileimg = document.getElementById('profileimg')
const sellerinfo = document.getElementById('sellerinfo')
const selename = document.getElementById('selename')
const piece = document.getElementById('piece')

const animatedbg = document.querySelectorAll('.animatedbg')
const animatedtext = document.querySelectorAll('.animatedtext')

setTimeout(showcontact,2000);


function showcontact(){
    header.innerHTML=`  <img src="https://webapi.furinbox.com/media/catalog/product/cache/29b3f741dcafc528943c644b5c704259/a/m/ami-sofa-3s-thumbnail.jpg" alt="" srcset="">`
    title.innerHTML=`<h3 class="title" id="title">โชฟา</h3>`
    description.innerHTML=`<p class="carddescription" id="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius esse cupiditate eaque quasi alias unde veniam illo nostrum doloremque? Ab dolor inventore eius eaque officia libero rem. Error, quasi facere?
            </p>`
            profileimg.innerHTML=` <img src="https://randomuser.me/api/portraits/men/51.jpg" alt="" srcset="">`
            selename.innerHTML=` พร้อมพง`
            piece.innerHTML=` ราคา 12000 บาท`

    animatedbg.forEach(el=>el.classList.remove('animatedbg'))
    animatedtext.forEach(el=>el.classList.remove('animatedtext'))
}