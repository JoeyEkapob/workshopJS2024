const caldisplay = document.querySelector('h1')
const inputbtn = document.querySelectorAll('button')
const clearbtn = document.getElementById('claerbtn')

const calculate={
    "/":(firstnum,secondnum)=>secondnum > 0 ? firstnum/secondnum : "error",
    "*":(firstnum,secondnum)=> firstnum*secondnum,
    "+":(firstnum,secondnum)=> firstnum+secondnum,
    "-":(firstnum,secondnum)=> firstnum-secondnum,
    "=":(firstnum,secondnum)=> secondnum

}

let firstvale = 0;
let operatorvalue = '';
let watifornext = false;

function setnumbervaluse(num){
    
    if(watifornext){
        caldisplay.textContent=num;
        watifornext=false;

    }else{
        const displayvalue = caldisplay.textContent;
        caldisplay.textContent = displayvalue === '0' ? num : displayvalue+num
    }
    
}
function calloperator(operator){
    const currentvalus = Number(caldisplay.textContent)
    if(operatorvalue && watifornext){
        operatorvalue=operator;
        return;
    }
    if(!firstvale){
        firstvale=currentvalus;
    }else{
        const result =calculate[operatorvalue](firstvale,currentvalus);
        caldisplay.textContent=result;
        firstvale=result;
        if(firstvale === "error"){
            resetall();
        }
    }
    operatorvalue = operator;
    watifornext=true;


}
function adddecimal(){
    if(watifornext) return
    if (!caldisplay.textContent.includes(".")){
    caldisplay.textContent=`${caldisplay.textContent}.`;
    }
    
}

inputbtn.forEach((input)=>{
    if(input.classList.length === 0 ){
        input.addEventListener('click',()=>setnumbervaluse(input.value))
    }else if(input.classList.contains("operator")){
        input.addEventListener('click',()=>calloperator(input.value))

    }else if(input.classList.contains("decimal")){
        input.addEventListener('click',()=>adddecimal());
    }
})
function resetall(){
    firstvale=0;
    operatorvalue='';
    watifornext=false;
    caldisplay.textContent='0';
  
}

clearbtn.addEventListener('click' ,()=>resetall())