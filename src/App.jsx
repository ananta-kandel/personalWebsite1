import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home, User, Code, Briefcase, Video, Github, Instagram, Linkedin, Calendar, Phone, Mail, Download, ExternalLink } from 'lucide-react';
import HomePage from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <nav className="bg-gray-800 p-4 fixed w-full z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="#skills" className="text-gray-300 hover:text-white">Skills</a></li>
            <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
            <li><a href="#contact" className="text-gray-300 hover:text-white">Meet</a></li>
          </ul>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white"><Github size={20} /></a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white"><Instagram size={20} /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>
      </nav>
   <HomePage />
    </>
  )
}

export default App
