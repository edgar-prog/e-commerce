
import { crearTarjetaHTML }  from "./tarjeta.js";

export function loadJSON(path, showData, classIdName, editable) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
		showData(JSON.parse(xhr.responseText), classIdName, editable);
	}
  }
}

export function showData(dataJSON, classIdName, editable) {
	let divAddProducto = document.querySelector(classIdName);
	let anchoPantalla = screen.width;
	let numeroTarjetas = 4;
	
	if(anchoPantalla >= 992) {
		numeroTarjetas = 5;
	} 
		
	if(anchoPantalla >= 1440) {
		numeroTarjetas = 6;
	} 
	
	for(let producto of dataJSON.articulo){
		if((numeroTarjetas == 0) && (!editable)) {
				break;
		}
		else {
			//insercion de las tarjetas a mostrar
			divAddProducto.appendChild(crearTarjetaHTML(producto, editable));
			numeroTarjetas--;
		}
		
	}
}