// Scroll reveal para cada sección
document.addEventListener("DOMContentLoaded", () => {
  const secciones = document.querySelectorAll("section");
  const options = {
    threshold: 0.1
  };

  const reveal = (entry, observer) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => reveal(e, obs));
  }, options);

  secciones.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});
