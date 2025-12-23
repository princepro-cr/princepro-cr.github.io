// Project Data - Easy to update and manage
const projects = {
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
        technologies: ["ASP.NET Core 8", "Firebase" , "Supabase", "Entity Framework",  "Material-UI", "Email Service"],
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

// Modal Class
class ProjectModal {
    constructor() {
        this.modal = document.getElementById('projectModal');
        this.init();
    }
    
    init() {
        // Add event listeners to all project cards
        document.querySelectorAll('.btn-view-details, .project-card').forEach(card => {
            card.addEventListener('click', (e) => {
                // Don't trigger if clicking on the button inside
                if (e.target.classList.contains('btn-view-details')) {
                    return;
                }
                
                const projectId = card.getAttribute('data-project') || 
                                 card.closest('.project-card')?.getAttribute('data-project');
                
                if (projectId && projects[projectId]) {
                    this.openModal(projectId);
                }
            });
        });
        
        // Add specific event listeners for buttons
        document.querySelectorAll('.btn-view-details').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const projectId = button.getAttribute('data-project');
                if (projectId && projects[projectId]) {
                    this.openModal(projectId);
                }
            });
        });
        
        // Close modal events
        document.querySelectorAll('.modal-close').forEach(button => {
            button.addEventListener('click', () => this.closeModal());
        });
        
        // Close modal when clicking outside content
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'block') {
                this.closeModal();
            }
        });
    }
    
    openModal(projectId) {
        const project = projects[projectId];
        if (!project) return;
        
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
            span.className = 'skill-tag';
            span.textContent = tech;
            techStack.appendChild(span);
        });
        
        // Update GitHub link
        const githubLink = document.getElementById('modalGitHub');
        githubLink.href = project.github;
        
        // Update tech tags in header
        const modalTech = document.getElementById('modalTech');
        modalTech.innerHTML = '';
        // Show first 3 technologies as tags
        project.technologies.slice(0, 3).forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'tech-tag';
            tag.textContent = tech;
            modalTech.appendChild(tag);
        });
        
        // Show modal
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add animation class
        setTimeout(() => {
            this.modal.querySelector('.modal-content').classList.add('show');
        }, 10);
    }
    
    closeModal() {
        const modalContent = this.modal.querySelector('.modal-content');
        modalContent.classList.remove('show');
        
        setTimeout(() => {
            this.modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Initialize modal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectModal();
});