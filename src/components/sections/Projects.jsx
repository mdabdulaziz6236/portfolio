"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectsCarcd";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "Full Stack",
    images: [
      "https://i.ibb.co.com/W43K7LsR/Screenshot-2025-12-06-160510.png",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400"
    ],
    desc: "Analytics dashboard for online stores.",
    tags: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    color: "bg-linear-to-br from-emerald-900 to-slate-900",
  },
  {
    id: 2,
    title: "AI Chat Assistant",
    category: "AI / ML",
    images: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400"
    ],
    desc: "Chat interface powered by OpenAI API.",
    tags: ["React", "OpenAI", "MongoDB", "Socket.io"],
    color: "bg-linear-to-br from-teal-900 to-slate-900",
  },
  {
    id: 3,
    title: "Social Connect App",
    category: "Mobile",
    images: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400"
    ],
    desc: "Full-featured social platform.",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
    color: "bg-linear-to-br from-cyan-900 to-slate-900",
  },
];

const categories = ["All", "Full Stack", "Frontend", "Mobile", "AI / ML"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="A selection of my recent work across various domains.">
          Featured Projects
        </SectionTitle>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-emerald-600 text-white border-emerald-500 shadow-lg scale-105"
                  : "bg-slate-900/50 text-slate-400 border-slate-800 hover:border-emerald-500/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
