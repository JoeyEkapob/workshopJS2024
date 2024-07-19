const form =document.getElementById('form');
const search = document.getElementById('search');
const result=document.getElementById('result');
const more= document.getElementById('more')

const apiurl = "https:// api.lyrics.ovh/v1 /";

form.addEventListener('submit',e=>{
    e.preventDefault();
    const songtxt = search.value;
    if(!songtxt){
        alert('ป้อนข้อมูลให้ถูกต้อง')
    }else{
        searchlyrics(songtxt);
    }
    console.log(songtxt);
});

async function searchlyrics(songtxt){
  const res = await fetch(`${apiurl}/suggest/${songtxt}`);
   const allsongs =  await res.json();
   showdata(allsongs)
}
function showdata(song){
    result.innerHTML=`
    <ul class="song">
    ${song.data.map(song=>

        `<li><span>
        <strong>${song.artist.name}</strong> - ${song.title}
        </span>
        <button class="btn" data-artist="${song.artist.name} data-song="${song.title}" onclick="">เนื้อเพลง</butoon>
        </li>`
    ).join("")}

    </ul>
    `;
    if(song.next || song.prev){
        more.innerHTML=`
        ${song.next ? `<button class="btn" onclick="getmoresongs('${song.prev})">ก่อนหน้า</button>` : ''}
        ${song.next ? `<button class="btn" onclick="getmoresongs('${song.next})">ถัดไป</button>` : ''}

        `
    }else{
        more.innerHTML='';
        }
}
async function getmoresongs(songurl){
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${songurl}`);
    const allsongs =  await res.json();
    showdata(allsongs)
}

result.addEventListener('click',e=>{
    const clicke1 = e.target;

    if(clicke1.tagname=="BUTTON"){
        const arist = clicke1.getattribute('data-artist')
        const songname = clicke1.getattribute('data-song')
        
       getlylist(arist,songname)
    }
})
async function getlylist(arist,songname){

    const res = await fetch(`${apiurl}/v1/${songname}`);
   const data =  await res.json();
   const lyrics =data.lyrics.replace(/(\r\n | \r | \n)/g,"<br>");
   if(lyrics){
        result.innerHTML =`<h2><span>
        <strong>${arist}</strong> - ${songname}
        </span></h2>
        <span>${lyrics}</span>
        `;
   }else{
    result.innerHTML =`<h2><span>
        <strong>${arist}</strong> - ${songname}
        </span></h2>
        <span>ไม่มีข้อมูล</span>
        `;
   }
   more.innerHTML='';
}