const currencyone = document.getElementById('currencyone');
const currencytwo = document.getElementById('currencytwo');
const amountone = document.getElementById('amountone');
const amounttwo = document.getElementById('amounttwo');
const rate = document.getElementById('rate');
const btn = document.getElementById('btn');

currencyone.addEventListener('change',calculatemoney);
currencytwo.addEventListener('change',calculatemoney);
amountone.addEventListener('input',calculatemoney);
amounttwo.addEventListener('input',calculatemoney);

function calculatemoney(){
    const one = currencyone.value;
    const two = currencytwo.value;
    const rateurl = `https://api.exchangerate-api.com/v4/latest/${one}`
    fetch(rateurl).then(res=>res.json())
    .then(data=>{const rates = data.rates[two];
        rate.innerText=` 1 ${one} = ${rates} ${two}`
        amounttwo.value=(amountone.value*rates).toFixed(2);

    })
}
btn.addEventListener('click',()=>{
    // USD => THB || THB => USD 
    // TEMP => USD || THB = TEMP (USD)
    const temp = currencyone.value; // ต้นทาง
    currencyone.value=currencytwo.value;
    currencytwo.value = temp;
    calculatemoney();
})
/* btn.addEventListener('click',()=>{
    const temp = currencyone.value;
    currencyone.value = currencytwo.value;
    currencytwo.value = temp;
    calculatemoney();

}) */
calculatemoney();