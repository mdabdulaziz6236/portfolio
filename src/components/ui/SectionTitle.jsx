"use client";
import { motion } from "framer-motion";

export default function SectionTitle({ children, subtitle }) {
  return (
    <div className="mb-16 text-center px-4 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-6 relative inline-block"
      >
        {children}
        <span className="absolute -top-6 -right-8 text-emerald-500/20 text-6xl select-none">
          ...
        </span>
      </motion.h2>
      <div className="h-1.5 w-24 bg-linear-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full mb-6" />
      {subtitle && (
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">{subtitle}</p>
      )}
    </div>
  );
}
