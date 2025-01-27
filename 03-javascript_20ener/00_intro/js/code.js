/* alert("PopUp desde un javascript escrito desde un archivo js externo"); */
document.querySelector("#mostrar").innerHTML =
  '<h2>Texto escrito dentro de la id="mostrar" desde un js externo.'; /* Consulta de un selector... entra en su HTML este método es más actual y rápido*/
document.getElementById("mostrar2").innerHTML =
  '<h3 style="font-family:Helvetica,sans-serif">Texto escrito dentro de la id="mostrar2" desde un js externo';
const nom = function nombre() {
  let nombre = prompt("Introduce tu nombre");
  /* Promp metodo nativo de window, por tanto se puede prescindir de window.prompt y dejar solo prompt */
  alert(nombre + " es mi nombre");
  alert(
    `${nombre} es mi nombre`
  ); /* template string, es más correcto para texto */
  console.log(nombre + " es mi nombre");
  console.log(`${nombre} es mi nombre`);
  document.querySelector("#mostrar3").innerHTML = "<h3>" + nombre + "</h3>";
  document.querySelector("#mostrar4").innerHTML = `<h2> ${nombre} </h2>`;
};
let btn =
  document.querySelector(
    "#btn"
  ); /* Capturo el buton con id btn y lo traigo a mi code js */
btn.onclick = nom;
