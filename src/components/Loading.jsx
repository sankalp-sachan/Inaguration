import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]">
      {/* Intricate Mandala Loader */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="w-32 h-32 relative flex items-center justify-center"
      >
        <div className="absolute inset-0 border-4 border-t-neon-blue border-r-transparent border-b-neon-purple border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-4 border-2 border-t-accent-gold border-r-transparent border-b-accent-gold border-l-transparent rounded-full animate-reverse-spin"></div>
        <div className="w-8 h-8 bg-neon-blue rounded-full blur-[4px] animate-pulse"></div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <h2 className="text-xl font-bold tracking-[0.3em] font-cyber text-neon-blue">
          INITIALIZING TECHSANSKRITI
        </h2>
        <div className="mt-2 w-48 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-accent-gold"
          />
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes reverse-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-reverse-spin {
          animation: reverse-spin 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
