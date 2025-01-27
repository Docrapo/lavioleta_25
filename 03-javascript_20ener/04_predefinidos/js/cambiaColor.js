const rojo = document.getElementById("btn_red");
const verde = document.getElementById("btn_green");
/* IMPORTANTE!!!!!!!!!!!!!!!!!!!!!! CON ADDEVENTLISTENER solo funciona por medio de GETELEMENTBYID */

function cambia(params) {
  alert(`Cambiamos color de fondo a  ${params}`);
  document.body.style.backgroundColor = params;
} /* ESTO CUMPLE la funcion de ambas condiciones, es decir la que están acontinuación de este texto */

/* alert("Cambiamos color de fondo a ROJO");
      document.body.style.backgroundColor = "red"; */

/* alert("Cambiamos color de fondo a VERDE");
      document.body.style.backgroundColor = "green"; */

/* const rojo = document.querySelector("#btn_red");
rojo.onclick = () => {
  document.body.style.backgroundColor = "red";
};

const verde = document.querySelector("#btn_green");
verde.onclick = () => {
  document.body.style.backgroundColor = "green";
}; */

/* document.querySelector("#btn_red").onclick = cambia("red");
document.querySelector("#btn_green").onclick = cambia("green"); */

/* IMPORTANTE!!!!!!!!!!!!!!!!!!!!!! CON ADDEVENTLISTENER solo funciona por medio de GETELEMENTBYID */
rojo.addEventListener("click", () => cambia("red"));
verde.addEventListener("click", () => cambia("green"));
