
import { crearTarjetaHTML, showInfo }  from "./tarjeta.js";
import { productosServicios }  from "./productosServicios.js";
import { validarFormulario } from "./validaciones.js";

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

const actualizarSecciones = () => {
	let listaArticulos = JSON.parse(localStorage.getItem("articulo"));
	listaArticulos.articulo.forEach( dato => {
		insertarProductoSeccion(dato);
	});
	allListenerIconVer();
}

const insertarAllProductos = () => {
	
	borrarAllSeccion("[data-all_productos]");
	let todosLosProductos = document.querySelector("[data-all_productos]");
	let listaArticulos = JSON.parse(localStorage.getItem("articulo"));

	listaArticulos.articulo.forEach( dato => {
		todosLosProductos.appendChild(crearTarjetaHTML(dato, true));
	});
	
	allListenerIconTrash();
	allListenerIconPen();
}

const allListenerIconVer = () => {
	const iconsAllVer =  document.querySelectorAll(".container__productos .fa-eye");
	iconsAllVer.forEach(node => {
		//se e agrega un evento a cada icono seleccionado
		node.addEventListener('click', (event) => {
			let arrayPath = event.composedPath();
			let idProducto = arrayPath[2].getAttribute("id");
			let mostrarCard = showInfo(productosServicios.buscarProducto(idProducto));
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

const allListenerIconTrash = () => {
	//se selecciona todos los iconos de basurero para poder eliminar el articulo
	const borrarProducto = document.querySelectorAll(".fa-trash");
	//recorrido de todos os elementos seleccionados
	borrarProducto.forEach(	articulo => {
	//se e agrega un evento a cada icono seleccionado
		articulo.addEventListener('click', (event) => {
			let arrayPath = event.composedPath();
			//se obtiene el id del elemento padre de la tarjeta	
			let idProducto = arrayPath[3].getAttribute("id");
			//se manda el id para borrarlo del localStorage
			productosServicios.borrarProducto(idProducto);
			//se eliminacion del nodo hijo
			arrayPath[3].remove(); 
		});
	});	
}

const allListenerIconPen = () => {
	//se selecciona todos los iconos de lapiz para poder editar el articulo
	let editarProducto = document.querySelectorAll(".fa-pen");
	//recorrido de todos os elementos seleccionados
	editarProducto.forEach(	articulo => {
	//se e agrega un evento a cada icono seleccionado
		articulo.addEventListener('click', (event) => {
			let arrayPath = event.composedPath();
			//se obtiene el id del elemento padre de la tarjeta	
			let idProducto = arrayPath[3].getAttribute("id");
			//habiliat modo modal del forulario update
			let modalUpdate = document.querySelector(".container__update");
			modalUpdate.classList.add("container__update--show");
			// 
			let formularioUpdate = document.getElementById("form-udpate");
			//obteniendo los datos datos del producto del localStorage
			let datosProducto = productosServicios.buscarProducto(idProducto);
			
			//se rellena el formulario con los datos obtenidos del id
			updateFormulario(datosProducto);
			
			//verificacion del contenido del formulario y el boton enviar
			formularioUpdate.addEventListener("submit",(event)=>{
				event.preventDefault();
				console.log("envio update");
				formularioUpdate.reset();
				modalUpdate.classList.remove("container__update--show");
			});
		});
	});	
}


const updateFormulario = (dato) => {
	let inputsUpdate = document.querySelectorAll('#form-udpate .input');
	inputsUpdate[0].value = dato.archivo;
	inputsUpdate[1].value = dato.categoria;
	inputsUpdate[2].value = dato.nombre;
	inputsUpdate[3].value = dato.precio;
	inputsUpdate[4].value = dato.descripcion;
	
	inputsUpdate.forEach((input)=>{
		input.addEventListener("keyup",validarFormulario);
		/* input.addEventListener("blur",validarFormulario); */
	});
}

export const DOMServicios = {
	insertarProductoSeccion,
	borrarAllSeccion,
	borrarItemSeccion,
	actualizarSecciones,
	insertarAllProductos
}


