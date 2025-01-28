let div_st1 = `<div class="alert alert-success">`;

let result;
let resultado;
/* necesito acceder a lo qu el usuario ingrese para eso debo acceder al <input> por medio del id o class, y lo guardo en una constante */
const num = document.querySelector("#input_numero");
const btn_01 = document.querySelector("#btn_ejer01");
const muestra_01 = document.querySelector("#mostrar_01");
const btn_borrar = document.querySelector("#btn_borra01");

/* btn_01.onclick = parImpar; ANTES cuando la función no era constante osea una ArrowFunction, esto se podia ejecutar, AHORA no


function parImpar() {  Esto al pasarlo a Arrow Function */
const parImpar = () => {
  let n = num.value;
  console.log(typeof n);
  n = Number(n.replace(",", "."));
  console.log(typeof n);

  if (isNaN(n) || n == "") {
    //El caracter 2 y el numero 2 para el doble igual... ambos son iguales
    resultado = `<div class="alert alert-danger">No puedo operar</div>`;
    document.querySelector("#mostrar_01").style = "opacity: 100%;";
  } else {
    result = n % 2;
    /* se puede reducir a su condicion declarada como cierta y si no el else 
   condicion_a_evaluar? accion_a_ejecutar: (sino) accion_descarte;*/
    /* if (result !== 0) {
      resultado = `<div class="alert alert-success">El valor introducido es un número impar, concretamente el ${n} <br/></div>`;
    } else {
      resultado = `<div class="alert alert-success">El valor introducido es un número par, concretamente el ${n} <br/></div>`;
   } */
    result !== 0
      ? ((resultado = `<div class="alert alert-success">El valor introducido es un número impar, concretamente el ${n} <br/></div>`),
        (document.querySelector("#mostrar_01").style = "opacity: 100%;"))
      : ((resultado = `<div class="alert alert-success">El valor introducido es un número par, concretamente el ${n} <br/></div>`),
        (document.querySelector("#mostrar_01").style = "opacity: 100%;"));
  }
  muestra_01.innerHTML = resultado;
  num.value = ``;
};
/* function borrar() {
 num.value = ``;
 muestra_01 = ``;
} */
const borrar = () => {
  num.value = ``;
  muestra_01.innerHTML = ``;
  document.querySelector("#mostrar_01").style = "";
};

num.addEventListener("keypress", function (event) {
  if (event.key === `Enter`) {
    btn_01.onclick = parImpar();
  }
});
btn_01.onclick = parImpar; //pierde los parentecis para ser llamada, cuando se llama con onclick u otro evento.
btn_borrar.onclick = borrar;

const num_02 = document.querySelector("#input_num_02");
const btn_02 = document.querySelector("#btn_ejer02");
const muestra_02 = document.querySelector("#mostrar_02");
const btn_borr_02 = document.querySelector("#btn_borra02");
function ejercicioDos() {
  if (Number(num_02.value) == 12) {
    muestra_02.innerHTML = `<div class="alert alert-success">Bien has acertado.</div>`;
  } else {
    muestra_02.innerHTML = `<div class="alert alert-danger">No has acertado, intenta denuevo.</div>`;
    alert("No has acertado!");
    num_02.value = ``;
  }
}
const borrar_02 = () => {
  num_02.value = ``;
  muestra_02.innerHTML = ``;
};
btn_02.onclick = ejercicioDos;
btn_borr_02.onclick = borrar_02;

const num_03 = document.querySelector("#input_num_03");
const btn_03 = document.querySelector("#btn_ejer03");
const muestra_03 = document.querySelector("#mostrar_03");
const btn_borr_03 = document.querySelector("#btn_borra03");
function ejercicioTres() {
  let ejer03_iva = Number(num_03.value) * 0.21;
  console.log(ejer03_iva);
  muestra_03.innerHTML = `<div class="alert alert-success">Precio sin IVA ${Number(
    num_03.value
  )}<br />
  IVA ${ejer03_iva}<br />
  Precio con IVA ${Number(num_03.value) + ejer03_iva}</div>`;
}

