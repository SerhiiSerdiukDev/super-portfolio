import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { SUMMARY, CONTACT } from '../constants';
import PixelCard from './PixelCard';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center pt-20 pb-10 px-4">
      
      {/* Title Block */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="mb-12 text-center z-10"
      >
        <div className="bg-[#e62525] border-4 border-black p-4 md:p-8 pixel-shadow inline-block transform -rotate-1">
          <h1 className="text-2xl md:text-5xl text-white pixel-text-shadow leading-tight mb-2">
            SERHII SERDIUK
          </h1>
          <h2 className="text-sm md:text-xl text-yellow-300 pixel-text-shadow">
            SENIOR FRONTEND DEVELOPER
          </h2>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full z-10 items-center">
        
        {/* Character/Visual Side */}
        <div className="flex flex-col items-center justify-center space-y-4 order-2 md:order-1">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-48 h-48 md:w-64 md:h-64 relative"
          >
             {/* Profile Photo */}
             <div className="w-full h-full bg-white border-4 border-black pixel-shadow flex items-center justify-center overflow-hidden">
                <img 
                  src="https://avatars.githubusercontent.com/u/130998461?v=4" 
                  alt="Serhii Serdiuk"
                  className="w-full h-full object-cover"
                />
             </div>
             {/* Coins */}
             <motion.div 
               className="absolute -top-12 right-0 w-8 h-12 bg-yellow-400 border-4 border-black rounded-full"
               animate={{ rotateY: 180 }}
               transition={{ repeat: Infinity, duration: 1 }}
             />
             <motion.div 
               className="absolute -top-8 left-0 w-8 h-12 bg-yellow-400 border-4 border-black rounded-full"
               animate={{ rotateY: 180 }}
               transition={{ repeat: Infinity, duration: 1, delay: 0.5 }}
             />
          </motion.div>
          
          <div className="flex gap-4 mt-4">
             <a href={`mailto:${CONTACT.email}`} className="bg-white p-3 border-4 border-black hover:bg-yellow-200 transition-colors cursor-pointer">
               <Mail className="w-6 h-6" />
             </a>
             <a href={`https://${CONTACT.linkedin}`} target="_blank" rel="noreferrer" className="bg-white p-3 border-4 border-black hover:bg-blue-200 transition-colors cursor-pointer">
               <Linkedin className="w-6 h-6" />
             </a>
             <a href={`https://${CONTACT.github}`} target="_blank" rel="noreferrer" className="bg-white p-3 border-4 border-black hover:bg-gray-200 transition-colors cursor-pointer">
               <Github className="w-6 h-6" />
             </a>
          </div>
        </div>

        {/* Intro Text */}
        <div className="order-1 md:order-2">
          <PixelCard className="text-sm md:text-base leading-relaxed text-gray-800">
            <h3 className="text-xl mb-4 text-[#e62525] font-bold">Player Select</h3>
            <p className="mb-4">{SUMMARY}</p>
            <div className="flex flex-wrap gap-2 mt-4">
               <span className="bg-green-200 px-2 py-1 border-2 border-black text-xs">TypeScript</span>
               <span className="bg-red-200 px-2 py-1 border-2 border-black text-xs">Angular</span>
               <span className="bg-blue-200 px-2 py-1 border-2 border-black text-xs">React</span>
               <span className="bg-yellow-200 px-2 py-1 border-2 border-black text-xs">RxJS</span>
            </div>
            <button className="mt-6 w-full bg-[#00aa00] text-white border-4 border-black py-3 hover:bg-[#00cc00] transition-colors flex items-center justify-center gap-2 pixel-text-shadow">
               <Download size={16} /> Download Resume
            </button>
          </PixelCard>
        </div>

      </div>
    </section>
  );
};

export default Hero;