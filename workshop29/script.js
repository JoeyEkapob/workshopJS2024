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
    header.innerHTML=`  <img src="https://www.istockphoto.com/photo/armchair-isolated-on-white-background-3d-rendering-gm869078270-145267751?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fth%2Fimages%2Fsearch%2F%25E0%25B9%2582%25E0%25B8%258A%25E0%25B8%259F%25E0%25B8%25B2%2F&utm_term=%E0%B9%82%E0%B8%8A%E0%B8%9F%E0%B8%B2" alt="" srcset="">`
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