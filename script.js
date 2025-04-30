document.addEventListener("DOMContentLoaded", () => {
    fetch("productos.json")
        .then(res => res.json())
        .then(productos => {
            const container = document.getElementById("productos-container");
            productos.forEach(p => {
                const card = document.createElement("div");
                card.className = "producto-card";
                card.innerHTML = `
                    <h3>${p.nombre}</h3>
                    <p>${p.descripcion}</p>
                    <strong>${p.precio}</strong>
                `;
                container.appendChild(card);
            });
        });
});