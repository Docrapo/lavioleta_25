// Variables número
let numeroA, numeroB;
let inputNumero;
let nroIntentos;
let nroCorrecto;

// variables String
let nombre = "";
let textoA = `Antes de empezar por favor dinos tu nombre`;
let textoC = `${nombre}, tus números son el ${numeroA} y el ${numeroB}. Adivina el número dentro de ese rango que ha pensado el juego de manera aleatoria. Este es tu intento ${nroIntentos} de 5`;
let textoB1 = `Escribe un número entre el 1 y el 10:`;
let textoB2 = `Escribe un número entre el 30 y el 40:`;
let textoD = `¿Te gustaría volver a jugar?`;
let errorA1 = `Nombre no válido, vuelve a probar teniendo en cuenta que no puedes introducir carácteres numéricos.`;
let errorB1 = `Lo siento. Has introducido un dato no válido`;
let errorC1 = `Has elegido el ${inputNumero}, tu número es menor que el pensado. Intento ${nroIntentos} de 5`;
let errorC2 = `Lo sentimos ${nombre}, has agotado tus intentos: El número era el ${nroCorrecto}. ¡Suerte en tu próxima partida!`;
let ganaC1 = `Enhorabuena ${nombre}. Has acertado el número (${nroCorrecto}) en tu intento número ${nroIntentos}`;
let validB1 = `Tu primer número es el: ${numeroA}`;
let validB2 = `Tu segundo número es el: ${numeroA}`;

// Capturación de HTML elements
let textosIntrod = document.querySelector("#textosIntro");
let entradas = document.querySelector("#entradas");
let entradas2 = document.querySelector("#entradas2");
//Escritura HTML
let htmlInputA = `<p class="entradaA"><input type="text" id="nombreHTML" /><button id="buttonA">Continuar</button></p>`;
/* let htmlInputB = `<p>Escribe un número entre el 1 y el 10:<br/><input type="text" id="numeroAhtml" /><button id="buttonB1">Continuar</button></p>`; */
textosIntrod.innerHTML = textoA;
entradas.innerHTML = htmlInputA;

let catchNombre = document.querySelector("#nombreHTML");
let botonA = document.querySelector("#buttonA");
const capturarNombre = () => {
  nombre = catchNombre.value;
  validName = true;
  console.log(nombre);
  if (validName == true) {
    let textoB = `Bienvenid@ ${nombre}. El juego consiste en lo siguiente: Tendrás que indicarnos un número del 1 al 10, después otro del 30 al 40 y en ese momento el juego seleccionará de manera aleatoria otro dentro del rango comprendido entre las dos cifras que has introducido. Tendrás 5 intentos para adivinarlo.`;
    textosIntrod.innerHTML = textoB;
    entradas.innerHTML = `<p class="entradaA">Escribe un número entre el 1 y el 10:<br/><input type="text" id="numeroAhtml" /><button id="buttonB1">Continuar</button></p>`;
  }
  const botonB1 = document.querySelector("#buttonB1");
  const catchNumA = document.querySelector("#numeroAhtml");
  const capturarNumA = () => {
    if (catchNumA.value <= 10) {
      numeroA = catchNumA.value;
      console.log(numeroA);
      entradas2.innerHTML = `<p class="entradaA">Escribe un número entre el 30 y el 40:<br/><input type="text" id="numeroBhtml" /><button id="buttonB2">Continuar</button></p>`;
    }
    const botonB2 = document.querySelector("#buttonB2");
    const catchNumB = document.querySelector("#numeroBhtml");
    const capturarNumB = () => {
      if (catchNumB.value >= 30 && catchNumB.value <= 40) {
        numeroB = catchNumB.value;
        console.log(numeroB);
        nroCorrecto = Math.floor(
          Math.random() * (Math.floor(numeroB) - Math.ceil(numeroA)) +
            Math.ceil(numeroA)
        );
        console.log(nroCorrecto);
        juega();
      }
    };
    botonB2.addEventListener("click", capturarNumB);
  };
  botonB1.addEventListener("click", capturarNumA);
};
botonA.addEventListener("click", capturarNombre);

function juega() {
  textosIntrod.innerHTML = `${nombre}, tus números son el ${numeroA} y el ${numeroB}. Adivina el número dentro de ese rango que ha pensado el juego de manera aleatoria. Este es tu intento ${nroIntentos} de 5`;
  entradas.innerHTML = "";
  entradas2.innerHTML = "";

  for (let u = numeroA; u <= numeroB; u++) {
    let card = document.createElement("input");
    card.setAttribute("type", "checkbox");
    let card2 = document.createElement("label");
    let contenido = document.createTextNode(u);
    card2.appendChild(contenido);
    /* card.classList.add("cards"); */
    card.id = `num_${u}`;
    console.log(card.id);
    card2.setAttribute(`for`, `num_${u}`);
    entradas.appendChild(card);
    entradas.appendChild(card2);
    /*     numeroA++; */
  }
  /*   let contadorClick = 0; */
  function sumarClick() {
    let aciertoNro = document.querySelector(`#num_${nroCorrecto}`);
    if (aciertoNro.checked === true) {
      /* console.log(aciertoNro.checked); */
      entradas2.innerHTML = `Enhorabuena ${nombre}. Has acertado el número (${nroCorrecto}) en tu intento número ${nroIntentos}`;
    }
  }
  document.addEventListener("click", sumarClick);
}
