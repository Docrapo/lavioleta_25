function factorial() {
  let numero = Number(prompt("Ingresa un numero"));
  /* console.log(numero); */
  let cont = 1;
  let factorial = 1;
  if (!numero == false) {
    while (cont <= numero) {
      factorial = factorial * cont;
      /* console.log(factorial); */
      cont++;
    }
    /* alert(`El factorial de ${numero} es ${factorial}`); */
    verOperacion.innerHTML = `El factorial de ${numero} es ${factorial}`; // verOperacion esta definida en la libreria de scripts library.js
  } else {
    verOperacion.innerHTML = `No has ingresado un valor válido.`;
  }
}

function aprobadoOno() {
  let nota = String(prompt("Ahora ingresa una nota entre 0 y 10: "));
  /*   console.log(nota); */
  nota = Number(nota.replace(/,/, "."));
  let resultadoNota;
  /*  console.log(nota);
  console.log(parseInt(nota)); */
  if (nota < 5) {
    resultadoNota = `<p>Has <strong class="nota_suspens"> Suspens </strong> amb ${nota}`;
  } else if (nota < 6) {
    resultadoNota = `<p>Has Aprovat amb ${nota}</p>`;
  } else if (nota < 7) {
    resultadoNota = `<p>Has aprovat i Bé amb ${nota}</p>`;
  } else if (nota < 9) {
    resultadoNota = `<p>Has aprovat Notable amb ${nota}</p>`;
  } else if (nota <= 10) {
    resultadoNota = `<p>Has aprovat i <strong class="nota_excellent">Excel·lent</strong> amb ${nota}</p>`;
  } else {
    resultadoNota = "No has ingresat un nombre correcte";
  }
  verOperacion.innerHTML = resultadoNota;
}

function promedioNotas() {
  let nota2 = Number(
    prompt("Ingresa la primera nota del alumno (Entre 0 y 10):") // Number convierte el valor de la variable DE SER POSIBLE en número
  );
  let nota3 = Number(
    prompt("Ingresa la siguiente nota del alumno (Entre 0 y 10):")
  );
  /* console.log(nota2); */
  if (nota2 <= 10 && nota2 >= 0 && nota3 <= 10 && nota3 >= 0) {
    // RECORDAR la diferencia entre && y ||
    let mitjana = (nota2 + nota3) / 2; //creo una variable para la operación matemática
    /* console.log(mitjana); */
    if (!mitjana == false) {
      verOperacion.innerHTML = `La mediana entre la nota anteior y esta es: ${mitjana}`;
    }
  } else {
    verOperacion.innerHTML = `No has ingresado valores válidos`;
  }
}
