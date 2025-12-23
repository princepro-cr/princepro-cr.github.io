// ===== MAIN JAVASCRIPT =====

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const backToTop = document.getElementById('backToTop');
const contactForm = document.getElementById('contactForm');
const navLinks = document.querySelectorAll('.nav-link');

// ===== TYPING EFFECT =====
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

// ===== MOBILE MENU =====
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

// ===== BACK TO TOP =====
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

// ===== CV DOWNLOAD =====
function initCVDownloadTracking() {
    document.querySelectorAll('a[href*="Promise_Semosa_CV.pdf"]').forEach(link => {
        link.addEventListener('click', function(e) {
            setTimeout(() => {
                alert('Thank you for downloading my CV! Feel free to contact me if you have any questions.');
            }, 1000);
        });
    });
}

// ===== CONTACT FORM =====
function initContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // Show success message
        alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
        
        // Reset form
        this.reset();
    });
}

// ===== SMOOTH SCROLLING =====
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

// ===== SKILL TAGS HOVER =====
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

// ===== UPDATE YEAR =====
function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ===== PROJECT MODAL =====
const projectData = {
    "library": {
        title: "Library Management System",
        purpose: "Developed to automate library operations including book tracking, member management, and transaction processing for educational institutions. The system aims to reduce manual work, improve efficiency, and provide better user experience for both librarians and patrons.",
        problem: "Traditional library systems are paper-based and prone to errors, leading to lost books, inefficient tracking, and poor member experience. Manual processes make it difficult to track book availability, calculate fines, and generate reports.",
        features: [
            "Real-time book availability tracking and reservation system",
            "Automated member management with fine calculation and notifications",
            "Digital transaction records with comprehensive reporting dashboard",
            "Role-based access control for librarians, administrators, and members",
            "Barcode scanning integration for quick book check-in/out",
            "Advanced search functionality with filters and categories"
        ],
        technologies: ["ASP.NET Core 8 MVC", "Firebase", "Entity Framework Core", "Bootstrap 5", "JavaScript", "RESTful APIs"],
        github: "https://github.com/princepro-cr/Libreria",
        category: "Full-Stack Web App"
    },
    "consultation": {
        title: "Consultation Booking System",
        purpose: "Mobile application designed to streamline the process of booking professional consultations. The app connects clients with service providers through an intuitive interface with real-time scheduling and automated notifications.",
        problem: "Clients struggle to find available appointment slots, while professionals spend excessive time managing their schedules manually. Missed appointments and double bookings are common issues in traditional booking systems.",
        features: [
            "Real-time appointment scheduling with calendar integration",
            "Push notifications for appointment reminders and updates",
            "Professional profiles with ratings and reviews",
            "Secure payment gateway integration",
            "Video consultation capabilities",
            "Automated confirmation emails and SMS"
        ],
        technologies: ["Flutter 3.x", "Firebase", "Firestore", "Provider State Management", "Dart", "Stripe API", "Google Calendar API"],
        github: "https://github.com/princepro-cr/consultation-booking-app",
        category: "Mobile Application"
    },
    "leave": {
        title: "Leave Management System",
        purpose: "Enterprise-level system for managing employee leave requests, approvals, and tracking. Designed to automate the entire leave management process from request to approval to reporting.",
        problem: "Manual leave management processes lead to errors, delays in approvals, and difficulty in tracking leave balances. HR departments struggle with paper-based systems and lack of real-time visibility.",
        features: [
            "Automated leave request workflow with approval chains",
            "Real-time leave balance tracking and accrual calculations",
            "Dashboard for managers to view team availability",
            "Integration with company calendar and email systems",
            "Customizable leave policies for different employee types",
            "Comprehensive reporting and analytics dashboard"
        ],
        technologies: ["ASP.NET Core 8", "Firebase", "Supabase", "Entity Framework", "Material-UI", "Email Service"],
        github: "https://github.com/princepro-cr/LeavePulse",
        category: "Web Application"
    },
    "radio": {
        title: "Radio Streaming App",
        purpose: "Cross-platform mobile application for streaming radio stations with advanced playlist management and social features. Provides users with access to thousands of radio stations worldwide.",
        problem: "Existing radio apps have limited station selection, poor audio quality, and lack social features. Users want a seamless streaming experience with personalization options and community features.",
        features: [
            "Access to 40+ radio stations worldwide",
            "Create and manage custom playlists",
            "Live stream for listeners",
            "Sleep timer and alarm functionality",
            "Offline listening capability for favorite stations",
            "Personalized station recommendations"
        ],
        technologies: ["Flutter 3.x", "Dart", "Firebase", "Audio Service Plugin", "Google Cast"],
        github: "https://github.com/princepro-cr/SemosaFM",
        category: "Mobile App"
    },
    "lottery": {
        title: "Lottery App",
        purpose: "Mobile application for lottery ticket management, result checking, and notifications. Users can check results, scan tickets, and receive alerts for upcoming draws.",
        problem: "Lottery players often forget to check results, lose physical tickets, and miss draw deadlines. They need a centralized platform to manage all their lottery activities.",
        features: [
            "Draw schedule and countdown timer",
            "Ticket storage and management",
            "Winning probability calculator",
        ],
        technologies: ["Flutter 3.x", "Dart", "Firebase ML Kit", "Camera API", "Push Notifications", "Payment Gateway"],
        github: "https://github.com/princepro-cr/LotteryApp_Flutter",
        category: "Mobile App"
    },
    "wordpress": {
        title: "WordPress Business Websites",
        purpose: "Collection of custom WordPress websites developed for various businesses, focusing on responsive design, SEO optimization, and user experience. Each site is tailored to the client's specific needs and industry requirements.",
        problem: "Small businesses struggle with generic website templates that don't reflect their brand identity or meet their functional requirements. They need custom solutions that are both affordable and effective.",
        features: [
            "Fully responsive design for all devices",
            "SEO optimization for better search rankings",
            "Custom theme development from scratch",
            "E-commerce integration with WooCommerce",
            "Contact forms and lead generation tools",
            "Performance optimization for fast loading"
        ],
        technologies: ["WordPress 6.x", "PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "WooCommerce", "Elementor"],
        github: "https://github.com/princepro-cr/wordpress-business-websites",
        category: "Web Development"
    }
};

// ===== MODAL FUNCTIONS =====
function initModal() {
    const modal = document.getElementById('projectModal');
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    const viewDetailsButtons = document.querySelectorAll('.btn-view-details');
    
    // Open modal function
    function openModal(projectId) {
        const project = projectData[projectId];
        if (!project) {
            console.error('Project not found:', projectId);
            return;
        }
        
        console.log('Opening modal for:', project.title);
        
        // Update modal content
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalPurpose').textContent = project.purpose;
        document.getElementById('modalProblem').textContent = project.problem;
        
        // Update features list
        const featuresList = document.getElementById('modalFeatures');
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        // Update technologies
        const techStack = document.getElementById('modalStack');
        techStack.innerHTML = '';
        project.technologies.forEach(tech => {
            const span = document.createElement('span');
            span.className = 'tech-tag';
            span.textContent = tech;
            techStack.appendChild(span);
        });
        
        // Update GitHub link
        const githubLink = document.getElementById('modalGitHub');
        if (githubLink) {
            githubLink.href = project.github;
            githubLink.target = '_blank';
            githubLink.rel = 'noopener noreferrer';
        }
        
        // Show modal
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        console.log('Modal displayed');
    }
    
    // Close modal function
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // Add event listeners to all view details buttons
    if (viewDetailsButtons.length > 0) {
        viewDetailsButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.stopPropagation();
                const projectId = this.getAttribute('data-project');
                console.log('Button clicked, project:', projectId);
                openModal(projectId);
            });
        });
    }
    
    // Add click event to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.btn-view-details')) {
                const projectId = this.getAttribute('data-project');
                console.log('Card clicked, project:', projectId);
                openModal(projectId);
            }
        });
    });
    
    // Close modal events
    if (modalCloseButtons.length > 0) {
        modalCloseButtons.forEach(button => {
            button.addEventListener('click', closeModal);
        });
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
}

// ===== INITIALIZE EVERYTHING =====
function init() {
    initTypingEffect();
    initMobileMenu();
    initBackToTop();
    initCVDownloadTracking();
    initContactForm();
    initSmoothScrolling();
    initSkillHoverEffects();
    updateCurrentYear();
    initModal();
    
    console.log('Portfolio initialized successfully!');
}

// ===== START EVERYTHING =====
document.addEventListener('DOMContentLoaded', init);