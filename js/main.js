// ============================================
// MAIN JAVASCRIPT FILE - UPDATED WITH BETTER IMAGE HANDLING
// ============================================

// DOM Elements
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');
const currentYearSpan = document.getElementById('currentYear');

// ============================================
// Initialize on DOM Load
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

function initializePortfolio() {
    loadAboutContent();
    loadSkills();
    loadProjects();
    loadExperience();
    loadContactInfo();
    setupEventListeners();
    updateCopyrightYear();
    setupScrollAnimations();
}

// ============================================
// Load About Section Content
// ============================================
function loadAboutContent() {
    // About Highlights
    const highlightsContainer = document.getElementById('aboutHighlights');
    if (highlightsContainer) {
        const highlights = [
            { icon: 'fa-code', title: 'Clean Code', desc: 'Maintainable & scalable solutions' },
            { icon: 'fa-lightbulb', title: 'Problem Solver', desc: 'Turning challenges into opportunities' },
            { icon: 'fa-users', title: 'Team Player', desc: 'Collaborating for better outcomes' },
            { icon: 'fa-rocket', title: 'Fast Learner', desc: 'Adapting to new technologies quickly' }
        ];
        
        highlights.forEach(item => {
            const card = document.createElement('div');
            card.className = 'highlight-card';
            card.innerHTML = `
                <div class="highlight-icon"><i class="fas ${item.icon}"></i></div>
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
            `;
            highlightsContainer.appendChild(card);
        });
    }

    // About Numbers
    const numbersContainer = document.getElementById('aboutNumbers');
    if (numbersContainer) {
        const numbers = [
            { num: '8+', label: 'Projects' },
            { num: '2+', label: 'Years Exp' },
            { num: '50+', label: 'Students' }
        ];
        
        numbersContainer.innerHTML = numbers.map(item => `
            <div class="num-item">
                <strong>${item.num}</strong>
                <span>${item.label}</span>
            </div>
        `).join('');
    }

    // About Tags
    const tagsContainer = document.getElementById('aboutTags');
    if (tagsContainer) {
        const tags = ['Full-Stack Roles', 'Mobile Development', 'Remote / Hybrid', 'South Africa'];
        tagsContainer.innerHTML = tags.map(tag => `<span class="skill-chip">${tag}</span>`).join('');
    }
}

// ============================================
// Load Skills Section
// ============================================
function loadSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    const skillsData = [
        {
            icon: 'fa-mobile-alt',
            title: 'Mobile Development',
            skills: ['Flutter 3.x', 'Dart', 'Firebase', 'Audio Service', 'Local Storage', 'Push Notifications']
        },
        {
            icon: 'fa-server',
            title: 'Backend & APIs',
            skills: ['C#', 'ASP.NET Core 8', 'Entity Framework Core', 'RESTful APIs', 'MVC Pattern', 'LINQ']
        },
        {
            icon: 'fa-database',
            title: 'Databases',
            skills: ['SQL Server', 'MySQL', 'Firebase Firestore', 'Supabase', 'Entity Framework']
        },
        {
            icon: 'fa-globe',
            title: 'Web Technologies',
            skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Material-UI', 'WordPress 6.x', 'PHP']
        }
    ];

    skillsData.forEach(category => {
        const categoryEl = document.createElement('div');
        categoryEl.className = 'skill-category reveal';
        categoryEl.innerHTML = `
            <div class="skill-cat-header">
                <div class="skill-cat-icon"><i class="fas ${category.icon}"></i></div>
                <h3>${category.title}</h3>
            </div>
            <div class="skill-list">
                ${category.skills.map(skill => `<span class="skill-chip">${skill}</span>`).join('')}
            </div>
        `;
        skillsGrid.appendChild(categoryEl);
    });

    // Proficiency Bars
    const skillBars = document.getElementById('skillBars');
    if (skillBars) {
        const proficiencies = [
            { name: 'C# / ASP.NET Core', percent: 88 },
            { name: 'Flutter / Dart', percent: 85 },
            { name: 'HTML / CSS / JS', percent: 82 },
            { name: 'SQL / Databases', percent: 80 },
            { name: 'WordPress', percent: 90 }
        ];

        proficiencies.forEach(item => {
            const bar = document.createElement('div');
            bar.className = 'skill-bar-item';
            bar.innerHTML = `
                <div class="skill-bar-info">
                    <span>${item.name}</span>
                    <strong>${item.percent}%</strong>
                </div>
                <div class="skill-bar-track">
                    <div class="skill-bar-fill" data-width="${item.percent / 100}"></div>
                </div>
            `;
            skillBars.appendChild(bar);
        });
    }
}

