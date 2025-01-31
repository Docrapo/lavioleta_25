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

const muestraEjer1a = document.querySelector("#mostrar_ejer1a");
const muestraEjer1b = document.querySelector("#mostrar_ejer1b");
const muestraEjer1d = document.querySelector("#mostrar_ejer1d");
const muestraEjer1c = document.querySelector("#mostrar_ejer1c");
const muestraEjer1e = document.querySelector("#mostrar_ejer1e");
const botonEjer1 = document.querySelector("#boton_ej1");
console.log(meses.length);
const mesesOrd = meses.slice();
mesesOrd.sort();
const mesesInv = meses.slice();
mesesInv.reverse();
console.log(meses);
console.log(mesesOrd);
const ejercicioUno = () => {
  /* for (let y = 0; meses.length > y; y++) {
    let eleme = document.createElement("li");
    console.log(eleme);
    console.log(meses[y]);
    let contenido = document.createTextNode(meses[y]);
    eleme.appendChild(contenido);
    muestraEjer1a.appendChild(eleme);
  } */
  for (let y = 0; meses.length > y; y++) {
    let eleme = document.createElement("li");
    let eleme2 = document.createElement("li");
    let eleme3 = document.createElement("li");
    let eleme4 = document.createElement("a");
    let eleme5 = document.createElement("a");
    let contenido = document.createTextNode(meses[y]);
    eleme.appendChild(contenido);
    muestraEjer1a.appendChild(eleme);
    let contenido2 = document.createTextNode(mesesOrd[y]);
    eleme2.appendChild(contenido2);
    muestraEjer1b.appendChild(eleme2);
    let contenido3 = document.createTextNode(mesesInv[y]);
    eleme3.appendChild(contenido3);
    muestraEjer1d.appendChild(eleme3);
    let contenido4 = document.createTextNode(meses[y]);
    eleme4.appendChild(contenido4);
    eleme4.append("-");
    muestraEjer1c.appendChild(eleme4);
    let contenido5 = document.createTextNode(meses[y]);
    eleme5.appendChild(contenido5);
    eleme5.append(" ‣ ");
    muestraEjer1e.appendChild(eleme5);
  }

  /*     let br = document.createElement("br"); */
  /* console.log(eleme);
    console.log(meses[y]); 
    let contenido = document.createTextNode(meses[y]);
    eleme.appendChild(contenido);

    /* let contx = document.createTextNode(meses[y]);
    let contenido1a = eleme.appendChild(contx); 
    /*    let contenido1b = eleme.appendChild(document.createTextNode(mesesOrd[y])); 
    muestraEjer1a.appendChild(contenido);
    /*     muestraEjer1b.appendChild(contenido1b); 
  } */
};

botonEjer1.onclick = ejercicioUno;
