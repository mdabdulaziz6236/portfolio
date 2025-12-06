'use client';
import { forwardRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCard = forwardRef(({ title, desc, tags, color, category, images = [] }, ref) => {
  const [index, setIndex] = useState(0);

  // Go to next image
  const next = () => setIndex((prev) => (prev + 1) % images.length);
  // Go to previous image
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  // Auto slide every 4s
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden group h-full flex flex-col hover:border-emerald-500/30 transition-all shadow-xl"
    >
      {/* Image slider */}
      <div className={`h-52 relative overflow-hidden ${color}`}>
        {images.length > 0 && (
          <motion.img
            key={index}
            src={images[index]}
            alt={title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10 flex items-center gap-1">
          <Code2 size={12} /> {category}
        </div>

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow relative">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{title}</h3>
        <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-grow">{desc}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-emerald-300 border border-slate-700/50">{tag}</span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto pt-4 border-t border-slate-800">
          <a href="#" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white font-medium hover:underline decoration-emerald-500 underline-offset-4">
            <Github size={18} /> Code
          </a>
          <a href="#" className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-medium ml-auto">
            Live Demo <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";
export default ProjectCard;
