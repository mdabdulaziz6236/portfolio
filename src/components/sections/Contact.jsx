"use client";
import { useState } from "react";
import { Mail, Linkedin, Send, CheckCircle } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");
  const handleSendMessage = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle>Get In Touch</SectionTitle>
        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Let's work together!
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  I'm currently looking for new opportunities.
                </p>
              </div>
              <div className="space-y-6">
                <a
                  href="mailto:md.abdulaziz6236@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 hover:text-white transition-all p-4 bg-slate-950/50 rounded-xl border border-slate-800 hover:border-emerald-500/50 group"
                >
                  <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold uppercase">
                      Email Me
                    </div>
                    <div className="font-medium">
                      md.abdulaziz6236@gmail.com
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <form className="space-y-6" onSubmit={handleSendMessage}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-emerald-500"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-emerald-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-emerald-500"
                  placeholder="Hello..."
                />
              </div>
              <button
                disabled={
                  formStatus === "submitting" || formStatus === "success"
                }
                className={`w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg ${
                  formStatus === "success"
                    ? "bg-emerald-600 text-white cursor-default"
                    : "bg-emerald-600 hover:bg-emerald-500 text-white"
                }`}
              >
                {formStatus === "idle" && (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
                {formStatus === "submitting" && (
                  <span className="animate-pulse">Sending...</span>
                )}
                {formStatus === "success" && (
                  <>
                    <CheckCircle size={18} /> Message Sent!
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
