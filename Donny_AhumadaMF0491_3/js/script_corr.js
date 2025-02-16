let clave, valor, tema;
if (localStorage.getItem(localStorage.key(0)) === null) {
  /* console.log(localStorage.getItem(localStorage.key(0))); */
  clave = "tema";
  valor = "default";
  localStorage.setItem(clave, valor);
  /* console.log(localStorage.getItem(localStorage.key(0))); */
  document.body.classList.add("default");
} else {
  tema = localStorage.getItem(localStorage.key(0));
  document.body.classList.toggle(tema);
}
const contrasteActiva = () => {
  if (localStorage.getItem(localStorage.key(0)) === "default") {
    /* console.log(localStorage.key(0)); */
    valor = "contraste";
    localStorage.setItem(localStorage.key(0), valor);
    tema = localStorage.getItem(localStorage.key(0));
    document.body.classList.replace("default", tema);
  } else if (localStorage.getItem(localStorage.key(0)) === "contraste") {
    /* console.log(localStorage.key(0)); */
    valor = "default";
    localStorage.setItem(localStorage.key(0), valor);
    tema = localStorage.getItem(localStorage.key(0));
    document.body.classList.replace("contraste", tema);
  }
};
document.body.classList.add(tema);
let fontSize = 1;
const root = document.querySelector(":root");
const fontBigger = () => {
  if (fontSize != 2.4) {
    fontSize = fontSize + 0.2;
    root.style.setProperty(`--fuenteDefault`, `${fontSize}rem`);
  }
};
const fontSmaller = () => {
  if (fontSize > 1) {
    fontSize = fontSize - 0.2;
    root.style.setProperty(`--fuenteDefault`, `${fontSize}rem`);
  }
};
const botonContra = document.querySelector("#contrastColor");
botonContra.onclick = contrasteActiva;
botonContra.onkeypress = contrasteActiva;
const botonMas = document.querySelector("#biggerText");
botonMas.onclick = fontBigger;
botonMas.onkeypress = fontBigger;
const botonMenos = document.querySelector("#smallerText");
botonMenos.onclick = fontSmaller;
botonMenos.onkeypress = fontSmaller;

// Variables número
let numeroA, numeroB, inputNumero, contadorClick, nroCorrecto;
let catchNumA, catchNumB;
// variables String
let nombre = "";
let textoA = `<p class="text_main">Antes de empezar por favor dinos tu nombre</p>`;
// Captura de HTML elements
let textosIntrod = document.querySelector("#textosIntro");
let entradas = document.querySelector("#entradas");
let entradas2 = document.querySelector("#entradas2");
let entradas2a = document.querySelector("#entradas2a");
let entradas3 = document.querySelector("#entradas3");
let entradas3a = document.querySelector("#entradas3a");
//Escritura HTML
textosIntrod.innerHTML = textoA;
entradas.innerHTML = `<div><input type="text" id="nombreHTML" /><button id="buttonA">Continuar</button><div>`;

let catchNombre = document.querySelector("#nombreHTML");
let botonA = document.querySelector("#buttonA");
const capturarNombre = () => {
  nombre = catchNombre.value;
  if (nombre.match(/[a-zA-Z]/)) {
    validName = true;
  } else {
    entradas2.innerHTML = `<p class="msg_error">Nombre no válido, vuelve a probar teniendo en cuenta que no puedes introducir carácteres numéricos.</p>`;
    validName = false;
  }
  if (validName == true) {
    let textoB = `<p class="text_main">Bienvenid@ ${nombre}. El juego consiste en lo siguiente: Tendrás que indicarnos un número del 1 al 10, después otro del 30 al 40 y en ese momento el juego seleccionará de manera aleatoria otro dentro del rango comprendido entre las dos cifras que has introducido. Tendrás 5 intentos para adivinarlo.</p>`;
    textosIntrod.innerHTML = textoB;
    capturarNumA();
  }
};
const capturarNumA = () => {
  entradas2.innerHTML = "";
  entradas.innerHTML = `<p class="msg_input">Escribe un número entre el 1 y el 10:<br/><input type="text" id="numeroAhtml" /><button id="buttonB1">Continuar</button></p>`;
  catchNumA = document.querySelector("#numeroAhtml");
  const botonB1 = document.querySelector("#buttonB1");
  botonB1.addEventListener("click", () => {
    if (parseInt(catchNumA.value) <= 10 && parseInt(catchNumA.value) > 0) {
      numeroA = catchNumA.value;
      /* console.log(numeroA); */
      entradas2a.innerHTML = `<p class="msg_correcto">Tu primer número es el: ${numeroA}`;
      capturarNumB();
    } else {
      catchNumA.value = "";
      entradas2.innerHTML = `<p class="msg_error">Lo siento. Has introducido un dato no válido</p>`;
    }
  });
};
const capturarNumB = () => {
  entradas2.innerHTML = `<p class="msg_input">Escribe un número entre el 30 y el 40:<br/><input type="text" id="numeroBhtml" /><button id="buttonB2">Continuar</button></p>`;
  catchNumB = document.querySelector("#numeroBhtml");
  const botonB2 = document.querySelector("#buttonB2");
  botonB2.addEventListener("click", () => {
    /* console.log(parseInt(catchNumB.value)); */
    if (parseInt(catchNumB.value) >= 30 && parseInt(catchNumB.value) <= 40) {
      numeroB = catchNumB.value;
      nroCorrecto = Math.floor(
        Math.random() * (Math.floor(numeroB) - Math.ceil(numeroA)) +
          Math.ceil(numeroA)
      );
      entradas3.innerHTML = `<p class="msg_correcto">Tu segundo número es el: ${numeroB}`;
      /* console.log(nroCorrecto); */
      setTimeout(() => {
        juega();
      }, 1000);
    } else {
      catchNumB.value = "";
      entradas3.innerHTML = `<p class="msg_error">Lo siento. Has introducido un dato no válido</p>`;
    }
  });
};
botonA.addEventListener("click", capturarNombre);

