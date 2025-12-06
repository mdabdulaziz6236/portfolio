'use client';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

export default function StatCard({ icon: Icon, value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;
      const duration = 2000;
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, duration / end);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 flex flex-col items-center hover:border-emerald-500/30 transition-all duration-300 group">
      <div className="p-4 bg-emerald-500/10 rounded-full text-emerald-400 mb-4 group-hover:scale-110 transition-transform"><Icon size={28} /></div>
      <h3 className="text-4xl font-bold text-white mb-2">{count}{value.includes('+') ? '+' : ''}</h3>
      <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{label}</p>
    </div>
  );
}