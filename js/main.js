
import { productosServicios }  from "./productosServicios.js";
import { DOMServicios }  from "./DOMServicios.js";

window.onload = async() =>{

    try {
		let lista = await productosServicios.cargarProductos();
		localStorage.setItem("articulo", JSON.stringify(lista));
		DOMServicios.actualizarSecciones();
				
	} catch(erro) {
		console.log(erro);
	}

};