"use client";

import React, { useState } from "react";
import { Send, Lock, CheckCircle2, ChevronDown, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("website");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  return (
    <section className="w-full py-24 bg-[#faf8ff] dark:bg-[#0c1324] relative border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300" id="contact">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-12 flex flex-col items-center">
          <span className="font-mono-tech text-xs text-[#150066] dark:text-[#c6c0ff] font-semibold tracking-wider uppercase mb-4 px-4 py-1.5 rounded-none bg-[#e4dfff] dark:bg-[#201c47] border border-[#c6c0ff] dark:border-[#5542db]/40">
            START A PROJECT
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Ready to take your business digital?
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            Tell us about your project vision and we’ll get back to you with a roadmap within 24 hours.
          </p>
        </div>

        {/* Contact Card & Form Container */}
        <div className="w-full bg-white/90 dark:bg-[#151d30]/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 p-8 sm:p-12 rounded-none shadow-xl relative">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 rounded-none bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center text-[#006a48] dark:text-[#45dfa4] shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-headline text-3xl font-bold text-slate-900 dark:text-white">
                Roadmap Requested!
              </h3>
              <p className="font-sans text-slate-700 dark:text-slate-300 max-w-md text-sm sm:text-base leading-relaxed font-normal">
                Thank you <span className="text-slate-900 dark:text-white font-semibold">{name}</span>. Our lead architect Kai is reviewing your request for <span className="text-[#006877] dark:text-[#5de6ff] font-mono-tech font-semibold">{service}</span> and will reach out to <span className="text-slate-900 dark:text-white font-semibold">{email}</span> within 24 hours.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                  }}
                  className="px-6 py-3 rounded-none bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 text-xs font-mono-tech transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Field 1: Name */}
                <div className="flex flex-col gap-2 text-left">
                  <label className="font-mono-tech text-xs text-slate-700 dark:text-slate-300 font-semibold px-1">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="h-12 px-4 rounded-none bg-slate-50 dark:bg-[#1a233a] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-sans text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#6e5ef5] focus:ring-2 focus:ring-[#6e5ef5]/20 transition-all"
                  />
                </div>

                {/* Field 2: Email */}
                <div className="flex flex-col gap-2 text-left">
                  <label className="font-mono-tech text-xs text-slate-700 dark:text-slate-300 font-semibold px-1">
                    Work Email
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@company.com"
                    className="h-12 px-4 rounded-none bg-slate-50 dark:bg-[#1a233a] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-sans text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#6e5ef5] focus:ring-2 focus:ring-[#6e5ef5]/20 transition-all"
                  />
                </div>
              </div>

              {/* Field 3: What You Need */}
              <div className="flex flex-col gap-2 text-left">
                <label className="font-mono-tech text-xs text-slate-700 dark:text-slate-300 font-semibold px-1">
                  What You Need
                </label>
                <div className="relative">
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full h-12 px-4 rounded-none bg-slate-50 dark:bg-[#1a233a] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-sans text-sm focus:outline-none focus:border-[#6e5ef5] appearance-none transition-all cursor-pointer"
                  >
                    <option value="website" className="dark:bg-[#151d30]">New Website Development</option>
                    <option value="modernization" className="dark:bg-[#151d30]">Website Modernization</option>
                    <option value="app" className="dark:bg-[#151d30]">Custom App Development</option>
                    <option value="ai" className="dark:bg-[#151d30]">AI Integration</option>
                    <option value="transformation" className="dark:bg-[#151d30]">Full Digital Transformation</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 pointer-events-none w-5 h-5" />
                </div>
              </div>

              {/* Field 4: Message */}
              <div className="flex flex-col gap-2 text-left">
                <label className="font-mono-tech text-xs text-slate-700 dark:text-slate-300 font-semibold px-1">
                  Project Summary
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly tell us about your project vision, timeline, or key features..."
                  className="p-4 rounded-none bg-slate-50 dark:bg-[#1a233a] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-sans text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#6e5ef5] focus:ring-2 focus:ring-[#6e5ef5]/20 transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button & Reassurance */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-none bg-[#6e5ef5] hover:bg-[#5644dc] text-white font-mono-tech text-sm font-semibold shadow-lg shadow-[#6e5ef5]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#a2eeff]" />
                  <span>Send Inquiry & Get Architecture Roadmap</span>
                  <Send className="w-4 h-4" />
                </button>

                <div className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 font-mono-tech text-xs">
                  <Lock className="w-4 h-4 text-[#006a48] dark:text-[#45dfa4]" />
                  <span>No obligations. Free scoping call included.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
