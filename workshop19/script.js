const SpeechRecognize=window.SpeechRecognition || window.webkitSpeechRecognition;

const reconize = new SpeechRecognize();
const btn = document.querySelector('.control');

function recordvoice(){
    const isrecord = btn.classList.contains('record')
    if(isrecord){
        reconize.start();
        btn.classList.remove('record')
        btn.classList.add('pause')
        btn.innerText="pause";
    }else{
        reconize.stop();
        btn.classList.remove('pause')
        btn.classList.add('record')
        btn.innerText="Record";

    }

}
function setvoicetotext(e){
    console.log(e);
    let message = document.querySelector('.message');
    message.innerText+=e.results[0][0].transcript;
}
function continuerecord(){
    const isPause = btn.classList.contains('pause')
    if(isPause){
        reconize.start();
    }
}

function setupvoice(){
    
    reconize.lang="th-TH";
    btn.addEventListener('click',recordvoice)
    reconize.addEventListener('result',setvoicetotext)
    reconize.addEventListener('end',continuerecord)
}
setupvoice();