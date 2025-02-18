import { mostra } from "./text.js";
export const btn2 = document.querySelector("#btn2");

const mostrarHTML2 = (resultado) => {
  mostra.innerHTML = "";
  const usuario = `
 <p>ID: ${resultado.id}</p>
 <p>Empleado: ${resultado.nombre}</p>
 <p>Empresa: ${resultado.empresa}</p>
 <p>Trabajo: ${resultado.puesto}</p>`;
  mostra.innerHTML = usuario;
};

export const obtenerDatos = () => {
  fetch("./server/empleado.json")
    .then((response) => {
      // response es solo un nombre para asignarle a lo que entrega o recoge el fetch
      console.log(response);
      console.log(response.type);
      console.log(response.headers.get("Content-Type"));
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.url);
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      } // VER em consola es el "true" o "false" del OK ... del status
      return response.json(); // Ve si lo puede convertir en un JSON  de verdad
    })
    .then((response) => {
      mostrarHTML2(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

/* btn2.addEventListener("click", obtenerDatos); */
