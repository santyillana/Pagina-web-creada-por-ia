// animaciones.js – Animaciones de entrada al hacer scroll usando ScrollReveal

// Configuración general
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '40px',
  duration: 1000,
  delay: 200,
  reset: false, // true si quieres que se repita al volver a hacer scroll
  easing: 'ease-in-out',
  opacity: 0,
});

// Animaciones por clase
sr.reveal('.animar-entrada', { interval: 200 }); // elementos con clase común
sr.reveal('.animar-arriba', { origin: 'top' });
sr.reveal('.animar-izquierda', { origin: 'left' });
sr.reveal('.animar-derecha', { origin: 'right' });

// Puedes añadir más según la estructura de tu HTML:
sr.reveal('.cta-principal', { delay: 300 });
sr.reveal('.tarjeta-producto', { interval: 150 });
sr.reveal('.galeria-item', { interval: 100 });
sr.reveal('.bloque-info', { delay: 200, origin: 'top' });
