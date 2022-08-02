

const listaProductos = () => 
	fetch("./datos/articulos.json")
	.then(respuesta => respuesta.json());
	
	
export const productosServicios = {
	listaProductos,
}