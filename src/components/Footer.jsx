import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      {/* Efek Glow Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
       
        {/* Layout Grid: 1 Kolom (Mobile) -> 3 Kolom (Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
         
          {/* KOLOM 1: Branding (Kiri) */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              DevSpeak
            </h3>
            <p className="text-sm text-slate-500 max-w-xs">
              Kamus teknologi untuk developer Indonesia. Terima kasih telah berkunjung.
            </p>
          </div>

          {/* KOLOM 2: Navigasi (Tengah) */}
          <nav className="flex justify-center">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {["Privacy Policy", "Terms of Service", "Contact Us"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors relative group"
                  >
                    {item}
                    {/* Underline Effect */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* KOLOM 3: Social Icons (Kanan) */}
          <div className="flex justify-center md:justify-end items-center gap-3">
            {/* Github Button */}
            <a
              href="#"
              className="p-2.5 bg-slate-800/50 border border-slate-700 rounded-full text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200"
              aria-label="Github"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>

            {/* Twitter/X Button */}
            <a
              href="#"
              className="p-2.5 bg-slate-800/50 border border-slate-700 rounded-full text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </a>
          </div>
        </div>

        {/* BOTTOM SECTION: Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600 order-2 sm:order-1">
            © {currentYear} DevSpeak. All rights reserved.
          </p>
         
          <div className="flex items-center gap-1.5 text-sm text-slate-500 order-1 sm:order-2">
            Crafted with{" "}
            <Heart size={14} className="text-red-500 fill-red-500" />{" "}
            in Indonesia
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;