/**
 * Quiet Hour Theme - Main JavaScript
 */

(function() {
  'use strict';
  
  // Initialize theme when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    initCart();
    initMobileMenu();
    initSliders();
    initParallax();
    initFixedBanner();
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

  // Slider functionality
  function initSliders() {
    // Photos slider
    const photosSliders = document.querySelectorAll('[data-slider]');
    
    photosSliders.forEach(slider => {
      const slides = slider.querySelectorAll('.slide');
      if (slides.length === 0) return;
      
      let currentSlide = 0;
      const wrapper = slider.closest('.photos-slider-wrapper') || slider.closest('.photos-slider-section');
      const prevBtn = wrapper ? wrapper.querySelector('[data-prev]') : null;
      const nextBtn = wrapper ? wrapper.querySelector('[data-next]') : null;
      const dots = wrapper ? wrapper.querySelectorAll('.dot') : [];
      
      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.classList.remove('active');
          if (i === index) {
            slide.classList.add('active');
          }
        });
        
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
      }
      
      function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }
      
      function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      }
      
      if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
      }
      
      if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
      }
      
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          currentSlide = index;
          showSlide(currentSlide);
        });
      });
      
      // Auto-play (optional, can be disabled)
      let autoPlayInterval = null;
      function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
      }
      
      function stopAutoPlay() {
        if (autoPlayInterval) {
          clearInterval(autoPlayInterval);
        }
      }
      
      // Start auto-play on hover pause
      slider.addEventListener('mouseenter', stopAutoPlay);
      slider.addEventListener('mouseleave', startAutoPlay);
      startAutoPlay();
      
      // Initialize first slide
      showSlide(0);
    });
    
    // Products slider (horizontal scroll)
    const productsSliders = document.querySelectorAll('[data-products-slider]');
    
    productsSliders.forEach(slider => {
      const wrapper = slider.closest('.products-slider-wrapper') || slider.closest('.products-slider-section');
      const prevBtn = wrapper ? wrapper.querySelector('[data-prev]') : null;
      const nextBtn = wrapper ? wrapper.querySelector('[data-next]') : null;
      
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          slider.scrollBy({ left: -300, behavior: 'smooth' });
        });
      }
      
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          slider.scrollBy({ left: 300, behavior: 'smooth' });
        });
      }
    });
  }

  // Parallax effect
  function initParallax() {
    const parallaxSections = document.querySelectorAll('[data-parallax]');
    
    if (parallaxSections.length === 0) return;
    
    function updateParallax() {
      parallaxSections.forEach(section => {
        const background = section.querySelector('.parallax-background');
        if (!background) return;
        
        const rect = section.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        // Only apply parallax if section is in viewport
        if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
          background.style.transform = `translateY(${rate}px)`;
        }
      });
    }
    
    // Throttle scroll events for performance
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    });
    
    // Initial call
    updateParallax();
  }

  // Fixed banner close functionality
  function initFixedBanner() {
    const closeButtons = document.querySelectorAll('[data-close-banner]');
    
    closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const banner = this.closest('.fixed-banner');
        if (banner) {
          banner.style.display = 'none';
          // Store in sessionStorage to remember user's choice
          const bannerId = banner.getAttribute('data-banner-id') || 'default';
          sessionStorage.setItem('banner-closed-' + bannerId, 'true');
        }
      });
    });
    
    // Check sessionStorage on load
    document.querySelectorAll('.fixed-banner').forEach(banner => {
      const bannerId = banner.getAttribute('data-banner-id') || 'default';
      if (sessionStorage.getItem('banner-closed-' + bannerId) === 'true') {
        banner.style.display = 'none';
      }
    });
  }
})();

