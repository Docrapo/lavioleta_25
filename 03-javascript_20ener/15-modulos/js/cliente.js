/* const nombreCliente = "Juan";
let ahorro = 200;
 */
// Los IIFE son funciones que se ejecutan inmediatamente que son leidas...
//Esta forma evitará que estas variables definidas en este archivo se puedan mezclar con las de otros archivos... y su sintaxis es la siguiente...
/* (function () {
  const nombreCliente = "Juan";
  let ahorro = 200;
  // Evitamos que este código se mezcle con otras variables, el problema es que encapsula el código, y para hacerlo accesible desde otros archivos debemos elevar el ámbito de este código al window del navegador.

  window.nombreCliente = "Juan Alberto";
})();

 */
// Para no tener grandes cnatidades de código dentro de una IIFE, ni conflictos de ámbito son muy útiles los módulos y 2 plabras, export e import

export const nombreCliente = "Pepe";
export let ahorro = 200;

//Podemos exportar e importar todo tipo de datos, variables, constantes, funciones, arrays, objetos, classes...

export function mostrarDatos(nombre, ahorro) {
  return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

// Creación de una class (clase) modelo para construir objetos

// Siempre mayusculas al comienzo
export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }
  mostrarDatos() {
    return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
  }
}
