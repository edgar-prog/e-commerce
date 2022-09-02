
import { DOMServicios }  from "./DOMServicios.js";
import { campo, producto }  from "./validaciones.js";
import { productosServicios }  from "./productosServicios.js";

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

//interaccion con el llenado del formulario de acceso
const formularioLogin = document.getElementById("form-login");
formularioLogin.addEventListener("submit",(event)=>{
	event.preventDefault();
	if(campo.correo && campo.password) {
		//se limpian el formulario login
		formularioLogin.reset();
		//se desabilitan as secciones y botones
		login.style.display = "none";
		btnBack.style.display = "none";
		btnLogout.style.display = "block";
		all_productos.style.display = "block";
		//se llena la seccion con todos los articulos sin clasificacion
		DOMServicios.insertarAllProductos();
	}
});

//boton para retornar al inicio, mostrando las secciones de productos y e banner
const btnLogout = document.querySelector("#logout");
btnLogout.addEventListener("click",() => {
	btnLogout.style.display = "none";
	btnLogin.style.display = "block";
	banner.style.display = "block";
	productos.style.display = "block";
	all_productos.style.display = "none";
	//se elimnan los datos tarjetas deñ DOM
	DOMServicios.borrarAllSeccion("[data-boards]");
	DOMServicios.borrarAllSeccion("[data-tools]");
	DOMServicios.borrarAllSeccion("[data-semiconductores]");
	//Se actualizan las categorias a mostrar
	DOMServicios.actualizarSecciones();
});

//interaccion con el boton de acceso al formulario del producto ha agregar
const btnAddProducto = document.querySelector(".cards__agregar");
btnAddProducto.addEventListener("click",() => {
	btnLogout.style.display = "none";
	btnMenu.style.display = "block";
	banner.style.display = "none";
	productos.style.display = "none";
	all_productos.style.display = "none";
	add_productos.style.display = "block";
});

//boton que permite retornar a a seccion donde se muestran todos los productos
const btnMenu = document.querySelector("#menu");
btnMenu.addEventListener("click", () => {
	add_productos.style.display = "none";
	btnMenu.style.display = "none";
	btnLogout.style.display = "block";
	all_productos.style.display = "block";
	//se llena la seccion con todos los articulos sin clasificacion
	DOMServicios.insertarAllProductos();
});

//formulario para agregar e nuevo producto
const formularioProducto = document.getElementById("form-producto");
formularioProducto.addEventListener("submit",(event)=>{
	event.preventDefault();
	console.log("enviar");
	//se verifica que los campos cumplam con lo requerido
	if(campo.url && campo.categoria 
	&& campo.nombre && campo.precio) {
		//se guarda el nuevo dato en el locaStorage
		producto.id = uuid.v4();
		productosServicios.agregarProducto(producto);
		document.querySelector(".exito-general").style.display = "block";
		//se da un tiempo de espera para limpiar el formulario
		setTimeout(() => {
			document.querySelector(".exito-general").style.display = "none";
			formularioProducto.reset();
		}, 3000);
	}
});

const formularioContacto = document.getElementById("form-contacto");
formularioContacto.addEventListener("submit", (event)=>{
	event.preventDefault();
	formularioContacto.reset();
});