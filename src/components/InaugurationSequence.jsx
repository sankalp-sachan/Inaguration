import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const EnergyRibbons = () => (
  <div className="absolute inset-0 pointer-events-none overflow-visible">
    {[...Array(3)].map((_, i) => (
      <svg 
        key={i} 
        viewBox="0 0 400 400" 
        className="absolute inset-0 w-full h-full"
        style={{ transform: `rotate(${i * 120}deg)` }}
      >
        <motion.path
          d={`M 200 200 Q ${150 + i*50} ${50 + i*50}, ${250 + i*50} 50 T 350 150`}
          fill="none"
          stroke={i % 2 === 0 ? "#00f3ff" : "#bc13fe"}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 0.8, 0],
            pathOffset: [0, 1],
            opacity: [0, 0.4, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 5 + i, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 2
          }}
          filter="blur(2px)"
        />
        <motion.path
          d={`M 200 200 C ${100 + i*30} ${300 - i*20}, ${300 - i*40} ${400 + i*10}, 400 200`}
          fill="none"
          stroke={i % 2 === 0 ? "#bc13fe" : "#00f3ff"}
          strokeWidth="0.8"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            pathOffset: [0, 1.5],
            opacity: [0, 0.3, 0],
          }}
          transition={{ 
            duration: 7 + i, 
            repeat: Infinity, 
            ease: "linear",
            delay: i * 1.5
          }}
          filter="blur(1px)"
        />
      </svg>
    ))}
  </div>
);

