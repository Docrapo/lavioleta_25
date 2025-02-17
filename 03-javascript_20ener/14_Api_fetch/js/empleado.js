const cargarJSONBtn = document.querySelector("#btn2");
const mostra2 = document.querySelector("#muestra");

const mostrarHTML2 = (resultado) => {
  mostra2.innerHTML = "";
  const usuario = `
 <p>ID: ${resultado.id}</p>
 <p>Empleado: ${resultado.nombre}</p>
 <p>Empresa: ${resultado.empresa}</p>
 <p>Trabajo: ${resultado.puesto}</p>`;
  mostra2.innerHTML = usuario;
};

const obtenerDatos = () => {
  fetch("./server/empleado.json")
    .then((response) => {
      console.log(response);
      console.log(response.type);
      console.log(response.headers.get("Content-Type"));
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.url);

      return response.json(); // Ve si lo puede convertir en un JSON  de verdad
    })
    .then((response) => {
      mostrarHTML2(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

cargarJSONBtn.addEventListener("click", obtenerDatos);
