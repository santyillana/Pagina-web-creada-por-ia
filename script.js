// === CARGAR PRODUCTOS DINÁMICAMENTE ===
document.addEventListener("DOMContentLoaded", () => {
  fetch("productos.json")
    .then((res) => res.json())
    .then((productos) => mostrarProductos(productos))
    .catch((err) => console.error("Error cargando productos:", err));
});

function mostrarProductos(productos) {
  const contenedor = document.getElementById("productos-grid");
  productos.forEach((producto) => {
    const card = document.createElement("div");
    card.className = "producto-card fade-in";

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" />
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <div class="etiquetas">
        ${producto.etiquetas.map((e) => `<span>${e}</span>`).join("")}
      </div>
    `;

    contenedor.appendChild(card);
  });
}

// === MODO OSCURO ===
const body = document.body;
const btnOscuro = document.getElementById("modo-oscuro");

// Establecer modo desde localStorage
if (localStorage.getItem("tema") === "oscuro") {
  body.setAttribute("data-tema", "oscuro");
}

btnOscuro.addEventListener("click", (e) => {
  e.preventDefault();
  const temaActual = body.getAttribute("data-tema");

  if (temaActual === "oscuro") {
    body.removeAttribute("data-tema");
    localStorage.setItem("tema", "claro");
  } else {
    body.setAttribute("data-tema", "oscuro");
    localStorage.setItem("tema", "oscuro");
  }
});

// === ANIMACIONES EN SCROLL ===
const secciones = document.querySelectorAll(".fade-in");

function animarScroll() {
  const trigger = window.innerHeight * 0.85;
  secciones.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add("activo");
    }
  });
}

window.addEventListener("scroll", animarScroll);
window.addEventListener("load", animarScroll);
