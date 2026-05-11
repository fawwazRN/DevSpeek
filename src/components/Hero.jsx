import React from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, ChevronDown, Code2, Terminal } from "lucide-react";

const Hero = () => {
  // Data istilah populer
  const popularTerms = [
    "REST API",
    "Kubernetes",
    "DevOps",
    "Cloud Native",
    "CI/CD",
  ];

  // Variasi animasi biar gerakan "manusia banget" (tidak seragam)
  const floatAnimation = (delay = 0) => ({
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        delay,
        duration: 5 + Math.random() * 2, // Durasi random
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  });

  return (
    <section className="relative flex flex-col justify-center items-center bg-slate-950 w-full h-screen overflow-hidden">
      {/* 1. NOISE TEXTURE: Biar gak kliatan kayak gradient default AI */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* 2. RADIAL GLOW: Fokus cahaya ke tengah */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-transparent"></div>

      {/* 3. FLOATING ELEMENTS: Pengisi ruang kosong & Atmosfer Coding */}
      {/* Kiri Atas */}
      <motion.div
        {...floatAnimation(0.2)}
        className="hidden lg:block top-[20%] left-[10%] absolute text-slate-800 select-none">
        <Code2 size={80} strokeWidth={0.5} />
      </motion.div>

      {/* Kiri Bawah */}
      <motion.div
        {...floatAnimation(1.5)}
        className="hidden lg:block bottom-[25%] left-[15%] absolute text-slate-800 select-none">
        <Terminal size={60} strokeWidth={0.5} />
      </motion.div>

      {/* Kanan Atas */}
      <motion.div
        {...floatAnimation(0.8)}
        className="hidden lg:block top-[15%] right-[10%] absolute opacity-20 font-mono text-slate-800 text-4xl select-none">
        {"</>"}
      </motion.div>

      {/* Kanan Bawah */}
      <motion.div
        {...floatAnimation(2)}
        className="hidden lg:block right-[12%] bottom-[30%] absolute opacity-20 font-mono text-slate-800 text-2xl select-none">
        {"{ ... }"}
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="z-10 relative mx-auto px-6 max-w-4xl text-center">
        {/* Badge Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-cyan-500/5 backdrop-blur-sm mb-6 px-3 py-1 border border-cyan-500/20 rounded-full font-medium text-cyan-300 text-xs tracking-wide">
          <span className="relative flex w-2 h-2">
            <span className="inline-flex absolute bg-cyan-400 opacity-75 rounded-full w-full h-full animate-ping"></span>
            <span className="inline-flex relative bg-cyan-500 rounded-full w-2 h-2"></span>
          </span>
          Versi 2.0 - Lebih Lengkap
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="drop-shadow-xl font-bold text-[42px] text-white md:text-[68px] leading-[1.1] tracking-tight">
          Berhenti Bingung dengan <br />
          Istilah{" "}
          <span className="bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 text-transparent">
            IT
          </span>
          .
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-[550px] font-normal text-slate-400 text-lg md:text-xl leading-relaxed">
          Referensi praktis untuk developer modern. Dari dokumentasi hingga
          produksi, kami jelaskan semuanya dengan bahasa yang mudah dipahami.
        </motion.p>

        {/* Search Bar Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto mt-12 max-w-[640px]">
          {/* Main Search Container */}
          <div className="relative flex items-center bg-slate-900/50 shadow-2xl shadow-cyan-500/10 backdrop-blur-md p-2 border border-slate-700/50 focus-within:border-cyan-500/50 rounded-2xl focus-within:ring-2 focus-within:ring-cyan-500/10 transition-all duration-300">
            <div className="pr-2 pl-4 text-slate-500">
              <Search size={20} strokeWidth={2.5} />
            </div>

            <input
              type="text"
              placeholder="Cari istilah IT (misal: REST API, Docker)..."
              className="bg-transparent px-2 py-3 border-none focus:outline-none focus:ring-0 w-full font-medium text-white placeholder:text-slate-600 text-base"
            />

            <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 shadow-cyan-500/30 shadow-lg px-6 py-3 rounded-xl font-bold text-slate-900 text-sm uppercase tracking-wide active:scale-95 transition-all">
              <span>Cari</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Tags Helper */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-2 mt-4 text-sm">
            <span className="text-slate-500">Populer:</span>
            {popularTerms.map((term, index) => (
              <button
                key={index}
                className="bg-slate-800/40 hover:bg-cyan-500/5 px-3 py-1 border border-slate-700/50 hover:border-cyan-500/50 rounded-full text-slate-400 hover:text-cyan-300 transition-all duration-200">
                {term}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* 4. SCROLL INDICATOR: Pancingan buat scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="group bottom-10 left-1/2 absolute flex flex-col items-center gap-2 -translate-x-1/2 cursor-pointer">
        <span className="text-slate-500 group-hover:text-slate-300 text-xs uppercase tracking-widest transition-colors">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-slate-500 group-hover:text-cyan-400 transition-colors">
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;