import React from 'react';
import { CONTACT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-20 pb-10 px-4 bg-[#c84c0c] border-t-8 border-black text-white text-center">
        {/* Decorative Ground Blocks */}
        <div className="absolute top-0 left-0 w-full h-4 bg-[#963706] opacity-50"></div>
        
        <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl mb-8 pixel-text-shadow">COURSE CLEAR!</h2>
            
            <div className="bg-black p-8 border-4 border-white inline-block mb-8 pixel-shadow">
                <p className="text-yellow-400 mb-4 text-sm">CONTACT INFO</p>
                <p className="mb-2 text-xs md:text-base cursor-pointer hover:text-green-400 transition-colors">
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </p>
                <p className="mb-2 text-xs md:text-base cursor-pointer hover:text-blue-400 transition-colors">
                  <a href={`https://${CONTACT.linkedin}`} target="_blank" rel="noreferrer">LinkedIn Profile</a>
                </p>
                <p className="text-xs md:text-base">Vinnytsya, Ukraine</p>
            </div>

            <p className="text-[10px] opacity-70 mt-8">
                © {new Date().getFullYear()} Serhii Serdiuk. All rights reserved.<br/>
                Built with React, Tailwind & Pixel Power.
            </p>
        </div>

        {/* Castle Flag Pole Base */}
        <div className="absolute bottom-0 right-10 md:right-20 w-8 h-32 bg-[#00aa00] border-4 border-black hidden md:block"></div>
    </footer>
  );
};

export default Footer;