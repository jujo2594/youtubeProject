/* Function to search in the navbar 'CreativeCode' videos */

const thumbnailsInfo = "js/creativeCodeVideo"

const url = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd4598ec1e6msh803f2bb5f3915e6p1dca36jsn65c1d3942f13',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

export const searchNavBar = async(p1) =>{
    let petition = await fetch(url,options);
	let response = await petition.json();
    let h = 0, cont = 0;
    const filteredArray = response.contents.filter((value) => {         
        if (p1 && value.video.title.toLowerCase().includes(p1.toLowerCase())) {             
            return true;
        } 
        return false; 
    });
    let array = filteredArray.map((value) => 
    {cont++;
        if (cont <= 10) h = 30 * cont;
        return `<li class="item-searching"><a href="index2.html?videoId=${value.video.videoId}">${value.video.title}</a></li>`;     
    });
document.querySelector("#active").style.height = `${h}px`;
document.querySelector("#searchList").innerHTML = null;
document.querySelector("#searchList").insertAdjacentHTML("beforeend", array.join(" "));

}

