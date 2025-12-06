'use client';
import { Database, Server, Layout, Layers } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Scalable full-stack solutions tailored to your needs.">
           MERN Services
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Service 1: React (Frontend) */}
          <ServiceCard 
            icon={Layout} 
            title="React Frontend" 
            description="Building dynamic, interactive, and responsive user interfaces using React.js and Tailwind CSS." 
          />

          {/* Service 2: Node/Express (Backend) */}
          <ServiceCard 
            icon={Server} 
            title="Backend Development" 
            description="Developing robust REST APIs and server-side logic using Node.js and Express.js." 
          />

          {/* Service 3: MongoDB (Database) */}
          <ServiceCard 
            icon={Database} 
            title="Database Management" 
            description="Designing efficient NoSQL database schemas and data aggregation using MongoDB." 
          />

          {/* Service 4: Full Integration */}
          <ServiceCard 
            icon={Layers} 
            title="Full Stack Integration" 
            description="Connecting frontend and backend to deploy complete, secure web applications." 
          />

        </div>
      </div>
    </section>
  );
}