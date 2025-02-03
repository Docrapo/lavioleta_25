/* */
const formulario = document.formulario_ejT4;
const error = document.querySelector("#error");
const error2 = document.querySelector("#error2");
const patronUser = /^\D{2,19}/;
const patronDni = /^[XYZ]?\d{5,8}[A-Z]{1}$/;
const patronTel = /^[+]?[\d]{9,12}/;
const patronEmail =
  /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
const fechaActual = new Date();
let anio_hoy = fechaActual.getFullYear();

const lee_dni = () => {
  let recogidaDni = formulario.user_dni.value;
  /* recojo el input de name=user_dni en el formulario name=formulario */
  recogidaDni = recogidaDni.toUpperCase();
  /* Lo paso a altas para coincidir */
  let numero, letra1;
  let resultadoDni = recogidaDni.match(patronDni);
  /* recorre la variable para ver si cumple con el patron */
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
const lee_telefono = () => {
  let recogidaTel = formulario.user_phone.value;
  let resultadoTel = recogidaTel.match(patronTel);
  /* recorre la variable para ver si cumple con el patron */
  if (resultadoTel) {
    return true;
  } else {
    return false;
  }
};
const lee_usuario = () => {
  let recogidaUser = formulario.user_name.value;
  let resultadoUser = recogidaUser.match(patronUser);
  /* recorre la variable para ver si cumple con el patron */
  if (resultadoUser) {
    return true;
  } else {
    return false;
  }
};
const lee_email = () => {
  let recogidaEmail = formulario.user_email.value;
  let resultadoEmail = recogidaEmail.match(patronEmail);

  /* recorre la variable para ver si cumple con el patron */
  if (resultadoEmail) {
    return true;
  } else {
    return false;
  }
};

const lee_dia = () => {
  recogidaMes = formulario.user_month.value;
  recogidaAnio = formulario.user_year.value;
  let recogidaDia = formulario.user_day.value;
  if (recogidaMes == 0 && recogidaDia <= 31 && recogidaDia > 0) {
    error2.innerHTML = "QUE";
    return true;
  } else if (recogidaDia <= 31 && recogidaDia != 0) {
    if (
      recogidaMes > 0 &&
      (recogidaMes == 1 ||
        recogidaMes == 3 ||
        recogidaMes == 5 ||
        recogidaMes == 7 ||
        recogidaMes == 8 ||
        recogidaMes == 10 ||
        recogidaMes == 12)
    ) {
      if (recogidaDia <= 31) {
        return true;
      } else {
        return false;
      }
    } else if (
      recogidaMes > 0 &&
      (recogidaMes == 4 ||
        recogidaMes == 6 ||
        recogidaMes == 9 ||
        recogidaMes == 11)
    ) {
      if (recogidaDia <= 30) {
        return true;
      } else {
        return false;
      }
    } else if (recogidaMes > 0 && recogidaMes == 2) {
      if (recogidaDia <= 29) {
        if (recogidaDia == 29 && recogidaAnio % 400 == 0) {
          return true;
        } else if (
          recogidaDia == 29 &&
          recogidaAnio % 4 == 0 &&
          recogidaAnio != 100
        ) {
          return true;
        } else if (recogidaDia <= 28) {
          return true;
        } else return false;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};
const lee_mes = () => {
  let recogidaMes = formulario.user_month.value;
  /* console.log(recogidaMes); */
  if (recogidaMes.length <= 2 && recogidaMes <= 12 && recogidaMes != 0) {
    return true;
  } else {
    return false;
  }
};

const lee_anio = () => {
  let recogidaAnio = formulario.user_year.value;
  /* let resultadoMes = recogidaMes.match(patronMes); */
  /* recorre la variable para ver si cumple con el patron */
  if (
    recogidaAnio.length == 4 &&
    recogidaAnio <= anio_hoy &&
    recogidaAnio >= anio_hoy - 100
  ) {
    return true;
  } else {
    return false;
  }
};

let botonTest = document.querySelector("#btn_test");
const mayoria_edad = () => {
  let valid_Anio = lee_anio();
  let valid_Mes = lee_mes();
  let valid_Dia = lee_dia();
  /* error2.innerHTML = `${dia_hoy} ${mes_hoy} ${anio_hoy}`; */
  /* dia_hoy = fechaActual.getDay(); */
  if (valid_Anio && valid_Mes && valid_Dia) {
    recogidaAnio = formulario.user_year.value;
    recogidaMes = formulario.user_month.value;
    recogidaDia = formulario.user_day.value;
    let fecha_nac = new Date(`${recogidaAnio}-${recogidaMes}-${recogidaDia}`);
    let calc_edad = fechaActual - fecha_nac;
    calc_edad = Math.floor(calc_edad / 1000 / 60 / 60 / 24 / 365.2423);
    if (calc_edad >= 18) {
      error.innerHTML = calc_edad;
      return true;
    } else {
      error.innerHTML = "Debes ser mayor de edad.";
      return false;
    }
  }
};
botonTest.onclick = mayoria_edad;

addEventListener("submit", (e) => {
  /* El escuchador esta pendiente del submit */
  const mydni = lee_dni();
  const myTel = lee_telefono();
  /* console.log(mydni); si es true devuelve true, no false */
  /* console.log(!mydni); se pregunta si es true en caso de serlo devuelve falso*/
  if (!mydni || !myTel) {
    /* si no es verdad */
    e.preventDefault(); /* Cancela una evento si es posible, como cancelar el "submit" del formulario en este caso */
    error2.innerHTML =
      "ERRORNUM NO se ha podido enviar el formulario. Por favor, revisa que todos los campos estén rellenados correctamente.";
    error2.style.color = "red";
    return false;
  } else {
    formulario.submit();
    return true;
  }
});
const cambiaEstiloForm = (event) => {
  let estiloUser = formulario.user_name;
  let estiloDni = formulario.user_dni;
  let estiloTel = formulario.user_phone;
  let estiloDia = formulario.user_day;
  let estiloMes = formulario.user_month;
  let estiloAnio = formulario.user_year;
  let estiloEmail = formulario.user_email;
  let estiloUser2 = document.getElementById("user2");
  let estiloEmail2 = document.getElementById("email2");
  let estiloDni2 = document.getElementById("dni2");
  let estiloTel2 = document.getElementById("tel2");
  let estiloDia2 = document.getElementById("dia2");
  let estiloMes2 = document.getElementById("mes2");
  let estiloAnio2 = document.getElementById("anio2");
  let result, result_day, result_edad;
  switch (event.target.name) {
    /* Cuando un evento que es target (posicionarse o estar sobre) un name .... Accedemos a los names de las etiquetas HTML y hacemos... */
    case "user_name":
      result = lee_usuario();
      if (result) {
        estiloUser.classList.remove("noverificado");
        estiloUser.classList.add("verificado");
        estiloUser2.classList.remove("noverificadoLet");
        estiloUser2.classList.add("verificadoLet");
      } else {
        error.innerHTML = "Usuario no válido";
        estiloUser.classList.remove("verificado");
        estiloUser.classList.add("noverificado");
        estiloUser2.classList.remove("verificadoLet");
        estiloUser2.classList.add("noverificadoLet");
      }
      break;
    case "user_phone" /* TOMA el NAME */:
      result = lee_telefono();
      if (result) {
        error.innerHTML = "Hola";
        /* estiloTel.style.border = "2px solid green";  */ /* TOMA el ID */
        estiloTel.classList.remove("noverificado");
        estiloTel.classList.add("verificado");
        estiloTel2.classList.remove("noverificadoLet");
        estiloTel2.classList.add("verificadoLet");
      } else {
        error.innerHTML = "Telefono no válido";
        estiloTel.classList.remove("verificado");
        estiloTel.classList.add("noverificado");
        estiloTel2.classList.remove("verificadoLet");
        estiloTel2.classList.add("noverificadoLet");
        /* estiloTel.style.border = "2px solid red"; */
      }
      break;

    case "user_dni":
      result = lee_dni();
      if (result) {
        error.innerHTML = "DNI Válido";
        estiloDni.classList.remove("noverificado");
        estiloDni.classList.add("verificado");
        estiloDni2.classList.remove("noverificadoLet");
        estiloDni2.classList.add("verificadoLet");
        /* estiloDni.style.border = "2px solid green";
        error2.innerHTMLHTML = ""; */
      } else {
        error.innerHTML = "DNI o NIE no válido";
        estiloDni.classList.remove("verificado");
        estiloDni.classList.add("noverificado");
        estiloDni2.classList.remove("verificadoLet");
        estiloDni2.classList.add("noverificadoLet");
        /* estiloDni.style.border = "2px solid red"; */
      }
      break;
    case "user_day":
      result = lee_dia();
      if (result) {
        error.innerHTML = "Día válido";
        estiloDia.classList.remove("noverificado");
        estiloDia.classList.add("verificado");
        estiloDia2.classList.remove("noverificadoLet");
        estiloDia2.classList.add("verificadoLet");
      } else {
        error.innerHTML = "Día no válido";
        estiloDia.classList.remove("verificado");
        estiloDia.classList.add("noverificado");
        estiloDia2.classList.remove("verificadoLet");
        estiloDia2.classList.add("noverificadoLet");
      }
      break;
    case "user_month":
      result = lee_mes();
      result_day = lee_dia();
      if (result && result_day) {
        error.innerHTML = "Mes válido";
        estiloMes.classList.remove("noverificado");
        estiloMes.classList.add("verificado");
        estiloMes2.classList.remove("noverificadoLet");
        estiloMes2.classList.add("verificadoLet");
      } else {
        error.innerHTML = "Mes no válido";
        estiloMes.classList.remove("verificado");
        estiloMes.classList.add("noverificado");
        estiloMes2.classList.remove("verificadoLet");
        estiloMes2.classList.add("noverificadoLet");
      }
      break;
    case "user_year":
      result = lee_anio();
      result_edad = mayoria_edad();
      if (result && result_edad) {
        error.innerHTML = "Año válido";
        estiloAnio.classList.remove("noverificado");
        estiloAnio.classList.add("verificado");
        estiloAnio2.classList.remove("noverificadoLet");
        estiloAnio2.classList.add("verificadoLet");
      } else if (!result_edad) {
        error.innerHTMLHTML = "DEBES SER MAYOR DE EDAD";
        estiloAnio.classList.remove("verificado");
        estiloAnio.classList.add("noverificado");
        estiloAnio2.classList.remove("verificadoLet");
        estiloAnio2.classList.add("noverificadoLet");
      } else {
        error.innerHTML = "Año no válido";
        estiloAnio.classList.remove("verificado");
        estiloAnio.classList.add("noverificado");
        estiloAnio2.classList.remove("verificadoLet");
        estiloAnio2.classList.add("noverificadoLet");
      }
      break;
    case "user_email":
      result = lee_email();
      if (result) {
        error.innerHTML = "Email Válido";
        estiloEmail.classList.remove("noverificado");
        estiloEmail.classList.add("verificado");
        estiloEmail2.classList.remove("noverificadoLet");
        estiloEmail2.classList.add("verificadoLet");
        error2.innerHTMLHTML = "";
      } else {
        error.innerHTML = "Email no válido";
        estiloEmail.classList.remove("verificado");
        estiloEmail.classList.add("noverificado");
        estiloEmail2.classList.remove("verificadoLet");
        estiloEmail2.classList.add("noverificadoLet");
      }
      break;
  }
};

const listeners = [
  formulario.user_name,
  formulario.user_dni,
  formulario.user_phone,
  formulario.user_day,
  formulario.user_month,
  formulario.user_year,
  formulario.user_email,
];
for (const listener of listeners)
  listener.addEventListener("keyup", cambiaEstiloForm);
