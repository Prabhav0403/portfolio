import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHireMe = (e: React.MouseEvent) => {
    scrollToSection(e, 'contact');
    setTimeout(() => {
      window.location.href = "mailto:prabhavsrivastava0403@gmail.com?subject=Software Engineering Opportunity";
    }, 800);
  };

  const navLinks = [
    { name: '// About', href: '#about' },
    { name: '// Skills', href: '#skills' },
    { name: '// Experience', href: '#experience' },
    { name: '// Case Studies', href: '#projects' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
      scrolled || isMobileMenuOpen ? 'bg-canvas/95 border-border backdrop-blur-md py-2' : 'bg-transparent border-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-xl font-bold text-primary tracking-tight font-sans">
            PRABHAV SRIVASTAVA
          </span>
          <span className="text-xs font-mono text-secondary uppercase tracking-widest mt-1">
            Software Engineer <span className="text-green-500 mx-1">●</span> Open to Work
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)} 
              className="text-sm font-mono text-secondary hover:text-primary transition-colors uppercase tracking-widest cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={handleHireMe} 
            className="text-sm font-mono font-bold text-canvas bg-primary px-6 py-3 uppercase hover:bg-white transition-colors tracking-widest"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-canvas border-b border-border p-8 md:hidden flex flex-col gap-8 h-[calc(100vh-80px)] overflow-y-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-2xl font-mono text-secondary hover:text-primary py-4 border-b border-border/50 block"
            >
              {link.name}
            </a>
          ))}
          <Button onClick={handleHireMe} variant="primary" className="w-full justify-center mt-8 py-6 text-lg">
            Initialize Contact
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;