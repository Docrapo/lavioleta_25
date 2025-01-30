const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const muestraEjer1 = document.querySelector("#mostrar_ejer1");
const botonEjer1 = document.querySelector("#boton_ej1");
console.log(meses.length);
const ejercicioUno = () => {
  for (let y = 0; meses.length > y; y++) {
    let eleme = document.createElement("li");
    console.log(eleme);
    console.log(meses[y]);
    let contenido = document.createTextNode(meses[y]);
    eleme.appendChild(contenido);
    muestraEjer1.appendChild(eleme);
  }
};

botonEjer1.onclick = ejercicioUno;
