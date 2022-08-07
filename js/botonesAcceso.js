
import { productosServicios }  from "./administradorJSON.js";
import { render_allProductos }  from "./controlProductos.js";
import { campo, producto }  from "./validaciones.js";

/*control de las secciones que se utilizan en la plataforma*/
const banner = document.querySelector(".container__banner");
//selecciona la seccion con algunos de los productos 
const productos = document.querySelector(".container__productos");
//selecciona la seccion que muestra el formulario login
const login = document.querySelector(".container__login");
//selecciona la seccion que muestra todos los productos sin orden especifico
const all_productos = document.querySelector(".container__all-productos");
//selecciona la seccion que muestra el formulario para agregar producto
const add_productos = document.querySelector(".container__add-producto");

//interaccion con el boton login
const btnLogin = document.querySelector("#login");
//esconde las secciones y solo muestra el formulario login y cambia de boton en el head
btnLogin.addEventListener("click", () =>{
	btnLogin.style.display = "none";
	banner.style.display = "none";
	productos.style.display = "none";
	btnBack.style.display = "block";
	login.style.display = "block";
});

//interaccion con el botn de regreso
const btnBack = document.querySelector("#back");
//muestra todo el contenido de productos y el banner
btnBack.addEventListener("click", () =>{
	btnBack.style.display = "none";
	login.style.display = "none";
	btnLogin.style.display = "block";
	banner.style.display = "block";
	productos.style.display = "block";
});

const btnAddProducto = document.querySelector(".cards__agregar");
btnAddProducto.addEventListener("click",() => {
	btnLogout.style.display = "none";
	btnMenu.style.display = "block";
	banner.style.display = "none";
	productos.style.display = "none";
	all_productos.style.display = "none";
	add_productos.style.display = "block";
});

const btnMenu = document.querySelector("#menu");
btnMenu.addEventListener("click", () => {
	add_productos.style.display = "none";
	btnMenu.style.display = "none";
	btnLogout.style.display = "block";
	all_productos.style.display = "block";
});

const btnLogout = document.querySelector("#logout");
btnLogout.addEventListener("click",() => {
	btnLogout.style.display = "none";
	btnLogin.style.display = "block";
	banner.style.display = "block";
	productos.style.display = "block";
	all_productos.style.display = "none";
	//se elimnan los datos tarjetas deñ DOM
	productosServicios.borrarAllSeccion("[data-boards]");
	productosServicios.borrarAllSeccion("[data-tools]");
	productosServicios.borrarAllSeccion("[data-semiconductores]");
	//Se actualizan las categorias a mostrar
	productosServicios.actualizarSecciones();
});


const formularioLogin = document.getElementById("form-login");
formularioLogin.addEventListener("submit",(event)=>{
	event.preventDefault()
	if(campo.correo && campo.password) {
		
		formularioLogin.reset();
		
		login.style.display = "none";
		btnBack.style.display = "none";
		btnLogout.style.display = "block";
		all_productos.style.display = "block";
		
		//se llena la seccion con todos los articulos sin clasificacion
		render_allProductos();
		
		//se selecciona todos los iconos de basurero para poder eliminar el articulo
		const borrarProducto = document.querySelectorAll(".fa-trash");
		//recorrido de todos os elementos seleccionados
		borrarProducto.forEach(	articulo => {
			//se e agrega un evento a cada icono seleccionado
			articulo.addEventListener('click', (event) => {
			//se obtiene el id del elemento padre de la tarjeta	
			const idProducto = event.path[3].getAttribute("id");
			//se manda el id para borrarlo del localStorage
			productosServicios.borrarProducto(idProducto);
			//se eliminacion del nodo hijo
			event.path[3].remove();
			});
		});
	}
});


const formularioProducto = document.getElementById("form-producto");
formularioProducto.addEventListener("submit",(event)=>{
	event.preventDefault();
	if(campo.url && campo.categoria 
	&& campo.nombre && campo.precio) {
		producto.id = uuid.v4();
		producto.cantidad = 1;
		productosServicios.agregarProducto(producto);
		document.querySelector(".exito-general").style.display = "block";
		setTimeout(() => {
			document.querySelector(".exito-general").style.display = "none";
			formularioProducto.reset();
		}, 4000);
	}
});






