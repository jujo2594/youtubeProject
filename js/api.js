/* APIS CODE TO GET A RESPONSE FROM THE CreativeCode, Youtube Channel. I download the '.json' object cos I already finish the allow number of calls  */



// getBanner();

// let thumbnails;
// const addThumbnailsEvent = ()=>{
// 	thumbnails.forEach(source=>{
// 		source.addEventListener('click',()=>{
// 			const thumbnailSrc = source.getAttribute('src');
// 			console.log(thumbnailSrc);
// 			/* Return the url hr */
// 			window.location.href = `index2.html?thumbnail=${encodeURIComponent(thumbnailSrc)}`	
// 		});
// 	});
// }

/* Using the informacion of Channel Videos from the website, I'll insert the videos visualizations */

const thumbnailsInfo = "js/creativeCodeVideo";
const banner = "js/banner";

const bringVideo = async()=>{
	try{
		let petition = await fetch(`${thumbnailsInfo}.json`);
		let response = await petition.json();
		let petition2 = await fetch(`${banner}.json`)
		let response2 = await petition2.json();
		const urlString = window.location.search;
		console.log(urlString);
		let urlId = urlString.slice(-11);
		if(response.contents.find(content => content.video.videoId === urlId)){
			let selection = document.querySelector('.videosContainer');
			selection.insertAdjacentHTML('beforeend', /* HTML */`
				<div class="play-video">
				<iframe width="1000" height="600" src="https://www.youtube.com/embed/${urlId}" title="M I L E S D A V I S - Kind Of Blue - Full Album" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				<h3>${response.contents.video.title}</h3>
				<div class="playVideoInfo">
					<p>${response.contents.video.stats.views} &bull; ${response.contents.video.publishedTimeText}</p>
					<div>
						<a href=""><img src="images/like.png" alt="likeIcon">26 k</a>
						<a href=""><img src="images/dislike.png" alt="likeIcon"></a>
						<a href=""><img src="images/share.png" alt="likeIcon">Share</a>
						<a href=""><img src="images/save.png" alt="likeIcon">Save</a>
						<a class="downloads" ><i class='bx bx-download'></i>Download</a>
					</div>
				</div>
				<hr>
			`);
			let selection2 = document.querySelector('.rigth-sidebar');
			selection2.insertAdjacentHTML('beforeend',/* HTML */` 
				<div class="channelInfo">
				<img src="./images/Jack.png" alt="channelImage">
					<div>
						<p>${response2.title}</p>
						<span>${response2.stats.subscribersText}</span>
						<button type="button">Subscribe</button>
					</div>
				</div>
			`);
		}else{
			console.log('No se encontro ningun video con el ID correspondiente');
		}
	}catch(error){
		console.error('System Error',error)
	}
}