btn_03.onclick = ejercicioTres;
const borrar_03 = () => {
  num_03.value = ``;
  muestra_03.innerHTML = ``;
};
btn_borr_03.onclick = borrar_03;

/* MARK: EJ4
 */
const num_04 = document.querySelector("#input_num_04");
const num_04b = document.querySelector("#input_num_04b");
const btn_04 = document.querySelector("#btn_ejer04");
const muestra_04 = document.querySelector("#mostrar_04");
const btn_borr_04 = document.querySelector("#btn_borra04");
let formulario = document.forms["formulario_a"];
let selector = formulario["operaciones_list"];
let indexSeleccionado;

const borrar_04 = () => {
  num_04.value = ``;
  num_04b.value = ``;
  muestra_04.innerHTML = ``;
};
function ejercicioCuatro() {
  /* borrar_04(); */
  indexSeleccionado = selector.selectedIndex;
  console.log(indexSeleccionado);
  console.log(num_04.value);
  switch (indexSeleccionado) {
    case 1:
      muestra_04.innerHTML = `${div_st1}${
        Number(num_04.value) + Number(num_04b.value)
      }</div>`;
      break;
    case 2:
      muestra_04.innerHTML = `${div_st1}${
        Number(num_04.value) - Number(num_04b.value)
      }</div>`;
      break;
    case 3:
      muestra_04.innerHTML = `${div_st1}${
        Number(num_04.value) / Number(num_04b.value)
      }</div>`;
      break;
    case 4:
      muestra_04.innerHTML = `${div_st1}${
        Number(num_04.value) * Number(num_04b.value)
      }</div>`;
      break;
    case 5:
      muestra_04.innerHTML = `${div_st1}${
        Number(num_04.value) % Number(num_04b.value)
      }</div>`;
      break;
    default:
      borrar_04();
  }
}
btn_04.onclick = ejercicioCuatro;
btn_borr_04.onclick = borrar_04;
/* MARK: EJ5
 */
const num_05 = document.querySelector("#input_num_05");
const btn_05 = document.querySelector("#btn_ejer05");
const muestra_05 = document.querySelector("#mostrar_05");
const btn_borr_05 = document.querySelector("#btn_borra05");
const textoArray = [num_05.value];
function ejercicioCinco() {
  console.log(num_05.value);
  let i = 0;
  while (i < num_05.value) {
    textoArray[i] = `codi_producte ${i + 1}: ${
      Math.floor(Math.random() * 30000) + 1
    }<br />`;
    i++;
  }
  muestra_05.innerHTML = `${div_st1} ${textoArray}</div>`;
}
const borrar_05 = () => {
  num_05.value = ``;
  muestra_05.innerHTML = ``;
};
btn_05.onclick = ejercicioCinco;
btn_borr_05.onclick = borrar_05;
/* MARK:EJ6
 */
const muestra_06 = document.querySelector("#mostrar_06");
const a_ejer6 = document.querySelector("#hiper_datos");
const btn_borr_06 = document.querySelector("#btn_borra06");
var ow = window.outerWidth;
var oh = window.outerHeight;
var spx = screen.pixelDepth;
var w = window.innerWidth;
var h = window.innerHeight;
var diag = Math.sqrt(Math.pow(screen.height, 2) + Math.pow(screen.width, 2));
function ejercicioSeis() {
  muestra_06.innerHTML = `${div_st1} Outer Sizes: ${ow} x ${oh} <br/>Inner Sizes: ${w} x ${h} <br/>Pixel Deep: ${spx} <br/> Screen diagonal size: ${Math.floor(
    diag
  )}</div>`;
}
const borrar_06 = () => {
  muestra_06.innerHTML = ``;
};
a_ejer6.onclick = ejercicioSeis;
btn_borr_06.onclick = borrar_06;

/* MARK: EJ7
 */
