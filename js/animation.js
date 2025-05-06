// animation.js
window.addEventListener('load', () => {
  const logo = document.querySelector('.intro-logo');
  gsap.to(logo, { opacity: 1, duration: 1, ease: 'power2.out' });
  gsap.to(logo, { opacity: 0, duration: 1, delay: 1, ease: 'power2.in', onComplete: showContent });
});

function showContent() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('main-content').style.visibility = 'visible';
}