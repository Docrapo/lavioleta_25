const tablaHtml = `<table>
<tr><th class="cabecera_1">
<th class="cabecera_2"></th></tr>
<tr><td id="prop_1"></td><td id="cont_1"></td></tr>
<tr><td id="prop_2"></td><td id="cont_2"></td></tr>
<tr><td id="prop_3"></td><td id="cont_3"></td></tr>
<tr><td id="prop_4"></td><td id="cont_4"></td></tr>
<tr><td id="prop_5"></td><td id="cont_5"></td></tr>
<tr><td id="prop_6"></td><td id="cont_6"></td></tr>
<tr><td id="prop_7"></td><td id="cont_7"></td></tr>
<tr><td id="prop_8"></td><td id="cont_8"></td></tr>
<tr><td id="prop_9"></td><td id="cont_9"></td></tr>
<tr><td id="prop_10"></td><td id="cont_10"></td></tr>
<tr><td id="prop_11"></td><td id="cont_11"></td></tr>
</table>`;
document.querySelector(".contenido_tabla").innerHTML = tablaHtml; // Inseta dentro de mi <section> con id="contenido_tabla" el contenido escrito en la constante const = tablaHtml... ESTE VA ANTES DE LAS CONSTANTES de abajo porque primero debe construirse la tabla en el HTML para luego llamar las CLASSs y los IDs

const cabeceraHtml1 = document.querySelector(".cabecera_1");
const cabeceraHtml2 = document.querySelector(".cabecera_2");
const propHtml1 = document.querySelector("#prop_1");
const propHtml3 = document.querySelector("#prop_3");
const propHtml2 = document.querySelector("#prop_2");
const propHtml4 = document.querySelector("#prop_4");
const propHtml5 = document.querySelector("#prop_5");
const propHtml6 = document.querySelector("#prop_6");
const propHtml7 = document.querySelector("#prop_7");
const propHtml8 = document.querySelector("#prop_8");
const propHtml9 = document.querySelector("#prop_9");
const propHtml10 = document.querySelector("#prop_10");
const propHtml11 = document.querySelector("#prop_11");

const contHtml1 = document.querySelector("#cont_1");
const contHtml3 = document.querySelector("#cont_3");
const contHtml2 = document.querySelector("#cont_2");
const contHtml4 = document.querySelector("#cont_4");
const contHtml5 = document.querySelector("#cont_5");
const contHtml6 = document.querySelector("#cont_6");
const contHtml7 = document.querySelector("#cont_7");
const contHtml8 = document.querySelector("#cont_8");
const contHtml9 = document.querySelector("#cont_9");
const contHtml10 = document.querySelector("#cont_10");
const contHtml11 = document.querySelector("#cont_11");

/* cabeceraHtml1.innerHTML = `PROPIETAT`;
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
contHtml11.innerHTML = navigator.platform; */
