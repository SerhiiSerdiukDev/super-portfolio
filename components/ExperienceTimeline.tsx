import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import PixelCard from './PixelCard';
import { Briefcase, Zap, Code, ShieldCheck } from 'lucide-react';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 pb-20 relative">
      <h2 className="text-3xl text-center text-white pixel-text-shadow mb-16">WORLD 2: EXPERIENCE</h2>

      <div className="relative border-l-8 border-[#00aa00] ml-4 md:ml-1/2 space-y-16">
        {/* Pole Top Cap */}
        <div className="absolute -top-4 -left-4 w-10 h-8 bg-[#00aa00] border-4 border-black" />

        {EXPERIENCE.map((job, index) => {
          const isLeft = index % 2 === 0;
          const isTech = job.type === 'tech';

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className={`relative pl-8 md:pl-0 flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''} items-center w-full`}
            >
              {/* Timeline Connector (Pipe Joint) */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 md:-translate-x-[4px] w-8 h-8 bg-[#00aa00] border-4 border-black z-10 rounded-sm shadow-md" />

              {/* Spacer for the other side */}
              <div className="hidden md:block w-1/2" />

              {/* Content Card */}
              <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'} mt-4 md:mt-0`}>
                <PixelCard 
                  variant={isTech ? 'default' : 'brick'} 
                  className="relative group hover:-translate-y-2 transition-transform duration-300"
                >
                  {/* Icon Badge */}
                  <div className="absolute -top-6 right-4 w-12 h-12 bg-yellow-400 border-4 border-black flex items-center justify-center animate-bounce">
                    {isTech ? <Code size={20} /> : <Zap size={20} />}
                  </div>

                  <h3 className="text-lg font-bold leading-tight mb-2">{job.role}</h3>
                  <h4 className="text-sm opacity-80 mb-2">{job.company}</h4>
                  <p className="text-xs mb-4 inline-block bg-black text-white px-2 py-1">{job.period}</p>
                  
                  <ul className="text-xs space-y-2 list-disc list-inside mb-4">
                    {job.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>

                  {job.tech && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t-2 border-dashed border-gray-400">
                      {job.tech.map((t) => (
                        <span key={t} className="text-[10px] bg-blue-100 border border-black px-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </PixelCard>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* The Tech Pivot Narrative Block */}
      <div className="mt-20 flex justify-center">
        <PixelCard variant="question" className="max-w-2xl text-center">
           <h3 className="text-lg mb-2 font-bold">THE TECH PIVOT (2018)</h3>
           <p className="text-xs md:text-sm leading-6">
             After 14 years mastering technical systems in the energy sector, I collected the <span className="text-red-600 font-bold">Fire Flower</span> and transformed into a Frontend Developer. My engineering discipline from the nuclear plant translates directly to writing robust, crash-free code.
           </p>
        </PixelCard>
      </div>

    </div>
  );
};

export default ExperienceTimeline;