const questionData = [
	{
	  question:"1.ข้อใดไม่ใช่ระบบปฏิบัติการ",
      a:"ระบบปฏิบัติการดอส",
      b:"ไมโครซอฟท์เวิร์ด",
      c:"ไมโครซอฟต์วินโดวส์",
      d:"ระบบปฏิบัติการแอนดรอยด์",
      correct:"b"
	},
    {
        question:"2.ข้อใดคือโปรแกรม Web Browser",
        a:"Google Chrome",
        b:"Keyboard",
        c:"Mouse",
        d:"Monitor",
        correct:"a"
    },
    {
        question:"3.ข้อใดคือฮา์ดแวร์",
        a:"Keyboard",
        b:"Mouse",
        c:"Monitor",
        d:"ถูกทุกข้อ",
        correct:"d"
    }
]

const a =document.getElementById('a-text')
const b =document.getElementById('b-text')
const c =document.getElementById('c-text')
const d =document.getElementById('d-text')
const question = document.querySelector('.question')
const container = document.querySelector('.container')
const answerel=document.querySelectorAll('.answer');
const submit =document.getElementById('submit')


let currentquestion = 0;
let score = 0;

function loadqusertion(){
    checkchoice();
    
    const currentquestiondata=questionData[currentquestion]
    question.innerText = currentquestiondata.question
    a.innerText = currentquestiondata.a
    b.innerText = currentquestiondata.b
    c.innerText = currentquestiondata.c
    d.innerText = currentquestiondata.d
}
 function checkchoice(){
    answerel.forEach(element => {
        element.checked=false
 }); 
} 
submit.addEventListener('click',() => {
    let answer = getchoiceanswer()
    if(answer){
        if(answer == questionData[currentquestion].correct){
            score++
        }
        currentquestion++
        if(currentquestion < questionData.length){
            loadqusertion()
        }else{
            container.innerHTML=`<h2>คุณได้คะเเนนเท่าไหร้ ${score} / ${questionData.length}`
        }
    }
})

function getchoiceanswer(){
    let answer;
    answerel.forEach(element => {
        if(element.checked){
            answer = element.id
        }
    })
    return answer

}
/* console.log(answerel) */
loadqusertion()