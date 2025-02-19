const printHtml = document.querySelector("#print");
const mainHTML = document.querySelector(".cuerpo");
let imprimeEnHTML = "";
let formHTML = document.form_weather;
let btnEnviar = document.querySelector("#enviar_consulta");
let country, city;

const imagenHTML = (imagen_bg) => {
  let numRand = Math.floor(Math.random() * 51);
  mainHTML.style.backgroundImage = `url('${imagen_bg[numRand].download_url}')`;
};
const imprimirHTML = (datos) => {
  /* const data = JSON.parse(datos); */
  printHtml.innerHTML = "";
  let cielo = datos.weather[0].main;
  let new_t1 = document.createElement("p");
  let new_t2 = document.createElement("p");
  let new_t3 = document.createElement("p");
  let tempe = document.createTextNode(
    `Temperatura Actual: ${Math.floor(datos.main.temp - 273.15)}`
  );
  let tempMax = document.createTextNode(
    `Temperatura Máxima: ${Math.floor(datos.main.temp_max - 273.15)}`
  );
  let tempMin = document.createTextNode(
    `Temperatura min: ${Math.floor(datos.main.temp_min - 273.15)}`
  );
  new_t1.appendChild(tempe);
  new_t2.appendChild(tempMax);
  new_t3.appendChild(tempMin);
  /* imprimeEnHTML += `<p> ${tempe} ${tempMax} ${tempMin}</p>`; */

  printHtml.appendChild(new_t1);
  printHtml.appendChild(new_t2);
  printHtml.appendChild(new_t3);
};
const obtenerImagen = () => {
  fetch("https://picsum.photos/v2/list?page=2&limit=50")
    .then((responder) => {
      return responder.json();
    })
    .then((responder) => {
      imagenHTML(responder);
    })
    .catch((error) => {
      console.log(error);
      printHtml.innerHTML = "Imagen no encontrada";
    });
};
obtenerImagen();
const obtenerDatos = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=61b1ef1bbdead1137b27bd8addf995af`
  )
    .then((respuesta) => {
      console.log(respuesta);
      printHtml;
      console.log(respuesta.type);
      console.log(respuesta.headers.get("Content-Type"));
      console.log(respuesta.status);
      console.log(respuesta.statusText);
      console.log(respuesta.url);

      return respuesta.json();
    })
    .then((respuesta) => {
      console.log(respuesta);
      imprimirHTML(respuesta);
    })
    .catch((error) => {
      console.log(error);
      printHtml.innerHTML =
        "<p>Error al cargar los datos, Revisa el País y la ciudad ingresados</p>";
    });
};
/* obtenerDatos(); */
btnEnviar.addEventListener("click", () => {
  city = formHTML.ciudad.value;
  country = formHTML.paises.value;
  console.log(country);
  console.log(city);
  obtenerDatos();
});
