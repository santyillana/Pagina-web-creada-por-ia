// cargarProductos.js – Carga y renderizado dinámico del catálogo de productos

document.addEventListener('DOMContentLoaded', () => {
  const contenedorProductos = document.getElementById('contenedor-productos');
  const filtros = document.getElementById('filtros-etiquetas');

  let productos = [];

  // Cargar productos desde JSON
  fetch('data/productos.json')
    .then(res => res.json())
    .then(data => {
      productos = data;
      mostrarProductos(productos);
      generarFiltros(productos);
    })
    .catch(err => console.error('Error al cargar productos:', err));

  // Mostrar productos en el contenedor
  function mostrarProductos(lista) {
    contenedorProductos.innerHTML = '';

    if (lista.length === 0) {
      contenedorProductos.innerHTML = '<p>No se encontraron productos con ese filtro.</p>';
      return;
    }

    lista.forEach(producto => {
      const card = document.createElement('div');
      card.className = 'tarjeta-producto animar-entrada';
      card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" class="producto-img">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <span class="precio">$${producto.precio}</span>
      `;
      contenedorProductos.appendChild(card);
    });
  }

  // Generar filtros desde etiquetas únicas
  function generarFiltros(lista) {
    const etiquetas = new Set();

    lista.forEach(p => p.etiquetas.forEach(et => etiquetas.add(et)));

    filtros.innerHTML = '<button class="filtro-activo" data-etiqueta="todos">Todos</button>';

    etiquetas.forEach(etiqueta => {
      const btn = document.createElement('button');
      btn.textContent = etiqueta;
      btn.setAttribute('data-etiqueta', etiqueta);
      filtros.appendChild(btn);
    });

    filtros.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', e => {
        const etiqueta = e.target.getAttribute('data-etiqueta');

        filtros.querySelectorAll('button').forEach(b => b.classList.remove('filtro-activo'));
        e.target.classList.add('filtro-activo');

        if (etiqueta === 'todos') {
          mostrarProductos(productos);
        } else {
          const filtrados = productos.filter(p => p.etiquetas.includes(etiqueta));
          mostrarProductos(filtrados);
        }
      });
    });
  }
});
