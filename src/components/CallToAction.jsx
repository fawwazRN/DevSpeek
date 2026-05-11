import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Code2, Terminal, ArrowRight, Zap } from "lucide-react";

const CallToAction = () => {
  const features = [
    { text: "Penjelasan Berbasis Kode", icon: Code2, color: "text-blue-400" },
    { text: "Skenario Dunia Nyata", icon: Terminal, color: "text-purple-400" },
    {
      text: "Analogi Sederhana",
      icon: CheckCircle2,
      color: "text-emerald-400",
    },
  ];

  return (
    <section id="about" className="relative bg-[#020617] py-32 overflow-hidden">
      {/* Background Ornaments - Lebih subtle & artistik */}
      <div className="top-0 left-1/4 absolute bg-cyan-500/5 blur-[120px] rounded-full w-[500px] h-[500px]" />
      <div className="right-1/4 bottom-0 absolute bg-purple-500/5 blur-[100px] rounded-full w-[400px] h-[400px]" />

      <div className="z-10 relative mx-auto px-6 max-w-7xl">
        <div className="flex lg:flex-row flex-col items-center gap-16">
          {/* KOLOM KIRI: Konten Teks (Dibuat lebih lebar sedikit) */}
          <div className="order-2 lg:order-1 w-full lg:w-[45%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 mb-8 px-4 py-1.5 border border-cyan-500/30 rounded-full font-semibold text-cyan-400 text-sm uppercase tracking-wide">
                <Zap size={14} className="fill-cyan-400" />
                Evolution of Learning
              </div>

              <h2 className="mb-6 font-extrabold text-white text-4xl md:text-6xl leading-[1.1]">
                Kuasai Tech-Stack <br />
                <span className="bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 text-transparent">
                  Tanpa Pusing.
                </span>
              </h2>

              <p className="mb-10 max-w-xl text-slate-400 text-xl leading-relaxed">
                Kami membedah jargon rumit menjadi potongan kode yang bisa kamu
                jalankan. Belajar jauh lebih cepat dengan konteks industri
                nyata.
              </p>

              <div className="gap-4 grid grid-cols-1 mb-10">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-slate-300">
                    <div
                      className={`p-1 rounded-full bg-slate-800/50 ${item.color}`}>
                      <item.icon size={18} />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] px-8 py-4 rounded-xl font-bold text-slate-950 transition-all">
                  Mulai Sekarang <ArrowRight size={18} />
                </button>
                <button className="bg-slate-900 hover:bg-slate-800 px-8 py-4 border border-slate-800 rounded-xl font-bold text-white transition-all">
                  Lihat Demo
                </button>
              </div>
            </motion.div>
          </div>

          {/* KOLOM KANAN: Visual Editor (Dibuat Lebih Menonjol) */}
          <div className="order-1 lg:order-2 w-full lg:w-[55%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-20 group-hover:opacity-40 rounded-[2rem] transition duration-1000 blur"></div>

              <div className="relative bg-[#0b1120] shadow-2xl backdrop-blur-xl border border-slate-800/50 rounded-[1.5rem] overflow-hidden">
                {/* Editor Header */}
                <div className="flex justify-between items-center bg-slate-900/50 px-6 py-4 border-slate-800/50 border-b">
                  <div className="flex gap-2">
                    <div className="bg-[#ff5f56] rounded-full w-3 h-3" />
                    <div className="bg-[#ffbd2e] rounded-full w-3 h-3" />
                    <div className="bg-[#27c93f] rounded-full w-3 h-3" />
                  </div>
                  <div className="font-mono text-[11px] text-slate-500 italic uppercase tracking-widest">
                    Preview Mode: Active
                  </div>
                </div>

                {/* Code Body */}
                <div className="p-8 font-mono text-white text-sm sm:text-base leading-relaxed">
                  <div className="flex gap-4">
                    <span className="w-4 text-slate-600 text-right select-none">
                      1
                    </span>
                    <p>
                      <span className="text-pink-400">const</span>{" "}
                      <span className="text-blue-400">DevSpeak</span> ={" "}
                      <span className="text-yellow-200">{"{"}</span>
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-4 text-slate-600 text-right select-none">
                      2
                    </span>
                    <p className="pl-4">
                      mission:{" "}
                      <span className="text-emerald-400">
                        "Simplifying Tech"
                      </span>
                      ,
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-4 text-slate-600 text-right select-none">
                      3
                    </span>
                    <p className="pl-4">
                      speed: <span className="text-orange-400">100</span>,
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-4 text-slate-600 text-right select-none">
                      4
                    </span>
                    <p className="pl-4 text-slate-500">
                      // Menghapus kebingungan secara otomatis
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-4 text-slate-600 text-right select-none">
                      5
                    </span>
                    <p className="pl-4">
                      <span className="text-yellow-400">explain</span>: (topic)
                      =&gt; simplify(topic)
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-4 text-slate-600 text-right select-none">
                      6
                    </span>
                    <p>
                      <span className="text-yellow-200">{"}"}</span>;
                    </p>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="flex justify-between items-center bg-cyan-500/5 px-6 py-2 border-slate-800/50 border-t">
                  <div className="flex items-center gap-4 text-[10px] text-slate-500">
                    <span>UTF-8</span>
                    <span>JavaScript</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-cyan-400/80">
                    <span className="bg-cyan-400 rounded-full w-1.5 h-1.5 animate-pulse" />
                    Connected
                  </div>
                </div>
              </div>

              {/* Floating Badge (Decorative) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="hidden md:block -right-6 -bottom-6 absolute bg-slate-900 shadow-xl p-4 border border-slate-700 rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex justify-center items-center bg-emerald-500/20 rounded-full w-10 h-10 text-emerald-400">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">Complexity</div>
                    <div className="font-bold text-white text-sm">
                      Reduced by 85%
                    </div>
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
