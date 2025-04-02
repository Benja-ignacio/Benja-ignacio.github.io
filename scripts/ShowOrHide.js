const divContainer = document.querySelector(".comentarios");
const button = document.querySelector("#toggleButton");

// Detectar el idioma en función del archivo actual
const idioma = window.location.pathname.includes("-en") ? "en" : "es";

// Definir textos en ambos idiomas
const textos = {
  es: { mostrar: "Mostrar Comentarios", ocultar: "Ocultar Comentarios" },
  en: { mostrar: "Show Comments", ocultar: "Hide Comments" },
};

let Isclicked = true;

let ShowOrHide = function () {
  if (Isclicked) {
    divContainer.style.display = "block";
    button.textContent = textos[idioma].ocultar;

    Isclicked = false;
  } else {
    divContainer.style.display = "none";
    button.textContent = textos[idioma].mostrar;
    Isclicked = true;
  }
};
