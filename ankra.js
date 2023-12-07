var burger = document.querySelector('.icon');
var nav = document.querySelector('.texts-7');
const pwShowHide = document.querySelectorAll('.eye-icon');
const container = document.querySelector('.container');
const main = document.querySelector('.main');
const button = document.querySelector('.text-1');
const button_2 = document.querySelector('button');
const button_3 = document.querySelectorAll('.icon-3');





button_2.addEventListener("click", function(){
    container.style.display ="none";
    main.style.display ="block";
} )

button.addEventListener("click", function(){
    main.style.display ="none";
    container.style.display ="block";
} )

burger.addEventListener("click", function(){
if (nav.style.display =='block') {
    nav.style.display = 'none';
} else {
    nav.style.display = 'block';
}
})

pwShowHide.forEach (eyeIcon =>{
    eyeIcon.addEventListener('click', () => {
        let pwFields = eyeIcon.parentElement.querySelectorAll('.input');

        pwFields.forEach(password => {
            if (password.type === 'password') {
                password.type = 'text';
            } else {
                password.type = 'password';
            }
            
        })
    })
})

button_3.forEach (heart =>{
    heart.addEventListener('click', () => {
        let heartFill = heart.parentElement.querySelectorAll('.icon-3');

        heartFill.forEach(button_3 => {
            if (button_3.classList.contains ('active')) {
                button_3.classList.remove ('active');
            } else {
               button_3.classList.add ('active');
            }
            
        })
    })
})


