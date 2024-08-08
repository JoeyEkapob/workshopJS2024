/* const card = document.querySelector('.card'); 
 */const showbtn = document.getElementById('show')
const hiddenbtn = document.getElementById('btn-hidden')

const addcontainer =document.getElementById('add-container')

const cardcontainer = document.getElementById('card-container')
const nextbtn = document.getElementById('next')
const prevbtn = document.getElementById('prev')
const currentel = document.getElementById('current')
const clearbtn = document.getElementById('clear')
const questtionel = document.getElementById('question')
const answerel = document.getElementById('answer')
const addcard = document.getElementById('add-card')

let currentactivecard =0;
let cardel =[];

const carddata =getcarddata()
function createcard(){
    carddata.forEach((data,index)=>{
        createsinglecard(data,index)
    })
}

function createsinglecard(data,index){
    const card = document.createElement('div');
    card.classList.add('card')
    if(index==0){
        card.classList.add("active")
    }
    card.innerHTML=`
    <div class="innercard">
          <div class="innercardfront">
            <p>${data.question}</p>
          </div>
          <div class="innercardback">
            <p>${data.answer}</p>
          </div>
        </div>`;
        card.addEventListener('click', () => card.classList.toggle('show-answer'));
        cardel.push(card);
        cardcontainer.appendChild(card)
        updatecurrentqueestion()
        console.log(data.qusetion,data.answer)
}

function updatecurrentqueestion(){
    currentel.innerText = `${currentactivecard+1} / ${cardel.length}`
}


createcard();
/* card.addEventListener('click', () => 
    card.classList.toggle('show-answer')
); */
showbtn.addEventListener('click', () => 
    addcontainer.classList.add('show')
);
hiddenbtn.addEventListener('click', () => 
    addcontainer.classList.remove('show')
);
nextbtn.addEventListener('click',()=>{
cardel[currentactivecard].className ='card left';
currentactivecard = currentactivecard+1
if(currentactivecard>cardel.length-1){
    currentactivecard=cardel.length-1;
}
cardel[currentactivecard].className ='card active';
updatecurrentqueestion();
})
prevbtn.addEventListener('click',()=>{
cardel[currentactivecard].className ='card right';

    currentactivecard = currentactivecard-1
if(currentactivecard<0){
    currentactivecard=0;
}
cardel[currentactivecard].className ='card active';
updatecurrentqueestion();
})

addcard.addEventListener('click',()=>{
    const question =questtionel.value;
    const answer =answerel.value;

    if(question.trim()&& answer.trim()){
        const newcard={question,answer}
        createsinglecard(newcard);
        question.value='';
        answer.value='';
        addcontainer.classList.remove('show')
        carddata.push(newcard)
        setcarddata(carddata)
    }
})

function setcarddata(carddata){
    localStorage.setItem('datacards',JSON.stringify(carddata))
    window.location.reload();

}

function getcarddata(){
    const cards=JSON.parse(localStorage.getItem('datacards'))
    console.log(cards)
    return cards === null ? [] : cards
}
clearbtn.addEventListener('click',()=>{
    localStorage.clear();
    cardcontainer.innerHTML="";
    window.location.reload();

})