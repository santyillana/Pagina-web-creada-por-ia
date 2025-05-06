document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hero h1, .hero p");
  elements.forEach((el, i) => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = "all 0.5s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, i * 300 + 3000); // después del splash
  });
});
