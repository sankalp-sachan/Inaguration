import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Main Title Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center text-center space-y-[-1.5rem] md:space-y-[-3rem]"
        >
          <h1 className="text-7xl md:text-9xl font-black font-sans-cyber text-neon-blue tracking-tighter filter drop-shadow-[0_0_20px_rgba(0,243,255,0.7)] animate-flicker select-none">
            TECH
          </h1>
          <h1 className="text-7xl md:text-9xl font-black font-sans-cyber text-neon-blue tracking-tighter filter drop-shadow-[0_0_20px_rgba(0,243,255,0.7)] animate-flicker select-none">
            SANSKRITI
          </h1>
        </motion.div>

        {/* Tagline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-12 flex flex-col items-center"
        >
          <p className="text-accent-gold font-sans-indian text-sm md:text-lg tracking-[0.6em] font-medium uppercase flex items-center justify-center filter drop-shadow-[0_0_12px_rgba(255,215,0,0.5)]">
            <span className="text-2xl mr-4 opacity-70">"</span>
            WHERE CULTURE MEETS CODE
            <span className="text-2xl ml-4 opacity-70">"</span>
          </p>

          {/* Premium Glowing Divider */}
          <div className="mt-8 w-40 md:w-64 h-[1px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 w-24 h-full bg-gradient-to-r from-transparent via-neon-blue to-transparent shadow-[0_0_15px_#00f3ff]"
            ></motion.div>
          </div>
        </motion.div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>
    </div>
  );
}


