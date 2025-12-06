'use client';
import { motion } from 'framer-motion';

export default function TimelineItem({ year, title, company, description, icon: Icon }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative pl-8 pb-12 border-l-2 border-slate-800 last:border-0 last:pb-0">
      <div className="absolute left-[-9px] top-0 p-1.5 bg-slate-950 border-2 border-emerald-500 rounded-full text-emerald-500 z-10 shadow-[0_0_15px_rgba(16,185,129,0.3)]"><Icon size={14} /></div>
      <span className="inline-block px-2 py-1 bg-slate-800 rounded text-xs font-mono text-emerald-400 mb-2 border border-slate-700">{year}</span>
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <div className="text-sm text-slate-400 mb-3 font-medium flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> {company}</div>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}