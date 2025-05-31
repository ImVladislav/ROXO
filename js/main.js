// Smooth scrolling
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};

// Mobile menu functionality
const initMobileMenu = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    burger.addEventListener('click', () => {
        // Toggle navigation
        nav.classList.toggle('nav-active');
        
        // Burger animation
        burger.classList.toggle('toggle');
        
        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
};

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initMobileMenu();
}); 