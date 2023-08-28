/* APIS CODE TO GET A RESPONSE FROM THE CreativeCode, Youtube Channel. I download the '.json' object cos I already finish the allow number of calls  */

const banner = "js/banner";

const obtenerBanner = async() =>{
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

obtenerBanner();

/* Using the informacion of Channel Videos from the website, I'll insert the videos visualizations */

const thumbnailsInfo = "js/creativeCodeVideo"

const ObtenerVideos = async() =>{
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

ObtenerVideos();
