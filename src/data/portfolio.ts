import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiMysql, SiCloudflare, SiHono } from "react-icons/si";


export const personalInfo = {
  name: "Bibek Barik",
  initials: "BB",
  title: "Aspiring Full-Stack Developer",
  tagline: "Building innovative web solutions with modern technologies",
  description: "I'm a passionate Computer Science student with a love for creating elegant, efficient, and user-focused web applications. Currently pursuing my degree while building real-world projects that solve meaningful problems.",
  email: "workbybibek@gmail.com",
  github: "https://github.com/barikbibek",
  linkedin: "https://linkedin.com/in/nineX",
  resume: "/resume.pdf",
  avatar: "/avatar.jpg"
};

export const skills = [
  {
    name: "HTML5",
    category: "Frontend",
    icon: FaHtml5,
    color: "text-orange-600", 
    description: "Semantic markup and accessibility"
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: FaCss3Alt,
    color: "text-blue-600", 
    description: "Advanced styling and animations"
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: FaJs,
    color: "text-yellow-400", 
    description: "ES6+ and DOM manipulation"
  },
  {
    name: "TypeScript",
    category: "Frontend",
    icon: SiTypescript,
    color: "text-blue-500", 
    description: "Type-safe JavaScript development"
  },
  {
    name: "React",
    category: "Frontend",
    icon: FaReact,
    color: "text-cyan-400", 
    description: "Component-based UI development"
  },
  {
    name: "TailwindCSS",
    category: "Frontend",
    icon: SiTailwindcss,
    color: "text-sky-400", 
    description: "Utility-first CSS framework"
  },
  {
    name: "Python",
    category: "Backend",
    icon: FaPython,
    color: "text-yellow-500", 
    description: "Data structures and algorithms"
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: FaNodeJs,
    color: "text-green-600", 
    description: "Server-side JavaScript runtime"
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: SiExpress,
    color: "text-gray-500", 
    description: "Web application framework"
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: SiMongodb,
    color: "text-green-500", 
    description: "NoSQL document database"
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: SiPostgresql,
    color: "text-sky-700", 
    description: "Relational database management"
  },
  {
    name: "MySQL",
    category: "Database",
    icon: SiMysql,
    color: "text-blue-700", 
    description: "Popular relational database"
  },
  {
    name: "Cloudflare Workers",
    category: "Cloud",
    icon: SiCloudflare,
    color: "text-orange-500", 
    description: "Edge computing platform"
  },
  {
    name: "Hono",
    category: "Backend",
    icon: SiHono,
    color: "text-red-500",
    description: "Lightweight web framework"
  },
  {
    name: "Git",
    category: "Tools",
    icon: FaGitAlt,
    color: "text-orange-500", 
    description: "Version control system"
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: FaGithub,
    color: "text-black dark:text-white", 
    description: "Code hosting and collaboration"
  }
];

export const projects = [
  {
    id: 1,
    title: "URL Shortener",
    description: "A fast and reliable URL shortener with copy shortened link support, dark mode, and one-click sharing for social platforms.",
    image: "/project6.jpg",
    technologies: ["React", "Cloudflare workers", "cloudflare KV", "Hono", "TailwindCSS"],
    githubUrl: "https://github.com/barikbibek/URL-Shortener",
    liveUrl: "https://quicklnk.netlify.app/",
    featured: true
  },
  {
    id: 2,
    title: "Medium like blog platform",
    description: "A content management system for bloggers where user can post blog post with Authenitication",
    image: "/project2.jpg", 
    technologies: ["React", "TypeScript", "TailwindCSS", "CloudFlare Worker", "Hono","Prisma(ORM)", "PostgreSQL"],
    githubUrl: "https://github.com/barikbibek/serverless-medium-blog.git",
    liveUrl: "",
    featured: true
  },
  {
    id: 3,
    title: "Snake Game",
    description: "A responsive snake game with button and keyboard controls, built using HTML, CSS, and JavaScript.",
    image: "/project5.jpg",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/barikbibek/simple-snake-js.git",
    liveUrl: "https://supersimplesnake.netlify.app/",
    featured: false
  },
  {
    id: 4,
    title: "Chat Application",
    description: "Real-time messaging application with user authentication(sign-up, login, logout).",
    image: "/project1.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express.js"],
    githubUrl: "https://github.com/barikbibek/Real-time-chat-app.git",
    liveUrl: "",
    featured: true
  },
  {
    id: 5,
    title: "Scrambled Word Games ",
    description: "A responsive word puzzle built with HTML, CSS, and JavaScript, where players unscramble words against the clock(30 seconds) for a fun and engaging experience.",
    image: "/project3.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/barikbibek/js-wordXpuzzle.git",
    liveUrl: "https://wordxpuzzle.netlify.app/",
    featured: false
  },
  {
    id: 6,
    title: "File Sharing App",
    description: "A LAN-only web app for fast file sharing across devices on the same network — no internet required.",
    image: "/project4.jpg",
    technologies: ["React","TailwindCSS", "TypeScript", "Node.js", "Express.js","multer"],
    githubUrl: "https://github.com/barikbibek/File-Sharing-app.git",
    liveUrl: "",
    featured: false
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];