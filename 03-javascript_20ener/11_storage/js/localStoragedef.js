/* Local Storage y sessioStorage 
Los objetos de almacenaje web localStorage y sessionStorage permiten guardar pares de clave/valor en el navegador
Ambos objetos de almacenaje proveen los mismos metodos y propiedades

API:

setItem(clave, valor) - guarda pareces clave/valor. 
getItem(clave) coge el valor de una clave
removeItem(clave) - borra una clave con su valor
clear()  - borra todo
key(indice) - coge la clave en una posicion determinada.
length -el numero de items almacenados
Utiliza Object.keys para conseguir todas las claves.


localStorage - sessionStorage.
Tanto la clave como el valor deben ser strings.
El limite es de un poco más de 5mb aprox, dependiendo del navegador.
Los datos están vincilados al origen (dominio /puerto/protocolos)
localStorage mantiene datos entre todas las pestañas y ventanas que tengan el mismo origen y sobrevive a reinicios del navegador. SessionStorage es solo accesible en una pestaña del navegador, incluyendo iframes del mismo origen 

localStorage: No expiran

sessionStorage 
Muere al cerrar la pestaña
*/

const boton = document.querySelector("#grabar");
const indice = document.querySelector("#clave");
const val = document.querySelector("#texto");
const cajadatos = document.querySelector("#cajadatos");

const eliminar = (clave) => {
  if (confirm("¿Estás seguro?")) {
    localStorage.removeItem(clave);
    mostrar();
  }
};

const eliminarTodo = () => {
  if (confirm("¿Seguro?")) {
    localStorage.clear();
    /* cajadatos.innerHTML = ""; */
    mostrar();
    cajadatos.innerHTML = "";
  }
};
const mostrar = () => {
  cajadatos.innerHTML = `<div><input type="button" onclick="eliminarTodo();" value="Eliminar Todo"></div>`;
  for (let f = 0; f < localStorage.length; f++) {
    let clave = localStorage.key(f);
    let valor = localStorage.getItem(clave);
    cajadatos.innerHTML += `<div> ${clave} - ${valor} <br /><input type="button" onclick="eliminar('${clave}')" value="Eliminar"></div>`;
  }
};
const iniciar = () => {
  boton.addEventListener("click", () => {
    let clave = indice.value;
    let valor = val.value;
    localStorage.setItem(clave, valor);
    indice.value = "";
    val.value = "";
    mostrar();
  });
};
addEventListener(
  "load",
  iniciar
); /* Se carga en el windows, no en el document */
