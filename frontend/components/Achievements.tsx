import React from 'react';
import Section from './ui/Section';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-40 bg-canvas border-b border-border">
      <div className="container mx-auto px-6">
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
            
            {/* Certifications */}
            <div>
              <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-12">
                // 05. Certifications
              </h2>
              <div className="space-y-8">
                <div className="flex justify-between items-start border-b border-border pb-8">
                  <div>
                    <h4 className="text-2xl text-primary font-bold">AWS Cloud Practitioner</h4>
                    <p className="text-sm font-mono text-secondary mt-2">Amazon Web Services</p>
                  </div>
                  <span className="text-xs font-mono text-secondary bg-panel px-3 py-1 border border-border mt-1">VERIFIED</span>
                </div>
                 <div className="flex justify-between items-start border-b border-border pb-8">
                  <div>
                    <h4 className="text-2xl text-primary font-bold">Supervised Machine Learning</h4>
                    <p className="text-sm font-mono text-secondary mt-2">DeepLearning.AI / Stanford</p>
                    <p className="text-sm text-secondary mt-2 font-light">Regression and Classification</p>
                  </div>
                  <span className="text-xs font-mono text-secondary bg-panel px-3 py-1 border border-border mt-1">VERIFIED</span>
                </div>
              </div>
            </div>

            {/* Honors */}
            <div>
              <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-12">
                // 06. Honors & Rank
              </h2>
              <div className="space-y-10">
                
                <div className="border-b border-border pb-8">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                    <h4 className="text-2xl text-primary font-bold">Central Hack Yantra 2024</h4>
                    <span className="text-xs font-mono text-accent border border-accent/30 px-2 py-1 rounded mt-2 md:mt-0 w-fit">TOP 20 FINALIST</span>
                  </div>
                  <p className="text-lg text-secondary">Earned a Top 20 finalist position among hundreds of competing teams.</p>
                </div>

                <div className="border-b border-border pb-8">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                    <h4 className="text-2xl text-primary font-bold">IIT Kanpur Techkriti</h4>
                    <span className="text-xs font-mono text-accent border border-accent/30 px-2 py-1 rounded mt-2 md:mt-0 w-fit">TOP 0.01%</span>
                  </div>
                  <p className="text-lg text-secondary">Distinguished as one of the top 100 participants at the Open School Championship 2020.</p>
                </div>

                <div className="border-b border-border pb-8">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                    <h4 className="text-2xl text-primary font-bold">ASISC-UP Inter-UK Quiz</h4>
                    <span className="text-xs font-mono text-accent border border-accent/30 px-2 py-1 rounded mt-2 md:mt-0 w-fit">1ST PLACE</span>
                  </div>
                  <p className="text-lg text-secondary">Secured first place in 2020, outperforming 35 competing teams with superior recall.</p>
                </div>

                <div className="border-b border-border pb-8">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                    <h4 className="text-2xl text-primary font-bold">SilverZone Science Olympiad</h4>
                    <span className="text-xs font-mono text-accent border border-accent/30 px-2 py-1 rounded mt-2 md:mt-0 w-fit">99TH PERCENTILE</span>
                  </div>
                  <p className="text-lg text-secondary">Attained 7th position statewide in 2016.</p>
                </div>

              </div>
            </div>

          </div>
        </Section>
      </div>
    </section>
  );
};

export default Achievements;