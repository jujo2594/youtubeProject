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

/* APIS CODE TO GET A RESPONSE FROM THE CreativeCode, Youtube Channel */

const url = 'https://youtube138.p.rapidapi.com/channel/search/?id=UC8fkwsjcI_MhralEX1g4OBw&q=CreativeCode&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '158275f0c7msh3e1e4e8e68b9289p19689fjsn7a974cbcd4b3',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

const obtenerYouTube = async() =>{
    let petition = await fetch(url,options);
    let response = await petition.json();
    console.log (response);
}