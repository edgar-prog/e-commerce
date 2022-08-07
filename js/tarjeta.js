
export function crearTarjetaHTML(datos, editable) {
	const tarjeta = document.createElement("div");
	tarjeta.className = "card__producto";
	tarjeta.appendChild(imagenHTML(datos.archivo, editable));
	tarjeta.appendChild(infoHTML(datos.nombre, datos.precio, datos.cantidad,editable));
	tarjeta.setAttribute("id",datos.id);
	return tarjeta;
}


function imagenHTML(archivo, editable) {
	let divImg = document.createElement("div");
	divImg.className = "container__img";
		
	let imagenProducto = document.createElement("img");
	imagenProducto.className = "img__producto";
	imagenProducto.src = archivo;
	divImg.appendChild(imagenProducto);	
	
	if(editable) {
		imagenProducto.style.opacity = "0.4";
		let divIconos = document.createElement("div");
		divIconos.className = "icons__edit";
		divIconos.appendChild(iconEdit());
		divIconos.appendChild(iconTrash());
		divImg.appendChild(divIconos);
	}
	else {
		imagenProducto.style.opacity = "1.0";
	}
	return divImg;
}
	
function infoHTML(dataNombre, dataPrecio, dataCantidad, editable) {
	let div = document.createElement("div");
	div.className = "container__info-card";
	
	let nombre = document.createElement("p");
	nombre.innerText = dataNombre;
	
	let precio = document.createElement("p");
	precio.innerText = "US $"+dataPrecio;
	
	div.appendChild(nombre);
	div.appendChild(precio);
	
	if(editable) {
		let cantidad = document.createElement("p");
		cantidad.innerText = dataCantidad;
		div.appendChild(cantidad);
	}
	else {
		div.appendChild(iconVer());
	}
	return div;
}
	
const iconVer = () => {
	let iconoVer = document.createElement("i");
	iconoVer.className = "fa-solid fa-eye";
	return iconoVer;
}
	
const iconEdit = () => {
	let iconoEdit = document.createElement("i");
	iconoEdit.className = "fa-solid fa-pen";
	return iconoEdit;
}
	
const iconTrash = () => {
	let iconoBorrar = document.createElement("i");
	iconoBorrar.className = "fa-solid fa-trash";;
	return iconoBorrar;
}