import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Globe,
  Container,
  Repeat,
  Database,
  GitBranch,
  ArrowUpRight,
} from "lucide-react";

const Card = () => {
  // Data istilah (Bisa dipindah ke props atau file terpisah nanti)
  const termsData = [
    {
      id: 1,
      title: "API",
      description:
        "Mekanisme yang memungkinkan dua komponen perangkat lunak untuk saling berkomunikasi menggunakan protokol standar.",
      tags: ["backend", "beginner"],
      icon: Box,
      theme: "blue", // Tema warna
    },
    {
      id: 2,
      title: "Frontend",
      description:
        "Bagian dari website yang berinteraksi langsung dengan pengguna. Menyangkut UI, UX, dan tampilan visual.",
      tags: ["ui/ux", "css"],
      icon: Globe,
      theme: "emerald",
    },
    {
      id: 3,
      title: "Docker",
      description:
        "Platform open source untuk mengemas aplikasi ke dalam container agar bisa berjalan di mana saja.",
      tags: ["devops", "tool"],
      icon: Container,
      theme: "sky",
    },
    {
      id: 4,
      title: "CI/CD",
      description:
        "Praktik mengotomatisakan integrasi kode dan pengiriman aplikasi ke lingkungan produksi secara cepat dan aman.",
      tags: ["devops", "automation"],
      icon: Repeat,
      theme: "violet",
    },
    {
      id: 5,
      title: "SQL",
      description:
        "Bahasa query standar yang digunakan untuk mengelola dan memanipulasi data di database relasional.",
      tags: ["database", "data"],
      icon: Database,
      theme: "amber",
    },
    {
      id: 6,
      title: "Git",
      description:
        "Sistem kontrol versi terdistribusi yang melacak perubahan kode sumber selama pengembangan perangkat lunak.",
      tags: ["version-control", "basic"],
      icon: GitBranch,
      theme: "orange",
    },
  ];

  // Mapping warna tema biar gampang di-manage
  const colorThemes = {
    blue: {
      bg: "group-hover:bg-blue-500/10",
      border: "group-hover:border-blue-500/50",
      text: "group-hover:text-blue-400",
      glow: "hover:shadow-blue-500/20",
    },
    emerald: {
      bg: "group-hover:bg-emerald-500/10",
      border: "group-hover:border-emerald-500/50",
      text: "group-hover:text-emerald-400",
      glow: "hover:shadow-emerald-500/20",
    },
    sky: {
      bg: "group-hover:bg-sky-500/10",
      border: "group-hover:border-sky-500/50",
      text: "group-hover:text-sky-400",
      glow: "hover:shadow-sky-500/20",
    },
    violet: {
      bg: "group-hover:bg-violet-500/10",
      border: "group-hover:border-violet-500/50",
      text: "group-hover:text-violet-400",
      glow: "hover:shadow-violet-500/20",
    },
    amber: {
      bg: "group-hover:bg-amber-500/10",
      border: "group-hover:border-amber-500/50",
      text: "group-hover:text-amber-400",
      glow: "hover:shadow-amber-500/20",
    },
    orange: {
      bg: "group-hover:bg-orange-500/10",
      border: "group-hover:border-orange-500/50",
      text: "group-hover:text-orange-400",
      glow: "hover:shadow-orange-500/20",
    },
  };

  // Animasi Variant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-slate-950 py-24 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22none%22%20stroke%3D%22rgb(30%2051%2083%20%2F%200.2)%22%3E%3Cpath%20d%3D%22M0%20.5H31.5V32%22%2F%3E%3C%2Fsvg%3E')] opacity-40 pointer-events-none" />

      <div className="z-10 relative mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-bold text-white text-3xl md:text-4xl tracking-tight">
            Jelajahi Istilah Populer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-slate-400 text-lg">
            Mulai perjalanan belajarmu dari konsep dasar hingga topik lanjutan.
          </motion.p>
        </div>

        {/* Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {termsData.map((item) => {
            const IconComponent = item.icon;
            const theme = colorThemes[item.theme];

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="group relative flex flex-col bg-slate-900/40 hover:shadow-2xl backdrop-blur-sm p-6 border border-slate-800 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 duration-300 cursor-pointer"
                // Terapkan kelas dinamis dari tema
                classList={`${theme.glow} ${theme.border}`}>
                {/* Efek Gradient Saat Hover (Internal) */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${theme.bg}`}></div>

                {/* Content Wrapper (biar ketimpa efek bg) */}
                <div className="z-10 relative flex flex-col h-full">
                  {/* Top: Icon & Title */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 transition-colors ${theme.text}`}>
                        <IconComponent size={22} strokeWidth={1.5} />
                      </div>
                      <h3
                        className={`text-lg font-bold text-slate-100 transition-colors ${theme.text}`}>
                        {item.title}
                      </h3>
                    </div>

                    {/* Tombol Panah kecil */}
                    <div
                      className={`opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 ${theme.text}`}>
                      <ArrowUpRight size={20} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="flex-grow mb-5 text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bottom: Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-slate-800/50 border-t">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-slate-800/40 px-2.5 py-1 border border-slate-700/30 group-hover:border-slate-700 rounded-full font-medium text-slate-500 text-xs transition-colors">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Border Glow Effect (Manual implementation via classList prop doesn't work on dynamic strings well, so we use inline style or fixed classes) */}
                {/* Disini saya pake class fix biar aman */}
                <div
                  className={`absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${theme.border}`}></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Card;
