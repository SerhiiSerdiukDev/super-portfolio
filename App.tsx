import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import SkillsChart from './components/SkillsChart';
import ExperienceTimeline from './components/ExperienceTimeline';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#5c94fc] relative overflow-hidden font-pixel text-gray-900 selection:bg-yellow-400 selection:text-black">
      
      {/* Parallax Background Clouds */}
      <div 
        className="fixed top-20 left-10 opacity-80 pointer-events-none z-0"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <Cloud scale={1} />
      </div>
      <div 
        className="fixed top-60 right-20 opacity-60 pointer-events-none z-0"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <Cloud scale={0.7} />
      </div>
      <div 
        className="fixed top-[50vh] left-1/4 opacity-40 pointer-events-none z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <Cloud scale={1.2} />
      </div>

      {/* Main Content Container */}
      <main className="relative z-10">
        <Hero />
        
        {/* Floating Platform Separator */}
        <div className="flex justify-center gap-1 my-10">
           <div className="w-8 h-8 bg-[#c84c0c] border-2 border-black"></div>
           <div className="w-8 h-8 bg-[#c84c0c] border-2 border-black"></div>
           <div className="w-8 h-8 bg-[#c84c0c] border-2 border-black"></div>
           <div className="w-8 h-8 bg-[#fc9838] border-2 border-black flex items-center justify-center font-bold text-white">?</div>
           <div className="w-8 h-8 bg-[#c84c0c] border-2 border-black"></div>
           <div className="w-8 h-8 bg-[#c84c0c] border-2 border-black"></div>
           <div className="w-8 h-8 bg-[#c84c0c] border-2 border-black"></div>
        </div>

        <SkillsChart />
        <ExperienceTimeline />
        <Footer />
      </main>

      {/* Floor Decoration fixed at bottom of screen if short content, but here we scroll */}
    </div>
  );
};

// Simple CSS Cloud Component
const Cloud: React.FC<{ scale: number }> = ({ scale }) => (
  <div 
    className="relative bg-white" 
    style={{ 
      width: `${100 * scale}px`, 
      height: `${40 * scale}px`, 
      borderRadius: `${20 * scale}px`,
      boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.1)'
    }}
  >
    <div className="absolute -top-[40%] left-[15%] w-[35%] h-[150%] bg-white rounded-full" />
    <div className="absolute -top-[60%] left-[35%] w-[40%] h-[180%] bg-white rounded-full" />
  </div>
);

export default App;