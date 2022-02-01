let Form = document.getElementById('myForm');
let inputs = document.querySelectorAll('.input__field');
let pword1 = document.querySelector('.pword1');
let pword2 = document.querySelector('.pword2');
let holdingSuccessMessage = document.querySelector('.holdingSuccessMessage');
let main = document.querySelector('main');
let ContinueBTN = document.querySelector('.continue')
let username = document.querySelector('.username');
let fname = document.getElementById('fname')

const submitForm = (e) => {
    e.preventDefault()
    inputs.forEach((input) => {
        if (input.value == ''){
            input.style.border = '1px solid red'
        }
        else{
            input.style.border = '1px solid green'
            holdingSuccessMessage.style.display = 'flex';
            holdingSuccessMessage.style.zIndex = '1';
            main.style.zIndex = '-1';
            localStorage.setItem('fname', fname.value)
            username.textContent = localStorage.getItem('fname')
        }
    })
   
}

ContinueBTN.addEventListener('click', ()=>{
    holdingSuccessMessage.style.display = 'none'
    inputs.forEach(input => {
        input.value = '';
        input.style.border = '1px solid #121212'

    })
})


Form.addEventListener('submit', submitForm)
