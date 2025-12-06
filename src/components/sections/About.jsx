'use client';
import { Briefcase, CheckCircle, Users, Coffee, Github, Linkedin, Mail } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import StatCard from '../ui/StatCard';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        
        <SectionTitle subtitle="A little bit about my journey and the numbers behind my work.">
          About Me
        </SectionTitle>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <StatCard icon={Briefcase} value="1+" label="Years Experience" />
          <StatCard icon={CheckCircle} value="33+" label="Projects Done" />
          <StatCard icon={Users} value="10+" label="Happy Clients" />
          <StatCard icon={Coffee} value="500+" label="Cups of Coffee" />
        </div>

        {/* Content + Buttons */}
        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-start md:items-center gap-12">
          
          {/* Text Section */}
          <div className="flex-1 space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              Hello! I'm <span className="text-emerald-400 font-bold">MD. ABDUL AZIZ</span>, 
              a passionate MERN Stack web developer based in Bangladesh. My journey in web 
              development started back in 2025 when I began experimenting with custom themes.
            </p>
            <p>
              Fast-forward to today — and Alhamdulillah — I’ve built multiple 
              full-stack projects with modern technologies.
            </p>
          </div>

          {/* Buttons Section */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-4">
            
            {/* GitHub */}
            <button
              onClick={() => window.open("https://github.com/mdabdulaziz6236")}
              className="
                flex-1 px-6 py-4 bg-slate-800 hover:bg-slate-700 
                text-white rounded-xl font-bold transition-all 
                border border-slate-700 hover:border-emerald-500/50 
                flex items-center justify-center gap-3 group
              "
            >
              <Github className="text-slate-400 group-hover:text-white" />
              Github
            </button>

            {/* LinkedIn */}
            <button
              onClick={() => window.open("https://www.linkedin.com/in/abdul-aziz-developer/")}
              className="
                flex-1 px-6 py-4 bg-slate-800 hover:bg-slate-700 
                text-white rounded-xl font-bold transition-all 
                border border-slate-700 hover:border-blue-500/50 
                flex items-center justify-center gap-3 group
              "
            >
              <Linkedin className="text-slate-400 group-hover:text-blue-400" />
              LinkedIn
            </button>

            {/* Email */}
            <button
              onClick={() => window.location.href = "mailto:md.abdulaziz6236@gmail.com"}
              className="
                flex-1 px-6 py-4 bg-slate-800 hover:bg-slate-700 
                text-white rounded-xl font-bold transition-all 
                border border-slate-700 hover:border-emerald-500/50 
                flex items-center justify-center gap-3 group
              "
            >
              <Mail className="text-slate-400 group-hover:text-emerald-400" />
              Email
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
