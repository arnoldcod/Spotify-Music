import { IconBrandGithub, IconBrandLeetcode, IconBrandLinkedin, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";
const Info= {
    name: "Arnold Uwamwezi",
    stack: ["Software Engineer", "Web Developer", " Freelancer", "Competitive Programmer"],
    bio:"I'm a passionate software engineer with a strong background in programming and web development. I specialise in creating efficient and scalable solutions, deliver top-notch web applications and provide freelance services that exceed client expectations. Let’s connect and create amazing things together! "
}


const ProjectInfo = [
    {
        title: "Daystar App",
        desc: "Daystar is a modern, fully responsive web platform built using Vue and Pug, Bootstrap, and Nodejs offering a seamless experience across the web. It features secure user authentication with login, registration, logout functionalities and has a doll stall for procurement management. The admin can add items to the doll stall cart for purchase or remove them. Daystar combines robust functionality with a sleek, intuitive design, making data management effortless and enjoyable.",
        image: "Daystar.png",
        live: true,
        technologies: ["Pug", "Bootstrap", "Nodejs", "Expressjs"],
        link: "https://github.com/arnoldcod/daystar-daycare",
        github: "https://github.com/arnoldcod"
    },
    {
        title: "Food  App (Tomato)",
        desc: "Tomato is a modern food delivery app built using the MERN stack (MongoDB, Express.js, React, Node.js) that offers a seamless and enjoyable online food shopping experience. With Tomato, users can effortlessly browse and search for their favorite food items, adding them to a wishlist for later or directly to a shopping cart for immediate purchase. The checkout process is designed with user security and convenience in mind, featuring robust form validation to ensure the accuracy of address and payment details. After completing a purchase, users can easily access their order history in the Orders section. Tomato makes online food shopping both effortless and enjoyable.",
        image: "Tomato.png",
        live: false,
        technologies: ["React", "Express", "MongoDB", "Tailwind", "Stripe", "Nodejs"],
        link: "https://github.com/arnoldcod/Food-app",
        github: "https://github.com/arnoldcod"
    },
    {
        title: "Spotify Clone",
        desc: "Spotify Clone is a full-stack web application that replicates the core features of Spotify, including user authentication, music playback, and playlist creation. The front end is built with React, TailwindCSS, Heroicons, and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, search for songs, and create playlists. The app features real-time updates, so users can see new songs as they are added. Spotify Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Spotify.png",
        live: false,
        technologies: ["React", "Cloudinary", "Tailwind", "Tabler-Icons", "MongoDB"],
        link: "https://github.com/arnoldcod/Spotify-Music",
        github: "https://github.com/arnoldcod"
    },
    {
        title: "APOD App",
        desc: "NASA APOD(Astronomy Picture Of the Day) App is a cutting-edge web application built with React and Tailwind CSS that brings the wonders of space exploration to your fingertips. Designed with a focus on both performance and aesthetics, this app offers users an immersive experience as they explore data and images directly from NASA’s vast repository. Whether you're browsing through stunning images of distant galaxies, accessing detailed information about planets, or staying updated with the latest space missions, the NASA App provides an intuitive and responsive interface. Tailwind CSS ensures a sleek and modern design, making space exploration not just informative but visually engaging",
        image: "Nasa.png",
        live: false,
        technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
        link: "https://github.com/arnoldcod/Nasa-App",
        github: "https://github.com/arnoldcod"
    },
    {
        title: "arnold portfolio",
        desc: "A responsive web app built with React, Typescript, Mantine, and Vanta, designed to offer a sleek and interactive user experience. Mantine provides a robust UI framework, while Vanta adds dynamic, animated backgrounds, creating an engaging and visually appealing interface that adapts seamlessly to any device..",
        image: "77.png",
        live: false,
        technologies: ["React", "Typescript", "Mantine", "Vanta"],
        link: "https://github.com/arnoldcod/arnoldcod7",
        github: "https://github.com/arnoldcod"
    },
    {
        title: "CSE-JS-3",
        desc: "This responsive web application, built with Vue.js, Node.js, and MongoDB Atlas, allows users to perform full CRUD (Create, Read, Update, Delete) operations efficiently. The project was a collaborative effort involving 16 contributors, ensuring a robust and scalable application. Vue.js powers the dynamic and user-friendly frontend, while Node.js and MongoDB Atlas handle the backend, managing data securely and effectively. The project showcases the strength of teamwork and modern web technologies in creating a seamless user experience.",
        image: "cse.png",
        live: false,
        technologies: ["Vue", "Bootstrap", "Mongo Atlas"],
        link: "https://github.com/arnoldcod/CSE-JS-3-REPO",
        github: "https://github.com/arnoldcod"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Angular", "Redux", "Tailwind CSS", "GSAP", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: [ "Node JS", "Express JS", "MySQL", "MongoDB",  "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: [ "Java", "JavaScript", "TypeScript", "Python"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Pycharm", "Bash Script"]
    }
]
const socialLinks = [
    { link: "https://github.com/arnoldcod", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/arnold-uwamwezi-98902b198/", icon: IconBrandLinkedin },
    { link: "https://x.com/arnoldcod_", icon: IconBrandX }, 
    { link: "https://www.youtube.com/channel/UC1ki6jaFvFiH_E79b9FYptw", icon: IconBrandYoutube },
    { link: "https://leetcode.com/u/arnoldcod/", icon: IconBrandLeetcode }
];





const ExperienceInfo = [
    {
        role: "Software Engineer Apprentice",
        company: "Refactory",
        date: "May 2024 - Present",
        desc: "I led software development with  React, and vue, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: [ "React JS", "Vue JS", "Node JS", "MySQL", "MongoDB", "Microservices"]
    },
    {
        role: "Product manager",
        company: "Treasure World Inc",
        date: "June 2021 - Sep 2023",
        desc: " I oversaw the integration of IT systems that support inventory management and marketing efforts, ensuring seamless data flow between systems.I ensured the IT infrastructure supports the company’s operations efficiently, including website management, online sales platforms, and data security. I developed and executed digital marketing strategies that leverage GIS certification and quality as key selling points. Utilize social media: TikTok, Douyin, Taobao, and other Chinese social media apps",
        skills: ["strategic thinking", "Analytical and problem solving", "communication and collaboration", "ux/ui", "customer focus"]
    }
]
const Slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "vue",
    "flutter",
    "android",
    "html5",
    "css3",
    "human centered design",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cloud computing principles",
    "docker",
    "git",
    "ci/cd",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "figma",
    "test driven development",
    "behavior driven development"
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };