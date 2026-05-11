import React from "react";
import { motion } from "framer-motion";
import { Search, Code2, Terminal, Cpu, Globe, Rocket } from "lucide-react";

const techStack = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];

const Hero = () => {
  // Varians untuk stagger animation parent
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  // Varians untuk elemen anak
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative flex flex-col justify-center items-center bg-[#020617] w-full min-h-screen overflow-hidden text-slate-200 py-20">
      
      {/* 1. ANIMATED BACKGROUND (Pulsing Glow) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600/20 blur-[140px] rounded-full w-[800px] h-[600px]" 
        />
      </div>

      {/* 2. FLOATING ICONS (Background Decoration) */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:block top-[15%] left-[10%] absolute text-slate-800 opacity-40"
      >
        <Code2 size={120} strokeWidth={0.5} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:block bottom-[15%] right-[10%] absolute text-slate-800 opacity-40"
      >
        <Terminal size={120} strokeWidth={0.5} />
      </motion.div>

      {/* 3. MAIN CONTENT (Staggered) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 relative px-6 w-full max-w-5xl text-center"
      >
        {/* Animated Headline */}
        <motion.h1 variants={itemVariants} className="font-bold text-5xl md:text-[80px] leading-[1.05] tracking-tighter mb-8 px-4">
          <span className="text-slate-500">Technical precision for the</span> <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500">
            modern developer.
          </span>
        </motion.h1>

        {/* Sub-description */}
        <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-slate-400 text-lg md:text-xl font-light mb-14 leading-relaxed">
          Explore a living dictionary of IT terminology, curated for clarity, accuracy, and technical depth.
        </motion.p>

        {/* Pro Search Bar (Animated Border) */}
        <motion.div variants={itemVariants} className="mx-auto max-w-3xl mb-20 group">
          <div className="relative p-[1px] rounded-2xl overflow-hidden bg-slate-800 group-focus-within:bg-gradient-to-r group-focus-within:from-blue-500 group-focus-within:to-emerald-500 transition-all duration-500">
            <div className="flex items-center bg-[#050b1a] rounded-[15px] p-2">
              <div className="pl-5 text-slate-500 group-focus-within:text-blue-400 transition-colors">
                <Search size={22} />
              </div>
              <input
                type="text"
                placeholder="Frontend Development"
                className="bg-transparent px-5 py-4 border-none focus:outline-none focus:ring-0 w-full font-mono text-lg text-white placeholder:text-slate-700"
              />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#10b981] hover:bg-[#059669] text-[#020617] font-extrabold px-10 py-4 rounded-xl transition-all shadow-lg shadow-emerald-900/20"
              >
                Cari
              </motion.button>
            </div>
          </div>
          {/* Subtle Glow below search */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-blue-500/10 blur-2xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity" />
        </motion.div>

        {/* 4. TECH STACK (Magnetic Hover & Fade In) */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-10 md:gap-14">
          {techStack.map((tech, idx) => (
            <motion.div 
              key={tech.name}
              whileHover={{ y: -8, scale: 1.1 }}
              className="flex flex-col items-center gap-4 group"
            >
              <div className="relative">
                {/* Glow behind icon on hover */}
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 blur-xl rounded-full transition-all duration-300" />
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-12 h-12 relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
              </div>
              <span className="text-[11px] font-black text-slate-600 group-hover:text-white uppercase tracking-[0.2em] transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;