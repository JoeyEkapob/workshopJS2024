const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkinput([username, email, password, password2])
    if (!validateEmail(email.value.trim())) {
        showerror(email, 'รูปแบบอีเมลไม่ถูกต้อง')
    } else {
        showsuccess(email)
    }
    checkpassword(password,password2)
    checkinputlength(username,5,10)
    checkinputlength(password,5,12)
})
function showerror(input, message) {
    const formcontrol = input.parentElement
    formcontrol.className = 'form-control errors';
    const small = formcontrol.querySelector('small')
    small.innerText = message

}
function showsuccess(input) {
    const formcontrol = input.parentElement
    formcontrol.className = 'form-control success';
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkinput(inputarr) {
    inputarr.forEach(function (input) {
        if (input.value.trim() === '') {
            showerror(input, `กรุณาป้อน ${getinputcase(input)}`)

        } else {
            showsuccess(input)
        }
    });


   
}

function getinputcase(input){
    console.log(input)
   
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);

}
function checkpassword(password,password2){
    if(password.value !== password2.value){
        showerror(password2,'รหัสผ่านไม่ตรงกัน')
    }
}

function checkinputlength(input,min,max){

    if(input.value.length <= min){
        showerror(input,`กรุณาป้อน ${getinputcase(input)} ต้องมากกว่า ${min} ตัวอักษร`)
    }else if(input.value.length> max){
        showerror(input,`กรุณาป้อน ${getinputcase(input)} ต้องไม่เกิน ${max} ตัวอักษร`)

    }else{
        showsuccess(input)
    }

}