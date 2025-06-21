document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-menu');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
});
