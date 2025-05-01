// main.js – Funciones generales del sitio Combopitt

document.addEventListener("DOMContentLoaded", () => {
  activarStickyHeader();
  manejarMenuResponsive();
  manejarScrollSuave();
  cerrarMenuEnClick();
});

// 🧷 Header Sticky al hacer scroll
function activarStickyHeader() {
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);
  });
}

// 🍔 Menú responsive para móviles
function manejarMenuResponsive() {
  const btnToggle = document.querySelector("#menu-toggle");
  const nav = document.querySelector("nav");

  btnToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    btnToggle.classList.toggle("open");
  });
}

// 🧭 Scroll suave a secciones internas
function manejarScrollSuave() {
  document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener("click", e => {
      const destino = document.querySelector(enlace.getAttribute("href"));
      if (destino) {
        e.preventDefault();
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// 🧹 Cierra menú móvil al hacer click en un enlace
function cerrarMenuEnClick() {
  const enlaces = document.querySelectorAll("nav a");
  const nav = document.querySelector("nav");
  const btnToggle = document.querySelector("#menu-toggle");

  enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
      if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        btnToggle.classList.remove("open");
      }
    });
  });
}
