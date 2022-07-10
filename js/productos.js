
let respuesta = new XMLHttpRequest();
respuesta.open("GET","./datos/boards.json",true);
respuesta.send();

respuesta.onreadystatechange = function() {
	if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
		let cardsBoardsJSON = JSON.parse(this.responseText);
		/* document.getElementById("boards__JSON").innerText = respuestaJSON; */
		let cardsHTML = document.querySelector(".boards__cards");
		/* cardsHTML = ''; */
		
		for(let card of cardsBoardsJSON.boards) {
			cardsHTML.appendChild(agregarCard(card));
		}
	}
}



function agregarCard(infoCard)  {
	//Se crea el div principal de la tarjeta
	let itemCard = document.createElement("div");
	itemCard.className = "cards__item";
	
	//agregando la imagen al div principal
	itemCard.appendChild(agregarImagen(infoCard.archivo));
	itemCard.appendChild(agregarInfo(infoCard.nombre, infoCard.precio));
	
	return itemCard;
}


function agregarImagen(nombreArchivo) {
	//div contenedor de la etiqueta imagen
	let itemImagen = document.createElement("div");
	itemImagen.className = "item__img";

	//se crea la etiqueta imagen
	let imagenCard = document.createElement("img");
	//se agregan los atributos para identificar y direccion del archivo
	imagenCard.className = "item__img-board";
	imagenCard.src = nombreArchivo;
	
	//se inserta la imagen en el div contenedor
	itemImagen.appendChild(imagenCard);
	
	return itemImagen;
}


function agregarInfo(nombre, precio) {
	//div contenedor de la etiqueta imagen
	let itemInfo = document.createElement("div");
	itemInfo.className = "item__content";
	
	//se crea el nombre del card
	let itemNombre = document.createElement("p");
	itemNombre.className = "item__titulo";
	itemNombre.innerHTML = nombre;
	
	itemInfo.appendChild(itemNombre);
	
	//se crea el precio del card
	let itemPrecio = document.createElement("p");
	itemPrecio.className = "item__precio";
	itemPrecio.innerHTML = precio;
	
	itemInfo.appendChild(itemPrecio);
	
	//se crea el icono de la card
	let Icon = document.createElement("i");
	Icon.className = "fa-solid fa-eye";
		
	//se inserta el icono en la tarjeta
	let itemIcono = document.createElement("p");
	itemIcono.className = "item__ver";
	itemIcono.appendChild(Icon);
	
		
	itemInfo.appendChild(itemIcono);

	return itemInfo;
}