const HolographicDiya = ({ step }) => (
  <motion.div 
    className="relative w-80 h-80 md:w-[600px] md:h-[600px] flex items-center justify-center p-16"
    animate={{ 
      y: [0, -20, 0],
      rotateX: [12, 18, 12],
      rotateY: [-5, 5, -5],
    }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
  >
    {/* Ribbon Effect Integration */}
    {step >= 1 && <EnergyRibbons />}

    {/* Cinematic Particle Background (Inside the Diya space) */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-neon-blue rounded-full"
          initial={{ x: "50%", y: "60%", opacity: 0 }}
          animate={{ 
            x: `${50 + (Math.random() - 0.5) * 80}%`,
            y: `${20 + Math.random() * 40}%`,
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 5 }}
        />
      ))}
    </div>

    {/* Primary Glow Aura */}
    <motion.div 
      animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 bg-gradient-to-t from-neon-blue/30 via-neon-purple/20 to-transparent blur-[120px] rounded-full"
    />

    <svg viewBox="0 0 240 240" className="w-full h-full overflow-visible drop-shadow-[0_0_60px_rgba(0,243,255,0.4)]">
      <defs>
        <filter id="premiumGlow">
          <feGaussianBlur stdDeviation="1.2" result="blur1" />
          <feGaussianBlur stdDeviation="4" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id="cyberGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset="50%" stopColor="#ff8c00" />
          <stop offset="100%" stopColor="#ffd700" />
        </linearGradient>

        <mask id="liquidMask">
          <ellipse cx="120" cy="100" rx="90" ry="25" fill="white" />
        </mask>
      </defs>

      {/* Layered 3D Diya Body */}
      <motion.g filter="url(#premiumGlow)">
        {/* Base Shadow/Refraction */}
        <ellipse cx="120" cy="180" rx="70" ry="15" fill="black" opacity="0.3" />

        {/* The Outer Glass Bowl (Wireframe) */}
        <motion.path 
          d="M30,100 Q30,200 120,200 Q210,200 210,100 L200,85 Q120,70 40,85 Z" 
          fill="rgba(0, 243, 255, 0.03)" 
          stroke="url(#cyberGold)" 
          strokeWidth="0.5"
          opacity="0.6"
        />

        {/* Intricate Energy Ribs forming the bowl */}
        {[...Array(8)].map((_, i) => (
          <motion.path 
            key={i}
            d={`M${40 + i*10},105 Q120,${195 - i*4} ${200 - i*10},105`}
            fill="none"
            stroke="#00f3ff"
            strokeWidth="0.2"
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              strokeWidth: [0.2, 0.6, 0.2]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}

        {/* Rotating Sacred Mandala (Top Surface) */}
        <motion.g 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="origin-center"
        >
          {/* Outer Ring HUD */}
          <circle cx="120" cy="100" rx="95" ry="28" fill="none" stroke="#bc13fe" strokeWidth="0.3" strokeDasharray="4 8" opacity="0.4" transform="translate(0, 5)"/>
          
          {/* Inner Liquid Energy Waves */}
          <g mask="url(#liquidMask)">
            {[...Array(3)].map((_, i) => (
              <motion.circle 
                key={i}
                cx="120" cy="100" r={20 + i*30}
                fill="none"
                stroke="#00f3ff"
                strokeWidth="0.5"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
              />
            ))}
          </g>
        </motion.g>

        {/* Vertical Digital Glints */}
        <motion.path 
          d="M80,110 L160,110 M100,140 L140,140 M110,170 L130,170" 
          stroke="#00f3ff" 
          strokeWidth="0.3" 
          strokeDasharray="1 5"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        {/* Cinematic Light Streaks - NEW PREMIUM DETAIL */}
        {[...Array(4)].map((_, i) => (
          <motion.line 
            key={i}
            x1="30" y1={100 + i*20} x2="210" y2={100 + i*20}
            stroke="white"
            strokeWidth="0.1"
            opacity="0.1"
            animate={{ 
              x1: [30, 210, 30],
              opacity: [0, 0.2, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </motion.g>

      {/* Floating HUD Arcs */}
      <motion.g className="origin-center">
        {[0, 180].map((rot) => (
          <motion.path 
            key={rot}
            d="M20,120 A110,110 0 0,0 60,200"
            fill="none"
            stroke="#bc13fe"
            strokeWidth="0.5"
            strokeDasharray="10 5"
            transform={`rotate(${rot}, 120, 120)`}
            animate={{ strokeDashoffset: [0, 30], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </motion.g>
    </svg>

    {/* Spiritual Master Flame Integrated */}
    <AnimatePresence>
      {step >= 2 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[31%] left-1/2 -translate-x-1/2 z-20 pointer-events-none"
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* Multiple Glow Halos */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              {[...Array(3)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ 
                    scale: [1, 1.5 + i*0.2, 1], 
                    opacity: [0.2 - i*0.05, 0.4 - i*0.05, 0.2 - i*0.05],
                  }}
                  transition={{ duration: 2 + i, repeat: Infinity }}
                  className="absolute w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-accent-gold blur-[80px] rounded-full"
                />
              ))}
            </div>
            
            {/* Premium Layered Flame */}
            <div className="relative flex flex-col items-center">
              {/* Flame Core - Blue/White */}
              <motion.div 
                animate={{ 
                  scaleY: [1, 1.2, 0.9, 1.1],
                  filter: ["brightness(1.5)", "brightness(2.5)", "brightness(2)"]
                }}
                transition={{ duration: 0.1, repeat: Infinity }}
                className="w-8 h-28 bg-gradient-to-t from-blue-400 via-yellow-200 to-white rounded-full shadow-[0_0_50px_rgba(255,215,0,0.8)]" 
                style={{ borderRadius: "50% 50% 50% 50% / 90% 90% 10% 10%" }}
              />
              
              {/* Outer Flame - Gold/Orange */}
              <motion.div 
                animate={{ 
                  scale: [1.1, 1.3, 1.05, 1.2],
                  opacity: [0.4, 0.7, 0.5]
                }}
                transition={{ duration: 0.2, repeat: Infinity }}
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-t from-orange-600/40 via-accent-gold/40 to-transparent blur-md rounded-full"
              />

              {/* Sacred Energy Sparks */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-accent-gold rounded-full"
                  animate={{ 
                    y: [-20, -100],
                    x: [(i-2)*15, (i-2)*30 + (Math.random()-0.5)*40],
                    opacity: [0, 1, 0],
                    scale: [1, 0.5, 0]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

export default function InaugurationSequence({ onComplete }) {
  const [step, setStep] = useState(0); 
  const audioRef = useRef(null);

  useEffect(() => {
    // 1. Initial fade to dark (happens in App, but let's handle sequence here)
    const timers = [
       setTimeout(() => setStep(1), 1000), // Step 1: Diya appears (dimly)
       setTimeout(() => setStep(2), 2500), // Step 2: Flame lights up
       setTimeout(() => setStep(3), 4500), // Step 3: Golden light spreads
       setTimeout(() => setStep(4), 5000), // Step 4: Confetti
       setTimeout(() => onComplete(), 7500) // End
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  useEffect(() => {
    if (step === 2) {
      // Confetti burst on flame lighting
      const colors = ['#00f3ff', '#bc13fe', '#ffd700'];
      const end = Date.now() + 2 * 1000;

      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    }
    
    if (step === 4) {
      // Big bang confetti
      confetti({
        particleCount: 150,
        spread: 120,
        origin: { y: 0.6 },
        colors: ['#00f3ff', '#bc13fe', '#ffd700', '#ffffff']
      });
    }
  }, [step]);

  return (
    <div className="relative w-full h-full bg-black flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Mandala overlay during sequence */}
      <AnimatePresence>
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1.1, rotate: 360 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-[800px] h-[800px] pointer-events-none"
            style={{ 
              backgroundImage: "radial-gradient(circle, rgba(255, 215, 0, 0.4) 1px, transparent 1px)", 
              backgroundSize: "20px 20px" 
            }}
          />
        )}
      </AnimatePresence>

      <div className="relative flex flex-col items-center">
        {/* The Diya */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-64 h-64 md:w-96 md:h-96"
            >
              {/* High-End Holographic Diya */}
              <HolographicDiya step={step} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Text Sequence */}
        <div className="h-20 mt-12 overflow-hidden flex flex-col items-center">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.p
                key="t1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-white/60 font-cyber tracking-[0.5em] text-sm uppercase"
              >
                In Traditional Gratitude...
              </motion.p>
            )}
            {step === 2 && (
              <motion.p
                key="t2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-accent-gold font-cyber tracking-[0.5em] text-xl font-bold uppercase text-glow-gold"
              >
                Lighting the Path...
              </motion.p>
            )}
            {step >= 3 && (
              <motion.p
                key="t3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-neon-blue font-cyber tracking-[0.5em] text-2xl font-black uppercase text-glow-blue"
              >
                The Era Begins
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Light Particles */}
      {step >= 2 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0, x: 0 }}
              animate={{ 
                opacity: [0, 0.8, 0],
                y: [0, -100 - Math.random() * 200],
                x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 300]
              }}
              transition={{ 
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              className="absolute left-1/2 top-1/2 w-1 h-1 bg-accent-gold rounded-full blur-[1px]"
            />
          ))}
        </div>
      )}

      {/* Screen flash on flame lighting */}
      <AnimatePresence>
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-accent-gold pointer-events-none z-50 mix-blend-screen"
          />
        )}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-white pointer-events-none z-[100]"
          />
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes flicker {
          0% { transform: scale(1) skewX(2deg); filter: brightness(1); }
          20% { transform: scale(1.1) skewX(-2deg); filter: brightness(1.2); }
          40% { transform: scale(0.9) skewX(2deg); filter: brightness(1.1); }
          60% { transform: scale(1.05) skewX(-4deg); filter: brightness(1.3); }
          80% { transform: scale(1) skewX(0deg); filter: brightness(1); }
          100% { transform: scale(1.1) skewX(2deg); filter: brightness(1.2); }
        }
        .animate-flicker {
          animation: flicker 0.15s infinite alternate;
        }
      `}</style>
    </div>
  );
}
