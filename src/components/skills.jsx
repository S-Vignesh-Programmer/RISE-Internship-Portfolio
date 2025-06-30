import React from "react";
import { Code, Palette, Database, Github } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "React.js",
      level: 90,
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "JavaScript",
      level: 85,
      icon: Code,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "HTML/CSS",
      level: 80,
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

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the technologies I work with and my proficiency levels
            based on my learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {skill.level}% Proficiency
                    </p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
