"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Award, ArrowUp } from "lucide-react";

// Core Components

// Sections
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import ThreeBackground from "@/components/ThreeBackGround";
import Navbar from "@/components/loyout/Navbar";
import {
  BackgroundBlobs,
  CustomCursor,
} from "@/components/loyout/PageDecorations";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      const sections = [
        "home",
        "about",
        "services",
        "experience",
        "projects",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.getBoundingClientRect().top >= 0 &&
          element.getBoundingClientRect().top <= 300
        ) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-emerald-500/30 overflow-x-hidden bg-slate-950">
      <ThreeBackground />
      <BackgroundBlobs />
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-500 via-teal-400 to-cyan-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <footer className="py-12 border-t border-slate-800 bg-slate-950 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 flex justify-center gap-6">
            <a
              href="https://github.com/mdabdulaziz6236"
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-white transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all"
            >
              <Award size={18} />
            </a>
          </div>
          <p className="text-slate-500 text-sm">
            © 2025 MD. ABDUL AZIZ. Built with Next.js, Three.js & Tailwind in by author.
          </p>
        </div>
      </footer>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg z-40 transition-colors group"
          >
            <ArrowUp
              size={24}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
