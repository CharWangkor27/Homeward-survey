document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-menu');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
});


const isGitHubPages = window.location.hostname.includes('github.io');
if (isGitHubPages) {
  const repoName = window.location.pathname.split('/')[1]; // Extract repo name
  document.querySelectorAll('a[href^="/"]').forEach(link => {
    link.href = `/${repoName}${link.getAttribute('href')}`;
  });
}