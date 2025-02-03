const m1 = document.querySelector("#mostra1");
const m2 = document.querySelector("#mostra2");
const error = document.querySelector("#error");

/* const formulario = document.forms["firstContact"]
 */ const formulario = document.firstContact;
const patronDni = /^[XYZ]?\d{5,8}[A-Z]{1}$/;
/* ? si lo hay */ /* $ de la A a la Z y solo 1 */ formulario.addEventListener(
  "submit",
  (e) => {
    /* El escuchador esta pendiente del submit */
    const mydni = c_dni();
    const myedad = edad();

    if (!mydni || !myedad) {
      e.preventDefault(); /* Cancela una evento si es posible, como cancelar el "submit" del formulario en este caso */
      error.innerHTML =
        "ERRORNUM NO se ha podido enviar el formulario. Por favor, revisa que todos los campos estén rellenados correctamente.";
      error.style.color = "red";
      return false;
    } else {
      formulario.submit();
      return true;
    }
  }
);

const c_dni = () => {
  let recogidaDni =
    formulario.dni
      .value; /* recojo el input de name=dni en el formulario name=formulario */
  recogidaDni = recogidaDni.toUpperCase();
  let numero, letra1;
  let resultadoDni =
    recogidaDni.match(
      patronDni
    ); /* recorre la variable para ver si cumple con el patron */
  let letra = "TRWAGMYFPDXBNJZSQVHLCKE";
  if (resultadoDni) {
    numero = recogidaDni.substr(0, recogidaDni.length - 1);
    numero = numero.replace("X", 0);
    numero = numero.replace("Y", 1);
    numero = numero.replace("Z", 2);
    letra1 = recogidaDni.substr(recogidaDni.length - 1, 1);
    numero = numero % 23;
    letra = letra.substring(numero, numero + 1);
    if (letra !== letra1) return false;
    return true;
  } else {
    return false;
  }
};

const edad = () => {
  let fechaNacimiento = formulario.miedad2.value;
  let fechaNaceUser = new Date(fechaNacimiento);

  /*   console.log(fechaNaceUser); */
  let fechaActual = new Date();

  let mes = fechaActual.getMonth();
  let dia = fechaActual.getDate();
  let anio = fechaActual.getFullYear();

  fechaActual.setDate(dia);
  fechaActual.setMonth(mes);
  fechaActual.setFullYear(anio);

  /*   console.log(fechaActual.setDate(dia));
  console.log(fechaActual.setMonth(mes));
  console.log(fechaActual.setFullYear(anio)); */

  let mi_edad = Math.floor(
    (fechaActual - fechaNaceUser) / (1000 * 60 * 60 * 24) / 365.2425
  );
  if (mi_edad >= 18 && mi_edad <= 100) return true;
  return false;
};

const pasaValor = (event) => {
  let estiloEdad = formulario.miedad;
  let estiloDni = formulario.dni;
  let result;
  switch (
    event.target
      .name /* Accedemos a los names de las etiquetas HTML y hacemos... */
  ) {
    case "miedad2" /* TOMA el NAME */:
      result = edad();
      if (result) {
        m1.innerHTML = "Tienes más de 18 años";
        estiloEdad.style.border = "2px solid green"; /* TOMA el ID */
        error.innerHTML = "";
      } else {
        m1.innerHTML =
          "No puedes registrarte porque tienes menos de 18 años o más de 100 años";
        estiloEdad.style.border = "2px solid red";
      }
      break;

    case "dni2":
      result = c_dni();
      if (result) {
        m2.innerHTML = "DNI Válido";
        estiloDni.style.border = "2px solid green";
        error.innerHTMLHTML = "";
      } else {
        m2.innerHTML = "DNI o NIE no válido";
        estiloDni.style.border = "2px solid red";
      }
      break;
  }
};

const listeners = [formulario.dni, formulario.miedad];
for (const listener of listeners)
  listener.addEventListener(
    "keyup",
    pasaValor
  ); /* Crea el nombre de una variale que lo que hace es individualizar cada uno de los elementos de un Array, tengo un listener de cada uno de los listeners */
