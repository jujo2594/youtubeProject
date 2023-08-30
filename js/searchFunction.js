/* Function to search in the navbar 'CreativeCode' videos */

export const searchNavBar = async(p1) =>{
    let petition = await fetch(`${thumbnailsInfo}.json`);
	let response = await petition.json();
    let h = 0, cont = 0;
    let array = json.contents.map((val,id)=>{
        if(val.playlist) return undefined;
        cont ++;
        if(cont <= 10) h = 30*cont;

        return ` <li><a href="index2.html?videoId=${value.video.videoId}">${val.video.title}</a></li> `
});

document.querySelector("#active").style.height = `${h}px`;
document.querySelector("#searchList").innerHTML = null;
document.querySelector("#searchList").insertAdjacentHTML("beforeend", array.join(" "));

}