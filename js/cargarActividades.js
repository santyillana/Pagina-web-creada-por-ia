// cargarActividades.js
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-actividades");

  fetch("data/actividades.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el archivo actividades.json");
      }
      return response.json();
    })
    .then(data => {
      renderizarActividades(data);
    })
    .catch(error => {
      console.error("Error al cargar las actividades:", error);
      contenedor.innerHTML = `<p class="error">No se pudieron cargar las actividades. Intenta más tarde.</p>`;
    });

  function renderizarActividades(actividades) {
    if (!actividades.length) {
      contenedor.innerHTML = "<p>No hay actividades disponibles por ahora.</p>";
      return;
    }

    const fragment = document.createDocumentFragment();

    actividades.forEach(actividad => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta-actividad", "fade-in");

      tarjeta.innerHTML = `
        <img src="${actividad.imagen}" alt="${actividad.titulo}" loading="lazy" class="img-actividad" />
        <div class="contenido-actividad">
          <h3>${actividad.titulo}</h3>
          <p><strong>📅 Fecha:</strong> ${actividad.fecha}</p>
          <p><strong>📍 Lugar:</strong> ${actividad.lugar}</p>
          <p>${actividad.descripcion}</p>
        </div>
      `;

      fragment.appendChild(tarjeta);
    });

    contenedor.appendChild(fragment);
  }
});
