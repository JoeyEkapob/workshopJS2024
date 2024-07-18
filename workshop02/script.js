const balance = document.getElementById('balance')
const moneyplus = document.getElementById('money-plus')
const moneyminus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount');



let datatran = [];

function init() {
    list.innerHTML='';
    datatran.forEach(adddatatolist)
    calculatemoney()
}
function adddatatolist(datatran) {
    const symbol = datatran.amount < 0 ? '-' : '+';
    const status = datatran.amount < 0 ? 'minus' : 'plus'
    const item = document.createElement('li');
    item.classList.add(status)
    /* item.innerHTML = 'ค่าซ่อมรถ <span>400</span><button class="btndelete">x</button>' */
    item.innerHTML = `${datatran.text}<span> ${symbol}${numberWithCommas(Math.abs(datatran.amount))}</span><button class="btndelete" onclick="removedata(${datatran.id})">x</button>`
    list.appendChild(item)

}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function autoid(){
    return Math.floor(Math.random()*1000000)
}
function removedata(id){
    datatran=datatran.filter(datatran=>datatran.id !==id)
    init()
}
function calculatemoney() {
    const amount = datatran.map(datatran => datatran.amount);
    const total = amount.reduce((result, item) => (result += item), 0).toFixed(2);

    const income = amount.filter(item => item > 0).reduce((result, item) => (result += item), 0).toFixed(2);
    const expanse = (amount.filter(item => item < 0).reduce((result, item) => (result += item), 0) * -1).toFixed(2);

    balance.innerText = `${numberWithCommas(total)}`
    moneyplus.innerText = `${numberWithCommas(income)}`
    moneyminus.innerText = `${numberWithCommas(expanse)}`
}
function adddata(e){
    e.preventDefault();
    if(text.value.trim() === '' || amount.value.trim() === ''){
        alert("กรุณาป้อนข้อมูลให้ครบ")
    }else{
        const data={
            id:autoid(),
            text:text.value,
            amount:+amount.value
        }
        datatran.push(data);
        adddatatolist(data)
        calculatemoney();
        text.value='';
        amount.value=''; 
    }
}
form.addEventListener('submit',adddata);

init()