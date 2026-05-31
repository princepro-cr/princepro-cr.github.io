// ============================================
// DOM ELEMENTS
// ============================================
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');
const currentYearSpan = document.getElementById('currentYear');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    initializePortfolio();
    initCustomCursor();
});

function initializePortfolio() {
    loadAboutContent();
    loadSkills();
    loadProjects();
    loadExperience();
    loadCertifications();
    loadContactInfo();
    setupEventListeners();
    updateCopyrightYear();
    setupScrollAnimations();
}

// ============================================
// MOBILE NAV
// ============================================
function toggleMenu() {
    const isOpen = navLinks.classList.contains('open');
    if (isOpen) {
        closeMenu();
    } else {
        navLinks.classList.add('open');
        menuToggle.classList.add('open');
        navOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeMenu() {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('open');
    navOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

// Expose for onclick attributes
window.toggleMenu = toggleMenu;
window.closeMenu = closeMenu;

// ============================================
// CUSTOM CURSOR
// ============================================
function initCustomCursor() {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;

    let ringX = 0, ringY = 0, dotX = 0, dotY = 0;

    document.addEventListener('mousemove', e => {
        dotX = e.clientX;
        dotY = e.clientY;
        dot.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px)`;
    });

    function animateRing() {
        ringX += (dotX - ringX) * 0.12;
        ringY += (dotY - ringY) * 0.12;
        ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
        requestAnimationFrame(animateRing);
    }
    animateRing();

    document.addEventListener('mouseenter', e => {
        if (e.target.closest && e.target.closest('a, button, .project-card, .exp-tab, .skill-chip, .cert-card')) {
            ring.classList.add('hovering');
        }
    }, true);

    document.addEventListener('mouseleave', e => {
        if (e.target.closest && e.target.closest('a, button, .project-card, .exp-tab, .skill-chip, .cert-card')) {
            ring.classList.remove('hovering');
        }
    }, true);
}

// ============================================
// ABOUT SECTION
// ============================================
function loadAboutContent() {
    const highlightsContainer = document.getElementById('aboutHighlights');
    if (highlightsContainer) {
        const highlights = [
            { icon: 'fa-shield-alt', title: 'Security-First', desc: 'JWT, RBAC & input validation built-in' },
            { icon: 'fa-lightbulb', title: 'Problem Solver', desc: 'Turning challenges into opportunities' },
            { icon: 'fa-users', title: 'Team Player', desc: 'Agile/Scrum collaborator' },
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

    const numbersContainer = document.getElementById('aboutNumbers');
    if (numbersContainer) {
        const numbers = [
            { num: '10+', label: 'Projects' },
            { num: '3+', label: 'Years Exp' },
            { num: '50+', label: 'Students' }
        ];
        numbersContainer.innerHTML = numbers.map(item => `
            <div class="num-item">
                <strong>${item.num}</strong>
                <span>${item.label}</span>
            </div>
        `).join('');
    }

    const tagsContainer = document.getElementById('aboutTags');
    if (tagsContainer) {
        const tags = ['Full-Stack Roles', 'Mobile Development', 'Remote / Hybrid', 'South Africa', 'Open to Relocation'];
        tagsContainer.innerHTML = tags.map(tag => `<span class="skill-chip">${tag}</span>`).join('');
    }
}

// ============================================
// SKILLS SECTION
// ============================================
function loadSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    const skillsData = [
        {
            icon: 'fa-mobile-alt',
            title: 'Mobile Development',
            skills: ['Flutter 3.x', 'Dart', 'React Native', 'Firebase', 'Audio Service', 'Push Notifications', 'Local Storage']
        },
        {
            icon: 'fa-server',
            title: 'Backend & APIs',
            skills: ['C#', 'ASP.NET Core 8', 'Entity Framework Core', 'RESTful APIs', 'MVC Pattern', 'LINQ', 'JWT Auth', 'RBAC']
        },
        {
            icon: 'fa-database',
            title: 'Databases',
            skills: ['Oracle SQL', 'SQL Server', 'PostgreSQL', 'MySQL', 'Firebase Firestore', 'Supabase', 'NoSQL', 'Schema Design']
        },
        {
            icon: 'fa-globe',
            title: 'Web Technologies',
            skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Bootstrap 5', 'Material-UI', 'WordPress 6.x', 'PHP']
        },
        {
            icon: 'fa-shield-alt',
            title: 'Security & DevOps',
            skills: ['JWT Token Management', 'Input Validation', 'Role-Based Access', 'Security Principles (ISC2)', 'QA Testing', 'CI/CD', 'Code Review']
        },
        {
            icon: 'fa-tools',
            title: 'Tools & Practices',
            skills: ['Git & GitHub', 'Agile / Scrum', 'Sprint Planning', 'Technical Documentation', 'API Integration', 'Debugging', 'Architecture Design']
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

    const skillBars = document.getElementById('skillBars');
    if (skillBars) {
        const proficiencies = [
            { name: 'C# / ASP.NET Core', percent: 88 },
            { name: 'Flutter / Dart', percent: 85 },
            { name: 'TypeScript / JavaScript', percent: 82 },
            { name: 'Oracle SQL / PostgreSQL', percent: 80 },
            { name: 'WordPress / PHP', percent: 90 },
            { name: 'React Native', percent: 72 }
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
// PROJECTS
// ============================================
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';

    if (typeof projectsData === 'undefined') return;

    projectsData.forEach((project) => {
        const card = document.createElement('div');
        card.className = 'project-card reveal';

        const projectFolder = getProjectFolder(project.title);
        const imagePath = projectFolder ? `images/projects/${projectFolder}/screenshot1.jpg` : null;
        const techDisplay = project.technologies.slice(0, 3);

        card.innerHTML = `
            <div class="project-thumb">
                ${imagePath ?
                    `<img src="${imagePath}" 
                          alt="${project.title}"
                          loading="lazy"
                          onload="this.classList.add('loaded')"
                          onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='<i class=\'fas ${getProjectIcon(project.category)}\' ></i>'">` :
                    `<i class="fas ${getProjectIcon(project.category)}"></i>`
                }
            </div>
            <div class="project-body">
                <div class="project-tags">
                    <span class="project-tag">${project.category}</span>
                </div>
                <h3>${project.title}</h3>
                <p>${project.purpose.substring(0, 110)}${project.purpose.length > 110 ? '...' : ''}</p>
                <div class="project-footer">
                    <div class="project-tech">
                        ${techDisplay.map(tech => `<span class="tech-dot" title="${tech}"></span>`).join('')}
                    </div>
                    <a href="${project.github}" class="project-link" target="_blank" onclick="event.stopPropagation()">
                        View Code <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `;

        card.addEventListener('click', () => openProjectModal(project));
        projectsGrid.appendChild(card);
    });
}

function getProjectFolder(title) {
    const folderMap = {
        'ProjectX - Student & HR Portal': 'projectx',
        'Library Management System': 'library',
        'SemosaFM - Radio Streaming App': 'semosafm',
        'LeavePulse - Leave Management': 'leavepulse',
        'Lottery Mobile Application': 'lottery',
        'WordPress Business Websites': 'wordpress',
        'SkyScan - Modern Weather App': 'skyscan',
        'Zone-Runner - 2D Platformer Game': 'Zonerunner'

    };
    return folderMap[title] || null;
}

function getProjectIcon(category) {
    const icons = {
        'Full-Stack System': 'fa-laptop-code',
        'Web Application': 'fa-globe',
        'Mobile Application': 'fa-mobile-alt',
        'Web Development': 'fa-wordpress'
    };
    return icons[category] || 'fa-folder-open';
}

function openProjectModal(project) {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalCategory').textContent = project.category;
    document.getElementById('modalPurpose').textContent = project.purpose;
    document.getElementById('modalProblem').textContent = project.problem;
    document.getElementById('modalImpact').textContent = project.impact;
    document.getElementById('modalBeneficiaries').textContent = project.beneficiaries;
    document.getElementById('modalGitHub').href = project.github;

    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = '';
    project.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'skill-chip';
        span.textContent = tech;
        techContainer.appendChild(span);
    });

    const projectFolder = getProjectFolder(project.title);
    const mainImage = document.getElementById('modalMainImage');

    if (projectFolder) {
        mainImage.src = `images/projects/${projectFolder}/screenshot1.jpg`;
        mainImage.onerror = function () {
            this.src = `https://via.placeholder.com/600x400?text=${encodeURIComponent(project.title)}`;
            this.onerror = null;
        };
    } else {
        mainImage.src = `https://via.placeholder.com/600x400?text=${encodeURIComponent(project.title)}`;
    }
    mainImage.alt = project.title;

    const thumbnails = document.getElementById('modalThumbnails');
    thumbnails.innerHTML = '';

    if (projectFolder) {
        const count = getScreenshotCount(projectFolder);
        for (let i = 1; i <= count; i++) {
            const imgSrc = `images/projects/${projectFolder}/screenshot${i}.jpg`;
            const thumb = document.createElement('div');
            thumb.className = `modal-thumb ${i === 1 ? 'active' : ''}`;
            thumb.innerHTML = `<img src="${imgSrc}" alt="Screen ${i}" loading="lazy"
                onerror="this.src='https://via.placeholder.com/100x80?text=Screen+${i}'">`;
            thumb.addEventListener('click', function () {
                mainImage.src = this.querySelector('img').src;
                document.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
            thumbnails.appendChild(thumb);
        }
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function getScreenshotCount(folder) {
    const counts = { leavepulse: 3, library: 3, lottery: 4, projectx: 3, semosafm: 3, wordpress: 1, skyscan: 3 };
    return counts[folder] || 3;
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// EXPERIENCE
// ============================================
function loadExperience() {
    const expTabs = document.getElementById('expTabs');
    const expDetails = document.getElementById('expDetails');
    if (!expTabs || !expDetails) return;

    const experiences = [
        {
            company: 'Kinetix Engineering Solutions',
            role: 'Software Developer Intern',
            period: 'Mar – May 2026',
            fullPeriod: 'March 2026 – May 2026',
            description: 'Developed and deployed production features using ASP.NET Core MVC and Flutter within an Agile/Scrum sprint cycle, contributing to system architecture decisions and code reviews.',
            bullets: [
                'Implemented secure authentication flows including JWT token management, input validation, and role-based access control (RBAC)',
                'Collaborated in sprint planning, API integration projects, and technical documentation covering configurations, troubleshooting, and deployment notes',
                'Diagnosed and resolved software defects and system issues across development and staging environments',
                'Contributed to system architecture decisions and participated in code reviews to maintain code quality'
            ]
        },
        {
            company: 'Martelo Digital',
            role: 'Web Developer',
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
            period: 'Mar – Nov 2025',
            fullPeriod: 'March 2025 – November 2025',
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
            period: 'Ongoing',
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

    expTabs.innerHTML = '';
    expDetails.innerHTML = '';

    experiences.forEach((exp, index) => {
        const tab = document.createElement('button');
        tab.className = `exp-tab ${index === 0 ? 'active' : ''}`;
        tab.setAttribute('type', 'button');
        tab.setAttribute('onclick', `showExp('exp${index + 1}', this)`);
        tab.innerHTML = `
            <h4>${exp.company}</h4>
            <p>${exp.role}</p>
            <span>${exp.period}</span>
        `;
        expTabs.appendChild(tab);

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
                    ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
                </ul>
            </div>
        `;
        expDetails.appendChild(detail);
    });
}

window.showExp = function (id, tab) {
    document.querySelectorAll('.exp-detail').forEach(d => d.classList.remove('active'));
    document.querySelectorAll('.exp-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    tab.classList.add('active');
};

// ============================================
// CERTIFICATIONS
// ============================================
function loadCertifications() {
    const certsGrid = document.getElementById('certsGrid');
    if (!certsGrid) return;

    const certs = [
        {
            icon: 'fa-shield-alt',
            title: 'Certified in Cybersecurity (CC) – Security Principles',
            issuer: 'ISC2 · Domain 1',
            badge: 'ISC2 Certified'
        },
        {
            icon: 'fa-exclamation-triangle',
            title: 'Incident Response, Business Continuity & Disaster Recovery',
            issuer: 'ISC2 · Domain 2',
            badge: 'ISC2 Certified'
        },
        {
            icon: 'fa-lock',
            title: 'Access Control Concepts',
            issuer: 'ISC2 · Domain 3',
            badge: 'ISC2 Certified'
        },
        {
            icon: 'fa-network-wired',
            title: 'Network Security',
            issuer: 'ISC2 · Domain 4',
            badge: 'ISC2 Certified'
        },
        {
            icon: 'fa-server',
            title: 'Security Operations',
            issuer: 'ISC2 · Domain 5',
            badge: 'ISC2 Certified'
        },
        {
            icon: 'fa-user-shield',
            title: 'ISC2 Candidate',
            issuer: 'ISC2 · Associate Member',
            badge: 'Active Member'
        }
    ];

    certs.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'cert-card reveal';
        card.innerHTML = `
            <div class="cert-icon"><i class="fas ${cert.icon}"></i></div>
            <div class="cert-body">
                <h4>${cert.title}</h4>
                <p>${cert.issuer}</p>
            </div>
            <span class="cert-badge"><i class="fas fa-check-circle"></i> ${cert.badge}</span>
        `;
        certsGrid.appendChild(card);
    });
}

// ============================================
// CONTACT
// ============================================
function loadContactInfo() {
    const contactInfo = document.getElementById('contactInfo');
    if (contactInfo) {
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
    }

    const contactSocials = document.getElementById('contactSocials');
    if (contactSocials) {
        const socials = [
            { url: 'https://github.com/princepro-cr', icon: 'fa-github', fab: true },
            { url: 'https://linkedin.com/in/prince-promise-semosa-abb88832b', icon: 'fa-linkedin-in', fab: true },
            { url: 'mailto:princepromisesemosa@gmail.com', icon: 'fa-envelope', fab: false }
        ];
        contactSocials.innerHTML = socials.map(s => `
            <a href="${s.url}" class="contact-social-btn" target="_blank">
                <i class="${s.fab ? 'fab' : 'fas'} ${s.icon}"></i>
            </a>
        `).join('');
    }
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    window.addEventListener('scroll', handleScroll);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                closeMenu();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) contactForm.addEventListener('submit', handleContactSubmit);

    ['modalClose', 'modalCloseBtn'].forEach(id => {
        const el = document.getElementById(id) || document.querySelector('.modal-close-btn');
        if (el) el.addEventListener('click', closeProjectModal);
    });
    document.getElementById('modalClose')?.addEventListener('click', closeProjectModal);
    document.querySelector('.modal-close-btn')?.addEventListener('click', closeProjectModal);
    document.querySelector('.modal-overlay')?.addEventListener('click', closeProjectModal);

    backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeMenu();
            const modal = document.getElementById('projectModal');
            if (modal?.classList.contains('active')) closeProjectModal();
        }
    });
}

function handleScroll() {
    if (window.scrollY > 60) {
        navbar?.classList.add('scrolled');
        backToTop?.classList.add('show');
    } else {
        navbar?.classList.remove('scrolled');
        backToTop?.classList.remove('show');
    }

    // Active nav highlight
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 130) current = section.getAttribute('id');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + current) link.style.color = 'var(--blue-vivid)';
    });
}

function handleContactSubmit(e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-submit');
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    btn.style.background = '#22C55E';
    setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; this.reset(); }, 3000);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function setupScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), 100);
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(el => revealObserver.observe(el));

    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = (parseFloat(entry.target.dataset.width) * 100) + '%';
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => { bar.style.width = '0%'; barObserver.observe(bar); });
}

// ============================================
// YEAR
// ============================================
function updateCopyrightYear() {
    if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();
}