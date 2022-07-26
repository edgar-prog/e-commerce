

import { loadJSON, showData }  from "./loadJSON.js";

let btnLogin = document.querySelector("#login");
let btnBack = document.querySelector("#back");
let btnLogout = document.querySelector("#logout");
let btnMenu = document.querySelector("#menu");
let btnAcceso = document.querySelector("#login__in");
let btnAddProducto = document.querySelector(".cards__agregar");


const banner = document.querySelector(".container__banner");
const productos = document.querySelector(".container__productos");
const login = document.querySelector(".container__login");
const all_productos = document.querySelector(".container__all-productos");
const add_productos = document.querySelector(".container__add-producto");


btnLogin.addEventListener("click", () =>{
	btnLogin.style.display = "none";
	banner.style.display = "none";
	productos.style.display = "none";
	btnBack.style.display = "block";
	login.style.display = "block";
});

btnBack.addEventListener("click", () =>{
	btnBack.style.display = "none";
	login.style.display = "none";
	btnLogin.style.display = "block";
	banner.style.display = "block";
	productos.style.display = "block";
});


btnAcceso.addEventListener("click", () => {
	login.style.display = "none";
	btnBack.style.display = "none";
	btnLogout.style.display = "block";
	all_productos.style.display = "block";
	if(document.querySelector(".cards__all-stock").childNodes.length == 1) {
		loadJSON("./datos/boards.json",showData, ".cards__all-stock", true);
		loadJSON("./datos/semiconductores.json",showData, ".cards__all-stock", true);
		loadJSON("./datos/tools.json",showData, ".cards__all-stock", true);
	}
});

btnAddProducto.addEventListener("click",() => {
	btnLogout.style.display = "none";
	btnMenu.style.display = "block";
	banner.style.display = "none";
	productos.style.display = "none";
	all_productos.style.display = "none";
	add_productos.style.display = "block";
});

btnMenu.addEventListener("click", () => {
	add_productos.style.display = "none";
	btnMenu.style.display = "none";
	btnLogout.style.display = "block";
	all_productos.style.display = "block";
});

btnLogout.addEventListener("click",() => {
	btnLogout.style.display = "none";
	btnLogin.style.display = "block";
	banner.style.display = "block";
	productos.style.display = "block";
	all_productos.style.display = "none";
});