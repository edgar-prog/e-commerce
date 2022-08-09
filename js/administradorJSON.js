
import { crearTarjetaHTML, showInfo }  from "./tarjeta.js";

const actualizarSecciones = () => {
	let listaArticulos = JSON.parse(localStorage.getItem("articulo"));
	listaArticulos.articulo.forEach( dato => {
		insertarProductoSeccion(dato);
	});
	const iconAllVer =  document.querySelectorAll(".container__productos .fa-eye");
	
	iconAllVer.forEach(node => {
	//se e agrega un evento a cada icono seleccionado
		node.addEventListener('click', (event) => {
			let idProducto = event.path[2].getAttribute("id");
			let mostrarCard = showInfo(buscarProducto(idProducto));
			let modal = document.querySelector(".modal");
			borrarAllSeccion(".modal");
			modal.appendChild(mostrarCard);
			modal.classList.add("modal--show");
			let closeModal = document.querySelector(".modal__container .button");
			closeModal.addEventListener("click",() =>{
				modal.classList.remove("modal--show");
			});
		});
	});
}

const buscarProducto = (id) => {
	let lista = JSON.parse(localStorage.getItem("articulo"));
	let indice = lista.articulo.find(node => node.id == id);
	return indice;
}


const insertarProductoSeccion = (dato) => {
	let seccion = "";
	switch (dato.categoria) {
		case "boards": 
			seccion = "[data-boards]";
			break;
		case "herramienta": 
			seccion = "[data-tools]";
			break;
		case "semiconductor": 
			seccion = "[data-semiconductores]";
			break;
	}
	
	let anchoPantalla = screen.width;
	let contadorTarjetas = 4;
	
	if(anchoPantalla >= 992) {
		contadorTarjetas = 5;
	}
	if(anchoPantalla >= 1440) {
		contadorTarjetas = 6;
	}
	
	let seccionPadre = document.querySelector(seccion);
	let nodos = seccionPadre.children.length;
	if(nodos < contadorTarjetas) {
		seccionPadre.appendChild(crearTarjetaHTML(dato, false));
	}
}

const borrarAllSeccion = (seccion) => {
	//Se lecciona el elemento padre donde se requiere borrar del DOM
	let seccionPadre = document.querySelector(seccion);
	//se recorre hasta no encontrar el primer hijo dell padre
	while (seccionPadre.firstChild) {
	//se remueve el primer hijo del padre y si tiene mas se itera de nuevo
		seccionPadre.removeChild(seccionPadre.firstChild);
	}
}

const borrarItemSeccion = (seccion, id) => {
	//se busca al padre de la tarjeta a eliminar del DOM
	let seccionPadre = document.querySelector(seccion);
	//se recorre entre los hjos que tiene
	for (let node of seccionPadre.childNodes) {
	//se identifica el nodo hijo con la id que se desea eliminar
		if(id == node.id) {
			node.remove();
		}
	}
}


const agregarProducto =(producto) => {
	//carga los articulos del localStorage a la variable lista
	let lista = JSON.parse(localStorage.getItem("articulo"));
	lista.articulo.push(producto);
	let listaJSON =  JSON.stringify(lista); 
	localStorage.setItem("articulo",listaJSON);
}

const borrarProducto = (id) => {
	//carga los articulos del localStorage a la variable lista
	let lista = JSON.parse(localStorage.getItem("articulo"));
	//buscarmos el indice del localStorage donde se ubica el id
	let indice = lista.articulo.findIndex(dato => dato.id == id);
	// se borra el articulo del DOM principal de la pagina si lo muestra
	switch(lista.articulo[indice].categoria) {
		case "boards": 
			borrarItemSeccion("[data-boards]",id);
			break;
		case "herramienta":
			borrarItemSeccion("[data-tools]",id);
			break;
		case "semiconductor":
			borrarItemSeccion("[data-semiconductores]",id);
			break;
	}
	//se elimina el articulo con el id del localStorage
	lista.articulo.splice(indice, 1);
	let listaJSON =  JSON.stringify(lista); 
	//se re-escribe el localStorage sin el elemento con el id identificado
	localStorage.setItem("articulo",listaJSON);
}

const listaProductos = () => 
	fetch("./datos/articulos.json")
	.then(respuesta => respuesta.json());

export const productosServicios = {
	listaProductos,
	borrarProducto,
	borrarAllSeccion,
	insertarProductoSeccion,
	actualizarSecciones,
	agregarProducto,
	buscarProducto
}