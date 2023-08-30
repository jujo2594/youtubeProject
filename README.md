## YouTubeProject

#### Introducción:

La finalidad de este programa es la de realizar una replica de youtube usando un api obtenida de la página rapidapi, mediante la api FETCH de javascript. Todo esto basado en el canal de tutoriales de programación CreativeCode. Para está finalidad se definieron las siguiente funciones: 



### Archivo main.js 

Primero se realizo una sencilla manipulacion del DOM con la finalidad de colapsasr el menu lateral, de la pagina principal de Youtube: 



```javascript
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
```



#### .getBanner():

Está función permite obtener la imagen principal o imagen del banner del canal de CreativeCode, se realizo este llamado de manera local para evitar realizar un consumo acelerado de la API , debido al numero limitado de llamadas que esta permite. 

```javascript
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
```



#### .getVideos()



Esta función permite obtener la información relacionada al las miniaturas de los videos, esta llamada también se realizo de  manera local para evitar el consumo acelerado del API  y posteriormente permitira realizar carga y reproduccion de los videos. 



#### .searchNavBar():



Esta funcion permite realizar la busqueda en la barra de navegación, se importo esta función a este archivo ya que se debe garantizar la busqueda de videos desde la pagina principal. 

```javascript
import { searchNavBar } from "./searchFunction.js";
document.querySelector('#chartSearch').addEventListener("input", (e)=>{
    searchNavBar(e.target.value)
});

searchNavBar();
```

esta función tambipen fue importada al archivo api.js ya que este archivo es que se encuentra relacionado al reproductor de videos y se garantiza la busqueda desde ambas barras

Está función fue definida en el archivo searchFunction.js: 



```javascript
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
```



### Archivo api.js

El archivo api.js contiene la funcion .bringVideo() que es redirigida desde la pagina principal y que reproduce estos videos, adicionalmente los videos del menu lateral tambien pueden ser reproducidos a decision del usuario. A partir de esta tambien se carga la informacion relacionada a visualizaciones, likes, nombre del canal y antiguedad del video. Fue necesario obtener la informacion del ID del video mediante la URL del mismo como se muestra a continuacion: 



```javascript
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
```



Esto permite realizar la reproducción del video especificado de acuerdo a la miniatura de la pagina principal. 



