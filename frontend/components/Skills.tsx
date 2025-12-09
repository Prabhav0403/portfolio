import React from 'react';
import Section from './ui/Section';

interface TechCategory {
  category: string;
  items: string[];
}

const techStack: TechCategory[] = [
  {
    category: "Languages & Core",
    items: ["Java", "Python", "JavaScript (ES6+)", "TypeScript", "C++"]
  },
  {
    category: "Frontend Architecture",
    items: ["React.js", "Tailwind CSS", "Vite", "HTML5/CSS3"]
  },
  {
    category: "Backend Services",
    items: ["Node.js", "Express.js", "REST API Design"]
  },
  {
    category: "Data Persistence",
    items: ["MySQL", "MongoDB", "PostgreSQL"]
  },
  {
    category: "Cloud & Intelligence",
    items: ["AWS (EC2, S3, Lambda)", "Scikit-learn", "Pandas", "NumPy"]
  },
  {
    category: "DevOps & Tools",
    items: ["Git/GitHub", "Linux (Bash)", "VS Code", "Postman", "JIRA"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-40 bg-canvas border-b border-border">
      <div className="container mx-auto px-6">
        <Section>
          <div className="mb-24">
             <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-8">
              // 02. Technical Arsenal
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold text-primary tracking-tight">
              Verified Tech Stack
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-32 gap-y-20">
            {techStack.map((stack, index) => (
              <div key={index} className="group">
                <div className="flex items-baseline justify-between border-b border-border pb-6 mb-8 group-hover:border-accent transition-colors duration-300">
                  <h4 className="text-2xl font-medium text-primary">
                    {stack.category}
                  </h4>
                  <span className="text-base font-mono text-secondary">
                    [{stack.items.length.toString().padStart(2, '0')}]
                  </span>
                </div>
                <div className="flex flex-wrap gap-4">
                  {stack.items.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="inline-block px-5 py-3 bg-panel border border-border text-base font-mono text-secondary rounded-sm hover:text-primary hover:border-secondary transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </section>
  );
};

export default Skills;