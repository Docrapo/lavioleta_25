import { mostra } from "./text.js";
export const btn3a = document.querySelector("#un_empl");

export let input_valor = Number(document.querySelector("#empleado_id").value);
console.log(input_valor);

const mostrarHTMLID = (empleado) => {
  mostra.innerHTML = `
 <p>ID: ${empleado.id}</p>
 <p>Empleado: ${empleado.nombre}</p>
 <p>Empresa: ${empleado.empresa}</p>
 <p>Trabajo: ${empleado.puesto}</p>`;
};

export const obtenerDatos = (id) => {
  fetch("./server/empleados.json")
    .then((response) => {
      console.log(response);
      console.log(response.type);
      console.log(response.headers.get("Content-Type"));
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.url);
      if (!response.ok) throw new Error("Error en la solicitud");
      return response.json(); // Ve si lo puede convertir en un JSON  de verdad
    })
    .then((empleados) => {
      const empleado = empleados.find((emp) => emp.id === id);
      /* console.log(response); */
      mostrarHTMLID(empleado);
    })
    .catch((error) => {
      console.log(error);
      mostra.innerHTML = "<p>Error al cargar los datos del empleado</p>";
    });
};

/* btn3a.addEventListener("click", () => {
  input_valor = Number(document.querySelector("#empleado_id").value);
  obtenerDatosID(input_valor);
}); */
