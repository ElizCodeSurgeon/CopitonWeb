 // script.js
// Placeholder for future JavaScript functions

// Example: Scroll animation on page load
window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.intro, .hero');
  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transition = 'opacity 1s ease-in-out';
    setTimeout(() => {
      el.style.opacity = 1;
    }, 300);
  });
});
