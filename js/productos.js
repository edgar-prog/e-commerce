
import { loadJSON, showData }  from "./loadJSON.js";

window.addEventListener('load', (event) => {
    loadJSON("./datos/tools.json",showData, ".herraminetas__cards", false);
	/* loadJSON("./datos/semiconductores.json",showData, ".semiconductores__cards", false); */
	loadJSON("./datos/boards.json",showData, ".boards__cards", false);
});

/* let input_element = document.querySelector(".input");

input_element.addEventListener("keyup", () => {
    input_element.setAttribute("value", input_element.value);
}) */