import React from 'react';
import { Home, User, Code, Briefcase, Video, Github, Instagram, Linkedin, Calendar, Phone, Mail, Download, ExternalLink } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <nav className="w-64 bg-gray-800 p-4 fixed h-full overflow-y-auto">
        <ul className="space-y-2">
          <li><a href="#home" className="flex items-center space-x-2 text-gray-300 hover:text-white"><Home size={20} color="#94a3b8" /><span>Home</span></a></li>
          <li><a href="#about" className="flex items-center space-x-2 text-gray-300 hover:text-white"><User size={20} color="#06b6d4" /><span>About</span></a></li>
          <li><a href="#skills" className="flex items-center space-x-2 text-gray-300 hover:text-white"><Code size={20} color="#d946ef" /><span>Skills</span></a></li>
          <li><a href="#projects" className="flex items-center space-x-2 text-gray-300 hover:text-white"><Briefcase size={20} color="#94a3b8" /><span>Projects</span></a></li>
          <li><a href="#meet" className="flex items-center space-x-2 text-gray-300 hover:text-white"><Video size={20} color="#d946ef" /><span>Meet</span></a></li>
        </ul>
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Socials</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white"><Github size={20} color="#94a3b8" /><span>Github</span></a></li>
            <li><a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white"><Instagram size={20} color="#d946ef" /><span>Instagram</span></a></li>
            <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white"><Linkedin size={20} color="#06b6d4" /><span>Linkedin</span></a></li>
          </ul>
        </div>
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Projects</h3>
          {/* Add project links here if needed */}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8 ml-64">
        <div className="max-w-3xl mx-auto">
          {/* Home Section */}
          <section id="home" className="mb-16">
            <header className="flex items-center mb-12">
              <img src="/api/placeholder/150/150" alt="Ananta Kandel" className="w-32 h-32 rounded-full mr-8" />
              <div>
                <h1 className="text-4xl font-bold mb-2">Hello, I'm<br />Ananta Kandel</h1>
                <p className="text-xl text-gray-400 mb-4">Full Stack Developer</p>
                <a href="/path-to-your-cv.pdf" download className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                  <Download size={20} className="mr-2" />
                  Download CV
                </a>
              </div>
            </header>
          </section>

          {/* About Section */}
          <section id="about" className="mb-16">
            <h2 className="text-2xl font-semibold mb-2">Get To know More</h2>
            <h3 className="text-3xl font-bold text-red-500 mb-8">About Me</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-800 p-4 rounded">
                <h4 className="text-xl font-semibold mb-2">2+ Years Experience</h4>
                <p>Developing web applications and solving complex problems.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <h4 className="text-xl font-semibold mb-2">Bsc.CSIT</h4>
                <p>Graduate in Computer Science and Information Technology.</p>
              </div>
            </div>
            <p className="text-gray-300">
              I'm a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. 
              My journey in web development started during my university years, and I've been honing my skills ever since. 
              I love creating efficient, scalable, and user-friendly web applications that solve real-world problems.
            </p>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-16">
            <h2 className="text-2xl font-semibold mb-2">Explore</h2>
            <h3 className="text-3xl font-bold text-red-500 mb-8">What I Know</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold mb-4">Frontend</h4>
                <div className="grid grid-cols-3 gap-4">
                  {['HTML/CSS/JS', 'React', 'Tailwind CSS'].map((skill, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-4">
                      <img src={`/api/placeholder/100/100`} alt={skill} className="w-16 h-16 object-contain mb-2" />
                      <p className="text-sm">Good knowledge of {skill}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Backend</h4>
                <div className="grid grid-cols-3 gap-4">
                  {['Node.js', 'Express', 'MongoDB'].map((skill, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-4">
                      <img src={`/api/placeholder/100/100`} alt={skill} className="w-16 h-16 object-contain mb-2" />
                      <p className="text-sm">Good knowledge of {skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-16">
            <h2 className="text-2xl font-semibold mb-2">Browse My Recent</h2>
            <h3 className="text-3xl font-bold text-red-500 mb-8">Projects</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: 'Discord Clone', tech: 'Next.js 13, React Hook Form, Zustand, Shadcn, TypeScript' },
                { name: 'E-commerce Platform', tech: 'React, Node.js, Express, MongoDB' },
                { name: 'Task Management App', tech: 'React, Redux, Firebase' }
              ].map((project, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4">
                  <img src={`/api/placeholder/150/150`} alt={project.name} className="w-full h-32 object-cover mb-4 rounded" />
                  <h4 className="font-semibold mb-2">{project.name}</h4>
                  <p className="text-gray-400 text-sm mb-4">{project.tech}</p>
                  <a href="#" className="text-red-500 hover:text-red-400 inline-flex items-center">
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16">
            <h2 className="text-2xl font-semibold mb-2">Want to talk with me?</h2>
            <h3 className="text-3xl font-bold text-red-500 mb-8">Book a Call</h3>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="mb-4">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
              {/* Placeholder for calendar component */}
              <div className="bg-gray-700 p-4 rounded-lg text-center">
                <Calendar size={48} className="mx-auto mb-2" />
                <p>Calendar integration placeholder</p>
                <p className="text-sm text-gray-400 mt-2">Select a date and time that works best for you</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-800 p-4 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl font-bold">ANANTA KANDEL</h2>
                <p>Kathmandu, Nepal</p>
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <a href="tel:+977 9860459806" className="flex items-center"><Phone size={20} className="mr-2" /> +977 9860459806</a>
                <a href="mailto:kandelananta12@gmail.com" className="flex items-center"><Mail size={20} className="mr-2" /> kandelananta12@gmail.com</a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default HomePage;