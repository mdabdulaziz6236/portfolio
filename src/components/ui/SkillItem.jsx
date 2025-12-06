"use client";
import { motion } from "framer-motion";

export default function SkillItem({ icon: Icon, name, level }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      whileHover={{ x: 5 }}
      className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-all shadow-md group"
    >
      <div className="p-3 bg-slate-800 rounded-lg text-emerald-400 shrink-0 group-hover:bg-emerald-500/10 transition-colors">
        <Icon size={24} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between mb-2">
          <h4 className="font-semibold text-white truncate">{name}</h4>
          <span className="text-xs font-mono text-emerald-400">{level}%</span>
        </div>
        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="h-full bg-linear-to-r from-emerald-500 to-cyan-500 rounded-full relative"
          >
            <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
