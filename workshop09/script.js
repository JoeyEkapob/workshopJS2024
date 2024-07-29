const countdownform = document.getElementById('countdownform')
const inputcontainer = document.getElementById('containerinput')
const dateel = document.getElementById('date-picker')

const countdownbuttom = document.getElementById('countdownbuttom')
const countdowntitle = document.getElementById('countdowntitle')
const countdown = document.getElementById('countdown')
const timeel = document.querySelectorAll('span')



const complete = document.getElementById('complete')
const completetitle = document.getElementById('completetitle')
const completeinfo = document.getElementById('completeinfo')
const completebtn = document.getElementById('completebtn')



let countdownti = '';
let countdowndate = '';

let countdownvalue = timeel;

let countdownactive;
let savecountdown;

const second = 1000
const minte = second * 60
const hour = minte * 60
const day = hour * 24

countdownform.addEventListener('submit', updatecountdown);

function updatecountdown(e) {
    e.preventDefault();


    countdownti = e.srcElement[0].value;
    countdowndate = e.srcElement[1].value

    if (countdownti === '') {
        alert("ป้อนข้อมูลไม่ครบ")
    } else {
        savecountdown = { title: countdownti, date: countdowndate }
        localStorage.setItem("countdown", JSON.stringify(savecountdown))
        countdownvalue = new Date(countdowndate).getTime();//เวลาที่ตั้งไว้

        setuptime()
    }

}

function setuptime() {

    countdownactive = setInterval(() => {

        const now = new Date().getTime();
        const dis = countdownvalue - now;



        const days = Math.floor(dis / day)
        const hours = Math.floor((dis % day) / hour)
        const minutes = Math.floor((dis % hour) / minte)
        const seconds = Math.floor((dis % minte) / second)

        inputcontainer.hidden = true
        if (dis < 0) {
            countdown.hidden = true;
            complete.hidden = false;
            completeinfo.textContent = `${countdownti} วันที่ ${countdowndate}`;
            clearInterval(countdownactive)
        } else {
            countdowntitle.textContent = `${countdownti}`
            timeel[0].textContent = `${days}`
            timeel[1].textContent = `${hours}`
            timeel[2].textContent = `${minutes}`
            timeel[3].textContent = `${seconds}`
            countdown.hidden = false;
            complete.hidden = true;
        }
    }, second);
}

function calldatainstone() {
    if (localStorage.getItem("countdown")) {
        inputcontainer.hidden = true
        savecountdown = JSON.parse(localStorage.getItem("countdown"))

        countdownti = savecountdown.title
        countdowndate = savecountdown.date

        countdownvalue = new Date(countdowndate).getTime();
        setuptime();

    }
}

function reset(){
    localStorage.removeItem("countdown")
    countdown.hidden=true
    complete.hidden=true
    inputcontainer.hidden=false
    clearInterval(countdownactive)
    countdownti='';
    countdowndate='';
}
calldatainstone();

countdownbuttom.addEventListener('click',reset)
completebtn.addEventListener('click',reset)