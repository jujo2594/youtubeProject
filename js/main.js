/* Function and event use to reduce the width of the sidebar*/

let menuIcon = document.querySelector('.menu');
let sideBar = document.querySelector('.sideBar');
let largeContainer = document.querySelector('.mainContent');
let largeBanner = document.querySelector('.bannerContainer');


function ocultar(){
    sideBar.classList.toggle("reduceSideBar");
    largeContainer.classList.toggle("bigContent");
    largeBanner.classList.toggle("largeBannerContainer");
}

menuIcon.addEventListener('click', ocultar);


/* This function allows to get the banner from 'CreativeCode' Channel */
const banner = "js/banner";

const getBanner = async() =>{
	try{
		let petition = await fetch(`${banner}.json`);
		let response = await petition.json();
		let creativeCodeBanner = response.banner.desktop[0].url;
		let selection = document.querySelector('.bannerContainer');
		selection.insertAdjacentHTML("beforeend", /* HTML*/ `
			<img src="${creativeCodeBanner}" alt="banner">
		`)
	}
	catch(error){
		console.error('System Error', error);
	}
}
getBanner();

/* This function allows to get the videos informacion from 'CreativeCode' Youtube Channel */

const thumbnailsInfo = "js/creativeCodeVideo"

const getVideos = async() =>{
	try{
		let petition = await fetch(`${thumbnailsInfo}.json`);
		let response = await petition.json();
		let selection = document.querySelector('.videosContainer');
			selection.insertAdjacentHTML('beforeend', /* HTML */` 
				${response.contents.map((value)=> /* HTML */ `
				<div class="videoCar">
					<a href="index2.html?videoId=${value.video.videoId}"><img class="thumbnail" src="${value.video.thumbnails[2].url}" alt="thumbnail1"></a>
					<div class="flexNavBar">
						<a href=""><img class="profilePicture" src="images/Jack.png" alt=""></a>
						<div class="videoInfo">
							<a href="index2.html">${value.video.title}</a>
							<p>CreativeCode</p>
							<p>${value.video.stats.views} &bull; ${value.video.publishedTimeText}</p>
						</div>
					</div>
				</div>
				`).join(" ")};
			`);
	}catch(error){
		console.error('System Error', error)
	}
}
getVideos();