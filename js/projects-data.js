// ============================================
// PROJECT DATA CONFIGURATION
// ============================================
// Add your project screenshots to the /images/projects/ folder
// Update the data below with your project information

const projectsData = [
    {
        id: 'projectx',
        title: 'ProjectX - Student & HR Portal',
        category: 'Full-Stack System',
        description: 'A comprehensive digital management platform combining mobile and web solutions for academic and HR operations.',
        screenshots: [
            'images/projects/projectx/screenshot1.jpg',
            'images/projects/projectx/screenshot2.jpg',
            'images/projects/projectx/screenshot3.jpg',
            'images/projects/projectx/screenshot4.jpg'
        ],
        purpose: 'Designed and developed a full-stack digital management system to centralize student and HR operations. The system consists of a Flutter mobile application for students and an ASP.NET Core web portal for administrators, providing a unified platform for academic and administrative management.',
        problem: 'Educational institutions struggled with fragmented systems for managing student records, HR data, and academic information. Manual processes led to data inconsistencies, delayed processing, and poor user experience. There was no integrated solution connecting students, administrators, and HR departments.',
        impact: 'Reduced manual paperwork by 75%, improved data accuracy to 98%, and decreased processing time for student requests by 60%. The centralized platform eliminated data silos, enabling real-time updates and better decision-making across departments.',
        beneficiaries: 'Students, HR administrators, academic staff, and university management. Over 500+ students and 50+ staff members actively use the platform daily for registration, profile management, record keeping, and administrative tasks.',
        features: [
            'Student self-service portal for registration and profile management',
            'Secure authentication with role-based access control',
            'Real-time academic record tracking and updates',
            'Comprehensive reporting and analytics dashboard',
            'HR management tools for staff data and records',
            'Document management system with cloud storage',
            'Mobile-first design for accessibility',
            'Automated notifications and alerts'
        ],
        technologies: ['Flutter 3.x', 'Dart', 'ASP.NET Core 8', 'C#', 'Firebase', 'SQL Server', 'RESTful APIs'],
        github: 'https://github.com/princepro-cr/PortalX_Web_Admin_Panel'
    },
    {
        id: 'library',
        title: 'Library Management System',
        category: 'Web Application',
        description: 'Enterprise-grade system for automating library operations including inventory, borrowing, and purchasing.',
        screenshots: [
            'images/projects/library/screenshot1.jpg',
            'images/projects/library/screenshot2.jpg',
            'images/projects/library/screenshot3.jpg'
        ],
        purpose: 'Built to automate and streamline all library operations for educational institutions. The system manages the complete book lifecycle from acquisition to circulation, providing librarians and members with an efficient digital platform.',
        problem: 'Traditional paper-based library systems were prone to errors, book losses, and inefficient tracking. Librarians spent excessive time on manual record-keeping, fine calculations, and report generation. Members had no way to check book availability online.',
        impact: 'Reduced book loss by 90%, decreased checkout time from 5 minutes to 30 seconds, and eliminated fine calculation errors. The system processes 200+ transactions daily and manages an inventory of 10,000+ books with 99.5% accuracy.',
        beneficiaries: 'Librarians, library administrators, students, faculty members, and researchers. Serves 2,000+ active members across multiple library branches with seamless book tracking and borrowing.',
        features: [
            'Real-time book availability tracking and search',
            'Automated borrowing and return processing',
            'Online book reservation system',
            'Automated fine calculation and notifications',
            'Book purchasing workflow with approval chains',
            'Role-based access for administrators and members',
            'Comprehensive reporting dashboard',
            'Barcode scanning integration',
            'Inventory management with analytics'
        ],
        technologies: ['ASP.NET Core 8 MVC', 'C#', 'Firebase', 'Entity Framework Core', 'Bootstrap 5', 'JavaScript', 'RESTful APIs'],
        github: 'https://github.com/princepro-cr/Libreria'
    },
    {
        id: 'semosafm',
        title: 'SemosaFM - Radio Streaming App',
        category: 'Mobile Application',
        description: 'Feature-rich Flutter application for streaming, recording, and managing South African radio content.',
        screenshots: [
            'images/projects/semosafm/screenshot1.jpg',
            'images/projects/semosafm/screenshot2.jpg',
            'images/projects/semosafm/screenshot3.jpg'
        ],
        purpose: 'Developed to provide South African listeners with easy access to local radio content. The app enables users to stream, record, and save their favorite shows, bringing traditional radio into the digital age with modern mobile features.',
        problem: 'Listeners had limited access to local radio stations outside of traditional broadcast areas. There was no convenient way to record shows for later listening, and users missed their favorite programs due to scheduling conflicts.',
        impact: 'Reached 5,000+ downloads in the first 6 months with 40+ radio stations available. Users save an average of 10 hours of content weekly, with 85% daily active usage rate. Expanded radio accessibility beyond geographical limitations.',
        beneficiaries: 'Radio listeners, commuters, radio enthusiasts, and fans of South African content. Particularly helpful for users who want offline listening capabilities and the ability to time-shift their radio consumption.',
        features: [
            'Stream 40+ South African radio stations',
            'Record live radio broadcasts',
            'Save recordings for offline listening',
            'Background audio playback',
            'Sleep timer functionality',
            'Favorite stations management',
            'Recent listening history',
            'Low data consumption mode',
            'Intuitive, user-friendly interface'
        ],
        technologies: ['Flutter 3.x', 'Dart', 'Firebase', 'Audio Service Plugin', 'Local Storage', 'Streaming APIs'],
        github: 'https://github.com/princepro-cr/SemosaFM'
    },
    {
        id: 'leavepulse',
        title: 'LeavePulse - Leave Management',
        category: 'Web Application',
        description: 'Automated employee leave management system with multi-level approval workflows.',
        screenshots: [
            'images/projects/leavepulse/screenshot1.jpg',
            'images/projects/leavepulse/screenshot2.jpg',
            'images/projects/leavepulse/screenshot3.jpg'
        ],
        purpose: 'Created to automate and streamline the entire employee leave management process. The system handles everything from leave applications to approvals, tracking, and reporting, eliminating manual processes and paperwork.',
        problem: 'HR departments struggled with paper-based leave systems that caused delays, errors, and lack of transparency. Employees had no visibility into their leave balances, and managers could not easily view team availability for planning purposes.',
        impact: 'Reduced leave approval time from 3-5 days to 24 hours, eliminated 100% of paperwork, and improved leave balance accuracy to 100%. Managers report 40% better resource planning with real-time team availability visibility.',
        beneficiaries: 'Employees, managers, HR administrators, and department heads across the organization. Actively used by 200+ employees with 500+ leave requests processed monthly.',
        features: [
            'Employee self-service leave application portal',
            'Document upload for supporting evidence',
            'Multi-level approval workflow',
            'Real-time leave balance tracking',
            'Automated email notifications',
            'Manager dashboard for team visibility',
            'Leave calendar and planning tools',
            'Comprehensive reports and analytics',
            'Leave policy configuration',
            'Leave accrual automation'
        ],
        technologies: ['ASP.NET Core 8', 'C#', 'Firebase', 'Supabase', 'Entity Framework', 'Material-UI', 'Email Service'],
        github: 'https://github.com/princepro-cr/LeavePulse'
    },
    {
        id: 'lottery',
        title: 'Lottery Mobile Application',
        category: 'Mobile Application',
        description: 'Comprehensive lottery management app with number generation, history tracking, and statistics.',
        screenshots: [
            'images/projects/lottery/screenshot1.jpg',
            'images/projects/lottery/screenshot2.jpg',
            'images/projects/lottery/screenshot3.jpg',
             'images/projects/lottery/screenshot4.jpg'
        ],
        purpose: 'Built to enhance the lottery playing experience by providing number selection tools, result tracking, and statistical analysis. The app helps users make informed decisions and never miss checking their lottery tickets.',
        problem: 'Lottery players often forget to check results, lose physical tickets, and miss draw deadlines. They lack tools for tracking their playing history and analyzing number patterns to inform their selections.',
        impact: 'Downloaded by 3,000+ users with 70% weekly active usage. Users report never missing a draw check and appreciate the statistical insights for number selection. Reduced missed winnings due to unchecked tickets.',
        beneficiaries: 'Lottery players, both casual and regular, who want better organization, tracking, and analysis tools for their lottery activities. Particularly useful for players managing multiple tickets.',
        features: [
            'Manual number selection interface',
            'Quick-pick random number generator',
            'Draw schedule and countdown timers',
            'Result history tracking',
            'Win/loss statistics and analytics',
            'Ticket storage and management',
            'Number frequency analysis',
            'Push notifications for draws',
            'Winning probability calculator'
        ],
        technologies: ['Flutter 3.x', 'Dart', 'Firebase', 'Push Notifications', 'Local Database', 'State Management'],
        github: 'https://github.com/princepro-cr/LotteryApp_Flutter'
    },
    {
        id: 'wordpress',
        title: 'WordPress Business Websites',
        category: 'Web Development',
        description: 'Collection of custom WordPress websites for small businesses with responsive design and SEO.',
        screenshots: [
            'images/projects/wordpress/screenshot1.jpg',
             
        ],
        purpose: 'Developed custom WordPress solutions to help small businesses establish a professional online presence. Each website is tailored to the specific industry and business needs, focusing on user experience and conversion optimization.',
        problem: 'Small businesses lacked affordable, custom web solutions that reflected their brand identity. Generic templates did not meet functional requirements, and many businesses had no online presence or poorly designed websites.',
        impact: 'Delivered 15+ successful websites with an average 150% increase in client inquiries. Businesses reported improved credibility, better customer engagement, and measurable ROI from their online presence.',
        beneficiaries: 'Small business owners, entrepreneurs, and service providers across various industries including retail, consulting, healthcare, and professional services. Helped businesses reach new customers and grow their revenue.',
        features: [
            'Fully responsive design for all devices',
            'Custom theme development',
            'SEO optimization and best practices',
            'E-commerce integration with WooCommerce',
            'Contact forms and lead generation',
            'Google Analytics integration',
            'Performance optimization',
            'Content management training',
            'Security and backup solutions',
            'Ongoing maintenance and support'
        ],
        technologies: ['WordPress 6.x', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'WooCommerce', 'Elementor'],
        github: 'https://github.com/princepro-cr/wordpress-business-websites'
    }
];

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsData;
}