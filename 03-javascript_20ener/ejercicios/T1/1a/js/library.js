const verOperacion = document.querySelector(".ventana_operacion");

function recargarHtml() {
  let recargar = confirm("Volver a cargar la app?");
  if (recargar) {
    location.reload();
  } else {
  }
}
