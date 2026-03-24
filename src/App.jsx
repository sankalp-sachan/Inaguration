import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PreInauguration from './components/PreInauguration';
import InaugurationSequence from './components/InaugurationSequence';
import MainSite from './components/MainSite';
import Loading from './components/Loading';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [stage, setStage] = useState('locked'); // 'locked', 'sequence', 'unlocked'
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = React.useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      audioRef.current.volume = 0.5;
      if (!isMuted && stage !== 'locked') {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Autoplay prevented. User interaction required.");
          });
        }
      }
    }
  }, [isMuted, stage]);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play failed", e));
    }
  };

  const handleStartInauguration = () => {
    setStage('sequence');
  };

  const handleInaugurationComplete = () => {
    setStage('unlocked');
  };

  if (loading) return <Loading />;

  return (
    <div className="relative min-h-screen bg-dark-bg text-white selection:bg-neon-blue selection:text-black">
      <audio 
        ref={audioRef}
        src="/bg-music.mp3" 
        loop 
        preload="auto"
      />
      
      <AnimatePresence mode="wait">
        {stage === 'locked' && (
          <motion.div
            key="pre"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 overflow-hidden"
          >
            <PreInauguration onStart={handleStartInauguration} onCut={playMusic} />
          </motion.div>
        )}

        {stage === 'sequence' && (
          <motion.div
            key="sequence"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] bg-black"
          >
            <InaugurationSequence onComplete={handleInaugurationComplete} />
          </motion.div>
        )}

        {stage === 'unlocked' && (
          <motion.div
            key="unlocked"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-0"
          >
            <MainSite />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Audio/Sound Toggle if needed */}
      <button 
        onClick={() => setIsMuted(!isMuted)}
        className="fixed bottom-6 right-6 z-[100] p-3 rounded-full glass-neon border-white/20 hover:scale-110 transition-all flex items-center gap-3 bg-black/60 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
      >
        <span className="text-[10px] font-cyber text-white/50 tracking-widest hidden md:block">
          {isMuted ? "SOUND OFF" : "SOUND ON"}
        </span>
        {isMuted ? (
          <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
        ) : (
          <div className="relative">
            <div className="absolute inset-0 bg-neon-blue rounded-full animate-ping opacity-20" />
            <svg className="relative w-6 h-6 text-neon-blue" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
          </div>
        )}
      </button>
    </div>
  );
}
