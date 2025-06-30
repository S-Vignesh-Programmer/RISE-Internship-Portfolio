import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo functionality)");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Mail size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">vignesh@email.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Phone size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">5104-2110-6057</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <MapPin size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Location</h3>
                <p className="text-gray-600">Chennai</p>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Github size={24} className="text-gray-700" />
              </a>
              <a
                href="#"
                className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Linkedin size={24} className="text-blue-600" />
              </a>
              <a
                href="#"
                className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Mail size={24} className="text-red-500" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
