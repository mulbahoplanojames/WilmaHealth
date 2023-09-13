const body = document.querySelector('body');

const sunIcon = document.querySelector('.bi-brightness-low');

const moonIcon = document.querySelector('.bi-moon-fill');

// White backgreoun
function whiteBackground() {
  body.style.backgroundColor = 'white';
  body.style.color = 'black';
  body.style.transition = '.5s';
}
sunIcon.addEventListener("click", whiteBackground);

// Dark background 
function darkBackground() {
  body.style.backgroundColor = '#ffffee' ;
  body.style.color = 'black';
  body.style.transition = '.5s';
}
moonIcon.addEventListener("click", darkBackground);


// varibles and functions for  displating and hidding the navigation bar in a small screen 

let showMainNavlinks = document.querySelector('.show-main-navLinks');

let hideMainNavlinks = document.querySelector('.hide-main-navLinks');

let navLinks = document.querySelector('#main-navLinks');

// An arrow function for showing the Menu 
let showMenu = () => {
  navLinks.style.right = '0';
}
showMainNavlinks.addEventListener("click", showMenu);


let hideMenu = () => {
  navLinks.style.right = '-220px'
}
hideMainNavlinks.addEventListener("click", hideMenu);


//Contact form message after submission

let submitMessage = () => {
  alert('Sent Successful!')
}