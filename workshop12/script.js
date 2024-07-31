const count = 10;
const apikey='-CNT-QJ9KrU1QHeqD6xip1fgjyZ_T-XRjwP-d7yxIXY';
const apiurl=`https://api.unsplash.com/phone/random?client_id=${apikey}&count=${count}`;

const imgcontainer = document.getElementById('img-container')

async function getphoto(){
    try{
       const res = await fetch(apiurl)
       console.log(res)
    }catch(err){
        console.log(err)
    }
}
getphoto()