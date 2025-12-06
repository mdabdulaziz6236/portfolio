'use client';
import SectionTitle from '../ui/SectionTitle';
import { TestimonialCard, CertificationCard } from '../ui/TestimonialCard';

export default function Testimonials() {
  return (
    <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Certifications & Awards</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CertificationCard title="Meta Front-End Developer" issuer="Coursera" date="Dec 2024" />
            <CertificationCard title="JavaScript Algorithms" issuer="freeCodeCamp" date="Nov 2023" />
            <CertificationCard title="Responsive Web Design" issuer="freeCodeCamp" date="Oct 2023" />
            </div>
        </div>
        <div>
            <SectionTitle subtitle="Feedback from clients and collaborators.">Testimonials</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard name="Sarah Jenkins" role="Project Manager" text="Fahim is an exceptional developer. He delivered our dashboard ahead of schedule and the code quality was outstanding." />
            <TestimonialCard name="David Kim" role="Startup Founder" text="Working with Fahim was a pleasure. He understood our requirements perfectly and suggested great improvements." />
            <TestimonialCard name="Emily Ross" role="Product Designer" text="Fahim has a great eye for design implementation. He made my designs come to life perfectly on the web." />
            </div>
        </div>
    </div>
    </section>
  );
}