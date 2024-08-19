const rating = document.querySelectorAll("i")
const result = document.getElementById("result")

rating.forEach((star,selectindex)=>{
    star.addEventListener('click',()=>{
        rating.forEach((star,choices)=>{
             if(selectindex>=choices){
                star.classList.add('active')
             }else{
                star.classList.remove('active')

             }


             console.log(choices)
        })
        result.innerText="ผลการประเมิน " +(selectindex+1) + " / 5"

    })
})