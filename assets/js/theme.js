function setTheme(mode) {
  if (mode === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else if (mode === "light") {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
  updateThemeImage();
}

// Al cargar la página, aplica el tema guardado
(function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.documentElement.classList.add("dark");
  } else if (saved === "light") {
    document.documentElement.classList.remove("dark");
  }
  updateThemeImage();
})();

function updateThemeImage() {
  const img = document.getElementById("theme-img");
  const isDark = document.documentElement.classList.contains("dark");
  img.src = isDark
    ? "assets/images/Rin.png"
    : "assets/images/peeking_from_right_anime.png";
}
