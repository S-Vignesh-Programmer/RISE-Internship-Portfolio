import { Code, Palette, Database, Github } from "lucide-react";

export const personalInfo = {
  name: "Alex Johnson",
  title: "Frontend Developer & UI/UX Enthusiast",
  description:
    "Passionate about creating beautiful, responsive web applications that deliver exceptional user experiences.",
  email: "alex.johnson@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  socialLinks: {
    github: "#",
    linkedin: "#",
    email: "#",
  },
};

export const skills = [
  {
    name: "React.js",
    level: 85,
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "JavaScript",
    level: 80,
    icon: Code,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "HTML/CSS",
    level: 90,
    icon: Palette,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "TailwindCSS",
    level: 85,
    icon: Palette,
    color: "from-teal-500 to-green-500",
  },
  {
    name: "Node.js",
    level: 70,
    icon: Database,
    color: "from-green-600 to-emerald-600",
  },
  {
    name: "Git/GitHub",
    level: 75,
    icon: Github,
    color: "from-gray-600 to-gray-800",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A modern e-commerce platform built with React and TailwindCSS featuring product catalog, shopping cart, and responsive design.",
    tech: ["React", "TailwindCSS", "JavaScript"],
    github: "#",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity app for managing daily tasks with drag-and-drop functionality and local storage persistence.",
    tech: ["React", "CSS3", "Local Storage"],
    github: "#",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location-based forecasts and beautiful UI animations.",
    tech: ["JavaScript", "API Integration", "CSS3"],
    github: "#",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
  },
];

export const achievements = [
  { title: "Web Development Certification", org: "FreeCodeCamp", year: "2024" },
  { title: "React.js Course Completion", org: "Coursera", year: "2024" },
  {
    title: "JavaScript Algorithms Certification",
    org: "HackerRank",
    year: "2023",
  },
];

export const education = {
  degree: "Bachelor of Computer Science",
  university: "University of Technology",
  year: "2024",
  cgpa: "8.5/10",
};

export const stats = {
  projectsCompleted: "15+",
  yearsLearning: "2+",
  experience: "Fresh Graduate",
};
