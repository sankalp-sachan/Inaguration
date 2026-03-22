import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Zap, User, Users, Music, Mic, Book, QrCode, Youtube, Mail, Phone, ExternalLink } from 'lucide-react';

const events = {
  technical: [
    { title: "Responsive Rumble", description: "Design, develop, and dominate UI/UX challenges in a battle of layouts and rapid prototyping.", icon: <Zap /> },
    { title: "Trivia Rush", description: "The ultimate tech quiz that tests your knowledge across all coding stacks and CS fundamentals.", icon: <Zap /> },
    { title: "Algo Arena", description: "Competitive coding at its peak. Solve complex algorithms under the ticking clock of excellence.", icon: <Zap /> }
  ],
  cultural: [
    { title: "Nritya Shakti", description: "A vibrant showcase of solo and group dance blending Classical, Folk and Contemporary styles.", icon: <User /> },
    { title: "Natak-Nukkad", description: "Powerful street plays reflecting social themes through impactful theatrical performances.", icon: <Users /> },
    { title: "Sur-Sangam", description: "A soulful journey through classical and modern vocal and instrumental music.", icon: <Music /> },
    { title: "Kavya Dhara", description: "A platform for spoken word, poetry and traditional Shayari.", icon: <Book /> },
    { title: "ABHIVYAKTI", description: "An open mic arena for diverse talents to shine and express themselves freely.", icon: <Mic /> },
    { title: "Soulful Echoes", description: "A storytelling space for artists to share narratives, memories and experiences.", icon: <Mic /> }
  ]
};

const guests = [
  { name: "Dr. Arvind Kumar", designation: "Chief Guest", image: "https://i.pravatar.cc/300?u=arvind" },
  { name: "Prof. Sudha Sharma", designation: "HOD, Dept of Computer Applications", image: "https://i.pravatar.cc/300?u=sudha" },
  { name: "Kanhaiya Sharma", designation: "Lead Organizer", image: "https://i.pravatar.cc/300?u=kanhaiya" },
  { name: "Nikhil Agarwal", designation: "Lead Organizer", image: "https://i.pravatar.cc/300?u=nikhil" }
];

const MainSite = () => {
  return (
    <div className="bg-[#050505] min-h-screen">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/10 blur-[150px] rounded-full" />
      </div>

      {/* Hero Section */}
      <header className="relative py-24 px-6 text-center overflow-hidden">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="relative z-10"
        >
          <h1 className="text-5xl md:text-8xl font-black font-cyber mb-4 tracking-tighter">
             TECHSANSKRITI <span className="text-neon-blue">2026</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/50 mb-8 max-w-2xl mx-auto">
             Department of Computer Applications • March 23-25
          </p>
          <div className="w-16 h-1 bg-neon-blue mx-auto blur-[1px]" />
        </motion.div>
      </header>

      {/* Events Section */}
      <section id="events" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-neon-purple font-cyber tracking-widest text-sm uppercase">The Lineup</span>
            <h2 className="text-4xl md:text-5xl font-black font-cyber mt-2">MAJOR EVENTS</h2>
          </div>
          <p className="text-white/40 max-w-sm text-sm">Where every byte matters and style meets tradition.</p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {/* Technical */}
          <div>
            <h3 className="text-xl font-cyber text-neon-blue mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-neon-blue" /> TECHNICAL EVENTS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.technical.map((event, idx) => (
                <EventCard key={idx} {...event} accent="blue" />
              ))}
            </div>
          </div>

          {/* Cultural */}
          <div>
            <h3 className="text-xl font-cyber text-accent-gold mb-8 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-accent-gold" /> CULTURAL EVENTS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.cultural.map((event, idx) => (
                <EventCard key={idx} {...event} accent="gold" />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <a 
            href="https://tech-sanskritii.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 bg-transparent font-cyber text-sm font-bold uppercase tracking-[0.3em] overflow-hidden rounded-full border border-white/10 hover:border-neon-blue/50 transition-all inline-block"
          >
            <div className="absolute inset-0 bg-neon-blue/5 group-hover:bg-neon-blue/10 transition-colors" />
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <span className="relative z-10 flex items-center gap-3 text-white">
              Explore Full Website 
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </a>
        </motion.div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-xl font-black font-cyber text-neon-blue">TS'2026</h3>
            <p className="text-white/40 text-sm max-w-md">
              Department of Computer Applications • March 23-25, 2026
            </p>
            <div className="mt-8 text-[10px] text-white/20 uppercase tracking-[0.3em] font-cyber">
               Designed with Future Logic © 2026 TechSanskriti
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const EventCard = ({ title, description, icon, accent }) => {
  const colors = {
    blue: "group-hover:text-neon-blue border-neon-blue/10",
    gold: "group-hover:text-accent-gold border-accent-gold/10",
    purple: "group-hover:text-neon-purple border-neon-purple/10"
  };
  
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`glass group p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden ${colors[accent] || colors.blue}`}
    >
      <div className={`mb-6 opacity-40 transition-colors ${accent === 'blue' ? 'group-hover:text-neon-blue' : 'group-hover:text-accent-gold'}`}>
        {React.cloneElement(icon, { size: 32 })}
      </div>
      <h4 className="text-xl font-black font-cyber mb-3 tracking-tight">{title}</h4>
      <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/70 transition-colors">{description}</p>
      
      {/* Decorative Corner */}
      <div className={`absolute -bottom-12 -right-12 w-24 h-24 blur-[40px] opacity-0 group-hover:opacity-40 transition-opacity ${accent === 'blue' ? 'bg-neon-blue' : 'bg-accent-gold'}`} />
    </motion.div>
  );
};

const GuestCard = ({ name, designation, image }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="group">
     <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative">
        <img src={image} alt={name} className="w-full h-full object-cover filter grayscale hgroup-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
     </div>
     <h4 className="font-cyber text-lg font-bold">{name}</h4>
     <p className="text-xs text-neon-blue uppercase tracking-widest font-medium opacity-70">{designation}</p>
  </motion.div>
);

const QRCard = ({ title, href, color }) => {
  const styles = {
    blue: "border-neon-blue/20 text-neon-blue hover:shadow-[0_0_20px_#00f3ff44]",
    purple: "border-neon-purple/20 text-neon-purple hover:shadow-[0_0_20px_#bc13fe44]",
    gold: "border-accent-gold/20 text-accent-gold hover:shadow-[0_0_20px_#ffd70044]"
  };
  return (
    <a href={href} className={`glass p-6 rounded-2xl border ${styles[color]} transition-all flex flex-col items-center group`}>
       <div className="w-32 h-32 bg-white/5 rounded-xl mb-4 flex items-center justify-center p-2 relative overflow-hidden">
          <QrCode className="w-24 h-24 opacity-20 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 border border-white/5 animate-pulse" />
       </div>
       <span className="font-cyber text-xs uppercase tracking-widest font-bold flex items-center gap-2">
          {title} <ExternalLink className="w-3 h-3" />
       </span>
    </a>
  );
};

export default MainSite;
