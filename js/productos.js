
//lectura del archivo json de boards ingresados
let jsonBoards = new XMLHttpRequest();
jsonBoards.open("GET","./datos/boards.json",true);
jsonBoards.send();

//lectura del archivo json de las herraminetas ingresados
let jsonTools = new XMLHttpRequest();
jsonTools.open("GET","./datos/tools.json",true);
jsonTools.send();

//lectura del archivo json de las semiconductores ingresados
let jsonSemiconductores = new XMLHttpRequest();
jsonSemiconductores.open("GET","./datos/semiconductores.json",true);
jsonSemiconductores.send();


jsonBoards.onreadystatechange = function() {
	if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
		let cardsBoardsJSON = JSON.parse(this.responseText);
		
		let cardsHTML = document.querySelector(".boards__cards");
		
		//se toma el ancho de la pantalla para colocar un numero de tarjetas
		let anchoPantalla = screen.width;
		let numeroTarjetas = 4;
		
		if(anchoPantalla >= 992) {
			numeroTarjetas = 5;
		} 
		
		if(anchoPantalla >= 1440) {
			numeroTarjetas = 6;
		} 
		
		for(let card of cardsBoardsJSON.boards) {
			//se verifica el contador para interrumpir el agregar tarjetas
			if(numeroTarjetas == 0) {
				break;
			}
			else {
				//insercion de las tarjetas a mostrar
				cardsHTML.appendChild(agregarCard(card));
				numeroTarjetas--;
			}
		}
	}
}

jsonTools.onreadystatechange = function() {
	if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
		let cardsToolsJSON = JSON.parse(this.responseText);
		
		let cardsHTML = document.querySelector(".herraminetas__cards");
		
		//se toma el ancho de la pantalla para colocar un numero de tarjetas
		let anchoPantalla = screen.width;
		let numeroTarjetas = 4;
		
		if(anchoPantalla >= 992) {
			numeroTarjetas = 5;
		} 
		
		if(anchoPantalla >= 1440) {
			numeroTarjetas = 6;
		} 
		
		for(let card of cardsToolsJSON.tools) {
			//se verifica el contador para interrumpir el agregar tarjetas
			if(numeroTarjetas == 0) {
				break;
			}
			else {
				//insercion de las tarjetas a mostrar
				cardsHTML.appendChild(agregarCard(card));
				numeroTarjetas--;
			}
		}
	}
}

jsonSemiconductores.onreadystatechange = function() {
	if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
		let cardsSemiconductoresJSON = JSON.parse(this.responseText);
		
		let cardsHTML = document.querySelector(".semiconductores__cards");
		
		//se toma el ancho de la pantalla para colocar un numero de tarjetas
		let anchoPantalla = screen.width;
		let numeroTarjetas = 4;
		
		if(anchoPantalla >= 992) {
			numeroTarjetas = 5;
		} 
		
		if(anchoPantalla >= 1440) {
			numeroTarjetas = 6;
		} 
		
		for(let card of cardsSemiconductoresJSON.semiconductores) {
			//se verifica el contador para interrumpir el agregar tarjetas
			if(numeroTarjetas == 0) {
				break;
			}
			else {
				//insercion de las tarjetas a mostrar
				cardsHTML.appendChild(agregarCard(card));
				numeroTarjetas--;
			}
		}
	}
}

function agregarCard(infoCard)  {
	//Se crea el div principal de la tarjeta
	let itemCard = document.createElement("div");
	itemCard.className = "cards__item";
	
	//agregando la imagen al div principal
	itemCard.appendChild(agregarImagen(infoCard.archivo));
	//agregando informacion al div principal
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
		
	//se inserta para darle estilo con css a la etiqueta p
	let itemIcono = document.createElement("p");
	itemIcono.className = "item__ver";
	itemIcono.appendChild(Icon);

	//se agrego el icono a la card
	itemInfo.appendChild(itemIcono);

	return itemInfo;
}

