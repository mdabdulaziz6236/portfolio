"use client";
import { Quote, Star, Award, Clock } from "lucide-react";

export function TestimonialCard({ name, role, text }) {
  return (
    <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 relative hover:border-slate-700 transition-colors">
      <Quote className="absolute top-6 right-6 text-slate-800" size={64} />
      <div className="flex items-center gap-1 mb-6 text-amber-400">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star key={s} size={14} fill="currentColor" />
        ))}
      </div>
      <p className="text-slate-300 text-base leading-relaxed mb-6 relative z-10 italic">
        "{text}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
          {name[0]}
        </div>
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export function CertificationCard({ title, issuer, date }) {
  return (
    <div className="flex items-start gap-4 p-5 bg-slate-900/30 border border-slate-800 rounded-xl hover:border-emerald-500/30 transition-colors group">
      <div className="p-3 bg-slate-800 rounded-lg text-emerald-400 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
        <Award size={24} />
      </div>
      <div>
        <h4 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
          {title}
        </h4>
        <p className="text-sm text-emerald-500/80 mt-1 font-medium">{issuer}</p>
        <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
          <Clock size={12} /> {date}
        </p>
      </div>
    </div>
  );
}
