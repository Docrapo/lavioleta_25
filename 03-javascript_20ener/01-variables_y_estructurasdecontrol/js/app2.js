/* Veamos otro tipo de formas de crear variables, variables de tipo constante: const */

/* Existen pocas diferencias entre let y const, cuando hablamos de datos primitivos: En una variable const su vlor NO PUEDE ser REASIGNADO, debe inicializarse con un valor, nunca undefined, suele escribirse en UPPERCASE. */

/* const PREIO; NUNCA PUEDE declararse vacio o undefined */
const PRECIO = 20;
console.log(PRECIO);

const mo = "Pantalla 19 Pulgadas";
console.log(mo);
/* mo = "Monitor 23 pulgadas"; NO SE PUEDE REASIGNAR  */
console.log(mo);

/* Existen otras diferencias entre const y let especialmente cuando se trabaja con arrays y objetos, osea, con datos complejos. 
Mientras mantengan la estructura del contenido: o referencia pueden sufrir modificaciones en los valores. 
RECUERDA: las variables con const no se pueden reasignar y tampoco pueden iniciar sin un valor

EJEMPLO

const nom = function nombre() {
  let nombre = prompt("Introduce tu nombre");
  alert(nombre + " es mi nombre");
  alert(
    `${nombre} es mi nombre`
  );
  console.log(nombre + " es mi nombre");
  console.log(`${nombre} es mi nombre`);
  document.querySelector("#mostrar3").innerHTML = "<h3>" + nombre + "</h3>";
  document.querySelector("#mostrar4").innerHTML = `<h2> ${nombre} </h2>`;
};
*/
