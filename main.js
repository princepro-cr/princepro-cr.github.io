// main.js

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const navLinks = document.querySelectorAll('.nav-link');
const statNumbers = document.querySelectorAll('.stat-number');

// Typing Effect for Hero Subtitle
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;
    
    const texts = ['Full-Stack Developer', 'Mobile Developer', 'Problem Solver', 'IT Graduate'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    
    function typeEffect() {
        const currentText = texts[textIndex];
        
        if (!isDeleting && !isPaused) {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                isPaused = true;
                setTimeout(() => {
                    isPaused = false;
                    isDeleting = true;
                }, 2000);
            }
        } else if (isDeleting && !isPaused) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
        }
        
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
    
    // Start typing effect after a brief delay
    setTimeout(typeEffect, 1000);
}

// Toggle Mobile Menu
function initMobileMenu() {
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// Back to Top Button
function initBackToTop() {
    if (!backToTop) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// CV Download Tracking
function initCVDownloadTracking() {
    document.querySelectorAll('a[href*="Promise_Semosa_CV.pdf"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Track download event (you can integrate with Google Analytics here)
            console.log('CV downloaded from:', e.currentTarget.closest('section')?.id || 'unknown location');
            
            // Optional: Show download confirmation
            setTimeout(() => {
                alert('Thank you for downloading my CV! Feel free to contact me if you have any questions.');
            }, 1000);
        });
    });
}

// Animate Stats Counter
function initStatsAnimation() {
    if (statNumbers.length === 0) return;
    
    let statsAnimated = false;
    
    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
        );
    }
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 20);
        });
    }
    
    function checkStatsAnimation() {
        const statsSection = document.querySelector('.about-stats');
        if (statsSection && isInViewport(statsSection) && !statsAnimated) {
            animateStats();
            statsAnimated = true;
        }
    }
    
    // Check for initial animations
    checkStatsAnimation();
    
    // Add scroll listener for animations
    window.addEventListener('scroll', checkStatsAnimation);
}

// Form Submission
function initContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // In a real application, you would send this data to a server
        // For now, we'll just show a success message
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
        
        // Reset form
        this.reset();
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Skill Tags Hover Effects
function initSkillHoverEffects() {
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            const colors = ['#2563eb', '#7c3aed', '#10b981', '#f59e0b', '#ef4444'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.style.backgroundColor = randomColor;
            this.style.color = 'white';
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.style.color = '';
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}

// Update Current Year in Footer
function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Initialize everything when DOM is loaded
function init() {
    initTypingEffect();
    initMobileMenu();
    initBackToTop();
    initCVDownloadTracking();
    initStatsAnimation();
    initContactForm();
    initSmoothScrolling();
    initSkillHoverEffects();
    updateCurrentYear();
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);