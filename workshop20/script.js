let city="Tokyo";
const apikey = "7725c8d9c4a4a8359be1964598c1b361";

const form = document.getElementById('form')
const search = document.getElementById('search')


function setdata(){
    showdata()
}
async function showdata(){
    try {
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
        const res = await fetch(api);
        const data = await res.json();
        showdatatoui(data)
       
    } catch (error) {
        console.log(error)
    }
}
function showdatatoui(data){
    console.log(data)
    const cityel = document.getElementById('city')
    const stateel = document.getElementById('state')
    const weather = document.getElementById('weather')
    const statusel = document.getElementById('status')
    const humidityel = document.getElementById('humidity')
    const windel = document.getElementById('wind')
    
    cityel.innerText=data.name
    stateel.innerText=data.sys.country
    weather.children[0].innerHTML = calculate(parseInt(data.main.temp))+" C&deg"
    weather.children[1].innerHTML = "max : "+calculate(parseInt(data.main.temp_max))+" C&deg" + " min : "+calculate(parseInt(data.main.temp_min))+" C&deg"
    statusel.innerText=data.weather[0].main
    humidityel.innerText="humidity : "+data.main.humidity
    windel.innerText="wind speed : "+data.wind.speed

    

    
    
}
function calculate(k){
    return k-273;

}
function calldataapi(e){
    e.preventDefault()
    /* console.log(search.value) */
    city = search.value;
    setdata();
}
form.addEventListener('submit',calldataapi)
setdata();