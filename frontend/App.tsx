import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="bg-canvas min-h-screen text-slate-200 selection:bg-accent selection:text-canvas">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <ChatBot />
    </div>
  );
};

export default App;