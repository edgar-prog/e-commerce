
import { DOMServicios }  from "./DOMServicios.js";


const buscarProducto = (id) => {
	let listaArticulos = JSON.parse(localStorage.getItem("articulo"));
	let indice = listaArticulos.articulo.find(node => node.id == id);
	return indice;
}

const agregarProducto = (producto) => {
	//carga los articulos del localStorage a la variable lista
	let listaArticulos = JSON.parse(localStorage.getItem("articulo"));
	listaArticulos.articulo.push(producto);
	/* console.log(producto); */
	let listaJSON =  JSON.stringify(listaArticulos); 
	localStorage.setItem("articulo",listaJSON);
}

const borrarProducto = (id) => {
	//carga los articulos del localStorage a la variable lista
	let listaArticulos = JSON.parse(localStorage.getItem("articulo"));
	//buscarmos el indice del localStorage donde se ubica el id
	let indice = listaArticulos.articulo.findIndex(dato => dato.id == id);
	// se borra el articulo del DOM principal de la pagina si lo muestra
	switch(listaArticulos.articulo[indice].categoria) {
		case "boards": 
			DOMServicios.borrarItemSeccion("[data-boards]",id);
			break;
		case "herramienta":
			DOMServicios.borrarItemSeccion("[data-tools]",id);
			break;
		case "semiconductor":
			DOMServicios.borrarItemSeccion("[data-semiconductores]",id);
			break;
	}
	//se elimina el articulo con el id del localStorage
	listaArticulos.articulo.splice(indice, 1);
	let listaJSON =  JSON.stringify(listaArticulos); 
	//se re-escribe el localStorage sin el elemento con el id identificado
	localStorage.setItem("articulo",listaJSON);
}

const cargarProductos = () => 
	fetch("./datos/articulos.json")
	.then(respuesta => respuesta.json());

export const productosServicios = {
	cargarProductos,
	borrarProducto,
	agregarProducto,
	buscarProducto
}