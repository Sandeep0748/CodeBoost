// CodeBoost Landing Page - JavaScript

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;

// Check if dark mode preference exists in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    htmlElement.classList.add('dark');
    updateDarkModeIcon();
}

darkModeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    
    // Save preference
    if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
    
    updateDarkModeIcon();
});

function updateDarkModeIcon() {
    const icon = darkModeToggle.querySelector('i');
    if (htmlElement.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all fade-in sections
const fadeInSections = document.querySelectorAll('.fade-in-section');
fadeInSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(section);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 70;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});

// Counter animation for stats (optional)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// CTA button ripple effect
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
        ripple.style.pointerEvents = 'none';
        ripple.style.transform = 'translate(-50%, -50%)';
        
        this.appendChild(ripple);
        
        // Animate ripple
        ripple.animate([
            { width: '0px', height: '0px', opacity: 1 },
            { width: '500px', height: '500px', opacity: 0 }
        ], {
            duration: 600,
            easing: 'ease-out'
        });
        
        // Remove ripple after animation
        setTimeout(() => ripple.remove(), 600);
    });
});

// Parallax scrolling effect (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.parallax || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add scroll spy for active navigation link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-blue-600', 'dark:text-blue-400');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('text-blue-600', 'dark:text-blue-400');
            }
        });
    });
}

updateActiveNavLink();

// Form validation helper (for future contact form)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Prevent default form submission and show success message
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted');
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Alt + D for dark mode toggle
    if (e.altKey && e.key === 'd') {
        darkModeToggle.click();
    }
    
    // Esc to close mobile menu
    if (e.key === 'Escape') {
        mobileMenu.classList.add('hidden');
    }
});

// Add loading animation
window.addEventListener('load', () => {
    console.log('CodeBoost Landing Page Loaded Successfully!');
    document.body.style.opacity = '1';
});

// Performance optimization: lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('fade-in');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Initialize AOS-like animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Trigger animations on any dynamically added elements
    const newElements = document.querySelectorAll('.fade-in-section');
    newElements.forEach(el => {
        observer.observe(el);
    });
});

// Utility function to add animation class
function animateElement(element, animationName, duration = 1000) {
    element.style.animation = `${animationName} ${duration}ms ease-out`;
    setTimeout(() => {
        element.style.animation = '';
    }, duration);
}

// Export functions for potential use in other scripts
window.CodeBoost = {
    validateEmail,
    animateElement,
    toggleDarkMode: () => darkModeToggle.click()
};
