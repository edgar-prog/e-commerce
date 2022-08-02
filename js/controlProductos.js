
import { productosServicios }  from "./administradorJSON.js";
import { crearTarjetaHTML }  from "./tarjeta.js";

const boards = document.querySelector("[data-boards]");
const tools = document.querySelector("[data-tools]");
const semiconductores = document.querySelector("[data-semiconductores]");

const render = async() => {
	
	let anchoPantalla = screen.width;
	
	let tarjetasBoards = 4;
	let tarjetasTools = 4;
	let tarjetasSemiconductores = 4;
	
	if(anchoPantalla >= 992) {
		tarjetasBoards = 5;
		tarjetasTools = 5;
		tarjetasSemiconductores = 5;
	} 
		
	if(anchoPantalla >= 1440) {
		tarjetasBoards = 6;
		tarjetasTools = 6;
		tarjetasSemiconductores = 6;
	} 
	
	try {
		const lista = await productosServicios.listaProductos();
		
		localStorage.setItem("articulo", JSON.stringify(lista));
		
		lista.articulo.forEach( dato => {

			if((tarjetasBoards > 0) && (dato.categoria=="boards")) { 
				boards.appendChild(crearTarjetaHTML(dato, false));
				tarjetasBoards--;
			}
			if((tarjetasTools > 0) && (dato.categoria=="herramienta")) {
				tools.appendChild(crearTarjetaHTML(dato, false));
				tarjetasTools--;
			}
			if((tarjetasSemiconductores > 0) && (dato.categoria=="semiconductor")) { 
				semiconductores.appendChild(crearTarjetaHTML(dato, false));
				tarjetasSemiconductores--;
			}
		});
	} catch(erro) {
		console.log(erro);
	}
}

render();