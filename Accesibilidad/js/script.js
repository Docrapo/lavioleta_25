let inputFocus = document.querySelector(".lletra");
const recarga = document.querySelector(".reset-btn");
recarga.setAttribute("onclick", "location.reload()");
let fontSize = 1;
const root = document.querySelector(":root");
const buttonCss = document.querySelector("button.reset-btn");
const svgCss = document.querySelectorAll("svg.access");
const textAccess = document.querySelector(".access2");
console.log(svgCss);
function fontBigger() {
  if (fontSize != 2.4) {
    fontSize = fontSize + 0.2;
    root.style.setProperty(`--fuenteDefault`, `${fontSize}rem`);
  }
}
function fontSmaller() {
  if (fontSize > 0.6) {
    fontSize = fontSize - 0.2;
    root.style.setProperty(`--fuenteDefault`, `${fontSize}rem`);
  }
}
let k = 0;
let p = 0;
function contrasteAcces() {
  if (k == 0) {
    root.style.setProperty(`--colorfondo`, `#272324`);
    root.style.setProperty(`--fuenteColor`, `#f8e8cb`);
    root.style.setProperty(`--borderColor`, `#f8e8cb`);
    root.style.setProperty(`--borderSize`, `4px`);
    root.style.setProperty(`--outlineCont`, `3px`);
    buttonCss.style.setProperty(`text-transform`, `uppercase`);
    buttonCss.style.setProperty(`background-color`, `#f8e8cb`);
    buttonCss.style.setProperty(
      `padding`,
      `calc(var(--fuenteDefault) * 0.5) calc(var(--fuenteDefault) * 1.8)`
    );
    buttonCss.style.setProperty(`font-weight`, `800`);
    textAccess.style.setProperty(`color`, `#f8e8cb`);
    for (p = 0; p < svgCss.length; p++) {
      svgCss[p].style.setProperty(`fill`, `#f8e8cb`);
    }
    k = 1;
  } else {
    root.style.setProperty(`--colorfondo`, `#f8e8cb`);
    root.style.setProperty(`--fuenteColor`, `#45383a`);
    root.style.setProperty(`--borderColor`, `#black`);
    root.style.setProperty(`--borderSize`, `1px`);
    root.style.setProperty(`--outlineCont`, `0px`);
    buttonCss.style.setProperty(`text-transform`, `capitalize`);
    buttonCss.style.setProperty(`background-color`, `#a79d9e`);
    buttonCss.style.setProperty(
      `padding`,
      `calc(var(--fuenteDefault) * 0.3) calc(var(--fuenteDefault) * 1.5)`
    );
    buttonCss.style.setProperty(`font-weight`, `500`);
    textAccess.style.setProperty(`color`, `black`);
    for (p = 0; p < svgCss.length; p++) {
      svgCss[p].style.setProperty(`fill`, `black`);
    }
    k = 0;
  }
}
const botonMas = document.querySelector("#biggerText");
botonMas.onclick = fontBigger;
const botonMenos = document.querySelector("#smallerText");
botonMenos.onclick = fontSmaller;
const botonContrast = document.querySelector("#contrastColor");
botonContrast.onclick = contrasteAcces;

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
  let pattern = /^[a-zA-Z]$/;
  let test = event.key.match(pattern);
  if (test) {
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
  }
};

document.addEventListener("keyup", revisaLetra);
