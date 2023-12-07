var burger = document.querySelector('.icon');
var nav = document.querySelector('.texts-7');

burger.addEventListener("click", function(){
if (nav.style.display =='block') {
    nav.style.display = 'none';
} else {
    nav.style.display = 'block';
}
})