let formulario2 = document.forms["formulario_b"];
let selector2 = formulario2["operaciones_listb"];
let indexSeleccionado2;
let btn_07 = document.querySelector("#btn_ejer07");
let btn_borr_07 = document.querySelector("#btn_borra07");
const borrar_07 = () => {
  document.body.style = ``;
};
function ejercicioSiete() {
  indexSeleccionado2 = selector2.selectedIndex;
  /*console.log(indexSeleccionado2); */
  switch (indexSeleccionado2) {
    case 1:
      document.body.style = `background-color: #A6427C`;
      break;
    case 2:
      document.body.style = `background-color: #CD899E`;
      break;
    case 3:
      document.body.style = `background-color: #DFB1B6`;
      break;
    case 4:
      document.body.style = `background-color: #F5EAE3`;
      break;
    default:
      document.body.style = ``;
      break;
  }
}
btn_07.onclick = ejercicioSiete;
btn_borr_07.onclick = borrar_07;
/* Pot Pourri = F5EAE3 
Cavern Pink = DFB1B6
Puce = CD899E
Rouge = A6427C */

/* MARK: EJ8
 */
function ejercicioOcho() {
  let nuevaVentana = window.open(
    "finestra.html",
    "_blank",
    `toolbar=no,
    scrollbars=yes,
    resizable=no,
    top=500,
    left=500,
    width=800,
    height=600`
  );
  nuevaVentana.onload = function () {
    nuevaVentana.document.body.innerHTML = `<header></header>
    <main>
      <button class="btn btn-primary fnt-_7" id="btn_finestra_01" onclick="window.close()">
        Cerrar Ventana
      </button>
    </main>

    `;
  };
}
let btn_08 = (document.querySelector("#btn_ejer08").onclick = ejercicioOcho);

const btn_09 = document.querySelector("#btn_ejer09");
const btn_borr_09 = document.querySelector("#btn_borr09");
const muestra_09 = document.querySelector("#mostrar_09");
function ejercicioNueve() {
  const num_09 = String(document.querySelector("#input_num_09"));
  const num_09valor = document.querySelector("#input_num_09").value;
  muestra_09.innerHTML = `${div_st1}El texto contiene ${num_09.length} carácteres <br/><em>${num_09valor}</em><br /><strong>${num_09valor}</strong><p style="color:red;">${num_09valor}</p><p style="font-size:1.2rem;">${num_09valor}</p><p style="text-decoration-line:line-through;">${num_09valor}</p></div>`;
}
const borrarEjer09 = () => {
  document.querySelector("#input_num_09").value = ``;
  muestra_09.innerHTML = ``;
  document.querySelector("#mostrar_09").style = "";
};
btn_09.onclick = ejercicioNueve;
btn_borr_09.onclick = borrarEjer09;

var muestra_10 = document.querySelector("#mostrar_10");
const btn_10 = document.querySelector("#btn_ejer10");
const btn_10b = document.querySelector("#btn_ejer10b");
const btn_10c = document.querySelector("#btn_ejer10c");
/* function ejercicioDiez() {
  muestra_10.innerHTML = `<div style="width:100%; height:100%;" id="ampolletaID" class="ampolleta"><div>`;
} */
const borrarAmp = () => {
  muestra_10.innerHTML = ``;
  muestra_10.classList.remove("ampolleta");
  muestra_10.classList.remove("ampolleta2");
};
var x = 0;
function ejercicioDiez() {
  borrarAmp();
  if (x == 0) {
    muestra_10.classList.remove("ampolleta");
    muestra_10.classList.add("ampolleta2");
    x = 1;
  } else {
    muestra_10.classList.remove("ampolleta2");
    muestra_10.classList.add("ampolleta");
    x = 0;
  }
}
btn_10.onclick = ejercicioDiez;

x = 0;
function ejercicioDiezb() {
  borrarAmp();
  if (x == 0) {
    muestra_10.innerHTML = `<img src="img/apagada.gif" alt="">`;
    x = 1;
  } else {
    muestra_10.innerHTML = `<img src="img/encendida.gif" alt="">`;
    x = 0;
  }
}
btn_10b.onclick = ejercicioDiezb;

function ejercicioDiezc() {
  var muestra_10c = document.getElementById("mostrar_10c");
  muestra_10c.classList.toggle("ampolleta3");
}
btn_10c.onclick = ejercicioDiezc;
