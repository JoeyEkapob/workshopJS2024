const videoel = document.getElementById('video')
const requsetbtn = document.getElementById('requsetbtn')
const btnsheare = document.getElementById('sharebtn')

requsetbtn.addEventListener('click', ()=>{
 selectmediastream();

})

btnsheare.addEventListener('click',async ()=>{
/* 
    btnsheare.disabled=true;
    await videoel.requestPictureInPicture();
    btnsheare.disabled=false */
    if (videoel.readyState >= 1) { // readyState >= 1 หมายถึง METADATA_LOADED
        btnsheare.disabled = true;
        await videoel.requestPictureInPicture();
        btnsheare.disabled = false;
    } else {
        videoel.addEventListener('loadedmetadata', async () => {
            btnsheare.disabled = true;
            await videoel.requestPictureInPicture();
            btnsheare.disabled = false;
        }, { once: true });
    }




})

async function selectmediastream(){
  try{
        const mediastream = await navigator.mediaDevices.getDisplayMedia();
        videoel.srcOBject=mediastream;
        videoel.onloadedmetadata=()=>{
            videoel.play();
        }
    }catch(e){
        console.log(e)
    }

}