// Services page JavaScript

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggle = item.querySelector('.faq-toggle');
    
    // Initially hide all answers except the first one (optional)
    if (item !== faqItems[0]) {
      answer.style.display = 'none';
    } else {
      toggle.textContent = '−';
    }
    
    question.addEventListener('click', function() {
      const isOpen = answer.style.display !== 'none';
      
      // Close all other FAQs
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.querySelector('.faq-answer').style.display = 'none';
          otherItem.querySelector('.faq-toggle').textContent = '+';
        }
      });
      
      // Toggle current FAQ
      if (isOpen) {
        answer.style.display = 'none';
        toggle.textContent = '+';
      } else {
        answer.style.display = 'block';
        toggle.textContent = '−';
      }
    });
  });
  
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




