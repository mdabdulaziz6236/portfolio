"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    // Close mobile menu first
    setIsMenuOpen(false);

    // Wait for dropdown animation to finish
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -80; // adjust according to navbar height
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 150);
  };

  const menuItems = [
    "Home",
    "About",
    "Services",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer flex items-center gap-2"
            onClick={() => handleScroll("home")}
          >
            <div className="p-1.5 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
              <Terminal size={20} className="text-emerald-400" />
            </div>
            <span>Developer</span>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const id = item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => handleScroll(id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                    activeSection === id
                      ? "text-white"
                      : "text-slate-400 hover:text-emerald-400"
                  }`}
                >
                  {item}
                  {activeSection === id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-slate-800 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
            <div className="w-px h-6 bg-slate-800 mx-4" />
            <button className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-sm font-bold transition-all hover:-translate-y-0.5">
              Hire Me
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 z-40 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScroll(item.toLowerCase())}
                  className={`text-left text-lg font-medium py-3 px-4 rounded-xl transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
