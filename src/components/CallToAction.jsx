import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Code2, Terminal, ArrowRight, Zap } from "lucide-react";

const CallToAction = () => {
  const features = [
    { text: "Penjelasan Berbasis Kode", icon: Code2, color: "text-blue-400" },
    { text: "Skenario Dunia Nyata", icon: Terminal, color: "text-purple-400" },
    { text: "Analogi Sederhana", icon: CheckCircle2, color: "text-emerald-400" },
  ];

  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Background Ornaments - Lebih subtle & artistik */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* KOLOM KIRI: Konten Teks (Dibuat lebih lebar sedikit) */}
          <div className="w-full lg:w-[45%] order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold tracking-wide uppercase">
                <Zap size={14} className="fill-cyan-400" />
                Evolution of Learning
              </div>

              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6">
                Kuasai Tech-Stack <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                  Tanpa Pusing.
                </span>
              </h2>

              <p className="text-slate-400 text-xl leading-relaxed mb-10 max-w-xl">
                Kami membedah jargon rumit menjadi potongan kode yang bisa kamu jalankan. 
                Belajar jauh lebih cepat dengan konteks industri nyata.
              </p>

              <div className="grid grid-cols-1 gap-4 mb-10">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <div className={`p-1 rounded-full bg-slate-800/50 ${item.color}`}>
                      <item.icon size={18} />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  Mulai Sekarang <ArrowRight size={18} />
                </button>
                <button className="px-8 py-4 bg-slate-900 border border-slate-800 text-white font-bold rounded-xl hover:bg-slate-800 transition-all">
                  Lihat Demo
                </button>
              </div>
            </motion.div>
          </div>

          {/* KOLOM KANAN: Visual Editor (Dibuat Lebih Menonjol) */}
          <div className="w-full lg:w-[55%] order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative bg-[#0b1120] border border-slate-800/50 rounded-[1.5rem] shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Editor Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-slate-900/50 border-b border-slate-800/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 tracking-widest uppercase italic">
                    Preview Mode: Active
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-8 font-mono text-sm sm:text-base leading-relaxed">
                  <div className="flex gap-4">
                    <span className="text-slate-600 text-right select-none w-4">1</span>
                    <p><span className="text-pink-400">const</span> <span className="text-blue-400">DevSpeak</span> = <span className="text-yellow-200">{"{"}</span></p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 text-right select-none w-4">2</span>
                    <p className="pl-4">mission: <span className="text-emerald-400">"Simplifying Tech"</span>,</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 text-right select-none w-4">3</span>
                    <p className="pl-4">speed: <span className="text-orange-400">100</span>,</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 text-right select-none w-4">4</span>
                    <p className="pl-4 text-slate-500">// Menghapus kebingungan secara otomatis</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 text-right select-none w-4">5</span>
                    <p className="pl-4"><span className="text-yellow-400">explain</span>: (topic) =&gt; simplify(topic)</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-slate-600 text-right select-none w-4">6</span>
                    <p><span className="text-yellow-200">{"}"}</span>;</p>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="px-6 py-2 bg-cyan-500/5 border-t border-slate-800/50 flex justify-between items-center">
                  <div className="flex items-center gap-4 text-[10px] text-slate-500">
                    <span>UTF-8</span>
                    <span>JavaScript</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-cyan-400/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Connected
                  </div>
                </div>
              </div>

              {/* Floating Badge (Decorative) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 p-4 bg-slate-900 border border-slate-700 rounded-2xl shadow-xl hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Complexity</div>
                    <div className="text-sm font-bold text-white">Reduced by 85%</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;