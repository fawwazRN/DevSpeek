import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Menu,
  X,
  Sparkles,
  Terminal,
  BookOpen,
  FileText,
  LogIn,
  Code2,
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Terms");
  const [hoveredItem, setHoveredItem] = useState(null);
  const headerRef = useRef(null);

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(13, 13, 13, 0)", "rgba(13, 13, 13, 0.8)"],
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(16px)"],
  );
  const headerPadding = useTransform(scrollY, [0, 50], ["24px", "12px"]);

  const navItems = [
    { name: "Terms", icon: FileText, href: "#terms" },
    { name: "Glossary", icon: BookOpen, href: "#glossary" },
    { name: "About", icon: Sparkles, href: "#about" },
  ];

  return (
    <motion.header
      ref={headerRef}
      style={{
        backgroundColor,
        backdropBlur,
        paddingTop: headerPadding,
        paddingBottom: headerPadding,
      }}
      className="top-0 right-0 left-0 z-50 fixed border-white/[0.05] border-b transition-colors duration-300">
      <div className="relative mx-auto px-6 max-w-7xl">
        <nav className="flex justify-between items-center">
          {/* --- LOGO SECTION --- */}
          <motion.a
            href="#"
            className="group flex items-center gap-3"
            whileHover={{ scale: 1.02 }}>
            <div className="relative">
              <div className="flex justify-center items-center bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:shadow-emerald-500/50 rounded-xl w-10 h-10 transition-all">
                <Terminal className="w-5 h-5 text-black" strokeWidth={2.5} />
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="-top-1 -right-1 absolute bg-emerald-400 border-[#0d0d0d] border-2 rounded-full w-3 h-3"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-white text-xl leading-none tracking-tight">
                Dev<span className="text-emerald-400">Speak</span>
              </span>
              <span className="mt-1 font-medium text-[9px] text-white/40 uppercase tracking-[0.2em]">
                Engineered for Devs
              </span>
            </div>
          </motion.a>

          {/* --- DESKTOP NAVIGATION (The "Pro" Slider) --- */}
          <div className="hidden relative md:flex items-center bg-white/[0.03] p-1 border border-white/[0.08] rounded-full">
            {navItems.map((item) => (
              <button
                key={item.name}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => setActiveItem(item.name)}
                className={`relative px-6 py-2 text-sm font-medium transition-colors duration-300 z-10 flex items-center gap-2 ${
                  activeItem === item.name || hoveredItem === item.name
                    ? "text-white"
                    : "text-white/50"
                }`}>
                {activeItem === item.name && (
                  <motion.div
                    layoutId="nav-glow"
                    className="z-[-1] absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                {item.name}
              </button>
            ))}
          </div>

          {/* --- RIGHT ACTIONS --- */}
          <div className="hidden md:flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-2 bg-white shadow-white/5 shadow-xl px-6 py-2.5 rounded-full overflow-hidden font-bold text-black text-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <LogIn className="z-10 relative w-4 h-4" />
              <span className="z-10 relative">Sign In</span>
            </motion.button>
          </div>

          {/* --- MOBILE TOGGLE --- */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex justify-center items-center bg-white/5 border border-white/10 rounded-full w-10 h-10">
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </nav>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden top-full left-0 absolute bg-[#0d0d0d] p-6 border-white/10 border-b w-full">
            <div className="flex flex-col gap-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={item.href}
                  className="flex items-center gap-4 bg-white/[0.03] p-4 rounded-2xl text-white/70">
                  <item.icon className="w-5 h-5 text-emerald-400" />
                  <span className="font-semibold text-lg">{item.name}</span>
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center items-center gap-2 bg-emerald-500 py-4 rounded-2xl w-full font-bold text-black">
                <LogIn className="w-5 h-5" /> Sign In
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;