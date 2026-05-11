import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowUpRight, Globe, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Variasi animasi untuk container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const socialLinks = [
    { 
      name: "Github", 
      href: "#", 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
    },
    { 
      name: "Twitter", 
      href: "#", 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
    }
  ];

  return (
    <footer className="relative bg-[#020617] pt-24 pb-12 overflow-hidden">
      {/* Background Decor - Floating Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute top-40 -right-20 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" 
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Section 1: Brand & Status */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium">
                <Sparkles size={12} />
                <span>Modern Tech Dictionary</span>
              </div>
              <h2 className="text-4xl font-extrabold text-white tracking-tighter">
                DevSpeak<span className="text-cyan-500">_</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Platform kurasi istilah teknologi untuk membantu developer Indonesia naik level tanpa hambatan bahasa.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Section 2: Links Groups */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Platform</h4>
              <ul className="space-y-4">
                {["Kamus", "Topik", "Kontribusi"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                      {item}
                      <ArrowUpRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Legal</h4>
              <ul className="space-y-4">
                {["Privacy", "Terms", "Licenses"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="col-span-2 md:col-span-1 space-y-6">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800/50">
                <Globe className="text-cyan-500 mb-4" size={24} />
                <p className="text-sm text-slate-300 font-medium mb-1">Lokasi Kami</p>
                <p className="text-xs text-slate-500">Jakarta, Indonesia</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="mt-20 pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-slate-500 text-sm tracking-tight order-2 md:order-1">
            © {currentYear} <span className="text-slate-300 font-semibold">DevSpeak.</span> Dipersembahkan untuk komunitas.
          </div>

          <div className="flex items-center gap-6 order-1 md:order-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/50 border border-slate-800 text-xs">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-slate-400 uppercase tracking-tighter font-bold">Sistem Stabil</span>
            </div>
            
            <div className="flex items-center gap-2 group cursor-default">
              <span className="text-sm text-slate-500 group-hover:text-rose-400 transition-colors">Crafted with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  filter: ["drop-shadow(0 0 0px #f43f5e)", "drop-shadow(0 0 8px #f43f5e)", "drop-shadow(0 0 0px #f43f5e)"] 
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={16} className="text-rose-500 fill-rose-500" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;