// ============================================
// Load Projects - IMPROVED IMAGE HANDLING
// ============================================
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    // Clear any existing content
    projectsGrid.innerHTML = '';

    // Use your actual projects data from projects-data.js
    projectsData.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card reveal';
        
        // Get project folder and thumbnail
        const projectFolder = getProjectFolder(project.title);
        let imagePath = null;
        
        if (projectFolder) {
            imagePath = getProjectThumbnail(project.title, projectFolder);
        }
        
        // Get first three technologies for display
        const techDisplay = project.technologies.slice(0, 3);
        
        card.innerHTML = `
            <div class="project-thumb">
                ${imagePath ? 
                    `<img src="${imagePath}" 
                          alt="${project.title}"
                          loading="lazy"
                          onload="this.style.opacity='1'"
                          onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\'fas ${getProjectIcon(project.category)}\' style=\'opacity:0.35; font-size:4rem;\'></i>'">` : 
                    `<i class="fas ${getProjectIcon(project.category)}" style="opacity:0.35; font-size:4rem;"></i>`
                }
            </div>
            <div class="project-body">
                <div class="project-tags">
                    <span class="project-tag">${project.category}</span>
                </div>
                <h3>${project.title}</h3>
                <p>${project.purpose.substring(0, 100)}${project.purpose.length > 100 ? '...' : ''}</p>
                <div class="project-footer">
                    <div class="project-tech">
                        ${techDisplay.map(tech => `<span class="tech-dot" title="${tech}"></span>`).join('')}
                    </div>
                    <a href="${project.github}" class="project-link" target="_blank">
                        View Code <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;

        // Add click event for modal
        card.addEventListener('click', () => openProjectModal(project));

        projectsGrid.appendChild(card);
    });
}

// Helper function to get project thumbnail with fallback
function getProjectThumbnail(title, folder) {
    // Try different possible image names
    const possibleImages = [
        `images/projects/${folder}/screenshot1.jpg`,
        `images/projects/${folder}/screenshot1.jpeg`,
        `images/projects/${folder}/main.jpg`,
        `images/projects/${folder}/profile.jpg`
    ];
    
    // Return the first one (we'll let onerror handle fallbacks)
    return possibleImages[0];
}

// Helper function to get project folder name from title
function getProjectFolder(title) {
    const folderMap = {
        'ProjectX - Student & HR Portal': 'projectx',
        'Library Management System': 'library',
        'SemosaFM - Radio Streaming App': 'semosafm',
        'LeavePulse - Leave Management': 'leavepulse',
        'Lottery Mobile Application': 'lottery',
        'WordPress Business Websites': 'wordpress',
        'SkyScan - Modern Weather App': 'skyscan' 

    };
    return folderMap[title] || null;
}

// Helper function to get icon based on project category
function getProjectIcon(category) {
    const icons = {
        'Full-Stack System': 'fa-laptop-code',
        'Web Application': 'fa-globe',
        'Mobile Application': 'fa-mobile-alt',
        'Web Development': 'fa-wordpress'
    };
    return icons[category] || 'fa-folder-open';
}

