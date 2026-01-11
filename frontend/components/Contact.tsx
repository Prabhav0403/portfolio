import React from 'react';
import { Download, Github } from 'lucide-react';
import Section from './ui/Section';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-canvas pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Section>
          <div className="max-w-5xl">
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-8">
              // 07. Initiation
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold text-primary mb-16 tracking-tight">
              Ready to engineer <br />
              <span className="text-secondary">the next generation?</span>
            </h3>

            <div className="flex flex-col md:flex-row gap-8 mb-20">
              {/* Primary Contact Action */}
              <a 
                href="mailto:prabhavsrivastava0403@gmail.com?subject=Software Engineering Opportunity" 
                className="group flex-1 bg-primary text-canvas p-10 flex flex-col justify-between min-h-[200px] hover:bg-white transition-colors"
              >
                <span className="font-mono text-sm uppercase tracking-widest">
                  Send Email
                </span>
                <span className="text-xl md:text-3xl font-bold break-all group-hover:underline decoration-2 underline-offset-8">
                  prabhavsrivastava0403@gmail.com
                </span>
              </a>
              
              {/* Download Resume */}
              <a 
                href="/Prabhav_Srivastava_Software_Engineering.pdf"                    // served from public/resume.pdf
                download="Prabhav_Srivastava_Resume"  // forces download + filename
                className="group flex-1 bg-panel border border-border p-10 flex flex-col justify-between min-h-[200px] hover:border-accent transition-colors cursor-pointer"
              >
                <span className="font-mono text-sm text-secondary uppercase tracking-widest">
                  Documentation
                </span>
                <div className="flex items-center gap-3 text-primary font-bold text-2xl group-hover:text-accent transition-colors">
                  <Download className="w-6 h-6" />
                  <span>Download Resume</span>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/Prabhav0403" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 bg-panel border border-border p-10 flex flex-col justify-between min-h-[200px] hover:border-accent transition-colors cursor-pointer"
              >
                <span className="font-mono text-sm text-secondary uppercase tracking-widest">
                  Source Code
                </span>
                <div className="flex items-center gap-3 text-primary font-bold text-2xl group-hover:text-accent transition-colors">
                  <Github className="w-6 h-6" />
                  <span>View GitHub</span>
                </div>
              </a>
            </div>

            <div className="border-t border-border pt-10 flex flex-col md:flex-row justify-between items-start md:items-center text-sm font-mono text-secondary">
              <p>PRABHAV SRIVASTAVA © 2025</p>
              <div className="mt-6 md:mt-0 space-x-8">
                <span>LOCATION: INDIA</span>
                <span>STATUS: ACTIVE</span>
              </div>
            </div>

          </div>
        </Section>
      </div>
    </section>
  );
};

export default Contact;
