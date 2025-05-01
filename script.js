fetch('productos.json')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('productos-lista');
        data.forEach(producto => {
            const div = document.createElement('div');
            div.className = 'producto';
            div.innerHTML = `
                <img src="images/${producto.imagen}" alt="${producto.nombre}" style="width:100%">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
            `;
            container.appendChild(div);
        });
    });