contadorClick = 0;
const juega = () => {
  textosIntrod.innerHTML = `<p class="text_main">${nombre}, tus números son el ${numeroA} y el ${numeroB}.<br /> Adivina el número dentro de ese rango que ha pensado el juego de manera aleatoria.</p>`;
  entradas.innerHTML = "";
  entradas2.innerHTML = "";
  entradas2a.innerHTML = "";
  entradas3.innerHTML = "";
  let contenJuego = document.createElement("div");
  contenJuego.id = `contenedor_juego`;
  entradas.appendChild(contenJuego);
  let divJuego = document.querySelector("#contenedor_juego");
  numeroA = Number(numeroA);
  numeroB = Number(numeroB);
  for (let u = numeroA; u <= numeroB; u++) {
    let card = document.createElement("button");
    let contenido = document.createTextNode(u);
    card.appendChild(contenido);
    card.id = `num_${u}`;
    card.className = `boton_juego`;
    /* console.log(card.id); */
    divJuego.appendChild(card);
    card.addEventListener("click", (e) => {
      const botones = document.querySelectorAll(".boton_juego");
      if (contadorClick > 5) {
        return;
      }
      if (nroCorrecto < u) {
        entradas2.innerHTML = `<p class="msg_pista">El numero buscado es menor al ingresado. Este es tu intento ${
          contadorClick + 1
        } de 5</p>`;
      } else if (nroCorrecto > u) {
        entradas2.innerHTML = `<p class="msg_pista">El numero buscado es mayor al ingresado  Este es tu intento ${
          contadorClick + 1
        } de 5</p>`;
      }
      contadorClick = contadorClick + 1;
      /* console.log(contadorClick); */
      e.target.disabled = true;
      let mensajeFin = `<div class="msg_reiniciar"><p>¿Te gustaría volver a jugar?</p><div><button id="buttonC1">REINICIAR</button><button id="buttonC2">SALIR</button></div></div>`;
      if (contadorClick === 5 && nroCorrecto != u) {
        entradas2.innerHTML = `<p class="msg_error">Lo sentimos ${nombre}, has agotado tus intentos: <br />El número era el ${nroCorrecto}. ¡Suerte en tu próxima partida!</p>`;
        botones.forEach((boton) => {
          boton.disabled = true;
        });
        entradas3.innerHTML = mensajeFin;
      } else if (nroCorrecto === u) {
        entradas2.innerHTML = `<p class="msg_correcto">Enhorabuena ${nombre}. Has acertado el número (${nroCorrecto}) en tu intento número ${contadorClick}</p>`;
        botones.forEach((boton) => {
          boton.disabled = true;
        });
        entradas3.innerHTML = mensajeFin;
      }
      const botonC1 = document.querySelector("#buttonC1");
      botonC1.addEventListener("click", () => {
        location.reload();
      });
      const botonC2 = document.querySelector("#buttonC2");
      botonC2.addEventListener("click", () => {
        if (confirm("¿Estás seguro de salir?")) {
          close();
        }
      });
    });
  }
};
