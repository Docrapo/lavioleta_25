const cargarJSONBtn4 = document.querySelector("#btn4");
const mostra4 = document.querySelector("#muestra");

const mostrarHTML4 = (datos) => {
  mostra4.innerHTML = "";
  let html = "<h4>Usuarios picsum</h4>";
  datos.forEach((dato) => {
    const { author, download_url } = dato;

    html += `<p> Author: ${author}</p>
  <p>Imágen: <br /><img src="${download_url}" width="200" /></p><br/>
  <a href="${download_url}" target="new" > Descargar original</a>`;
  });
  mostra4.innerHTML = html;
};

const obtenerDatos4 = () => {
  /* fetch("./server/dbpictures.json") */
  fetch("https://picsum.photos/v2/list?page=2&limit=100")
    .then((response4) => {
      if (!response4.ok) throw new Error("Error en la solicitud");
      return response4.json(); // Ve si lo puede convertir en un JSON  de verdad
    })
    .then((response4) => {
      console.log(response4);
      /* console.log(response); */
      mostrarHTML4(response4);
    })
    .catch((error) => {
      console.log(error);
      mostra4.innerHTML = "<p>Error al cargar los datos del empleado</p>";
    });
};

cargarJSONBtn4.addEventListener("click", obtenerDatos4);
