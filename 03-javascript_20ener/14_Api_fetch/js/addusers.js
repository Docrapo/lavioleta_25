const cargarJSONBtn5 = document.querySelector("#btn5");
const mostra5 = document.querySelector("#muestra");
let x = 0;
const mostrarHTML5 = (datos) => {
  mostra5.innerHTML = "";
  let html = "";
  datos.results.forEach((dato) => {
    x++;
    const { name, picture, phone, location } = dato;
    html += `
   <div class="perfiles">
   <div class="id">${x}</div>
   <div class="img"><img src="${picture.large}" /></div>
   <div class="txt"><h4><strong>${name.title} ${name.first} ${name.last}</strong></h4><p>${location.timezone.description}</p><p>${location.city}</p><p>${phone}</p></div>
   </div>`;
  });
  mostra5.innerHTML = html;
};

const obtenerDatos5 = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then((respuesta) => {
      if (!respuesta.ok) throw new Error("Error en la solicitud");
      return respuesta.json();
    })
    .then((respuesta) => {
      console.log(respuesta);
      mostrarHTML5(respuesta);
    })
    .catch((error) => {
      console.log(error);
      mostrarHTML5.innerHTML = "<p>Error al cargar los datos del empleado</p>";
    });
};

cargarJSONBtn5.addEventListener("click", obtenerDatos5);
