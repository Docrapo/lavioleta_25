const d = document;
const btnUsuario = d.querySelector("#usuario");
const imprimir = d.querySelector("#contenido");
const fragmento = d.createDocumentFragment();
const formTemplate = d.querySelector("#form-template").content;
const template = d.querySelector("#crud-template").content;
const tabla = formTemplate.querySelector(".crud-table tbody");
const tabla2 = formTemplate.querySelector(".crud-table");
console.log(tabla);
/* console.log(tabla2); */

const imprimireEnHTML = (traerDatos) => {
  tabla.innerHTML = "";
  traerDatos.forEach((dato) => {
    let clone = d.importNode(template, true);
    clone.querySelector(".id").textContent = dato.id;
    clone.querySelector(".name").textContent = dato.name;
    clone.querySelector(".empresa").textContent = dato.empresa;
    clone.querySelector(".puesto").textContent = dato.puesto;
    clone.querySelector(".edit");
    clone.querySelector(".delete");

    fragmento.appendChild(clone);
  });
  tabla.appendChild(fragmento);
  imprimir.appendChild(formTemplate);
};

const obtListaEmpleados = () => {
  fetch("http://localhost:3000/users")
    .then((respuesta) => {
      if (!respuesta.ok) throw new Error("Error en la solicitud");
      return respuesta.json();
    })
    .then((data) => {
      console.log(data);
      imprimireEnHTML(data);
    })
    .catch((error) => {
      console.log("Error al cargar los empleados.", error);
    });
};

btnUsuario.addEventListener("click", obtListaEmpleados);
