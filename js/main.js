// ============================================
// MAIN JAVASCRIPT FILE
// ============================================

// ====== DOM Content Loaded ======
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

// ====== Initialize All Features ======
function initializePortfolio() {
    initNavigation();
    initCustomCursor();
    initTypingEffect();
    initScrollAnimations();
    initProjects();
    initProjectModal();
    initContactForm();
    initBackToTop();
}

// ====== Navigation ======
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scroll for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ====== Custom Cursor ======
function initCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (!cursor || !cursorFollower) return;
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        // Smooth cursor movement
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Cursor effects on hover
    const hoverElements = document.querySelectorAll('a, button, .project-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1.5)`;
            cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px) scale(2)`;
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1)`;
            cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px) scale(1.5)`;
        });
    });
}

// ====== Typing Effect ======
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;
    
    const texts = [
        'Full-Stack Developer',
        'Mobile App Developer',
        'ASP.NET Core Specialist',
        'Flutter Expert',
        'Problem Solver'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before next word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// ====== Scroll Animations ======
function initScrollAnimations() {
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
    
    // Observe elements
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .about-card, .timeline-item, .contact-card');
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
        observer.observe(el);
    });
}

// ====== Projects ======
function initProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    projectsData.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.projectId = project.id;
    
    // Create image section
    const imageDiv = document.createElement('div');
    imageDiv.className = 'project-image';
    
    if (project.screenshots && project.screenshots.length > 0) {
        const img = document.createElement('img');
        img.src = project.screenshots[0];
        img.alt = project.title;
        img.onerror = () => {
            // Fallback if image doesn't exist
            imageDiv.innerHTML = `<div class="project-image-placeholder"><i class="fas fa-image"></i></div>`;
        };
        imageDiv.appendChild(img);
    } else {
        imageDiv.innerHTML = `<div class="project-image-placeholder"><i class="fas fa-image"></i></div>`;
    }
    
    // Create content section
    const contentDiv = document.createElement('div');
    contentDiv.className = 'project-content';
    
    contentDiv.innerHTML = `
        <div class="project-header">
            <div>
                <h3 class="project-title">${project.title}</h3>
                <span class="project-category">${project.category}</span>
            </div>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
            ${project.technologies.slice(0, 3).map(tech => 
                `<span class="tech-badge">${tech}</span>`
            ).join('')}
            ${project.technologies.length > 3 ? `<span class="tech-badge">+${project.technologies.length - 3} more</span>` : ''}
        </div>
        <div class="project-footer">
            <div class="project-links">
                <a href="${project.github}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                    <i class="fab fa-github"></i>
                </a>
            </div>
            <button class="view-details-btn">
                View Details <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `;
    
    card.appendChild(imageDiv);
    card.appendChild(contentDiv);
    
    // Add click event to open modal
    card.addEventListener('click', () => {
        openProjectModal(project);
    });
    
    return card;
}

// ====== Project Modal ======
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const modalCloseBtns = document.querySelectorAll('.modal-close-btn');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    // Close modal
    modalClose.addEventListener('click', closeProjectModal);
    modalOverlay.addEventListener('click', closeProjectModal);
    modalCloseBtns.forEach(btn => {
        btn.addEventListener('click', closeProjectModal);
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

function openProjectModal(project) {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalPurpose = document.getElementById('modalPurpose');
    const modalProblem = document.getElementById('modalProblem');
    const modalImpact = document.getElementById('modalImpact');
    const modalBeneficiaries = document.getElementById('modalBeneficiaries');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalTechStack = document.getElementById('modalTechStack');
    const modalGitHub = document.getElementById('modalGitHub');
    const mainScreenshot = document.getElementById('mainScreenshot');
    const thumbnailGallery = document.getElementById('thumbnailGallery');
    
    // Set content
    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category;
    modalPurpose.textContent = project.purpose;
    modalProblem.textContent = project.problem;
    modalImpact.textContent = project.impact;
    modalBeneficiaries.textContent = project.beneficiaries;
    modalGitHub.href = project.github;
    
    // Set features
    modalFeatures.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        modalFeatures.appendChild(li);
    });
    
    // Set technologies
    modalTechStack.innerHTML = '';
    project.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.textContent = tech;
        modalTechStack.appendChild(span);
    });
    
    // Set screenshots
    if (project.screenshots && project.screenshots.length > 0) {
        mainScreenshot.src = project.screenshots[0];
        mainScreenshot.alt = project.title;
        
        thumbnailGallery.innerHTML = '';
        project.screenshots.forEach((screenshot, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail';
            if (index === 0) thumbnail.classList.add('active');
            
            const img = document.createElement('img');
            img.src = screenshot;
            img.alt = `${project.title} screenshot ${index + 1}`;
            img.onerror = () => {
                thumbnail.innerHTML = '<i class="fas fa-image"></i>';
            };
            
            thumbnail.appendChild(img);
            thumbnail.addEventListener('click', () => {
                mainScreenshot.src = screenshot;
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
            });
            
            thumbnailGallery.appendChild(thumbnail);
        });
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ====== Contact Form ======
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send this to your backend
        // For now, we'll just show an alert
        alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon!`);
        
        // Reset form
        contactForm.reset();
        
        // You can integrate with services like EmailJS, Formspree, or your own backend
        // Example with EmailJS:
        // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        //     from_name: name,
        //     from_email: email,
        //     subject: subject,
        //     message: message
        // });
    });
}

// ====== Back to Top Button ======
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    if (!backToTopButton) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ====== Utility Functions ======
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Update year in footer
document.addEventListener('DOMContentLoaded', () => {
    const yearElements = document.querySelectorAll('#currentYear');
    yearElements.forEach(el => {
        el.textContent = new Date().getFullYear();
    });
});