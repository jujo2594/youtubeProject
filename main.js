/* Function and event use to reduce the width of the sidebar*/

let menuIcon = document.querySelector('.menu');
let sideBar = document.querySelector('.sideBar');

function ocultar(){
    sideBar.classList.toggle("reduceSideBar");
}

menuIcon.addEventListener('click', ocultar)