
import React, { useState } from 'react';
import { Home, User, Code, Briefcase, Video, Github, Instagram, Linkedin, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Top Navbar */}
      <nav className="bg-gray-800 p-4 fixed w-full z-10 top-0 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* MacBook-style buttons */}
          <div className="flex items-center space-x-2">
            <div className="w-3.5 h-3.5 bg-red-500 rounded-full"></div>
            <div className="w-3.5 h-3.5 bg-yellow-500 rounded-full"></div>
          </div>
          {/* App Title */}
          <a href="#home" className="text-white text-lg font-semibold">Ananta Kandel</a>
          <div className="flex items-center space-x-4">
            <a href="#talk" className="hidden md:inline-block text-sm text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded-md">
              Let's Talk
            </a>
            <button className="md:hidden" onClick={toggleSidebar}>
              {sidebarOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={` fixed top-16 mt-4 z-20 bg-gray-800 p-4 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:translate-x-0 md:w-[15vw] w-[60vw] h-[80vh] rounded-tr-lg rounded-br-lg overflow-auto`}>
        <ul className="space-y-2">
          <li>
            <a href="#home" className="flex items-center space-x-2 text-gray-300  p-5   hover:text-white">
              <Home size={20} color="#94a3b8" /><span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="flex items-center space-x-2 text-gray-300 p-5  hover:text-white">
              <User size={20} color="#06b6d4" /><span>About</span>
            </a>
          </li>
          <li> 
            <a href="#skills" className="flex items-center space-x-2 text-gray-300 p-5  hover:text-white">
              <Code size={20} color="#d946ef" /><span>Skills</span>
            </a>
          </li>
          <li>
            <a href="#projects" className="flex items-center space-x-2 text-gray-300 p-5  hover:text-white">
              <Briefcase size={20} color="#94a3b8" /><span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#meet" className="flex items-center space-x-2 text-gray-300 p-5  hover:text-white">
              <Video size={20} color="#d946ef" /><span>Meet</span>
            </a>
          </li>
        </ul>

        {/* Social Links */}
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Socials</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-3  text-gray-300 hover:text-white">
                <Github size={20} color="#94a3b8" /><span>Github</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-5  text-gray-300 hover:text-white">
                <Instagram size={20} color="#d946ef" /><span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 p-5  text-gray-300 hover:text-white">
                <Linkedin size={20} color="#06b6d4" /><span>Linkedin</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
