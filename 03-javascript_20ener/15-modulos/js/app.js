console.log(nombreCliente);
console.log(nombreCliente, ahorro);

// 1) Esto nos puede llevar a variables que se mezclen con otras en especial si el código es mantenido por múltiples personas, es voluminoso o también si decidimos implementar librerias...
// LA solución es agrupar cada archivo en lo que se conoce como un IIFE Immediately Invoked Function Expression
// Para mejorar esta forma de uso con las IIFE, usaremos módulos, que nos permite importar y exportar parte del código según nuestra necesidades: ejemplo de importación de datos desde el archivo cliente.js

/* import { nombreCliente } from "./cliente.js";
console.log(nombreCliente); */

/* import { nombreCliente, ahorro } from "./cliente.js";
console.log(nombreCliente);
console.log(ahorro); */

/* import { nombreCliente, ahorro, mostrarDatos } from "./cliente.js";
const cliente = mostrarDatos(nombreCliente, ahorro);
console.log(cliente);
 */
import { nombreCliente, ahorro, Cliente } from "./cliente.js";
const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.nombre);
console.log(cliente.ahorro);
console.log(cliente.mostrarDatos());
