import React from 'react'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Achievements from './components/Achievements.jsx'
import Certificates from './components/Certificate.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth bg-white">
      <Navbar/>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Achievements/>
      <Certificates/>
      <Contact />
      <Footer />
    </div>
  );
}


export default App
