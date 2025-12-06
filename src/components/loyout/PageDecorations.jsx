'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const BackgroundBlobs = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
  </div>
);

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [click, setClick] = useState(false);
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const down = () => setClick(true);
    const up = () => setClick(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mousedown', down); window.removeEventListener('mouseup', up); };
  }, []);
  return (
    <motion.div className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-emerald-400 pointer-events-none z-[100] hidden lg:block mix-blend-screen"
      animate={{ x: pos.x - 12, y: pos.y - 12, scale: click ? 0.8 : 1 }} transition={{ type: "spring", stiffness: 1000, damping: 28 }}>
      <div className="w-1 h-1 bg-emerald-400 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
};