// ============================================
// Project Modal Functions - IMPROVED IMAGE HANDLING
// ============================================
function openProjectModal(project) {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    // Set modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalCategory').textContent = project.category;
    document.getElementById('modalPurpose').textContent = project.purpose;
    document.getElementById('modalProblem').textContent = project.problem;
    document.getElementById('modalImpact').textContent = project.impact;
    document.getElementById('modalBeneficiaries').textContent = project.beneficiaries;
    document.getElementById('modalGitHub').href = project.github;

    // Set features
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Set technologies
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = '';
    project.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'skill-chip';
        span.textContent = tech;
        techContainer.appendChild(span);
    });

    // Get project folder
    const projectFolder = getProjectFolder(project.title);
    const mainImage = document.getElementById('modalMainImage');
    
    // Set main image with fallback
    if (projectFolder) {
        // Try to load the first screenshot
        let imagePath = `images/projects/${projectFolder}/screenshot1.jpg`;
        
        // Special case for projectx which has a .jpeg for screenshot4
        if (projectFolder === 'projectx') {
            imagePath = `images/projects/${projectFolder}/screenshot1.jpg`;
        }
        
        mainImage.src = imagePath;
        mainImage.onerror = function() {
            // Try different extensions if first fails
            const extensions = ['.jpg', '.jpeg', '.png'];
            let tried = 0;
            
            const tryNextImage = () => {
                tried++;
                if (tried <= extensions.length) {
                    this.src = `images/projects/${projectFolder}/screenshot1${extensions[tried-1]}`;
                } else {
                    // If all fail, show placeholder
                    this.src = 'https://via.placeholder.com/600x400?text=' + encodeURIComponent(project.title);
                }
            };
            
            this.onerror = tryNextImage;
            tryNextImage();
        };
    } else {
        mainImage.src = 'https://via.placeholder.com/600x400?text=' + encodeURIComponent(project.title);
    }
    mainImage.alt = project.title;

    // Load thumbnails
    const thumbnails = document.getElementById('modalThumbnails');
    thumbnails.innerHTML = '';
    
    if (projectFolder) {
        // Get screenshot count based on project
        const screenshotCount = getScreenshotCount(projectFolder);
        
        for (let i = 1; i <= screenshotCount; i++) {
            const thumb = document.createElement('div');
            thumb.className = `modal-thumb ${i === 1 ? 'active' : ''}`;
            
            // Determine file extension
            let extension = '.jpg';
            if (projectFolder === 'projectx' && i === 4) {
                extension = '.jpeg';
            }
            
            const imgSrc = `images/projects/${projectFolder}/screenshot${i}${extension}`;
            
            thumb.innerHTML = `<img src="${imgSrc}" 
                                     alt="Screen ${i}" 
                                     loading="lazy"
                                     onerror="this.onerror=null; this.src='https://via.placeholder.com/100x80?text=Screen+${i}';">`;
            
            thumb.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').src;
                mainImage.src = imgSrc;
                document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
            
            thumbnails.appendChild(thumb);
        }
    }
    
    // If no thumbnails were added, show placeholders
    if (thumbnails.children.length === 0) {
        for (let i = 1; i <= 3; i++) {
            const thumb = document.createElement('div');
            thumb.className = `modal-thumb ${i === 1 ? 'active' : ''}`;
            thumb.innerHTML = `<img src="https://via.placeholder.com/100x80?text=Screen+${i}" alt="Screen ${i}">`;
            thumb.addEventListener('click', function() {
                const imgSrc = this.querySelector('img').src.replace('100x80', '600x400');
                mainImage.src = imgSrc;
                document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
            thumbnails.appendChild(thumb);
        }
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Helper function to get number of screenshots per project
function getScreenshotCount(folder) {
    const counts = {
        'leavepulse': 3,
        'library': 3,
        'lottery': 4,
        'projectx': 3,
        'semosafm': 3,
        'wordpress': 1
    };
    return counts[folder] || 3;
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ============================================
// Load Experience
// ============================================
function loadExperience() {
    const expTabs = document.getElementById('expTabs');
    const expDetails = document.getElementById('expDetails');
    
    if (!expTabs || !expDetails) return;

    const experiences = [
        {
            company: 'Martelo Digital',
            role: 'Standard Developer',
            period: '2023 – 2025',
            fullPeriod: 'January 2023 – January 2025',
            description: 'Developed and maintained business websites using WordPress, creating responsive layouts and custom themes for diverse client requirements.',
            bullets: [
                'Built 10+ custom WordPress websites for clients across various industries',
                'Optimized site performance, page speed, and SEO for improved discoverability',
                'Maintained ongoing client relationships and provided post-launch support',
                'Collaborated closely with designers to translate mockups into pixel-perfect code'
            ]
        },
        {
            company: 'CUT University',
            role: 'Lab Assistant',
            period: 'Mar – Oct 2024',
            fullPeriod: 'March 2024 – October 2024',
            description: 'Assisted students with debugging and completing programming projects, supporting practical learning in C# and ASP.NET Core.',
            bullets: [
                'Guided 50+ students through complex coding challenges and debugging sessions',
                'Provided technical support for lab equipment and development environments',
                'Helped students understand key programming concepts including OOP and MVC',
                'Developed supplementary learning materials and code examples'
            ]
        },
        {
            company: 'Self-Employed',
            role: 'Freelance Developer',
            period: 'Freelance',
            fullPeriod: 'Freelance (Ongoing)',
            description: 'Created custom WordPress solutions for small businesses, focusing on responsive design, performance, and user experience.',
            bullets: [
                'Delivered projects consistently on time and within agreed budgets',
                'Customized themes and plugins to match unique client requirements',
                'Provided ongoing maintenance, updates, and performance monitoring',
                'Built direct client relationships through transparent communication'
            ]
        }
    ];

    // Clear existing content
    expTabs.innerHTML = '';
    expDetails.innerHTML = '';

    // Create tabs
    experiences.forEach((exp, index) => {
        const tab = document.createElement('div');
        tab.className = `exp-tab ${index === 0 ? 'active' : ''}`;
        tab.setAttribute('onclick', `showExp('exp${index + 1}', this)`);
        tab.innerHTML = `
            <h4>${exp.company}</h4>
            <p>${exp.role}</p>
            <span>${exp.period}</span>
        `;
        expTabs.appendChild(tab);
    });

    // Create details
    experiences.forEach((exp, index) => {
        const detail = document.createElement('div');
        detail.className = `exp-detail ${index === 0 ? 'active' : ''}`;
        detail.id = `exp${index + 1}`;
        detail.innerHTML = `
            <div class="exp-detail-header">
                <h3>${exp.role}</h3>
                <p class="company">${exp.company}</p>
                <p class="period">${exp.fullPeriod}</p>
            </div>
            <div class="exp-detail-body">
                <p>${exp.description}</p>
                <ul class="exp-bullets">
                    ${exp.bullets.map(bullet => `<li>${bullet}</li>`).join('')}
                </ul>
            </div>
        `;
        expDetails.appendChild(detail);
    });
}

// ============================================
// Load Contact Info
// ============================================
function loadContactInfo() {
    const contactInfo = document.getElementById('contactInfo');
    if (!contactInfo) return;

    const infoItems = [
        { icon: 'fa-map-marker-alt', label: 'Location', value: 'Bloemfontein, South Africa' },
        { icon: 'fa-envelope', label: 'Email', value: 'princepromisesemosa@gmail.com' },
        { icon: 'fa-phone', label: 'Phone', value: '+27 60 834 1700' }
    ];

    contactInfo.innerHTML = infoItems.map(item => `
        <div class="contact-info-item">
            <div class="contact-info-icon"><i class="fas ${item.icon}"></i></div>
            <div>
                <h4>${item.label}</h4>
                <p>${item.value}</p>
            </div>
        </div>
    `).join('');

    const contactSocials = document.getElementById('contactSocials');
    if (contactSocials) {
        const socials = [
            { url: 'https://github.com/princepro-cr', icon: 'fa-github' },
            { url: 'https://linkedin.com/in/prince-promise-semosa-abb88832b', icon: 'fa-linkedin-in' },
            { url: 'mailto:princepromisesemosa@gmail.com', icon: 'fa-envelope' }
        ];

        contactSocials.innerHTML = socials.map(social => `
            <a href="${social.url}" class="contact-social-btn" target="_blank">
                <i class="fab ${social.icon}"></i>
            </a>
        `).join('');
    }
}

// ============================================
// Setup Event Listeners
// ============================================
function setupEventListeners() {
    // Scroll effects
    window.addEventListener('scroll', handleScroll);

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    // Modal close buttons
    const modalClose = document.getElementById('modalClose');
    const modalCloseBtn = document.querySelector('.modal-close-btn');
    const modalOverlay = document.querySelector('.modal-overlay');

    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeProjectModal);
    }
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeProjectModal);
    }

    // Back to top
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Escape key for modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('projectModal');
            if (modal && modal.classList.contains('active')) {
                closeProjectModal();
            }
        }
    });
}

