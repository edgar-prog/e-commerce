
let btnLogin = document.querySelector(".header__login");
let btnAcceso = document.querySelector(".login__in");

const banner = document.querySelector(".container__banner");
const productos = document.querySelector(".container__productos");

btnLogin.addEventListener("click", desaparece);
btnLogin.addEventListener("dblclick", aparece);

btnAcceso.addEventListener("click", desaparece);


function desaparece() {
  console.log("entre");
  banner.classList.add("section_hide");
  productos.classList.add("section_hide");
}

function aparece() {
  console.log("entre");
  banner.classList.remove("section_hide");
  productos.classList.remove("section_hide");
}

