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