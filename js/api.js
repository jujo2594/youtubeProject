/* APIS CODE TO GET A RESPONSE FROM THE CreativeCode, Youtube Channel. I download the '.json' object cos I already finish the allow number of calls  */

const banner = "js/banner";

const getBanner = async() =>{
	try{
		let petition = await fetch(`${banner}.json`);
		let response = await petition.json();
		console.log(response);
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

/* Using the informacion of Channel Videos from the website, I'll insert the videos visualizations */

const thumbnailsInfo = "js/creativeCodeVideo"

const getVideos = async() =>{
	try{
		let petition = await fetch(`${thumbnailsInfo}.json`);
		let response = await petition.json();
		console.log(response);
		let selection = document.querySelector('.videosContainer');
			selection.insertAdjacentHTML('beforeend', /* HTML */`
				${response.contents.map((value)=> /* HTML */ `
				<div class="videoCar">
					<a href="index2.html"><img class="thumbnail" src="${value.video.thumbnails[2].url}" alt="thumbnail1"></a>
					<div class="flexNavBar">
						<a href=""><img class="profilePicture" src="images/Jack.png" alt="channel1"></a>
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

/* Function that send to the correct video if I click on the thumbnail, and add the videos informacion on the description.*/


const putVideos = async()=>{
	try{
		let petition = await fetch(`${thumbnailsInfo}.json`);
		let petition2 = await fetch(`${banner}.json`)
		let response = await petition.json();
		let response2 = await petition2.json();
		let selection = document.querySelector('.play-video');
		selection.insertAdjacentHTML('beforeend',/* HTML */`
			${response.contents.map((value)=>/* HTML */`
			<iframe width="1000" height="600" src="https://www.youtube.com/embed/${}" title="M I L E S D A V I S - Kind Of Blue - Full Album" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			<h3>Web Api NetCore Part22</h3>
			<div class="playVideoInfo">
				<p>145k &bull; 3 weeks ago</p>
				<div>
					<a href=""><img src="images/like.png" alt="likeIcon">26 k</a>
					<a href=""><img src="images/dislike.png" alt="likeIcon"></a>
					<a href=""><img src="images/share.png" alt="likeIcon">Share</a>
					<a href=""><img src="images/save.png" alt="likeIcon">Save</a>
					<a class="downloads" ><i class='bx bx-download'></i>Download</a>
				</div>
			</div>
			`)}
		
		`)
	}catch(error){
		console.error('System Error', error);
	}
	
}