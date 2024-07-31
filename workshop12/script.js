const count = 10;
const apikey='-CNT-QJ9KrU1QHeqD6xip1fgjyZ_T-XRjwP-d7yxIXY';
 const apiurl=`https://api.unsplash.com/photos/random?client_id=${apikey}&count=${count}`;  
 

const imgcontainer = document.getElementById('img-container')
let photoarrays=[];

async function getphoto(){
    try{
       const res = await fetch(apiurl)
       photoarrays=await res.json();
       displayimage();
    }catch(err){
        console.log(err)
    }
}
function displayimage(){
        photoarrays.forEach((photo)=>{
            const item = document.createElement('a')
            item.setAttribute('href',photo.links.html);
            item.setAttribute('target','_blank')

            const img = document.createElement('img')
            img.setAttribute('src',photo.urls.regular)
            img.setAttribute('title',photo.alt_description)
            img.setAttribute('alt',photo.alt_description)

            item.appendChild(img)
            imgcontainer.appendChild(item)
        })
}
getphoto()

window.addEventListener('scroll',()=>{
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight-100){
        getphoto();
    }
})