import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="relative mb-48">
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vignesh</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Frontend Developer & UI/UX Enthusiast
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Passionate about creating beautiful, responsive web applications that deliver exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <Download className="inline-block mr-2" size={20} />
              Download Resume
            </button>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                <Github size={24} className="text-gray-700" />
              </a>
              <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                <Linkedin size={24} className="text-blue-600" />
              </a>
              <a href="#" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                <Mail size={24} className="text-red-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;