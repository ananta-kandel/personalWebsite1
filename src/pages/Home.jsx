import React from 'react';
import { Home, User, Code, Briefcase, Video, Github, Instagram, Linkedin, Calendar, Phone, Mail, Download, ExternalLink } from 'lucide-react';
import Navbar from './Navbar';
const HomePage = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-1 md:mt-40 mt-20 p-8 md:ml-40">
        <div className="max-w-5xl mx-auto">
          <section id="home" className="mb-16 px-4 md:px-8 lg:px-16">
            <header className="flex flex-col md:flex-row items-center md:items-start mb-12 animate-fadeIn">
              {/* Profile Image */}
              <img
                src="https://anantakandel.netlify.app/static/media/picture.f4ebfd70a85b1d5baa68.png"
                alt="Ananta Kandel"
                className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full mr-0 md:mr-8 mb-4 md:mb-0 shadow-lg transition-transform transform hover:scale-105"
              />
             <div className="text-center flex flex-col md:text-center justify-center items-center mt-10">
                {/* Heading with Gradient */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
                  Hello, I'm
                </h1>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
                  Ananta Kandel
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-4">Full Stack Developer</p>
                {/* Download CV Button */}
                <a
                  href="/path-to-your-cv.pdf"
                  download
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg inline-flex items-center transition-transform transform hover:scale-105"
                >
                  <Download size={20} className="mr-2" />
                  Download CV
                </a>
              </div>
            </header>
          </section>

          <section id="about" className="mb-16 bg-gray-900 py-12 px-6">
  {/* Logo */}
 

  {/* Headings */}
  <h2 className="text-center text-xl font-medium mb-2 text-gray-400">Get To Know More</h2>
  <h3 className="text-center text-4xl font-extrabold text-red-500 mb-10">About Me</h3>

  {/* Experience and Education Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col hover:shadow-2xl transition-shadow duration-300">
    
      <h4 className="text-2xl font-bold text-gray-200 mb-2">2+ Years Experience</h4>
      <p className="text-gray-400">Development</p>
    </div>
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-center justify-center flex-col hover:shadow-2xl transition-shadow duration-300">
      <div className="text-red-500 mb-4">
        <svg className="w-12 h-12" /* Insert your SVG icon or image here */></svg>
      </div>
      <h4 className="text-2xl font-bold text-gray-200 mb-2">BSc. CSIT</h4>
      <p className="text-gray-400">Tribhuvan University</p>
    </div>
  </div>

  {/* About Me Paragraph */}
  <p className="text-gray-300 text-center text-lg leading-relaxed max-w-2xl mx-auto md:block hidden">
    I'm a passionate Full Stack Developer with over 2 years of experience in building web applications. 
    I graduated with a BSc in Computer Science and Information Technology from Tribhuvan University, 
    and I have developed a strong foundation in both front-end and back-end development. 
    My goal is to create scalable, user-friendly solutions that solve real-world problems efficiently.
  </p>
</section>

 


          {/* <section id="about" className="mb-16">
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
          <section id="contact" className="mb-16">
            <h2 className="text-2xl font-semibold mb-2">Want to talk with me?</h2>
            <h3 className="text-3xl font-bold text-red-500 mb-8">Book a Call</h3>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="mb-4">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
              <div className="bg-gray-700 p-4 rounded-lg text-center">
                <Calendar size={48} className="mx-auto mb-2" />
                <p>Calendar integration placeholder</p>
                <p className="text-sm text-gray-400 mt-2">Select a date and time that works best for you</p>
              </div>
            </div>
          </section>
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
          
          </footer>
        </div> */}
        


        </div>
      </main>
    </div>
  );
};

export default HomePage;