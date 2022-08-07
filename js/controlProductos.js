
import { productosServicios }  from "./administradorJSON.js";
import { crearTarjetaHTML }  from "./tarjeta.js";

export const render_allProductos = () => {
	
	productosServicios.borrarAllSeccion("[data-all_productos]");
	let todosLosProductos = document.querySelector("[data-all_productos]");
	let lista = JSON.parse(localStorage.getItem("articulo"));

	lista.articulo.forEach( dato => {
		todosLosProductos.appendChild(crearTarjetaHTML(dato, true));
	});
}


const render = async() => {
	try {
		let lista = await productosServicios.listaProductos();
		localStorage.setItem("articulo", JSON.stringify(lista));
		productosServicios.actualizarSecciones();
				
	} catch(erro) {
		console.log(erro);
	}
}

render();