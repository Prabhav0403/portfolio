import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const handleHireMe = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      window.location.href = "mailto:prabhavsrivastava0403@gmail.com?subject=Software Engineering Opportunity";
    }, 800);
  };

  return (
    <section className="relative min-h-screen flex items-center bg-canvas pt-40 pb-20 border-b border-border">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 z-0 tech-grid opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
        
        {/* Main Content - Left */}
        <div className="lg:col-span-8 flex flex-col justify-center space-y-12">
          <div className="space-y-8">
            <h2 className="font-mono text-accent text-base tracking-widest uppercase">
              // Version 2025.1.0
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-primary tracking-tighter leading-[0.9]">
              ENGINEERING <br />
              <span className="text-secondary">SCALABLE</span> <br />
              SYSTEMS.
            </h1>
          </div>

          <p className="text-2xl md:text-3xl text-secondary max-w-4xl font-light leading-relaxed">
            I am <span className="text-primary font-medium">Prabhav Srivastava</span>, an Information Technology undergraduate at VIT Vellore. I build production-grade software solutions, specializing in <span className="text-primary">Cloud Infrastructure</span> and <span className="text-primary">Intelligent Backend Systems</span>.
          </p>

          <div className="flex flex-wrap gap-6 pt-8">
            <Button href="#projects" variant="primary">
              View Case Studies
            </Button>
            <Button onClick={handleHireMe} variant="outline">
              Start Conversation
            </Button>
          </div>
        </div>

        {/* Spec Sheet - Right (Desktop Only) */}
        <div className="hidden lg:col-span-4 lg:flex flex-col justify-center border-l border-border pl-16 space-y-20">
          
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-secondary uppercase tracking-widest">Current Status</h3>
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-primary font-mono text-lg">Available for Hire</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-mono text-secondary uppercase tracking-widest">Core Discipline</h3>
            <div className="space-y-2">
              <p className="text-primary font-mono text-lg">Full Stack Engineering</p>
              <p className="text-primary font-mono text-lg">Cloud Architecture (AWS)</p>
              <p className="text-primary font-mono text-lg">AI/ML Integration</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-mono text-secondary uppercase tracking-widest">Base of Operations</h3>
            <p className="text-primary font-mono text-lg">Vellore / Remote</p>
          </div>

          <div className="pt-12">
            <a 
              href="#about"
              className="group inline-flex items-center text-sm font-mono text-secondary hover:text-primary transition-colors uppercase tracking-widest"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Analyze Profile <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;