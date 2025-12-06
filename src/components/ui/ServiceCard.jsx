"use client";
import { motion } from "framer-motion";

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -8, backgroundColor: "rgba(15, 23, 42, 0.8)" }}
      className="p-8 bg-slate-900/40 border border-slate-800 rounded-2xl transition-all group h-full relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-lg">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 relative z-10">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed relative z-10">
        {description}
      </p>
    </motion.div>
  );
}
