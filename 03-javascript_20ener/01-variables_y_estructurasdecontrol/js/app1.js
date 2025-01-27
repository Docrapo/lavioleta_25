var nombre = "Contrenido"; //Variables de ámbito global que se puede redeclarar; su ámbito pertenece a toda la aplicación y una vez declarada, siempre ocupan memoria. VAR es por default
var nombre = "Contenido 2"; // Esto es redeclarar
nombre = "Contenido 3"; //Esto no es redeclarar, es solo asignarle otro valor, osea reasignar.
console.log(nombre);
let monitor = "Pantalla Ordenador 21 pulgadas";
// Inicializamos variable con valor de tipo let cuyo ambito es de bloque. Se entiende por bloque el juego de { } al que pertenece. Una vez usada queda eliminada, se libera la momoria. NO SE PUEDE REDECLARAR.

//let monitor = "Pantalla QUE?" //No se puede REDECLARAR...ejemplo
console.log(monitor);

/* var y let SI se pueden REASIGNAR */
monitor = "Pantalla de 26 pulgadas";
console.log(monitor);

// Podemos cambiar el tipo de dato
monitor = 20;
console.log(monitor);
monitor = true;
console.log(monitor);
monitor = null;
console.log(monitor);

/* Javascript es un languaje de tipo Dinámico, no se especifican tipos de datos cuando se crea la variable, sino que al asignar el valor.De tipo débil(Permite por ejemplo no acabar las sentencias con ";" y lo da por supuesto PERO SE DEBE HACER) */

let precio = 200;
console.log(precio);

/* También se puede inicializar una variable sin valor y asignarlo después */

let disponible;
console.log(disponible); // Entrega undefined QUE NO ES LO MISMO QUE UN null
disponible = true;
console.log(disponible);

/* Se pueden inicializar multuples variables a la vez */
let tipo = "sobreMesa",
  fabricante = "Sin nombre",
  valoracion = 5;
console.log(tipo);
console.log(fabricante);
console.log(valoracion);

/* Reglas de las variables */
/* Pueden tener letras, numeros, _ 
NO PUEDEN iniciar con numero */
let dias99;
let _01;
// let 9mes; // DA ERROR

// Nombrar variables con más una palabra
let nombreProducto = "Monitor 30p"; // CamelCase habitual en funciones, arreglos y variables
let nombre_producto = "Monitor 30pc"; // underscore habitual en variables
let NombreProducto = "Monitor 40dpi"; // Pascal case habitual en Objetos, Classes (OBJETOS siempre en mayuscula NORMA ESCRITA)
let nombreproducto = "Monitor 40px"; // habitual en variables
