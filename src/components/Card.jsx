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
  Sparkles,
} from "lucide-react";

const Card = () => {
  // Data istilah yang sudah diperkaya dengan Badge & Warna spesifik
  const termsData = [
    {
      id: 1,
      title: "API",
      description:
        "Mekanisme yang memungkinkan dua komponen perangkat lunak untuk saling berkomunikasi menggunakan protokol standar.",
      tags: ["REST", "GraphQL", "Webhooks"],
      icon: Box,
      theme: "blue",
      badge: "Paling Dicari",
    },
    {
      id: 2,
      title: "Frontend",
      description:
        "Bagian dari website yang berinteraksi langsung dengan pengguna. Menyangkut UI, UX, dan tampilan visual.",
      tags: ["React", "Tailwind", "Next.js"],
      icon: Globe,
      theme: "emerald",
      badge: null,
    },
    {
      id: 3,
      title: "Backend",
      description:
        "Server-side logic yang mengelola data, autentikasi, dan bisnis logic aplikasi.",
      tags: ["Node.js", "PostgreSQL", "Docker"],
      icon: Database, // Saya ganti icon Database untuk Backend agar lebih pas
      theme: "violet",
      badge: null,
    },
    {
      id: 4,
      title: "CI/CD",
      description:
        "Praktik mengotomatisakan integrasi kode dan pengiriman aplikasi ke lingkungan produksi.",
      tags: ["Jenkins", "GitLab CI", "Automation"],
      icon: Repeat,
      theme: "amber",
      badge: "Hot Topic",
    },
    {
      id: 5,
      title: "Docker",
      description:
        "Platform open source untuk mengemas aplikasi ke dalam container agar bisa berjalan di mana saja.",
      tags: ["Container", "DevOps", "Kubernetes"],
      icon: Container,
      theme: "sky",
      badge: null,
    },
    {
      id: 6,
      title: "Git",
      description:
        "Sistem kontrol versi terdistribusi yang melacak perubahan kode sumber.",
      tags: ["Version Control", "GitHub", "Branch"],
      icon: GitBranch,
      theme: "orange",
      badge: null,
    },
  ];

  // Mapping warna tema yang lebih kaya
  const colorThemes = {
    blue: {
      bg: "group-hover:bg-blue-500/10",
      border: "group-hover:border-blue-500/50",
      text: "group-hover:text-blue-400",
      solid: "text-blue-400",
      glow: "hover:shadow-blue-500/20",
      badgeBg: "bg-blue-500/10 border-blue-500/30 text-blue-300",
    },
    emerald: {
      bg: "group-hover:bg-emerald-500/10",
      border: "group-hover:border-emerald-500/50",
      text: "group-hover:text-emerald-400",
      solid: "text-emerald-400",
      glow: "hover:shadow-emerald-500/20",
      badgeBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
    },
    violet: {
      bg: "group-hover:bg-violet-500/10",
      border: "group-hover:border-violet-500/50",
      text: "group-hover:text-violet-400",
      solid: "text-violet-400",
      glow: "hover:shadow-violet-500/20",
      badgeBg: "bg-violet-500/10 border-violet-500/30 text-violet-300",
    },
    sky: {
      bg: "group-hover:bg-sky-500/10",
      border: "group-hover:border-sky-500/50",
      text: "group-hover:text-sky-400",
      solid: "text-sky-400",
      glow: "hover:shadow-sky-500/20",
      badgeBg: "bg-sky-500/10 border-sky-500/30 text-sky-300",
    },
    amber: {
      bg: "group-hover:bg-amber-500/10",
      border: "group-hover:border-amber-500/50",
      text: "group-hover:text-amber-400",
      solid: "text-amber-400",
      glow: "hover:shadow-amber-500/20",
      badgeBg: "bg-amber-500/10 border-amber-500/30 text-amber-300",
    },
    orange: {
      bg: "group-hover:bg-orange-500/10",
      border: "group-hover:border-orange-500/50",
      text: "group-hover:text-orange-400",
      solid: "text-orange-400",
      glow: "hover:shadow-orange-500/20",
      badgeBg: "bg-orange-500/10 border-orange-500/30 text-orange-300",
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
    <section id="terms" className="relative bg-slate-950 py-24 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22none%22%20stroke%3D%22rgb(30%2051%2083%20%2F%200.2)%22%3E%3Cpath%20d%3D%22M0%20.5H31.5V32%22%2F%3E%3C%2Fsvg%3E')] opacity-40 pointer-events-none" />

      <div className="z-10 relative mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        {/* Header Section */}
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
                // Styling utama kartu: Glassmorphism + Border
                className={`group relative flex flex-col p-6 bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-2xl ${theme.glow} ${theme.border}`}>
                {/* Efek Background Gradient saat Hover */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${theme.bg}`}></div>

                {/* Content Wrapper */}
                <div className="z-10 relative flex flex-col h-full">
                  {/* TOP SECTION: Icon & Badge (Mirip Gambar) */}
                  <div className="flex justify-between items-start mb-6">
                    {/* Icon Box */}
                    <div
                      className={`p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 transition-colors ${theme.solid}`}>
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>

                    {/* Badge (Hanya muncul jika ada) */}
                    {item.badge && (
                      <div
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${theme.badgeBg}`}>
                        <Sparkles size={10} />
                        {item.badge}
                      </div>
                    )}
                  </div>

                  {/* MIDDLE SECTION: Title & Desc */}
                  <div className="mb-6">
                    <h3 className="mb-2 font-bold text-white text-xl transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* BOTTOM SECTION: Tags & Action */}
                  <div className="flex justify-between items-end mt-auto">
                    {/* Tags List */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-slate-800/40 px-2.5 py-1 border border-slate-700/30 group-hover:border-slate-700 rounded-md font-medium text-slate-500 text-xs transition-colors">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button (Panah) */}
                    <div
                      className={`opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 ${theme.solid}`}>
                      <ArrowUpRight size={20} strokeWidth={2} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Card;
