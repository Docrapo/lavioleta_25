/* const verOperacion = document.querySelector(".ventana_operacion"); */

function comparador() {
  let compara1 = Number(prompt("Introduce un número: "));
  let compara2 = Number(prompt("Introduce otro número: "));
  let comparaHtml;
  console.log(compara1);
  console.log(compara2);
  if (isNaN(compara1) == false && isNaN(compara2) == false) {
    // Se usa isNaN ya que !Number devuelve el valor cero como una respuesta a "true" y no permite sumar 0 (cero)
    if (compara1 < compara2) {
      /* alert(`${compara1} es menor que ${compara2}`); */
      comparaHtml = `${compara1} es menor que ${compara2}`;
    } else if (compara1 == compara2) {
      /* alert(`${compara1} es igual que ${compara2}`); */
      comparaHtml = `${compara1} es igual que ${compara2}`;
    } else {
      /* alert(`${compara1} es mayor que ${compara2}`); */
      comparaHtml = `${compara1} es mayor que ${compara2}`;
    }
    verOperacion.innerHTML = comparaHtml;
  } else {
    verOperacion.innerHTML = `Valores no válidos, ingresa números.`;
  }
}

function diaSemana() {
  let diaMay = prompt("Introduïu un día de la setmana: ");
  /* console.log(diaMay); */
  diaMay = diaMay.toLowerCase();
  /* console.log(diaMay); */
  let diaNum;
  let diaSemanaHtml;
  switch (diaMay) {
    case "dilluns":
      diaNum = 1;
      /* diaCorrecto = "Dilluns"; */
      break;
    case "dimarts":
      diaNum = 2;
      /* diaCorrecto = "Dimarts"; */
      break;
    case "dimecres":
      diaNum = 3;
      /* diaCorrecto = "Dimecres"; */
      break;
    case "dijous":
      diaNum = 4;
      /* diaCorrecto = "Dijous"; */
      break;
    case "divendres":
      diaNum = 5;
      /* diaCorrecto = "Divendres"; */
      break;
    case "disabte":
      diaNum = 6;
      /* diaCorrecto = "Disabte"; */
      break;
    case "diumenge":
      diaNum = 7;
      /* diaCorrecto = "Diumenge"; */
      break;
    default:
  }
  if (diaNum <= 7) {
    diaSemanaHtml = `<p class="diaSetmana"><strong>${diaMay}</strong> es el día ${diaNum} de la semana</p>`;
  } else {
    diaSemanaHtml = `<p class="diaSetmana"><strong>${diaMay} no es válido</strong> como día de la semana.</p>`;
  }
  /* alert(diaSemanaHtml); */
  verOperacion.innerHTML = diaSemanaHtml;
}

/* dentro de ${n+1} se pueden hacer operaciones */

function mayorCincuenta() {
  let numMayor;
  let veces = -1;
  let mayor50Html;
  do {
    numMayor = Number(prompt("Introduce un número: ").replace(",", "."));
    veces++;
    console.log(!numMayor); // si es numero entrega "false"
    while (!numMayor == true) {
      numMayor = Number(prompt("OTRO Introduce un número: "));
    } // mientras numMayor sea algo que NO ES UN NUMERO mandar ese mensaje para introducir un valor numérico válido.
  } while (numMayor < 50);
  /* alert(
  `Has introducido ${veces} números antes de llegar a un número mayor a 50`); */
  mayor50Html = `Has introducido ${veces} números antes de llegar a un número mayor a 50`;
  verOperacion.innerHTML = mayor50Html;
}

/* REDUCCIÓN 
ejemplo: cincuenta.
1. NORMAL
if (isNaN(num2) || num2 == ""){
 contador = contador++;
} else {
 contador++;
}

2. NORMAL REDUCIDA 
if (isNaN(num2) || num2 == "") contador = contador++;
else contador++;
   

3. CONDICIONAL
(isNaN(num2) || num2 == "")?contador = contador: contador++; */
