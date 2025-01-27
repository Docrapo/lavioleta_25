let ponerEn = document.querySelector("#mostrador");
function cerrarVentana() {
  window.close();
}
function limpiar() {
  ponerEn.innerHTML = "";
}

function ejercicio8() {
  let cambiarHtml = prompt("Ingresa un nombre para el HTML: ");
  document.title = cambiarHtml;
  let cambiarBackground = confirm("¿Quieres cambiar el fondo de la Web?");
  if (cambiarBackground == true) {
    document.body.style.backgroundColor = "black";
  }
}

function ejecEjercicio9() {
  let textEjercicio9 = `Tamaño del window: ${window.innerWidth} X ${window.innerHeight} px. <br/>Tamño del HTML: ${document.body.scrollWidth} X ${document.body.scrollHeight} px.`;
  ponerEn.innerHTML = textEjercicio9;
}

function ejecEjercicio11() {
  let abrirVentana = window.open(
    "ventana.html",
    "_blank",
    `width=700,
    height=500`
  );
  abrirVentana.onload = function () {
    abrirVentana.document.querySelector(
      "#seccion_ventana"
    ).innerHTML = `Tamaño del window: ${abrirVentana.innerWidth} X ${abrirVentana.innerHeight} px.`;
  };
}

const valorInputEj12 = document.querySelector("#valor_ejercicio12");
function ejecEjercicio12() {
  let valor12 = String(valorInputEj12.value);
  let largoV12 = valor12.length;
  if (largoV12 > 10) {
    let valor12new = valor12.substring(largoV12 - 5, largoV12);
    ponerEn.innerHTML = valor12new;
  }
}

const valorInputEj13 = document.querySelector("#valor_ejercicio13");
function ejecEjercicio13() {
  let valor13 = String(valorInputEj13.value);
  let largoV13 = valor13.length;
  ponerEn.innerHTML = `<em>${valor13}</em><br/><strong>${valor13}</strong><br/><p style="color:red;">${valor13}</p><br/><h2>${valor13}</h2><br/>${valor13}<br/><p class="text_muestrAbajo"><em>El texto tiene un largo de ${valor13.length} carácteres</em></p>`;
}

function ejecEjercicio14() {
  ponerEn.innerHTML = `<table class="tabla_ej14">
     <tr>
       <th>SALUDO</th>
       <th>ÉNFASIS</th>
     </tr>
     <tr>
       <td>HOLA</td>
       <td>!!!!!</td>
     </tr>
   </table>`;
}
function ejecEjercicio16() {
  ponerEn.innerHTML = `<div id="ampolletaID" class="ampolleta"><div>`;
}

var x = 0;
function ejecEjercicio16a() {
  if (x == 0) {
    document.getElementById("ampolletaID").classList.add("ampolleta2");
    x = 1;
  } else {
    document.getElementById("ampolletaID").classList.remove("ampolleta2");
    x = 0;
  }
}

/* 21 de junio de 2020 */
/* 21 de diciembre de 2012 a las 12:12 UTC */
function ejecEjercicio17() {
  let fechaActual = new Date();
  let fechaMaya = new Date(2012, 12, 21, 13, 12, 0, 0);
  console.log(fechaActual.getTime());
  let calculoFecha = fechaMaya.getTime() - fechaActual.getTime();
  console.log(calculoFecha);
  let yearsSince = Math.round(calculoFecha / 1000 / 60 / 60 / 24 / 365);
  console.log(yearsSince);
  let mesesSince = Math.round(
    calculoFecha / 1000 / 60 / 60 / 24 / 12 / 365.2425
  );
  console.log(mesesSince);
  let diasSince = Math.round(
    calculoFecha / 1000 / 60 / 60 / 24 + mesesSince * yearsSince * 365.2425
  );
  console.log(diasSince);
  /*  let calculo = fechaActual - fechaMaya;
  let anios_pas = calculo / 1000 / 60 / 60 / 24 / 365.242;
  let dias_pas = calculo - anios_pas * 1000 * 60 * 60 * 24;
  /* let resultadoFecha = new Date(calculo); */

  ponerEn.innerHTML = `Han pasado ${yearsSince * -1} años con ${
    mesesSince * -1
  } meses y ${
    diasSince * -1
  } días<br />desde el 12 de diciembre de 2012, día del supuesto apocalipsis.`;
}

function ejecEjercicio18() {
  let fechaActual2 = new Date();
  ponerEn.innerHTML = `Han pasado ${fechaActual2.getTime()} milisegundos desde<br />el 1 de enero de 1970.`;
}
