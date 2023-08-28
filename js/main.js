/* Function and event use to reduce the width of the sidebar*/

let menuIcon = document.querySelector('.menu');
let sideBar = document.querySelector('.sideBar');
let largeContainer = document.querySelector('.mainContent');
let largeBanner = document.querySelector('.bannerContainer');

//*! It's not reomving the hover when the menu is reduced
let shortcuts = document.querySelectorAll('.simdeMenu');


function ocultar(){
    sideBar.classList.toggle("reduceSideBar");
    largeContainer.classList.toggle("bigContent");
    largeBanner.classList.toggle("largeBannerContainer");
}

//*! It's not reomving the hover when the menu is reduced
function hover(){
    shortcuts.style.transition = "none";
}

menuIcon.addEventListener('click', ocultar);

//*! It's not reomving the hover when the menu is reduced
// shortcuts.addEventListener('mouseenter', hover)  

