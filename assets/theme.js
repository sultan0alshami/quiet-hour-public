/**
 * Quiet Hour Theme - Main JavaScript
 */

(function() {
  'use strict';
  
  // Initialize theme when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initCart();
    initMobileMenu();
  });
  
  // Cart functionality
  function initCart() {
    const cartButtons = document.querySelectorAll('.add-to-cart, .btn-primary');
    cartButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        // Handle cart addition
        console.log('Add to cart clicked');
      });
    });
  }
  
  // Mobile menu toggle
  function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
      });
    }
  }
  
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
})();

