// modoOscuro.js – Alternancia entre modo claro/oscuro con localStorage

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkmode-toggle");
  const html = document.documentElement;

  // Inicializar según preferencia guardada
  const modoGuardado = localStorage.getItem("modo");
  if (modoGuardado === "oscuro") {
    html.classList.add("modo-oscuro");
    toggleBtn.classList.add("activo");
  }

  // Escuchar click en botón de modo
  toggleBtn.addEventListener("click", () => {
    html.classList.toggle("modo-oscuro");
    const estaOscuro = html.classList.contains("modo-oscuro");

    // Guardar preferencia
    localStorage.setItem("modo", estaOscuro ? "oscuro" : "claro");

    // Animar botón (opcional)
    toggleBtn.classList.toggle("activo");
  });
});
