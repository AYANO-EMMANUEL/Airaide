// Projects page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const navbarToggler = document.querySelector('.navbar-toggler-mobile');
  const navMenu = document.querySelector('.nav-menu');
  
  if (navbarToggler) {
    navbarToggler.addEventListener('click', function() {
      if (navMenu) {
        navMenu.classList.toggle('d-flex');
        navMenu.classList.toggle('mobile-menu-open');
      }
    });
  }
});




