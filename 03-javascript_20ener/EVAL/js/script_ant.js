let inputFocus = document.querySelector(".lletra");
setTimeout(function () {
  inputFocus.focus();
}, 1);
document.onmousedown = (e) => {
  e.preventDefault();
};
inputFocus.value = "";
let contKey = 0;

let largo = listado.length;
/* console.log(largo); */
let randomPalabra = Math.floor(Math.random() * largo);
/* console.log(randomPalabra);
console.log(listado[randomPalabra].palabra); */
const palabraDescubrir = listado[randomPalabra].palabra;
const pistaPalabra = listado[randomPalabra].pista;
/* console.log(pistaPalabra);
console.log(palabraDescubrir.length); */
const palabraRecorre = [palabraDescubrir.length];
let muestraCards = document.querySelector(".inputs");
for (let u = 0; u < palabraDescubrir.length; u++) {
  palabraRecorre[u] = palabraDescubrir.substring(u, u + 1);
  let card = document.createElement("div");
  let contenido = document.createTextNode(palabraRecorre[u]);
  card.appendChild(contenido);
  card.classList.add("cards");
  card.id = `letra_${u}`;
  muestraCards.appendChild(card);
}
let pistaHtml = document.querySelector(".pista");
pistaHtml.innerHTML = pistaPalabra;
/* const revisaLetras = (event) => {
  switch (event.target.id) {
  }
}; */

//let letraEscrita = document.querySelector(".lletra").value;
const letrasErroneas = [];
const muestraErrorLet = document.querySelector(".letrasErroneas");
const revisaLetra = () => {
  let letraEscrita = document.querySelector(".lletra").value;
  //letraEscrita = document.querySelector(".lletra").value;
  for (let t = 0; t < palabraRecorre.length; t++) {
    if (letraEscrita === palabraRecorre[t]) {
      /* console.log(letraEscrita);
        console.log(palabraRecorre[t]);
        console.log(palabraRecorre); */
      let prueba = document.querySelector(`#letra_${t}`);
      prueba.classList.remove("cards");
      prueba.classList.add("ocultardiv");

      /* console.log(prueba); */
    }
  }
  for (let g = 0; g < palabraRecorre.length; g++) {
    if (letraEscrita !== palabraRecorre[g]) {
      console.log(letraEscrita);
      muestraErrorLet.innerHTML = letraEscrita;
    }
  }
  inputFocus.value = "";
};

/* console.log(palabraRecorre); */
/* let botonRespuesta = document.querySelector(".reset-btn");
const mostrarTexto = () => {
  letraEscrita = document.querySelector(".lletra").value;
  document.querySelector(".mostra").innerHTML = letraEscrita;
};
botonRespuesta.onclick = mostrarTexto; */
document.addEventListener("keyup", revisaLetra);
