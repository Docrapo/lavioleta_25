/* console.log(confirmOpened); */
/* console.log(confirmOpened);
console.log(confirmOpened); */

/* let padreVentana = window.opener.document; */
/*console.log(padreVentana);
console.log(padreVentana.location.href);  */ // llamar a opener y usar location, permite trabajar con href y replace

/* let pruebaCondicional =
  padreVentana.querySelector(".confirmOpened").textContent;
console.log(pruebaCondicional);

if (pruebaCondicional == "yes") { */
let urlReplace = String(prompt("Ingresa una nueva URL"));
window.opener.location.replace(`http://${urlReplace}`);
/* } */

/* if (confirmOpened === 2) {
  let urlReplace = String(prompt("Ingresa una nueva URL"));
  window.location.replace(`http://${urlReplace}`);
} */
