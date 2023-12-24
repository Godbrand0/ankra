var burger = document.querySelector('.icon');
var nav = document.querySelector('.texts-7');
const pwShowHide = document.querySelectorAll('.eye-icon');
const container = document.querySelector('.container');
const main = document.querySelector('.main');
const button = document.querySelector('.text-1');
let button_2 = document.querySelector('.button');
const button_3 = document.querySelectorAll('.icon-3');
let username = document.getElementById('username');
var pass = document.getElementById('pass');


function fun1() {
    button.innerHTML = username.value;
}; 


// Initially disable the button
button_2.disabled = true;

// Add an input event listener to the username input field
username.addEventListener('input', function() {

   
   // Check if the username value is not empty
   if (username.value !== '' && pass.value !== '' ) {
      // If the username is not empty, enable the button
      button_2.disabled = false;
   } else {
      // If the username is empty, disable the button
      button_2.disabled = true;
   }
});

// Add a click event listener to button_2
button_2.addEventListener('click', function() {
   // Check if button_2 is disabled
   if (button_2.disabled ) {
      // If button_2 is disabled, display the container and hide the main
      container.style.display = "block";
      main.style.display = "none";
   } else {
      // If button_2 is not disabled, hide the container and display the main
      container.style.display = "none";
      main.style.display = "block";
   }
   fun1()
});


function validate_password() {
    var pass = document.getElementById('pass').value;
    var confirm_pass = document.getElementById('confirm_pass').value;
    if (pass!= confirm_pass) {
        button_2.disabled = true;
    } else {
        button_2.disabled = false;
    }
}


burger.addEventListener("click", function(){
if (nav.style.display =='block') {
    nav.style.display = 'none';
    main.style.transform = 'translateX(0px)';
} else {
    nav.style.display = 'block';
    main.style.transform = 'translateX(-100px)';
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


