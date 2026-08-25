import {
    car,
    estate,
    github,
    nextjs,
    linkedin,
    pricewise,
    summiz,
    threads,
    
} from "../assets/icons";

export const skills = [
    {
        imageUrl: null,
        name: "SQL",
        type: "Core Data Analytics",
        featured: true,
        icon: "database",
    },
    {
        imageUrl: null,
        name: "Microsoft SQL Server",
        type: "Core Data Analytics",
        featured: true,
        icon: "server",
    },
    {
        imageUrl: null,
        name: "Excel",
        type: "Core Data Analytics",
        featured: true,
        icon: "excel",
    },
    {
        imageUrl: null,
        name: "Python",
        type: "Core Data Analytics",
        featured: true,
        icon: "python",
    },
    {
        imageUrl: null,
        name: "Data Cleaning",
        type: "Core Data Analytics",
        icon: "cleaning",
    },
    {
        imageUrl: null,
        name: "Data Validation",
        type: "Core Data Analytics",
        icon: "shieldCheck",
    },
    {
        imageUrl: null,
        name: "Exploratory Data Analysis",
        type: "Core Data Analytics",
        icon: "search",
    },
    {
        imageUrl: null,
        name: "Data Visualization",
        type: "Core Data Analytics",
        icon: "chart",
    },
    {
        imageUrl: null,
        name: "Power BI",
        type: "Business Intelligence",
        featured: true,
        icon: "panels",
    },
    {
        imageUrl: null,
        name: "DAX",
        type: "Business Intelligence",
        featured: true,
        icon: "formula",
    },
    {
        imageUrl: null,
        name: "Power Query",
        type: "Business Intelligence",
        featured: true,
        icon: "pipeline",
    },
    {
        imageUrl: null,
        name: "Data Modeling",
        type: "Business Intelligence",
        icon: "database",
    },
    {
        imageUrl: null,
        name: "Dashboard Development",
        type: "Business Intelligence",
        icon: "dashboard",
    },
    {
        imageUrl: null,
        name: "KPI Analysis",
        type: "Business Intelligence",
        icon: "gauge",
    },
    {
        imageUrl: null,
        name: "ETL & Data Preparation",
        type: "Data Engineering / Preparation",
        icon: "pipeline",
    },
    {
        imageUrl: null,
        name: "Data Transformation",
        type: "Data Engineering / Preparation",
        icon: "shuffle",
    },
    {
        imageUrl: null,
        name: "Data Quality",
        type: "Data Engineering / Preparation",
        icon: "badgeCheck",
    },
    {
        imageUrl: null,
        name: "Data Reconciliation",
        type: "Data Engineering / Preparation",
        icon: "compare",
    },
    {
        imageUrl: null,
        name: "LLM Evaluation",
        type: "AI / LLM",
        icon: "aiEvaluation",
    },
    {
        imageUrl: null,
        name: "Prompt Evaluation",
        type: "AI / LLM",
        icon: "messageCheck",
    },
    {
        imageUrl: null,
        name: "Prompt Engineering",
        type: "AI / LLM",
        icon: "terminal",
    },
    {
        imageUrl: null,
        name: "AI Data Quality Analysis",
        type: "AI / LLM",
        icon: "aiAnalytics",
    }
];



export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Sai-Dangade777',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/saiprasad-dangade-1848a7176/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'E-Commerce Customer Intelligence',
        description: 'Built an end-to-end Business Intelligence solution using SQL Server and Power BI to transform 99K+ e-commerce orders into actionable customer, sales, product, seller, and geographic insights. Implemented data staging, cleansing, SQL analysis, RFM segmentation, churn analysis, Power Query transformations, DAX measures, and interactive Power BI dashboards.',
        tags: ['SQL Server', 'Power BI', 'Power Query', 'DAX', 'Data Analytics'],
        link: '',
        githubLink: 'https://github.com/Sai-Dangade777/ECommerce-Customer-Intelligence',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Loan Risk Dashboard',
        description: 'Power BI dashboard focused on loan portfolio analysis, borrower and risk segmentation, risk indicators, and portfolio performance insights using SQL-based analysis and DAX measures.',
        tags: ['Power BI', 'SQL', 'DAX', 'Risk Analytics'],
        link: '',
        githubLink: 'https://github.com/Sai-Dangade777/Financial-Loan-Portfolio-Risk-Intelligence-System',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Trending Now',
        description: 'News Portal App 📰✨ A React.js-based news portal that fetches real-time news from an API, featuring category filters, responsive design, and a smooth user experience. 🚀',
        link: 'https://github.com/Sai-Dangade777/Trending-Now',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-orange',
        name: 'Amazon Clone',
        description: 'Developed a static web page that replicates the layout and design of Amazon\'s homepage.',
        link: 'https://github.com/Sai-Dangade777/Amazon-Clone',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Business Fraud Detection using Machine Learning Model',
        description: 'Created a machine learning model for business fraud detection by ANN, Random Forest Classifier and XGBoost Classifier.',
        link: 'https://github.com/Sai-Dangade777/Business-Fraud-Detection-using-Machine-Learning-Model',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-orange',
        name: 'Anonymous Chat Application',
        description: 'This is a real-time chat app using Node.js, Express, and Socket.IO. It supports live messaging, typing feedback, and displays the total connected clients. The server handles socket connections.',
        link: 'https://github.com/Sai-Dangade777/Anonymous-Chat-Application',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-pink',
        name: 'TravelMinds',
        description: 'Plan your next adventure with TravelMinds, your intelligent travel companion.',
        link: 'https://github.com/Sai-Dangade777/TravelMinds',
    },
    {
        iconUrl: nextjs,
        theme: 'btn-back-black',
        name: '3D Portfolio',
        description: 'An immersive and interactive developer portfolio built with React Three Fiber, Three.js, and Tailwind CSS. Showcasing my skills, services, and projects in a visually stunning 3D experience.',
        link: 'https://github.com/Sai-Dangade777/3d-portfolio',
    },
];
export const service = [
    {
        name: 'Data Analysis',
        description: 'SQL-based data analysis, data cleaning, validation, exploratory analysis, and actionable business insights.',
        icon: 'analytics',
    },
    {
        name: 'Power BI Dashboards',
        description: 'Interactive Power BI dashboards, KPI reporting, DAX measures, Power Query transformations, and business reporting.',
        icon: 'panels',
    },
    {
        name: 'Excel Data Analysis',
        description: 'Data cleaning, validation, reconciliation, analysis, reporting, and dashboard preparation using Excel.',
        icon: 'excel',
    },
    {
        name: 'SQL Data Analysis',
        description: 'SQL querying, joins, filtering, aggregation, validation, business analysis, and structured data investigation.',
        icon: 'database',
    },
    {
        name: 'Data Cleaning & ETL',
        description: 'Data preparation, transformation, validation, quality checks, and analysis-ready datasets.',
        icon: 'pipeline',
    },
    {
        name: 'Business Intelligence',
        description: 'KPI analysis, customer, sales, and operational analytics, visualization, and decision-support dashboards.',
        icon: 'aiAnalytics',
    },
    {
        name: 'AI / LLM Evaluation',
        description: 'LLM output evaluation, structured test scenarios, prompt optimization, and AI output quality analysis.',
        icon: 'aiEvaluation',
    },
]