function otraAlerta() {
  window.confirm(
    "Esta ventana es una confirmación, apreta 'aceptar' para cerrarlo"
  );
}
var elVideo = document.getElementById("video1");
function reproducePara() {
  if (elVideo.paused) elVideo.play();
  else elVideo.pause();
}
function hacerGrande() {
  elVideo.width = 560;
}

function hacerPequenio() {
  elVideo.width = 320;
}

function hacerNormal() {
  elVideo.width = 420;
}
