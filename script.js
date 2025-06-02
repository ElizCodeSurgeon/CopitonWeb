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






// contact.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const messageEl = document.getElementById('formMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple form validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      messageEl.textContent = 'Please fill in all fields.';
      messageEl.style.color = 'red';
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      messageEl.textContent = 'Please enter a valid email address.';
      messageEl.style.color = 'red';
      return;
    }

    // If all good, simulate form submission
    messageEl.textContent = 'Sending message...';
    messageEl.style.color = '#4caf50';

    // Simulate async submission with setTimeout
    setTimeout(() => {
      form.reset();
      messageEl.textContent = 'Thank you for contacting us! We will get back to you shortly.';
      messageEl.style.color = '#4caf50';
    }, 1500);
  });
});




