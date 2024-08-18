const amount = document.getElementById('amount')
const output = document.getElementById('output')

amount.addEventListener('input',(e)=>{
    const number = e.target.value
    const result1=Intl.NumberFormat("th-TH",{style:"currency",currency:"THB"}).format(number)
    const result2=Intl.NumberFormat("en",{notation:"compact"}).format(number)
    output.innerText = result1 
})
