import React from "react";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
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

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work demonstrating my skills in modern web
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border"
            >
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
