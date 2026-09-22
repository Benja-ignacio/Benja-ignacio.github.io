setInterval(() => {
  const chance = Math.random();
  if (chance < 0.1) {
    showVideo();
  }
}, 10000); // revisa cada 10 segundos

function showVideo() {
  const video = document.getElementById("foxy");
  window.scrollTo({ top: 0, behavior: "instant" }); // sube al inicio
  video.classList.remove("hidden");
  video.play();

  // ocultarlo de nuevo después de 1 segundos
  setTimeout(() => {
    video.classList.add("hidden");
    video.pause();
    video.currentTime = 0; // lo reinicia para la próxima vez
  }, 1000);
}
