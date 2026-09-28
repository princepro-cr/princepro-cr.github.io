import { ProfileData, Project } from '@/types/portfolio';

export const profileData: ProfileData = {
  name: "Promise Semosa",
  title: "Software Engineer & Full-Stack Developer",
  heroTagline: "Building resilient mobile apps, robust backends, and cloud solutions.",
  bio: "Software Engineer with hands-on experience building mobile applications, web portals, and REST APIs across C#/.NET, Flutter, React Native, and Azure. Certified in Azure Fundamentals & Cybersecurity.",
  heroImage: "/images/hero-profile.jpg",
  location: "Johannesburg, South Africa",
  email: "princepromisesemosa@gmail.com",
  github: "https://github.com/princepro-cr",
  linkedin: "https://linkedin.com/in/princepromise-semosa-abb88832b",
  cvLink: "/PROMISE_SEMOSA_CV.pdf",
  certificates: [
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      icon: "☁️"
    },
    {
      title: "ISC2 Certified in Cybersecurity (CC)",
      issuer: "ISC2",
      date: "2026",
      icon: "🛡️"
    }
  ],
  techStack: [
    {
      category: "Languages & Frameworks",
      skills: [
        { name: "C#" },
        { name: ".NET / ASP.NET Core" },
        { name: "Blazor" },
        { name: "Node.js" },
        { name: "Flutter & Dart" },
        { name: "React Native" },
        { name: "Next.js" },
        { name: "TypeScript / JavaScript" },
        { name: "Laravel / PHP" },
        { name: "WordPress" },
        { name: "HTML5 / CSS3" }
      ]
    },
    {
      category: "Databases & Backend APIs",
      skills: [
        { name: "ASP.NET Web API" },
        { name: "SQL & SQL Server" },
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "Firebase" },
        { name: "Supabase" },
        { name: "RESTful APIs" }
      ]
    },
    {
      category: "Cloud, Infrastructure & Admin",
      skills: [
        { name: "Microsoft Azure" },
        { name: "Windows Server" },
        { name: "Active Directory" },
        { name: "Hyper-V & Virtualization" },
        { name: "DNS & DHCP" },
        { name: "Network Configuration" }
      ]
    },
    {
      category: "Security & Practices",
      skills: [
        { name: "JWT Authentication" },
        { name: "Role-Based Access Control (RBAC)" },
        { name: "Cybersecurity Fundamentals" },
        { name: "Agile / Scrum" },
        { name: "Testing, Debugging & Deployment" }
      ]
    }
  ]
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'ProjectX - Student & HR Portal',
    category: 'Full-Stack System',
    purpose: 'Designed and developed a full-stack digital management system to centralize student and HR operations with Flutter mobile app and ASP.NET Core web portal.',
    problem: 'Educational institutions struggled with fragmented systems for managing student records, HR data, and academic information. Manual processes led to data inconsistencies.',
    impact: 'Reduced manual paperwork by 75%, improved data accuracy to 98%, and decreased processing time by 60%.',
    beneficiaries: '500+ students and 50+ staff members use the platform daily.',
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
    github: 'https://github.com/princepro-cr/PortalX_Web_Admin_Panel',
    coverImage: '/projects/portalx-cover.jpg',
    galleryImages: [
      '/projects/portalx-1.jpg',
      '/projects/portalx-2.jpg'
    ]
  },
  {
    id: 2,
    title: 'Library Management System',
    category: 'Web Application',
    purpose: 'Built to automate and streamline all library operations for educational institutions. Manages complete book lifecycle from acquisition to circulation.',
    problem: 'Traditional paper-based library systems were prone to errors, book losses, and inefficient tracking.',
    impact: 'Reduced book loss by 90%, decreased checkout time from 5 minutes to 30 seconds, and eliminated fine calculation errors.',
    beneficiaries: 'Serves 2,000+ active members across multiple library branches.',
    features: [
      'Real-time book availability tracking and search',
      'Automated borrowing and return processing',
      'Online book reservation system',
      'Automated fine calculation and notifications',
      'Barcode scanning integration',
      'Inventory management with analytics'
    ],
    technologies: ['ASP.NET Core 8 MVC', 'C#', 'Firebase', 'Entity Framework Core', 'Bootstrap 5', 'JavaScript'],
    github: 'https://github.com/princepro-cr/Libreria',
    coverImage: '/projects/library-cover.jpg',
    galleryImages: [
      '/projects/library-1.jpg'
    ]
  },
  {
    id: 3,
    title: 'SemosaFM - Radio Streaming App',
    category: 'Mobile Application',
    purpose: 'Developed to provide South African listeners with easy access to local radio content. Stream, record, and save favorite radio shows.',
    problem: 'Listeners had limited access to local radio stations outside traditional broadcast areas.',
    impact: 'Reached 5,000+ downloads in the first 6 months with 40+ radio stations available.',
    beneficiaries: 'Radio listeners, commuters, and fans who want offline listening capabilities.',
    features: [
      'Stream 40+ South African radio stations',
      'Record live radio broadcasts',
      'Save recordings for offline listening',
      'Background audio playback',
      'Sleep timer functionality',
      'Favorite stations management'
    ],
    technologies: ['Flutter 3.x', 'Dart', 'Firebase', 'Audio Service Plugin', 'Local Storage'],
    github: 'https://github.com/princepro-cr/SemosaFM',
    coverImage: '/projects/semosafm-cover.jpg',
    galleryImages: [
      '/projects/semosafm-1.jpg'
    ]
  },
  {
    id: 4,
    title: 'LeavePulse - Leave Management',
    category: 'Web Application',
    purpose: 'Created to automate and streamline the entire employee leave management process from applications to approvals.',
    problem: 'HR departments struggled with paper-based leave systems causing delays and lack of transparency.',
    impact: 'Reduced leave approval time from 3-5 days to 24 hours, eliminated 100% of paperwork.',
    beneficiaries: '200+ employees and HR administrators processing 500+ leave requests monthly.',
    features: [
      'Employee self-service leave application portal',
      'Document upload for supporting evidence',
      'Multi-level approval workflow',
      'Real-time leave balance tracking',
      'Manager dashboard for team visibility'
    ],
    technologies: ['ASP.NET Core 8', 'C#', 'Firebase', 'Supabase', 'Entity Framework', 'Material-UI'],
    github: 'https://github.com/princepro-cr/LeavePulse',
    coverImage: '/projects/leavepulse-cover.jpg',
    galleryImages: [
      '/projects/leavepulse-1.jpg'
    ]
  },
  {
    id: 5,
    title: 'Lottery Mobile Application',
    category: 'Mobile Application',
    purpose: 'Provides number selection tools, result tracking, and statistical analysis to enhance the lottery playing experience.',
    problem: 'Players forget to check results, lose physical tickets, and lack tools for tracking playing history.',
    impact: '3,000+ downloads with 70% weekly active usage.',
    features: [
      'Manual number selection interface',
      'Quick-pick random number generator',
      'Draw schedule and countdown timers',
      'Result history tracking',
      'Win/loss statistics and analytics'
    ],
    technologies: ['Flutter 3.x', 'Dart', 'Firebase', 'Push Notifications', 'Local Database'],
    github: 'https://github.com/princepro-cr/LotteryApp_Flutter',
    coverImage: '/projects/lottery-cover.jpg',
    galleryImages: [
      '/projects/lottery-1.jpg'
    ]
  },
  {
    id: 6,
    title: 'WordPress Business Websites',
    category: 'Web Development',
    purpose: 'Helps small businesses establish a professional online presence with custom WordPress solutions.',
    impact: 'Delivered 15+ successful websites with an average 150% increase in client inquiries.',
    features: [
      'Fully responsive design for all devices',
      'Custom theme development',
      'SEO optimization and best practices',
      'E-commerce integration with WooCommerce'
    ],
    technologies: ['WordPress 6.x', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'WooCommerce'],
    github: 'https://github.com/princepro-cr/wordpress-business-websites',
    coverImage: '/projects/wordpress-cover.jpg',
    galleryImages: [
      '/projects/wordpress-1.jpg'
    ]
  },
  {
    id: 7,
    title: 'SkyScan - Modern Weather App',
    category: 'Mobile Application',
    purpose: 'Modern weather app built with Flutter that provides real-time weather conditions and forecasts via OpenWeather API.',
    impact: 'Delivers instant weather updates with 95% API accuracy, features a clean MVVM architecture.',
    features: [
      'Current weather conditions with temperature, humidity, and wind speed',
      '5-day weather forecast with daily summaries',
      'Search for weather in any city worldwide',
      'Clean MVVM architecture for better code organization'
    ],
    technologies: ['Flutter 3.x', 'Dart', 'OpenWeather API', 'HTTP Package', 'MVVM Architecture'],
    github: 'https://github.com/princepro-cr/SkyScan',
    coverImage: '/projects/skyscan-cover.jpg',
    galleryImages: [
      '/projects/skyscan-1.jpg'
    ]
  },
  {
    id: 8,
    title: 'Zone-Runner - 2D Platformer Game',
    category: 'Game Development',
    purpose: 'Engaging 2D platformer game challenging players to navigate zones, collect coins, and survive levels.',
    impact: 'Successfully developed a fully playable Unity game featuring multiple themed zones and physics engines.',
    features: [
      '2D side-scrolling platformer gameplay',
      'Coin collection and scoring system',
      'Multiple themed environments and zones',
      'Player lives and health management'
    ],
    technologies: ['Unity', 'C#', 'Unity Physics Engine', 'Sprite Animation', 'Tilemaps', 'Unity UI'],
    github: 'https://github.com/princepro-cr/Unity_2D-Fundamentals',
    coverImage: '/projects/zonerunner-cover.jpg',
    galleryImages: [
      '/projects/zonerunner-1.jpg'
    ]
  },
  {
    id: 9,
    title: 'CampusStay - Student Accommodation Platform',
    category: 'Full-Stack Development',
    purpose: 'Full-stack platform connecting students with accommodation providers, streamlining searching, listing, and booking.',
    features: [
      'JWT authentication and role-based access',
      'RESTful API backend built with ASP.NET Core Web API',
      'Cross-platform mobile app for students (React Native/Expo)',
      'Web-based provider portal for managing listings (ASP.NET Core MVC)'
    ],
    technologies: ['ASP.NET Core Web API', 'ASP.NET Core MVC', 'React Native', 'Expo', 'C#', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/princepro-cr',
    coverImage: '/projects/campusstay-cover.jpg',
    galleryImages: [
      '/projects/campusstay-1.jpg'
    ]
  }
];