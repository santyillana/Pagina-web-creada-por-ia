
fetch('data/productos.json')
  .then(res => res.json())
  .then(productos => {
    const contenedor = document.getElementById("productos-lista");
    productos.forEach(prod => {
      const card = document.createElement("div");
      card.className = "producto-card";
      card.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
      `;
      contenedor.appendChild(card);
    });
  });
