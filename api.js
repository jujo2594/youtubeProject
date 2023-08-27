/* APIS CODE TO GET A RESPONSE FROM THE CreativeCode, Youtube Channel */

const url = 'https://youtube138.p.rapidapi.com/channel/details/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '158275f0c7msh3e1e4e8e68b9289p19689fjsn7a974cbcd4b3',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

const obtenerBanner = async() =>{
	try{
		let petition = await fetch(url,options);
		let response = await petition.json();
		console.log(response);
		console.log(response.banner.desktop[0].url)
	}
	catch(error){
		console.error('Ocurrio un error', error);
	}
}

obtenerBanner();