function handleScroll() {
    // Navbar scroll effect
    if (window.scrollY > 60) {
        navbar?.classList.add('scrolled');
        backToTop?.classList.add('show');
    } else {
        navbar?.classList.remove('scrolled');
        backToTop?.classList.remove('show');
    }

    // Active nav links
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 120) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = 'var(--blue-vivid)';
        }
    });
}

function handleSmoothScroll(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleContactSubmit(e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-submit');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    btn.style.background = '#22C55E';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        this.reset();
    }, 3000);

    // Here you would typically send the form data to a server
    console.log('Form submitted:', {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        subject: document.getElementById('contactSubject').value,
        message: document.getElementById('contactMessage').value
    });
}

// ============================================
// Experience Tabs Function (Global)
// ============================================
window.showExp = function(id, tab) {
    document.querySelectorAll('.exp-detail').forEach(d => d.classList.remove('active'));
    document.querySelectorAll('.exp-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    tab.classList.add('active');
};

// ============================================
// Scroll Animations
// ============================================
function setupScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100);
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => barObserver.observe(el));

    // Skill bars animation
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.dataset.width;
                entry.target.style.width = (parseFloat(width) * 100) + '%';
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        bar.style.width = '0%';
        skillObserver.observe(bar);
    });
}

// ============================================
// Update Copyright Year
// ============================================
function updateCopyrightYear() {
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}