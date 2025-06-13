import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    twitter,
    typescript,
    java,
    mysql,
    postman,
    firebase,
    vscode
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React.js",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux Toolkit",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "API Testing",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend as a Service",
    },
    {
        imageUrl: vscode,
        name: "VS Code",
        type: "IDE",
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
        iconUrl: pricewise, // You can keep existing icon or update it
        theme: 'btn-back-red',
        name: 'Trending Now',
        description: 'News Portal App 📰✨A React.js-based news portal that fetches real-time news from an API, featuring category filters, responsive design, and a smooth user experience. 🚀',
        link: 'https://github.com/Sai-Dangade777/Trending-Now', // Add your GitHub repo link
    },
    {
        iconUrl: threads, // You can keep existing icon or update it
        theme: 'btn-back-green',
        name: 'Amazon Clone',
        description: 'Developed a static web page that replicates the layout and design of Amazon\'s homepage',
        link: 'https://github.com/Sai-Dangade777/Amazon-Clone', // Add your GitHub repo link
    },
    {
        iconUrl: car, // You can keep existing icon or update it
        theme: 'btn-back-blue',
        name: 'Business Fraud Detection using Machine Learning Model',
        description: 'Created a machine learning model for business fraud detection by ANN, Random Forest Classifier and XGBoost Classifier.',
        link: 'https://github.com/Sai-Dangade777/Business-Fraud-Detection-using-Machine-Learning-Model', // Add your GitHub repo link
    },
    {
        iconUrl: estate, // Choose an appropriate icon
        theme: 'btn-back-orange',
        name: 'Anonymous Chat Application',
        description: 'This is a real-time chat app using Node.js, Express, and Socket.IO. It supports live messaging, typing feedback, and displays the total connected clients. The server handles socket connections.',
        link: 'https://github.com/Sai-Dangade777/Anonymous-Chat-Application', // Add your GitHub repo link
    },
    {
        iconUrl: summiz, // Choose an appropriate icon
        theme: 'btn-back-pink',
        name: 'TravelMinds',
        description: 'Plan your next adventure with TravelMinds, your intelligent travel companion.',
        link: 'https://github.com/Sai-Dangade777/TravelMinds', // Add your GitHub repo link
    },
    {
        iconUrl: nextjs, // Choose an appropriate icon
        theme: 'btn-back-black',
        name: '3D Portfolio',
        description: 'An immersive and interactive developer portfolio built with React Three Fiber, Three.js, and Tailwind CSS. Showcasing my skills, services, and projects in a visually stunning 3D experience.',
        link: 'https://github.com/Sai-Dangade777/3d-portfolio', // Add your GitHub repo link
    },
];
export const service = [
    {

        theme: 'btn-back-red',
        name: 'Web Development',

    },
    
]