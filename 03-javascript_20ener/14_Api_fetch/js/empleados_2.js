const cargarJSONBtnID = document.querySelector("#un_empl");
const mostraID = document.querySelector("#muestra");
let input_valor = Number(document.querySelector("#empleado_id").value);
console.log(input_valor);

const mostrarHTMLID = (empleado) => {
  mostraID.innerHTML = `
 <p>ID: ${empleado.id}</p>
 <p>Empleado: ${empleado.nombre}</p>
 <p>Empresa: ${empleado.empresa}</p>
 <p>Trabajo: ${empleado.puesto}</p>`;
};

const obtenerDatosID = (id) => {
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
      mostraID.innerHTML = "<p>Error al cargar los datos del empleado</p>";
    });
};

cargarJSONBtnID.addEventListener("click", () => {
  input_valor = Number(document.querySelector("#empleado_id").value);
  obtenerDatosID(input_valor);
});
