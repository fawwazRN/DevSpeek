import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Code2, FileCode2, Terminal } from "lucide-react";

const CallToAction = () => {
  // Data fitur unggulan
  const features = [
    {
      text: "Penjelasan Berbasis Kode",
      icon: Code2,
    },
    {
      text: "Skenario Dunia Nyata",
      icon: Terminal,
    },
    {
      text: "Analogi Sederhana",
      icon: CheckCircle2,
    },
  ];

  // Kode string untuk display (fake syntax highlighting)
  const codeSnippet = `// file: dev-speak.js

function devSpeak(term) {
  const definition =
    getDefinition(term);

  // Logika konteks nyata
  if (definition.isHard) {
    return simplify(definition);
  }

  return definition;
}

console.log(devSpeak('Kubernetes'));
// Output: "Orkestrasi container..."`;

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
       
        {/* Layout Grid: 1 Kolom (Mobile) -> 2 Kolom (Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
         
          {/* KOLOM KIRI: Code Editor Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full"
          >
            {/* Dekorasi Background Code Editor */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-2xl opacity-30"></div>
           
            {/* Window Frame (MacOS Style) */}
            <div className="relative bg-[#0f172a] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
             
              {/* Header Bar (Traffic Lights) */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-xs text-slate-500 font-mono flex items-center gap-2">
                  <FileCode2 size={12} />
                  dev-speak.js
                </div>
              </div>

              {/* Code Content Area */}
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto custom-scrollbar">
                <pre className="text-slate-300">
                  <code>
                    {/* Syntax Highlighting Manual */}
                    <span className="text-slate-500">// file: dev-speak.js</span><br />
                    <br />
                    <span className="text-purple-400">function</span> <span className="text-yellow-300">devSpeak</span>
                    <span className="text-white">(</span>
                    <span className="text-orange-300">term</span>
                    <span className="text-white">) {"{"}</span><br />
                    <span className="pl-4 text-slate-400">const</span> <span className="text-cyan-300">definition</span> = <br />
                    <span className="pl-8 text-yellow-300">getDefinition</span>
                    <span className="text-white">(term);</span><br />
                    <br />
                    <span className="pl-4 text-slate-500">// Logika konteks nyata</span><br />
                    <span className="pl-4 text-purple-400">if</span> <span className="text-white">(definition.</span><span className="text-cyan-300">isHard</span><span className="text-white">) {"{"}</span><br />
                    <span className="pl-8 text-purple-400">return</span> <span className="text-yellow-300">simplify</span>
                    <span className="text-white">(definition);</span><br />
                    <span className="pl-4 text-white">{"}"}</span><br />
                    <br />
                    <span className="pl-4 text-purple-400">return</span> <span className="text-cyan-300">definition</span>; <br />
                    <span className="text-white">{"}"}</span><br />
                    <br />
                    <span className="text-yellow-300">console</span>.<span className="text-blue-400">log</span>
                    <span className="text-white">(</span>
                    <span className="text-yellow-300">devSpeak</span>
                    <span className="text-white">(</span>
                    <span className="text-green-400">'Kubernetes'</span>
                    <span className="text-white">));</span><br />
                    <span className="text-slate-500">// Output: "Orkestrasi container..."</span>
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>

          {/* KOLOM KANAN: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            {/* Badge Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-slate-700 bg-slate-900/50 text-cyan-300 text-xs font-medium w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Kenapa DevSpeak?
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Belajar Sesuai <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Konteks</span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-slate-400 text-lg leading-relaxed">
              DevSpeak tidak hanya memberikan definisi. Kami menjelaskan melalui kode, skenario dunia nyata, dan analogi yang mudah dipahami.
            </p>

            {/* Feature List */}
            <ul className="mt-10 space-y-5">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    {/* Icon Box */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-300">
                      <Icon size={20} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    {/* Text */}
                    <span className="text-slate-200 font-medium text-base group-hover:text-white transition-colors">
                      {item.text}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;