import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Terminal, Menu, X, Command } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Terms");
  const { scrollY } = useScroll();

  // Animasi halus untuk background dan border saat scroll
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.8)"],
  );
  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.08)"],
  );

  // Navigasi sesuai gambar user
  const navItems = [
    { name: "Terms", href: "#terms" },
    { name: "Glossary", href: "#glossary" },
    { name: "About", href: "#about" },
  ];

  return (
    <motion.header
      style={{
        backgroundColor: headerBg,
        borderBottom: "1px solid",
        borderBottomColor: headerBorder,
      }}
      className="top-0 right-0 left-0 z-[100] fixed backdrop-blur-md transition-all duration-300">
      <div className="flex justify-between items-center mx-auto px-6 max-w-7xl h-20">
        {/* LOGO: DevSpeek dengan sentuhan Emerald */}
        <div className="group flex items-center gap-3 cursor-pointer">
          <div className="flex justify-center items-center bg-white group-hover:bg-emerald-500 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-emerald-500/20 rounded-xl w-9 h-9 transition-all duration-300">
            <Terminal className="w-5 h-5 text-black" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-white text-xl italic uppercase tracking-tight">
            Dev
            <span className="text-emerald-400 group-hover:text-white transition-colors">
              Speek
            </span>
          </span>
        </div>

        {/* NAV: Minimalist & Deep Black Styles */}
        <nav className="hidden md:flex items-center gap-2 bg-white/[0.02] p-1.5 px-2 border border-white/[0.05] rounded-full">
          {navItems.map((item) => (
            <a
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              href={`${item.href}`}
              className="relative px-5 py-2 font-medium text-[14px] transition-all duration-200">
              <span
                className={`relative z-10 ${activeItem === item.name ? "text-white" : "text-white/40 hover:text-white/80"}`}>
                {item.name}
              </span>
              {activeItem === item.name && (
                <motion.div
                  layoutId="nav-pill-active"
                  className="absolute inset-0 bg-white/[0.08] shadow-inner border border-white/[0.1] rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* ACTIONS: Pro UI Elements */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1.5 bg-white/[0.02] px-2.5 py-1 border border-white/10 rounded-md font-mono text-[11px] text-white/30">
            <Command className="w-3 h-3" /> K
          </div>
          <button className="font-bold text-[14px] text-white hover:text-emerald-400 transition-colors">
            Sign In
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white/50 hover:text-white transition-colors">
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
            className="md:hidden top-full left-0 absolute bg-[#0a0a0a]/95 backdrop-blur-xl p-10 border-white/5 border-b w-full">
            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-black text-white/20 hover:text-emerald-400 text-4xl tracking-tighter transition-colors">
                  {item.name}
                </a>
              ))}
              <div className="bg-white/5 w-full h-[1px]" />
              <button className="font-bold text-white text-2xl text-left">
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
