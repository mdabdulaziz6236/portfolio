"use client";
import { motion } from "framer-motion";
import { Github, Code2, Database, ChevronDown, FileDown } from "lucide-react";
import TypewriterText from "../ui/TypewriterText";
import Image from "next/image";

export default function Hero({ scrollToSection }) {
  return (
    <section
      id="home"
      className="relative min-h-screen my-5 flex items-center pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10 w-full">
        <div className="text-center md:text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-emerald-500/30 rounded-full bg-emerald-500/10 text-emerald-300 text-sm font-medium backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Available for Freelance Work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
          >
            Hi, I'm{" "}
            <span className="text-white relative inline-block">
              MD. ABDUL AZIZ
            </span>{" "}
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl block mt-4 text-slate-400 font-medium">
              I am a{" "}
              <TypewriterText
                texts={[
                  "MERN Stack Developer",
                  "Life Long Learner",
                  // "Problem Solver",
                ]}
              />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed mx-auto md:mx-0"
          >
            Transforming complex ideas into elegant digital reality. I build
            accessible, pixel-perfect, and performant web applications using
            modern technologies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold transition-all shadow-lg hover:-translate-y-1 w-full sm:w-auto"
            >
              View My Work
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://drive.google.com/uc?export=download&id=1yQNOK8b85Q2oss0X3X8xmXmcghxvklsg",
                  "_blank"
                );
              }}
              className="px-8 py-4 bg-slate-900/50 backdrop-blur-md border border-slate-700 text-white rounded-full font-bold hover:bg-slate-800 hover:border-emerald-500/50 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center group"
            >
              <FileDown
                size={20}
                className="group-hover:text-emerald-400 transition-colors"
              />
              Download Resume
            </button>
            
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-linear-to-tr from-emerald-500 to-cyan-500 rounded-full blur-[80px] opacity-40 animate-pulse" />
            <div className="relative w-full h-full rounded-full border-8 border-slate-900/50 overflow-hidden shadow-2xl z-10">
              <Image
                width={300}
                height={300}
                src="https://drive.google.com/uc?export=view&id=1XRxr_xVCLuMPuLFJ5VghrRE1xqEiikdQ"
                alt="Profile"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hidden md:flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
