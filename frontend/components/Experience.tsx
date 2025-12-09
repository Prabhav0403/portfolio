import React from 'react';
import Section from './ui/Section';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-40 bg-canvas border-b border-border">
      <div className="container mx-auto px-6">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
            
            <div className="lg:col-span-4">
              <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-8">
                // 03. Track Record
              </h2>
              <h3 className="text-5xl font-bold text-primary mb-10">
                Professional Experience
              </h3>
              <p className="text-xl text-secondary font-light leading-relaxed">
                Verified history of industrial contributions and leadership roles.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-24">
              
              {/* HAL */}
              <div className="relative border-l border-border pl-12 lg:pl-20">
                <div className="absolute -left-[5px] top-4 w-[9px] h-[9px] bg-accent rounded-full"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-8">
                  <h4 className="text-3xl font-bold text-primary">Hindustan Aeronautics Limited (HAL)</h4>
                  <span className="font-mono text-base text-secondary mt-2 sm:mt-0 bg-panel px-3 py-1 border border-border">JUNE 2025 — JULY 2025</span>
                </div>
                
                <p className="text-lg font-mono text-accent uppercase tracking-wider mb-10">Full Stack Software Engineer Intern</p>
                
                <ul className="space-y-8">
                  <li className="flex items-start text-secondary text-xl">
                    <span className="mr-6 text-border font-mono text-sm mt-2">01</span>
                    <p className="leading-relaxed">Built responsive ERP frontend modules using React.js, directly integrating with legacy backend APIs to modernize the user interface.</p>
                  </li>
                   <li className="flex items-start text-secondary text-xl">
                    <span className="mr-6 text-border font-mono text-sm mt-2">02</span>
                    <p className="leading-relaxed">Collaborated with technical leads to ensure data consistency between MySQL databases and client-side views.</p>
                  </li>
                   <li className="flex items-start text-secondary text-xl">
                    <span className="mr-6 text-border font-mono text-sm mt-2">03</span>
                    <p className="leading-relaxed">Implemented Role-Based Access Control (RBAC) protocols to secure sensitive inventory data based on organizational hierarchy.</p>
                  </li>
                  <li className="flex items-start text-secondary text-xl">
                    <span className="mr-6 text-border font-mono text-sm mt-2">04</span>
                    <p className="leading-relaxed">Digitized manual paper-based inventory workflows, reducing reporting time and improving data accuracy.</p>
                  </li>
                </ul>
              </div>

              {/* IEEE */}
               <div className="relative border-l border-border pl-12 lg:pl-20">
                <div className="absolute -left-[5px] top-4 w-[9px] h-[9px] bg-border rounded-full"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-8">
                  <h4 className="text-3xl font-bold text-primary">IEEE Professional Communication Society</h4>
                  <span className="font-mono text-base text-secondary mt-2 sm:mt-0 bg-panel px-3 py-1 border border-border">MAR 2024 — APR 2025</span>
                </div>
                
                <p className="text-lg font-mono text-accent uppercase tracking-wider mb-10">Head of Public Relations</p>
                
                <ul className="space-y-8">
                  <li className="flex items-start text-secondary text-xl">
                    <span className="mr-6 text-border font-mono text-sm mt-2">01</span>
                    <p className="leading-relaxed">Orchestrated public relations strategies for the student chapter, significantly expanding student engagement in technical workshops.</p>
                  </li>
                   <li className="flex items-start text-secondary text-xl">
                    <span className="mr-6 text-border font-mono text-sm mt-2">02</span>
                    <p className="leading-relaxed">Managed cross-functional teams to execute large-scale technical events, ensuring logistical precision.</p>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </Section>
      </div>
    </section>
  );
};

export default Experience;