let inputFocus = document.querySelector(".lletra");
const recarga = document.querySelector(".reset-btn");
recarga.setAttribute("onclick", "location.reload()");
setTimeout(function () {
  inputFocus.focus();
}, 1);
document.onmousedown = (e) => {
  e.preventDefault();
};
inputFocus.value = "";
let contKey = 0;
const pistaPalabra = listado[randomPalabra].pista;
let mensajeFinal = Math.floor(Math.random() * msg.length);
const mensajeErr = msgError[mensajeFinal];
const mensajeWin = msg[mensajeFinal];
const palabraRecorre = [palabra.length];
let muestraCards = document.querySelector(".inputs");
for (let u = 0; u < palabra.length; u++) {
  palabraRecorre[u] = palabra.substring(u, u + 1);
  let card = document.createElement("div");
  let contenido = document.createTextNode(palabraRecorre[u]);
  card.appendChild(contenido);
  card.classList.add("cards");
  card.id = `letra_${u}`;
  muestraCards.appendChild(card);
}
let pistaHtml = document.querySelector(".pista");
pistaHtml.innerHTML = pistaPalabra;
let letraEscrita = document.querySelector(".lletra").value;
let maxIntentos;
let contadorWin = [];
const letrasErroneas = [];
const muestraErrorLet = document.querySelector(".letrasErroneas span");
const muestraRestantes = document.querySelector(".restantes span");
const muestraResultado = document.querySelector(".pista");
if (palabra.length >= 7) maxIntentos = 8;
else maxIntentos = 6;
const revisaLetra = (event) => {
  if (maxIntentos != 0) {
    const letraEscrita = event.key.toLowerCase();
    let posiciones = [];
    palabraRecorre.forEach((palabraRecorre, index) => {
      if (palabraRecorre === letraEscrita) {
        posiciones.push(index);
        contadorWin.push(index);
        let prueba = document.querySelector(`#letra_${index}`);
        prueba.classList.remove("cards");
        prueba.classList.add("ocultardiv");
        console.log(contadorWin);
      }
    });
    if (palabraRecorre.length == contadorWin.length) {
      muestraResultado.innerHTML = mensajeWin;
      return;
    }
    if (posiciones.length > 0) {
    } else {
      if (!letrasErroneas.includes(letraEscrita)) {
        letrasErroneas.push(letraEscrita);
      }
      muestraErrorLet.innerHTML = ` ${letrasErroneas.join(", ")}`;
      maxIntentos--;
      muestraRestantes.innerHTML = maxIntentos;
    }
    inputFocus.value = "";
  }
  if (maxIntentos === 0) muestraResultado.innerHTML = mensajeErr;
  return;
};
document.addEventListener("keyup", revisaLetra);
