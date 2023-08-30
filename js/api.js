/* APIS CODE TO GET A RESPONSE FROM THE CreativeCode, Youtube Channel. I download the '.json' object cos I already finish the allow number of calls  */

const thumbnailsInfo = "js/creativeCodeVideo";
const banner = "js/banner";

const url = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '918e099fd5msh92f3d9782dba764p1f0484jsn2dd716acaead',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

const url2 = 'https://youtube138.p.rapidapi.com/channel/details/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '918e099fd5msh92f3d9782dba764p1f0484jsn2dd716acaead',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};


const bringVideo = async()=>{
	try{

		let petition = await fetch(url,options);
		let response = await petition.json();
		console.log(response);
		let petition2 = await fetch(url2,options2)
		let response2 = await petition2.json();
		const urlString = window.location.search;
		console.log(urlString);
		let urlId = urlString.slice(-11);
		let urlMatch = response.contents.find(content => content.video.videoId === urlId); 
		if(urlMatch){
			let selection = document.querySelector('.play-video');
			selection.insertAdjacentHTML('beforeend', /* HTML */`
				<div class="play-video">
				<iframe width="1000" height="600" src="https://www.youtube.com/embed/${urlId}" title="M I L E S D A V I S - Kind Of Blue - Full Album" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				<h3>${urlMatch.video.title}</h3>
				<div class="playVideoInfo">
					<p>${urlMatch.video.stats.views} &bull; ${urlMatch.video.publishedTimeText}</p>
					<div>
						<a href=""><img src="images/like.png" alt="likeIcon">26 k</a>
						<a href=""><img src="images/dislike.png" alt="likeIcon"></a>
						<a href=""><img src="images/share.png" alt="likeIcon">Share</a>
						<a href=""><img src="images/save.png" alt="likeIcon">Save</a>
						<a href="" class="downloads" ><i class='bx bx-download'></i>Download</a>
					</div>
				</div>
				<hr>
			`);
			selection.insertAdjacentHTML('beforeend',/* HTML */` 
				<div class="channelInfo">
				<img src="${response2.avatar[1].url}" alt="channelImage">
					<div>
						<p>${response2.title}</p>
						<span>${response2.stats.subscribersText}</span>
						<button type="button">Subscribe</button>
					</div>
				</div>
				<hr>
			`);
			let selection2 = document.querySelector('.rigth-sidebar');
			selection2.insertAdjacentHTML('beforeend',/* HTML */ `
			${response.contents.map((value)=> /* HTML */ ` 
				<div class="videoList">
					<a class="smallThumbnail" href="index2.html?videoId=${value.video.videoId}"><img src="${value.video.thumbnails[0].url}" alt="videoRecomendations"></a>
					<div class="videoInfo2">
						<a href=""><p>${value.video.title}</p></a>
						<p>CreativeCode</p>
						<p>${value.video.stats.views} &bull; ${value.video.publishedTimeText}</p>
					</div>
				</div>
			`)}
			`)
		}else{
			console.log('No se encontro ningun video con el ID correspondiente');
		}
	}catch(error){
		console.error('System Error',error)
	}
}

bringVideo();

import { searchNavBar } from "./searchFunction.js";
document.querySelector('#chartSearch').addEventListener("input", (e)=>{
    searchNavBar(e.target.value)
});

searchNavBar();