const btn1 = document.querySelector("#btn1");
const mostra = document.querySelector("#muestra");
const obtenerText = () => {
  fetch("./server/data.txt")
    .then((response) => {
      console.log(response);
      console.log(response.type);
      console.log(response.headers.get("Content-Type"));
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.url);

      return response.text();
    })
    .then((datos) => {
      console.log(datos);
      mostra.innerHTML = datos;
    })
    .catch((error) => {
      console.log(error);
    });
};

btn1.addEventListener("click", obtenerText);
