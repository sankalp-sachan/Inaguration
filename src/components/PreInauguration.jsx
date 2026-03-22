import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Calendar, Play } from 'lucide-react';

export default function PreInauguration({ onStart }) {
  const [isCut, setIsCut] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const calculateTimeLeft = () => {
    const festDate = new Date('2026-03-23T09:00:00').getTime();
    const now = new Date().getTime();
    const difference = festDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCut = () => {
    setIsCut(true);
    // Ribbon falls, then reveal name
    setTimeout(() => {
      setIsRevealing(true);
    }, 800);
    // Finally transition to Diya sequence
    setTimeout(() => {
      onStart();
    }, 6000);
  };

  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center overflow-hidden">
      
      {/* 1. CINEMATIC RED RIBBON (INITIAL STATE) */}
      <AnimatePresence>
        {!isCut && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center pointer-events-none">
             {/* Left Ribbon Piece */}
             <motion.div 
               initial={{ x: "-100%" }}
               animate={{ x: 0 }}
               className="absolute left-0 w-1/2 h-20 bg-gradient-to-r from-red-950 via-red-600 to-red-500 shadow-[0_0_50px_rgba(255,0,0,0.6)] flex items-center justify-end"
               style={{ borderRight: '4px solid #fff' }}
             />
             {/* Right Ribbon Piece */}
             <motion.div 
               initial={{ x: "100%" }}
               animate={{ x: 0 }}
               className="absolute right-0 w-1/2 h-20 bg-gradient-to-l from-red-950 via-red-600 to-red-500 shadow-[0_0_50px_rgba(255,0,0,0.6)]"
               style={{ borderLeft: '4px solid #fff' }}
             />
          </div>
        )}
      </AnimatePresence>

      {/* Ribbon physics (Falling Effect) */}
      <AnimatePresence>
        {isCut && !isRevealing && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center pointer-events-none">
            {/* Falling Left Piece with Gravity */}
            <motion.div 
              initial={{ x: 0, y: 0, rotate: 0 }}
              animate={{ 
                x: -150,
                y: 1200, 
                rotate: -60,
                opacity: 0 
              }}
              transition={{ duration: 2, ease: [0.5, 0, 1, 0.5] }}
              className="absolute left-0 w-1/2 h-20 bg-red-600 shadow-2xl"
            />
            {/* Falling Right Piece with Gravity */}
            <motion.div 
              initial={{ x: 0, y: 0, rotate: 0 }}
              animate={{ 
                x: 150,
                y: 1200, 
                rotate: 60,
                opacity: 0 
              }}
              transition={{ duration: 2, ease: [0.5, 0, 1, 0.5] }}
              className="absolute right-0 w-1/2 h-20 bg-red-600 shadow-2xl"
            />
          </div>
        )}
      </AnimatePresence>

      {/* 2. REVEALED EXTRAORDINARY CONTENT */}
      <motion.div 
        className="relative w-full h-full flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isRevealing ? 1 : 0 }}
        transition={{ duration: 2.5 }}
      >
        {/* Extraordinary Animated Background */}
        {isRevealing && (
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* 1. SACRED GEOMETRY VORTEX */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-20"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-neon-blue">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.1" strokeDasharray="1 2" />
                <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="currentColor" strokeWidth="0.05" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.2" />
              </svg>
            </motion.div>

            {/* 2. ENERGY SUTRAS (SANSKRIT DATA STREAMS) */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`sutra-${i}`}
                className="absolute text-neon-blue/20 font-serif text-2xl vertical-text whitespace-nowrap pointer-events-none select-none"
                initial={{ y: "100%", x: (i * 12.5) + "%" }}
                animate={{ y: "-100%" }}
                transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, ease: "linear", delay: i * 2 }}
              >
                ॐ वसुधैव कुटुम्बकम् • सङ्गणक कला • प्रौद्योगिकी
              </motion.div>
            ))}

            {/* 3. FLOATING MANA PARTICLES */}
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{ 
                  x: Math.random() * 100 + "%", 
                  y: "110%", 
                  opacity: 0,
                  scale: 0 
                }}
                animate={{ 
                  y: "-10%", 
                  opacity: [0, 1, 0],
                  scale: [0, 2, 0],
                  x: (Math.random() * 10 - 5) + "px"
                }}
                transition={{ 
                  duration: 4 + Math.random() * 6, 
                  repeat: Infinity, 
                  delay: Math.random() * 5,
                  ease: "easeOut"
                }}
                style={{ filter: `drop-shadow(0 0 8px ${i % 2 ? '#00f3ff' : '#bc13fe'})` }}
              />
            ))}
          </div>
        )}

        <div className="relative z-10 w-full max-w-6xl px-6 text-center">
          <motion.div className="mb-12 flex flex-col items-center">
            {/* Upper Line: TECH */}
            <h1 className="flex justify-center gap-x-2 md:gap-x-4 mb-4">
              {"TECH".split("").map((char, i) => (
                <motion.span
                  key={`tech-${i}`}
                  initial={{ opacity: 0, y: 150, filter: "blur(40px)", rotateY: 180, scale: 0.5 }}
                  animate={isRevealing ? { 
                    opacity: 1, 
                    y: 0, 
                    filter: "blur(0px)", 
                    rotateY: 0,
                    scale: 1,
                    textShadow: [
                      "0 0 0px #00f3ff",
                      "0 0 30px #00f3ff",
                      "0 0 10px #00f3ff"
                    ]
                  } : {}}
                  transition={{ 
                    delay: i * 0.1 + 0.5, 
                    duration: 1, 
                    type: "spring",
                    stiffness: 100 
                  }}
                  className="text-7xl md:text-9xl font-black font-cyber tracking-tight cursor-default"
                  style={{ 
                    background: "linear-gradient(to bottom, #ffffff, #00f3ff, #bc13fe)", 
                    WebkitBackgroundClip: "text", 
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 25px rgba(0, 243, 255, 0.4))"
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            {/* Lower Line: SANSKRITI */}
            <h1 className="flex justify-center gap-x-2 md:gap-x-4 mb-4">
              {"SANSKRITI".split("").map((char, i) => (
                <motion.span
                  key={`sanskriti-${i}`}
                  initial={{ opacity: 0, y: 150, filter: "blur(40px)", rotateY: 180, scale: 0.5 }}
                  animate={isRevealing ? { 
                    opacity: 1, 
                    y: 0, 
                    filter: "blur(0px)", 
                    rotateY: 0,
                    scale: 1,
                    textShadow: [
                      "0 0 0px #00f3ff",
                      "0 0 30px #00f3ff",
                      "0 0 10px #00f3ff"
                    ]
                  } : {}}
                  transition={{ 
                    delay: (i + 4) * 0.1 + 0.5, 
                    duration: 1, 
                    type: "spring",
                    stiffness: 100 
                  }}
                  className="text-7xl md:text-9xl font-black font-cyber tracking-tight cursor-default"
                  style={{ 
                    background: "linear-gradient(to bottom, #ffffff, #00f3ff, #bc13fe)", 
                    WebkitBackgroundClip: "text", 
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 25px rgba(0, 243, 255, 0.4))"
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isRevealing ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 2.5, duration: 1.5, type: "spring" }}
              className="mt-6 flex flex-col items-center"
            >
              <p className="text-xl md:text-3xl font-black text-accent-gold font-cyber tracking-[1.5em] text-glow-gold uppercase">
                "Where Culture Meets Code"
              </p>
              <motion.div 
                className="w-48 h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent mt-10 glow-box"
                animate={{ scaleX: [0, 1.2, 1], opacity: [0, 1, 0.5] }}
                transition={{ delay: 3, duration: 2 }}
              />
            </motion.div>
          </motion.div>

          {/* Detailed Info Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isRevealing ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 4, duration: 1 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="flex gap-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center glass-neon p-6 rounded-2xl border-neon-blue/40 shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                  <span className="text-4xl md:text-5xl font-black font-cyber text-white">
                    {value.toString().padStart(2, '0')}
                  </span>
                  <span className="text-xs font-cyber text-neon-blue tracking-[0.3em] uppercase mt-2">
                    {unit}
                  </span>
                </div>
              ))}
            </div>
            
            <motion.div 
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.98, 1.02, 0.98] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-8 py-3 rounded-full border border-neon-purple/30 bg-neon-purple/10 text-neon-purple font-cyber text-sm tracking-[0.5em]"
            >
              SYNCHRONIZING DIGITAL ASSETS...
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* 3. INITIAL INTERACTIVE BUTTON */}
      <AnimatePresence>
        {!isCut && (
          <motion.div 
            className="fixed inset-0 z-[130] flex items-center justify-center bg-black/40 backdrop-blur-[2px]"
            exit={{ opacity: 0, scale: 2, filter: "blur(20px)" }}
            transition={{ duration: 0.8 }}
          >
            <motion.button 
              onClick={handleCut}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-20 py-10 bg-red-700 font-black text-white text-3xl rounded-none shadow-[0_0_80px_rgba(255,0,0,0.8)] border-y-4 border-white/40 hover:bg-red-600 transition-all font-cyber overflow-hidden"
            >
              {/* Scanline Effect on Button */}
              <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] bg-[length:100%_4px] animate-scanline pointer-events-none" />
              
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <span className="relative z-10 flex flex-col items-center">
                <motion.span 
                  className="text-5xl mb-4"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ✂️
                </motion.span>
                TECH SANSKRITI 2026
                {/* <span className="text-xs mt-3 opacity-70 tracking-[0.6em] font-normal uppercase">Digital Ribbon Cut</span> */}
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scanline {
          animation: scanline 4s linear infinite;
        }
      `}</style>
    </div>
  );
}
