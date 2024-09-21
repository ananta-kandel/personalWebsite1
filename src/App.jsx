import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home, User, Code, Briefcase, Video, Github, Instagram, Linkedin, Calendar, Phone, Mail, Download, ExternalLink } from 'lucide-react';
import HomePage from './pages/Home'
import Navbar from './pages/Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar /> */}
   <HomePage />
    </>
  )
}

export default App
