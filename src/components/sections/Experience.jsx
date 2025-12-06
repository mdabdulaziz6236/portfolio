'use client';
import { Briefcase, GraduationCap, Globe, Layout, Server, Code2, Terminal, Cpu } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import TimelineItem from '../ui/TimelineItem';
import SkillItem from '../ui/SkillItem';

export default function Experience() {
  return (
    <>
    <section id="experience" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
            <SectionTitle subtitle="My educational background and professional work history.">Experience</SectionTitle>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500"><Briefcase size={24} /></div> Work History</h3>
                <div className="space-y-0">
                <TimelineItem year="2025 - Present" title="Frontend Developer Intern" company="Tech Solutions Inc." description="Developing responsive web interfaces using React.js." icon={Briefcase} />
                {/* <TimelineItem year="2023 - 2024" title="Freelance Web Developer" company="Upwork" description="Worked with international clients to build personal portfolios." icon={Globe} /> */}
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3"><div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500"><GraduationCap size={24} /></div> Education</h3>
                <div className="space-y-0">
                <TimelineItem year="2025 - Present" title="B.A. HONOURS" company="University of Chittagong" description="Focusing on ISLAMIC STUDIES." icon={GraduationCap} />
                <TimelineItem year="2022 - 2024" title="Higher Secondary Certificate" company="JASKM" description="Completed HSC/ALIM with a focus on Arts." icon={GraduationCap} />
                </div>
            </div>
            </div>
        </div>
    </section>
    <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="My technical proficiency in various modern technologies.">Technical Skills</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillItem icon={Layout} name="Frontend (React/Next.js)" level={95} />
            <SkillItem icon={Server} name="Backend (Node/SQL)" level={85} />
            <SkillItem icon={Code2} name="TypeScript" level={90} />
            <SkillItem icon={Terminal} name="DevOps (Docker/AWS)" level={70} />
            <SkillItem icon={Layout} name="UI/UX Design (Figma)" level={80} />
            <SkillItem icon={Cpu} name="Mobile (React Native)" level={75} />
        </div>
        </div>
    </section>
    </>
  );
}