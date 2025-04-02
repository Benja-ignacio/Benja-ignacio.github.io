const divContainer = document.querySelector(".comentarios");
const button = document.querySelector("#toggleButton");

let Isclicked = true;

let ShowOrHide = function () {
  if (Isclicked) {
    divContainer.style.display = "block";
    button.textContent = "Ocultar Comentarios";

    Isclicked = false;
  } else {
    divContainer.style.display = "none";
    button.textContent = "Mostrar Comentarios";
    Isclicked = true;
  }
};
