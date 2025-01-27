/* Estructura y prueba de WHILE */
let cont = 0; //AQUI se declara let cont
while (cont <= 5) {
  console.log(`repetición número: ${cont}`);
  cont++;
}
console.log("Valor final:" + cont);

/* Estructura y prueba de bucle FOR */
for (let cont = 0; cont <= 10; cont++) {
  console.log("repetición número:" + cont);
}
console.log("Valor final:" + cont); // Da el valor anterior, el obtenido en el bucle de While, ya que el "let cont" fue declarado fuera, luego hay otro "let cont" declarado dentro de "for" pero este SOLO pertenece a "for" y tendra esos valor SOLO dentro de ese "for".

/* Estructura y prueba de DO WHILE */
/* Ya que se estructura "DO { Acciones del bucle } WHILE (comprobación de veracidad)" Sirve para por ejemplo: recibir datos y luego ejecutar lo que quiero  */
let contad = 0;
do {
  console.log("repetición número:" + contad);
  contad++;
} while (contad <= 10);
console.log("Valor final:" + contad);
