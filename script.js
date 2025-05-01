// Animaciones de scroll
const secciones = document.querySelectorAll('.hidden');

const mostrarSeccion = () => {
  const scrollTop = window.scrollY;
  const alturaVentana = window.innerHeight;

  secciones.forEach(sec => {
    const top = sec.offsetTop;

    if (scrollTop + alturaVentana > top + 100) {
      sec.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', mostrarSeccion);
document.addEventListener('DOMContentLoaded', mostrarSeccion);
