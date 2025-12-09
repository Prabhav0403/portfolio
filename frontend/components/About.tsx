import React from 'react';
import Section from './ui/Section';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 bg-canvas border-b border-border">
      <div className="container mx-auto px-6">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
            
            {/* Header Column */}
            <div className="lg:col-span-4 space-y-12">
              <h2 className="text-sm font-mono text-accent uppercase tracking-widest">
                // 01. Context
              </h2>
              <h3 className="text-5xl md:text-6xl font-bold text-primary tracking-tight leading-tight">
                Academic Rigor & <br />
                <span className="text-secondary">Practical Execution.</span>
              </h3>
              
              <div className="mt-12 space-y-8">
                <div className="border-l-2 border-accent pl-6">
                    <span className="text-xs font-mono text-secondary uppercase tracking-widest block mb-2">2022 — 2026</span>
                    <h4 className="text-xl font-bold text-primary">VIT Vellore</h4>
                    <p className="text-secondary">B.Tech Information Technology</p>
                    <p className="font-mono text-sm text-accent mt-1">CGPA: 8.23</p>
                </div>
                <div className="border-l-2 border-border pl-6 hover:border-secondary transition-colors">
                    <span className="text-xs font-mono text-secondary uppercase tracking-widest block mb-2">2022</span>
                    <h4 className="text-xl font-bold text-primary">Sheiling House School</h4>
                    <p className="text-secondary">XII (ISC Board)</p>
                    <p className="font-mono text-sm text-accent mt-1">Percentage: 95.25%</p>
                </div>
                <div className="border-l-2 border-border pl-6 hover:border-secondary transition-colors">
                    <span className="text-xs font-mono text-secondary uppercase tracking-widest block mb-2">2020</span>
                    <h4 className="text-xl font-bold text-primary">Sheiling House School</h4>
                    <p className="text-secondary">X (ICSE Board)</p>
                    <p className="font-mono text-sm text-accent mt-1">Percentage: 96.80%</p>
                </div>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-10 text-secondary text-2xl leading-relaxed font-light">
                <p>
                  Engineering is not just about writing code; it is about managing complexity. As a student at <strong className="text-primary font-normal">VIT Vellore</strong>, I have structured my education around the principles of scalable system design and data-driven decision making.
                </p>
                <p>
                  My recent tenure at <strong className="text-primary font-normal">Hindustan Aeronautics Limited (HAL)</strong> provided a critical testing ground for these principles. Working on ERP modules for a defense enterprise required a zero-tolerance approach to errors and a deep understanding of legacy system integration.
                </p>
                <p>
                  I operate with a product-first mindset. Whether I am architecting a real-time collaboration tool or deploying machine learning models for traffic analysis, I focus on the end-user constraints: latency, security, and usability.
                </p>
              </div>

              <div className="pt-12 border-t border-border">
                <h4 className="font-mono text-sm text-secondary uppercase tracking-widest mb-8">Focus Areas</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="text-lg text-primary font-mono border-l-2 border-accent pl-6 py-2">
                    Full Stack Dev
                  </div>
                  <div className="text-lg text-primary font-mono border-l-2 border-accent pl-6 py-2">
                    Cloud Eng
                  </div>
                  <div className="text-lg text-primary font-mono border-l-2 border-accent pl-6 py-2">
                    Machine Learning
                  </div>
                   <div className="text-lg text-primary font-mono border-l-2 border-accent pl-6 py-2">
                    System Design
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Section>
      </div>
    </section>
  );
};

export default About;