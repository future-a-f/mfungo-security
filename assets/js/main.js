// Main JavaScript file for Mfungo website

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarNav = document.getElementById('navbarNav');
    
    if (navbarToggle && navbarNav) {
        const setExpanded = (isExpanded) => {
            navbarToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        };

        // Ensure deterministic initial state
        setExpanded(navbarNav.classList.contains('active'));

        navbarToggle.addEventListener('click', function() {
            navbarNav.classList.toggle('active');
            setExpanded(navbarNav.classList.contains('active'));
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navbarToggle && navbarNav) {
            const isClickInside = navbarToggle.contains(event.target) || navbarNav.contains(event.target);
            
            if (!isClickInside && navbarNav.classList.contains('active')) {
                navbarNav.classList.remove('active');
                navbarToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Form validation enhancements
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
    });
});

// Field validation function
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    const isRequired = field.hasAttribute('required');
    
    // Remove previous error state
    field.classList.remove('error');
    const errorMessage = field.parentNode.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
    
    // Check if required and empty
    if (isRequired && !value) {
        showFieldError(field, `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`);
        return false;
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }
    
    return true;
}

// Show field error
function showFieldError(field, message) {
    field.classList.add('error');
    
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message text-red-500 text-sm mt-1';
    errorElement.textContent = message;
    
    field.parentNode.appendChild(errorElement);
}

// Utility functions
const Utils = {
    // Debounce function
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Throttle function
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Get viewport width
    getViewportWidth: function() {
        return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    },
    
    // Get viewport height
    getViewportHeight: function() {
        return Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    },
    
    // Check if element is in viewport
    isInViewport: function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    // Scroll to top
    scrollToTop: function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
};

// Scroll animations
const ScrollAnimations = {
    elements: [],
    
    init: function() {
        this.elements = document.querySelectorAll('[data-scroll-animation]');
        this.checkElements();
        
        window.addEventListener('scroll', Utils.throttle(() => {
            this.checkElements();
        }, 100));
    },
    
    checkElements: function() {
        this.elements.forEach(element => {
            if (Utils.isInViewport(element)) {
                element.classList.add('animated');
            }
        });
    }
};

// Initialize scroll animations
if (document.querySelectorAll('[data-scroll-animation]').length > 0) {
    ScrollAnimations.init();
}

// Console welcome message
console.log('%c🚀 Welcome to Mfungo!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with passion and innovation', 'color: #64748b; font-size: 14px;');
