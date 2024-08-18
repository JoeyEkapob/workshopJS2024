const  data =[
    "python",
    "JavaScripy",
    "React",
    "Nodejs",
    "Visual Studio Code",
    "Vuejs"
]
const search = document.getElementById('search')
const output = document.getElementById('output')


search.onkeyup= function(){
    let word = search.value
    let result = []
    if(word.length){
        result = data.filter((value)=>{
            return value.toLowerCase().includes(word.toLowerCase())
        })
    }
    if(result.length>0){
        let contant = result.map((value)=>{
            return "<li onclick=selectchoice(this)>"+value+"</li>"
        })
        output.innerHTML="<ul>"+ contant.join('')+"</ul>"
    }else{
        output.innerHTML=""
    }
}
function selectchoice(word){
    search.value=word.innerHTML;
    output.innerHTML="";
}