import React from "react";
import { Award } from "lucide-react";

const About = () => {
  const achievements = [
    {
      title: "Web Development Certification",
      org: "Coursera",
      year: "2025",
    },
    { title: "React.js Course Completion", org: "Coursera", year: "2025" },
    {
      title: "JavaScript Algorithms Certification",
      org: "HackerRank",
      year: "2024",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate frontend developer with a keen eye for design and
              a love for clean, efficient code. As a recent graduate in
              Electronics And Communication, I bring fresh perspectives and
              modern web development skills to every project.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              My journey in web development started during my college years, and
              I've been fascinated by the endless possibilities of creating
              interactive, user-friendly applications that solve real-world
              problems.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">1+</div>
                <div className="text-gray-600">Years Learning</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Education
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-gray-900">
                    Bachelor of Electronics And Communication
                  </div>
                  <div className="text-sm text-gray-500">CGPA: 7.7/10</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Certifications
              </h4>
              <div className="space-y-2">
                {achievements.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award size={16} className="text-green-600" />
                    <div>
                      <div className="font-medium text-gray-900">
                        {cert.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {cert.org} • {cert.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
