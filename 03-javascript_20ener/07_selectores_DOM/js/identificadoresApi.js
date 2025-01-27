/* const principalcons = document.getElementById("principal"); */
const principalcons = document.querySelector("#principal");
/* const parrafos = document.getElementsByTagName("p"); */
const parrafos = document.querySelectorAll("p");
const largoParrafos = parrafos.length;
console.log(largoParrafos);
/* const clasesPepe2 = document.getElementsByClassName("pepe2"); */
const clasesPepe2 = document.querySelectorAll(".pepe2");
const largoclassPepe2 = clasesPepe2.length; // IMPORTANTE saber la cantidad de elementos que hay en el HTML si no el for para recorrer "for (let i = 0; i < largoclassPepe2; i++)" me causará error
console.log(largoclassPepe2);
const pid = document.querySelector("#principal p#p1");

const ejecutar = () => {
  principalcons.onclick = adeu;
  for (let i = 0; i < largoParrafos; i++) {
    parrafos[i].onclick = hola;
  }
  parrafos[2].onclick = bgcolor; // NO LLEVA "( )" ya que color es una ARROW function
  for (let i = 0; i < largoclassPepe2; i++) {
    clasesPepe2[i].onmouseover = color;
  }
  pid.onclick = paraId;
  /* document.querySelector(".pepe2").onmouseover = color; */
  document.querySelector("button").onmouseover = foco;
  document.querySelector("button").onkeyup = detectar_tecla;
};

const saludo = () => {
  alert("Hola");
};

const adeu = () => {
  alert("ADEEEEEUU!!!");
};

const bgcolor = () => {
  document.querySelector("#principal").style.backgroundColor = "red";
};
const color = () => {
  document.querySelector("#principal").style.color = "grey";
};

const hola = () => {
  alert("Holaaaaaa!");
};

const paraId = () => {
  alert("Has clickado en un Id");
};

const foco = () => {
  document.querySelector("button").focus();
};
const detectar_tecla = (g) => {
  g.keyCode == 13
    ? alert(`Has presionado la tecla "Enter"`)
    : alert(`No has cliqueado sobre "Enter"`);
};
/* document.getElementById("principal").onclick = saludo; */
window.onload = ejecutar;
/* CON ESTO EJECUTO la constante que contiene una funcion llamada "ejecutar" y hace la accion que incluye, acción que no se podría ejectuar antes de declarar las constantes "saludo" y "adeu", es decir ese "document.getElementById("principal").onclick = adeu;" deberia ira bajo las constantes "saludo" y "adeu" pero como lo metí en una función y la cargué luego con windows.onload, entonces si puede escribirse antes. LA ARROW FUNCTION SOLO PUEDE EJECTUARSE UNA VEZ QUE SE HA ESCRITO, NO ANTES (a diferentecia de una funcion normal)*/
