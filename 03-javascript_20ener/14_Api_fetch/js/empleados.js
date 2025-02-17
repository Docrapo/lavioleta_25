const cargarJSONBtn3 = document.querySelector("#btn3");
const mostra3 = document.querySelector("#muestra");

const mostrarHTML3 = (empleados) => {
  mostra3.innerHTML = "";
  empleados.forEach((empleado) => {
    empleado = `
 <p>ID: ${empleado.id}</p>
 <p>Empleado: ${empleado.nombre}</p>
 <p>Empresa: ${empleado.empresa}</p>
 <p>Trabajo: ${empleado.puesto}</p> <hr />`;
    mostra3.innerHTML += empleado;
  });
};

const obtenerDatos3 = () => {
  fetch("./server/empleados.json")
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
      mostrarHTML3(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

cargarJSONBtn3.addEventListener("click", obtenerDatos3);
