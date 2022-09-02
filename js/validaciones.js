

const expresiones = {
	correo : /^([a-z0-9_\.]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
	password : /^[a-zA-Z0-9_-]{6,18}$/,
	url: /^(ftp|http|https):\/\/[^ "]+$/, 
	categoria: /(boards|herramienta|semiconductor){1}$/, 
	nombre: /\w+/, 
	precio: /^[0-9]+(.[0-9]+)?$/,
}

export const campo = {
	correo: false,
	password: false,
	url : false,
	categoria : false,
	nombre : false,
	precio : false
}

export const producto = {
	archivo : "",
	categoria : "",
	nombre : "",
	precio : "",
	descripcion : "",
	id : "",
	cantidad : 1
}

export const validarFormulario = (event) => {
	switch(event.target.name) {
		case "url":
			if(expresiones.url.test(event.target.value)) {
				document.querySelector("#url .error").style.display = "none";
				campo.url = true;
				producto.archivo = event.target.value;
			}else {
				document.querySelector("#url .error").style.display = "block";
			}
		break;
		case "categoria":
			if(expresiones.categoria.test(event.target.value)) {
				document.querySelector("#categoria .error").style.display = "none";
				campo.categoria = true;
				producto.categoria = event.target.value;
			}else {
				document.querySelector("#categoria .error").style.display = "block";
			}
		break;
		case "nombre":
			if(expresiones.nombre.test(event.target.value)) {
				document.querySelector("#nombre .error").style.display = "none";
				campo.nombre = true;
				producto.nombre = event.target.value;
			}else {
				document.querySelector("#nombre .error").style.display = "block";
			}
		break;
		case "precio":
			if(expresiones.precio.test(event.target.value)) {
				document.querySelector("#precio .error").style.display = "none";
				campo.precio = true;
				producto.precio = event.target.value;
			}else {
				document.querySelector("#precio .error").style.display = "block";
			}
		break;
		case "descripcion":
			producto.descripcion = event.target.value;
		break;
		
		case "correo":
			if(expresiones.correo.test(event.target.value)) {
				document.getElementById("correo").setCustomValidity("");
				campo.correo = true;
			}else {
				document.getElementById("correo").setCustomValidity("El correo tiene la forma usario@dominio");
			}
		break;
		case "password":
			if(expresiones.password.test(event.target.value)) {
				document.getElementById("password").setCustomValidity("");
				campo.password = true;
			}else {
				document.getElementById("password").setCustomValidity("La contraseña debe tener al entre 6 y 18 se permiten minusculas, mayusculas, digitos y caracteres - _");
			}
		break;
	}
}

const inputsLogin = document.querySelectorAll("#form-login input");
inputsLogin.forEach((input)=>{
	input.addEventListener("keyup",validarFormulario);
	/* input.addEventListener("blur",validarFormulario); */
});

const inputsProducto = document.querySelectorAll("#form-producto input");	
inputsProducto.forEach((input)=>{
	input.addEventListener("keyup",validarFormulario);
	/* input.addEventListener("blur",validarFormulario); */
});


const inputsUpdate = document.querySelectorAll("#form-udpate input");	
inputsUpdate.forEach((input)=>{
	input.addEventListener("keyup",validarFormulario);
	/* input.addEventListener("blur",validarFormulario); */
});
