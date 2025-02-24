const d = document;
const btnUsuario = d.querySelector("#usuario");
const imprimir = d.querySelector("#contenido");
const fragmento = d.createDocumentFragment();
const formTemplate = d.querySelector("#form-template").content;
const template = d.querySelector("#crud-template").content;
/* const tabla = formTemplate.querySelector(".crud-table tbody"); */
/* const tabla2 = formTemplate.querySelector(".crud-table");
console.log(tabla); */
/* console.log(tabla2); */

const imprimireEnHTML = (traerDatos) => {
  imprimir.innerHTML = "";
  const formClone = d.importNode(formTemplate, true); // clono el formTemplate
  imprimir.appendChild(formClone);
  const tabla = d.querySelector(".crud-table tbody");
  tabla.innerHTML = "";
  traerDatos.forEach((dato) => {
    let clone = d.importNode(template, true);
    clone.querySelector(".id").textContent = dato.id;
    clone.querySelector(".name").textContent = dato.nombre;
    clone.querySelector(".empresa").textContent = dato.empresa;
    clone.querySelector(".puesto").textContent = dato.puesto;
    clone
      .querySelector(".edit")
      .addEventListener("click", () => editarEmpleado(dato));
    clone
      .querySelector(".delete")
      .addEventListener("click", () => eliminarEmpleado(dato.id));

    fragmento.appendChild(clone);
  });
  tabla.appendChild(fragmento);
};
const editarEmpleado = (dato) => {
  const form = d.querySelector("#crud-form");
  form.id.value = dato.id; // Asigna id al campo oculto
  form.nombre.value = dato.nombre;
  form.empresa.value = dato.empresa;
  form.puesto.value = dato.puesto;
};

const eliminarEmpleado = (id) => {
  if (confirm("¿Estás seguro de eliminar este empleado?")) {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error al eliminar el empleado");
        return response.json();
      })
      .then(() => {
        alert("Empleado eliminado correctamente");
        obtListaEmpleados(); //Recarga la Lista
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }
};
d.addEventListener("submit", async (e) => {
  if (e.target.matches("#crud-form")) {
    e.preventDefault();
    let empleado = {
      nombre: e.target.nombre.value,
      empresa: e.target.empresa.value,
      puesto: e.target.puesto.value,
    };
    let url = "http://localhost:3000/users";
    let method = "POST";
    // Si hay un id es una edicion
    if (e.target.id.value) {
      url += `/${e.target.id.value}`;
      method = "PUT";
    } else {
      let ultimoId;
      await fetch("http://localhost:3000/users")
        .then((respuesta) => {
          if (!respuesta.ok) throw new Error("Error en la entrada");
          return respuesta.json();
        })
        .then((data) => {
          ultimoId = Number(data.at(-1).id) + 1;
        })
        .catch((error) => {
          console.error("Error", error);
        });
      empleado = {
        id: String(ultimoId),
        nombre: e.target.nombre.value,
        empresa: e.target.empresa.value,
        puesto: e.target.puesto.value,
      };
    }
    try {
      let res = await fetch(url, {
        method: method,
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(empleado),
      });
      if (!res.ok) throw new Error("Error en la solicitud");
      alert(
        `Empleado ${e.target.id.value ? "editado" : "añadido"} correctamente`
      );
      obtListaEmpleados();
      e.target.reset();
      e.target.id.value = "";
    } catch (error) {
      console.error("Error:", error);
    }
  }
});

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
