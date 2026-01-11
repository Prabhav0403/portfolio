import React from 'react';
import Section from './ui/Section';

interface CaseStudyProps {
  id: string;
  title: string;
  category: string;
  tech: string[];
  challenge: string;
  constraints: string;
  solution: string;
  contribution: string;
  impact: string;
}

const ProjectBlock: React.FC<CaseStudyProps> = ({ 
  id, title, category, tech, challenge, constraints, solution, contribution, impact 
}) => (
  <div className="border-t border-border py-24 lg:py-40 first:border-t-0">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
      
      {/* Meta Column */}
      <div className="lg:col-span-4 flex flex-col justify-start h-full">
        <div className="sticky top-32">
          <span className="font-mono text-base text-accent mb-4 block">{id}</span>
          <h3 className="text-5xl font-bold text-primary mb-6 leading-tight">{title}</h3>
          <p className="font-mono text-lg text-secondary uppercase tracking-wider mb-12">{category}</p>
          
          <div className="flex flex-wrap gap-3">
            {tech.map((t, i) => (
              <span key={i} className="text-sm font-mono border border-border px-4 py-2 text-secondary uppercase bg-panel">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content Column */}
      <div className="lg:col-span-8 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h4 className="text-base font-mono text-secondary uppercase mb-6">The Challenge</h4>
            <p className="text-primary leading-relaxed text-xl">{challenge}</p>
          </div>
           <div>
            <h4 className="text-base font-mono text-secondary uppercase mb-6">Constraints</h4>
            <p className="text-primary leading-relaxed text-xl">{constraints}</p>
          </div>
        </div>

        <div>
            <h4 className="text-base font-mono text-secondary uppercase mb-6">The Solution</h4>
            <p className="text-secondary leading-relaxed font-light text-xl">{solution}</p>
        </div>

        <div className="p-10 bg-panel border border-border">
          <h4 className="text-base font-mono text-accent uppercase mb-6">My Contribution</h4>
          <p className="text-primary text-xl leading-relaxed">{contribution}</p>
        </div>

        <div>
           <h4 className="text-base font-mono text-green-500 uppercase mb-6">Real World Impact</h4>
           <p className="text-3xl font-medium text-primary">{impact}</p>
        </div>

      </div>

    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-canvas border-b border-border">
      <div className="container mx-auto px-6">
        <Section>
          <div className="py-40 pb-20">
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-8">
              // 04. Engineering Case Studies
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold text-primary">
              Selected Works
            </h3>
          </div>
        </Section>

        <Section>
          <ProjectBlock 
            id="CASE STUDY 01"
            title="Smart Recipe Generator"
            category="Live SaaS Product"
            tech={["React", "Node.js", "Express", "Grok API", "Tailwind"]}
            challenge="Users face decision fatigue and food waste due to inability to plan meals around existing pantry ingredients."
            constraints="Required minimal latency for AI generation and a mobile-first responsive design for kitchen use."
            solution="A generative AI application capable of parsing raw ingredient lists and returning structured, nutritional recipe data."
            contribution="Managed state using React hooks, ensuring smooth UI updates and persistent streaming connections for real-time content delivery and developed the Express middleware to securely interface with the Grok API."
            impact="Deployed to production with 50+ active users and maintained 99.9% uptime."
          />

          <ProjectBlock 
            id="CASE STUDY 02"
            title="Encrypted Traffic Analysis"
            category="ML Cybersecurity Pipeline"
            tech={["Python", "Scikit-learn", "Pandas", "NumPy"]}
            challenge="Identifying malicious patterns within encrypted network traffic without breaking encryption (HTTPS/TLS)."
            constraints="Cannot decrypt payloads due to privacy laws; must rely solely on metadata features."
            solution="A supervised machine learning system utilizing Random Forest classifiers to detect anomalies based on packet timing and size."
            contribution="Built the data preprocessing pipeline to extract statistical features from PCAP files and tuned model hyperparameters."
            impact="Achieved 92% detection accuracy on test datasets, validating metadata-based surveillance."
          />

          <ProjectBlock 
            id="CASE STUDY 03"
            title="CodeWeave IDE"
            category="Real-Time Collaboration"
            tech={["React", "Socket.io", "Docker", "Node.js", "Monaco"]}
            challenge="Remote engineering teams lack lightweight, browser-based tools for low-latency pair programming."
            constraints="Synchronization must happen in sub-100ms to prevent version conflicts during concurrent edits."
            solution="A WebSocket-powered IDE supporting bi-directional communication and isolated code execution environments."
            contribution="Architected the Socket.io event loop for text synchronization and integrated the Monaco Editor for syntax highlighting."
            impact="Enabled seamless multi-user coding sessions with virtually zero latency."
          />
        </Section>
      </div>
    </section>
  );
};

export default Projects;
