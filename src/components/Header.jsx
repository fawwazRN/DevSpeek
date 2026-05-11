import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Terminal, Menu, X, Command } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Terms");
  const { scrollY } = useScroll();

  // Animasi halus untuk background dan border saat scroll
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.8)"]
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.08)"]
  );

  // Navigasi sesuai gambar user
  const navItems = [
    { name: "Terms", href: "#terms" },
    { name: "Glossary", href: "#glossary" },
    { name: "About", href: "#about" },
  ];

  return (
    <motion.header
      style={{ backgroundColor: headerBg, borderBottom: "1px solid", borderBottomColor: headerBorder }}
      className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO: DevSpeek dengan sentuhan Emerald */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-9 h-9 bg-white flex items-center justify-center rounded-xl group-hover:bg-emerald-500 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-emerald-500/20">
            <Terminal className="w-5 h-5 text-black" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white uppercase italic">
            Dev<span className="text-emerald-400 group-hover:text-white transition-colors">Speek</span>
          </span>
        </div>

        {/* NAV: Minimalist & Deep Black Styles */}
        <nav className="hidden md:flex items-center gap-2 bg-white/[0.02] border border-white/[0.05] p-1.5 rounded-full px-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className="relative px-5 py-2 text-[14px] font-medium transition-all duration-200"
            >
              <span className={`relative z-10 ${activeItem === item.name ? "text-white" : "text-white/40 hover:text-white/80"}`}>
                {item.name}
              </span>
              {activeItem === item.name && (
                <motion.div
                  layoutId="nav-pill-active"
                  className="absolute inset-0 bg-white/[0.08] rounded-full border border-white/[0.1] shadow-inner"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* ACTIONS: Pro UI Elements */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-white/30 text-[11px] font-mono border border-white/10 px-2.5 py-1 rounded-md bg-white/[0.02]">
            <Command className="w-3 h-3" /> K
          </div>
          <button className="text-[14px] font-bold text-white hover:text-emerald-400 transition-colors">
            Sign In
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white/50 hover:text-white transition-colors"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU: High Contrast & Clean */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 p-10 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-black text-white/20 hover:text-emerald-400 transition-colors tracking-tighter"
                >
                  {item.name}
                </a>
              ))}
              <div className="h-[1px] w-full bg-white/5" />
              <button className="text-2xl font-bold text-white text-left">
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;