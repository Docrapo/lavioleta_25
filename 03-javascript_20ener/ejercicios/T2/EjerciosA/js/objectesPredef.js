let confirmCookie = document.cookie;
function escribeHTML() {
  cabeceraHtml1.innerHTML = `PROPIETAT`;
  cabeceraHtml2.innerHTML = "VALOR OBTINGUT AMB JS";
  propHtml1.innerHTML = `Valor màxim que pot tenir un número en JavaScript`;
  propHtml2.innerHTML = `Valor mínim que pot tenir un número en JavaScript`;
  propHtml3.innerHTML = `Alçada total de la pantalla`;
  propHtml4.innerHTML = `Amplada total de la pantalla`;
  propHtml5.innerHTML = `Alçada de la pàgina web`;
  propHtml6.innerHTML = `Amplada de la pàgina web`;
  propHtml7.innerHTML = `URL de la pàgina web`;
  propHtml8.innerHTML = `Nom de la pàgina web amb la seva extensió (index.html)`;
  propHtml9.innerHTML = `Nom de la pàgina web sense la seva extensió (index)`;
  propHtml10.innerHTML = `Un valor aleatori entre 0 i 200 (utilitza Math)`;
  propHtml11.innerHTML = `Sistema operatiu de lordinador.`;

  let fileURL = window.location.pathname.lastIndexOf("/");
  let extensionURL = window.location.pathname.lastIndexOf(".");
  /* console.log(fileURL);
console.log(extensionURL); */

  contHtml1.innerHTML = Number.MAX_VALUE;
  contHtml2.innerHTML = Number.MIN_VALUE;
  contHtml3.innerHTML = screen.height;
  contHtml4.innerHTML = screen.width;
  contHtml5.innerHTML = window.innerHeight;
  contHtml6.innerHTML = window.innerWidth;
  contHtml7.innerHTML = window.location.href;
  contHtml8.innerHTML = window.location.pathname.substring(fileURL + 1);
  contHtml9.innerHTML = window.location.pathname.substring(
    fileURL + 1,
    extensionURL
  );
  contHtml10.innerHTML = Math.floor(Math.random() * 201);
  contHtml11.innerHTML = navigator.platform;
}

function cambiaTitulo() {
  let tituloHtml = document.title;
  let newtituloHtml;
  do {
    newtituloHtml = prompt(`El título actual de la web es: ${tituloHtml}`);
    /* newtituloHtml = newtituloHtml.toLocaleLowerCase();
   newtituloHtml = newtituloHtml.charAt(0).toUpperCase() + newtituloHtml; */
    newtituloHtml = newtituloHtml.toLocaleLowerCase();
    newtituloHtml = newtituloHtml.replace(
      newtituloHtml.charAt(0),
      newtituloHtml.charAt(0).toUpperCase()
    );
  } while (newtituloHtml == "" || newtituloHtml == null);
  document.title = newtituloHtml;
}

let valorFinestraUno;
let condicionDos;
function novaFinestra() {
  let abreFinestra = prompt(
    `Ingresa un título de entre 3 y 20 caracteres y luego separado por una coma uno de los valores "yes" o “no”.`
  );
  condicionDos = abreFinestra.substring(abreFinestra.indexOf(",") + 1);
  condicionDos = condicionDos.trim().toLowerCase();
  console.log(condicionDos);
  while (
    (abreFinestra.indexOf(",") < 3 || abreFinestra.indexOf(",") > 20) &&
    (condicionDos != "yes" || condicionDos != "no")
  ) {
    abreFinestra = prompt(
      `No has ingresado o bien el Título o la condición "yes" o "no", RECUERDA: Ingresa un título de entre 3 y 20 caracteres y luego separado por una coma uno de los valores "yes" o “no”.`
    );
    condicionDos = abreFinestra.substring(abreFinestra.indexOf(",") + 1);
    condicionDos = condicionDos.trim().toLowerCase();
  }
  valorFinestraUno = abreFinestra.substring(0, abreFinestra.indexOf(",") - 1);
}

/* valorFinestraUno = "Hola";
condicionDos = "no"; */
condicionDos = String(condicionDos);
/* let fileHref = window.location.href.lastIndexOf("/"); */
function abrirFinestra() {
  if (valorFinestraUno == null) {
    alert(
      `No haz completado los datos del "Ejercicio 6". Primero completa los datos presionando ese botón`
    );
  } else {
    /* let fileAddress = window.location.href.substring(0, fileHref + 1);
 console.log(fileAddress); */
    let numWidth = Math.floor(Math.random() * 401) + 50;
    let numHeight = Math.floor(Math.random() * 401) + 50;
    /* console.log(numWidth, numHeight); */
    let nuevaVentana = window.open(
      "finestra.html",
      "_blank",
      `toolbar=no,
    scrollbars=${condicionDos},
    resizable=no,
    top=500,
    left=500,
    width=${numWidth},
    height=${numHeight}`
    );
    nuevaVentana.onload = function () {
      nuevaVentana.document.title = valorFinestraUno;
      if (condicionDos == "no") {
        nuevaVentana.document.body.style.overflow = "hidden";
      } else {
        nuevaVentana.document.body.style.overflow = "visible";
      }
    };
  }
}

/* valorFinestraUno = "Hola";
condicionDos = "no";  CONDICIONES puestas para que las funciones nuevas corrieran sin tener que presionar el boton 7 y 8 que luego sería necesario */
condicionDos = String(condicionDos);
function mostrarHora() {
  let numWidth = Math.floor(Math.random() * 401) + 50;
  let numHeight = Math.floor(Math.random() * 401) + 50;
  /* console.log(numWidth, numHeight); */
  let nuevaVentana = window.open(
    "finestra.html",
    "_blank",
    `toolbar=no,
    scrollbars=${condicionDos},
    resizable=yes,
    top=500,
    left=500,
    width=${numWidth},
    height=${numHeight}`
  );

  nuevaVentana.onload = function () {
    nuevaVentana.document.title = valorFinestraUno;
    if (condicionDos == "no") {
      nuevaVentana.document.body.style.overflow = "hidden";
    } else {
      nuevaVentana.document.body.style.overflow = "visible";
    }
    const showHora = function () {
      const datosActuales = new Date(); //Creo una variable con la fecha y hora actuales
      const hh = datosActuales.getHours();
      const mm = datosActuales.getMinutes();
      const ss = datosActuales.getSeconds();
      const saludoHora = nuevaVentana.document.querySelector(".saludo_hora");
      if (hh >= 6 && hh < 14) {
        saludoHora.innerHTML = "Bon dia";
      } else if (hh >= 14 && hh < 20) {
        saludoHora.innerHTML = "Bona tarda";
      } else {
        saludoHora.innerHTML = "Bona Nit";
      }
      console.log(hh, mm, ss);
      const horaActual = (nuevaVentana.document.querySelector(
        ".hora_actual"
      ).innerHTML = `${hh}:${mm}:${ss}`);
    };
    setInterval(showHora, 1000);
  };
}

/* var confirmOpened;  Intento de exportar variable, no se pudo*/
function cambiaIndexUrl() {
  /* confirmOpened = 2; */
  document.querySelector(".confirmOpened").innerHTML = "yes";
  let hijoVentana = window.open(
    "finestra.html",
    "_blank",
    `scrollbars=yes,
    resizable=no,
    top=250,
    left=250,
    width=700,
    height=500`
  );
  /* hijoVentana.onload = function () {
    hijoVentana.document.querySelector(".confirmOpened").innerHTML = "yes"; // RECORDAR "." para querrySelector NO PONER "." en nombre de clase del HTML
  }; */
}
