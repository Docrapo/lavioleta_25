let nota,
  error = "",
  result = "";
do {
  nota = Number(
    prompt(error + "Introduce una nota entre 0 y 10")
      .trim()
      .replace(",", ".")
  );
  error = "ERRORUM. ";
} while (!Number(nota >= 0 && nota <= 10) || nota == "");
alert(nota);

if (nota >= 0 && nota < 5) {
  result = "Suspenso";
} else if (nota >= 5 && nota < 6) {
  result = "Aprobado";
} else if (nota >= 6 && nota < 7) {
  result = "Bien";
} else if (nota >= 7 && nota < 9) {
  result = "Notable";
} else {
  result = "Sobresaliente";
}
alert(result);

let nota1,
  nota2,
  media = "";
error = "";
result = "";
do {
  nota1 = Number(
    prompt("Introduce una nota entre 0 y 10").trim().replace(",", ".")
  );

  error = "ERRORUM. ";
} while (!Number(nota1 >= 0 && nota1 <= 10) || nota1 == "");
alert(nota1);

error = "";

do {
  nota2 = Number(
    prompt("Introduce otra nota entre 0 y 10").trim().replace(",", ".")
  );
  error = "ERRORUM. ";
} while (!Number(nota2 >= 0 && nota2 <= 10) || nota2 == "");
alert(nota2);
nota1 = Number(nota1);
nota2 = Number(nota2);

media = (nota1 + nota2) / 2;
alert(media);

if (media >= 0 && media < 5) {
  result = "Suspenso";
} else if (media >= 5 && media < 6) {
  result = "Aprobado";
} else if (media >= 6 && media < 7) {
  result = "Bien";
} else if (media >= 7 && media < 9) {
  result = "Notable";
} else {
  result = "Sobresaliente";
}
alert(result);
