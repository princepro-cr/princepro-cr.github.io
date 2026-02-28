
// ============================================
// Update Copyright Year
// ============================================
function updateCopyrightYear() {
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}// ============================================
// PROJECT DATA - All project information
// ============================================

const projectsData = [
    {
        id: 1,
        title: 'ProjectX - Student & HR Portal',
        category: 'Full-Stack System',
        purpose: 'Designed and developed a full-stack digital management system to centralize student and HR operations. The system consists of a Flutter mobile application for students and an ASP.NET Core web portal for administrators.',
        problem: 'Educational institutions struggled with fragmented systems for managing student records, HR data, and academic information. Manual processes led to data inconsistencies and delayed processing.',
        impact: 'Reduced manual paperwork by 75%, improved data accuracy to 98%, and decreased processing time for student requests by 60%.',
        beneficiaries: '500+ students and 50+ staff members use the platform daily for registration, profile management, and administrative tasks.',
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
        id: 2,
        title: 'Library Management System',
        category: 'Web Application',
        purpose: 'Built to automate and streamline all library operations for educational institutions. The system manages the complete book lifecycle from acquisition to circulation.',
        problem: 'Traditional paper-based library systems were prone to errors, book losses, and inefficient tracking. Members had no way to check book availability online.',
        impact: 'Reduced book loss by 90%, decreased checkout time from 5 minutes to 30 seconds, and eliminated fine calculation errors.',
        beneficiaries: 'Serves 2,000+ active members across multiple library branches with seamless book tracking and borrowing.',
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
        technologies: ['ASP.NET Core 8 MVC', 'C#', 'Firebase', 'Entity Framework Core', 'Bootstrap 5', 'JavaScript'],
        github: 'https://github.com/princepro-cr/Libreria'
    },
    {
        id: 3,
        title: 'SemosaFM - Radio Streaming App',
        category: 'Mobile Application',
        purpose: 'Developed to provide South African listeners with easy access to local radio content. The app enables users to stream, record, and save their favorite shows.',
        problem: 'Listeners had limited access to local radio stations outside of traditional broadcast areas. There was no convenient way to record shows for later listening.',
        impact: 'Reached 5,000+ downloads in the first 6 months with 40+ radio stations available and 85% daily active usage rate.',
        beneficiaries: 'Radio listeners, commuters, and fans of South African content who want offline listening capabilities.',
        features: [
            'Stream 40+ South African radio stations',
            'Record live radio broadcasts',
            'Save recordings for offline listening',
            'Background audio playback',
            'Sleep timer functionality',
            'Favorite stations management',
            'Recent listening history',
            'Low data consumption mode'
        ],
        technologies: ['Flutter 3.x', 'Dart', 'Firebase', 'Audio Service Plugin', 'Local Storage'],
        github: 'https://github.com/princepro-cr/SemosaFM'
    },
    {
        id: 4,
        title: 'LeavePulse - Leave Management',
        category: 'Web Application',
        purpose: 'Created to automate and streamline the entire employee leave management process from applications to approvals and tracking.',
        problem: 'HR departments struggled with paper-based leave systems causing delays, errors, and lack of transparency.',
        impact: 'Reduced leave approval time from 3-5 days to 24 hours, eliminated 100% of paperwork, and improved leave balance accuracy.',
        beneficiaries: '200+ employees and HR administrators with 500+ leave requests processed monthly.',
        features: [
            'Employee self-service leave application portal',
            'Document upload for supporting evidence',
            'Multi-level approval workflow',
            'Real-time leave balance tracking',
            'Automated email notifications',
            'Manager dashboard for team visibility',
            'Leave calendar and planning tools',
            'Comprehensive reports and analytics',
            'Leave policy configuration'
        ],
        technologies: ['ASP.NET Core 8', 'C#', 'Firebase', 'Supabase', 'Entity Framework', 'Material-UI'],
        github: 'https://github.com/princepro-cr/LeavePulse'
    },
    {
        id: 5,
        title: 'Lottery Mobile Application',
        category: 'Mobile Application',
        purpose: 'To enhance the lottery playing experience by providing number selection tools, result tracking, and statistical analysis.',
        problem: 'Players forget to check results, lose physical tickets, and lack tools for tracking their playing history.',
        impact: '3,000+ downloads with 70% weekly active usage and improved user engagement.',
        beneficiaries: 'Casual and regular lottery players who want better organization and tracking tools.',
        features: [
            'Manual number selection interface',
            'Quick-pick random number generator',
            'Draw schedule and countdown timers',
            'Result history tracking',
            'Win/loss statistics and analytics',
            'Ticket storage and management',
            'Number frequency analysis',
            'Push notifications for draws'
        ],
        technologies: ['Flutter 3.x', 'Dart', 'Firebase', 'Push Notifications', 'Local Database'],
        github: 'https://github.com/princepro-cr/LotteryApp_Flutter'
    },
    {
        id: 6,
        title: 'WordPress Business Websites',
        category: 'Web Development',
        purpose: 'To help small businesses establish a professional online presence with custom WordPress solutions.',
        problem: 'Small businesses lacked affordable, custom web solutions that reflected their brand identity.',
        impact: 'Delivered 15+ successful websites with an average 150% increase in client inquiries.',
        beneficiaries: 'Small business owners across various industries including retail, consulting, and healthcare.',
        features: [
            'Fully responsive design for all devices',
            'Custom theme development',
            'SEO optimization and best practices',
            'E-commerce integration with WooCommerce',
            'Contact forms and lead generation',
            'Performance optimization',
            'Content management training',
            'Security and backup solutions'
        ],
        technologies: ['WordPress 6.x', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'WooCommerce'],
        github: 'https://github.com/princepro-cr/wordpress-business-websites'
    },
    {
        id: 7,
        title: 'SkyScan - Modern Weather App',
        category: 'Mobile Application',
        purpose: 'A modern weather application built with Flutter that provides real-time weather conditions and forecasts. The app uses the OpenWeather API to deliver accurate weather data with a clean, intuitive interface.',
        problem: 'Existing weather apps are often cluttered with ads, have confusing interfaces, or lack essential features like detailed forecasts. Users need a simple, fast, and reliable way to check weather conditions.',
        impact: 'Delivers instant weather updates with 95% API accuracy, features a clean MVVM architecture for maintainability, and provides seamless user experience across Android and iOS platforms.',
        beneficiaries: 'Daily commuters, travelers, and anyone who needs quick access to accurate weather information with a beautiful, ad-free experience.',
        features: [
            'Current weather conditions with temperature, humidity, and wind speed',
            '5-day weather forecast with daily summaries',
            'Search for weather in any city worldwide',
            'Clean MVVM architecture for better code organization',
            'Responsive design that works on both phones and tablets',
            'Pull-to-refresh for latest weather data',
            'Error handling with user-friendly messages',
            'Loading states and smooth animations'
        ],
        technologies: ['Flutter 3.x', 'Dart', 'OpenWeather API', 'HTTP Package', 'MVVM Architecture'],
        github: 'https://github.com/princepro-cr/SkyScanModern'
    }
];