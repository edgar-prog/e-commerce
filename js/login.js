

import { loadJSON, showData }  from "./loadJSON.js";

let btnLogin = document.querySelector(".header__login");
let btnAcceso = document.querySelector("#login__in");
let btnAddProducto = document.querySelector(".cards__agregar");

const banner = document.querySelector(".container__banner");
const productos = document.querySelector(".container__productos");
const login = document.querySelector(".container__login");
const all_productos = document.querySelector(".container__all-productos");
const add_productos = document.querySelector(".container__add-producto");


btnLogin.addEventListener("click", () =>{
	banner.style.display = "none";
	productos.style.display = "none";
	login.style.display = "block";
	btnLogin.style.display = "none";
});

btnAcceso.addEventListener("click", () => {
	login.style.display = "none";
	all_productos.style.display = "block";
	loadJSON("./datos/boards.json",showData, ".cards__all-stock", true);
	loadJSON("./datos/semiconductores.json",showData, ".cards__all-stock", true);
	loadJSON("./datos/tools.json",showData, ".cards__all-stock", true);
});

btnAddProducto.addEventListener("click",() => {
	console.log("formulario");
	banner.style.display = "none";
	productos.style.display = "none";
	all_productos.style.display = "none";
	add_productos.style.display = "block";
});

