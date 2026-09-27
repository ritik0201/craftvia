"use client";

import React, { useState } from "react";
import { ArrowRight, ExternalLink, X, TrendingUp, ShieldCheck, Sparkles } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  categoryColor: string;
  metric: string;
  techTags: string[];
  fullCaseStudy: string;
  clientQuote: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "quantum-saas",
    title: "Quantum SaaS — Analytics Platform",
    category: "Web Development",
    description: "Redesigned core web portal delivering 3.4x faster data loading.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
    categoryColor: "text-violet-700 dark:text-violet-300 bg-violet-100/90 dark:bg-violet-950/80 border-violet-300 dark:border-violet-700",
    metric: "3.4x Speedup",
    techTags: ["Next.js 15", "TypeScript", "Tailwind", "Chart.js"],
    fullCaseStudy:
      "Quantum SaaS had a legacy dashboard suffering from high latency when loading multi-gigabyte analytical datasets. Craftvia engineered a streaming SSR web app using Next.js 15, reducing initial page load time from 4.2 seconds to 650ms.",
    clientQuote:
      "“Craftvia delivered our entire dashboard rebuild in just 12 days. Our user retention shot up by 38% after launch.” — CTO @ Quantum",
  },
  {
    id: "aura-lifestyle",
    title: "Aura Lifestyle — E-Commerce Experience",
    category: "Website Modernization",
    description: "Modernized storefront boosting mobile checkout conversion by +42%.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    categoryColor: "text-cyan-700 dark:text-cyan-300 bg-cyan-100/90 dark:bg-cyan-950/80 border-cyan-300 dark:border-cyan-700",
    metric: "+42% Mobile Checkout",
    techTags: ["Headless E-Com", "Shopify Storefront API", "Tailwind CSS"],
    fullCaseStudy:
      "Aura Lifestyle needed a mobile-first storefront capable of handling flash sales. We replaced their clunky theme with a headless Next.js solution that loads instantaneously across global mobile devices.",
    clientQuote:
      "“The conversion lift was immediate on day one. Craftvia’s attention to UI details is world class.” — Founder @ Aura Lifestyle",
  },
  {
    id: "automate-flow",
    title: "AutomateFlow — Operations Hub",
    category: "AI Integration",
    description: "Integrated automated AI triage saving 18 hours of manual input weekly.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    categoryColor: "text-emerald-700 dark:text-emerald-300 bg-emerald-100/90 dark:bg-emerald-950/80 border-emerald-300 dark:border-emerald-700",
    metric: "18 hrs Saved / Wk",
    techTags: ["Gemini AI API", "Node.js Pipelines", "PostgreSQL"],
    fullCaseStudy:
      "AutomateFlow was manually processing hundreds of customer support tickets daily. We integrated a custom Gemini RAG copilot directly into their CRM, automatically categorizing and responding to routine inquiries.",
    clientQuote:
      "“Our team reclaimed over 70 hours a month. It felt like bringing on 3 full-time ops specialists without the headcount.” — Head of Ops",
  },
];

export default function Work() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-purple-50/20 via-[#faf9f6] to-purple-50/20 dark:from-[#090e1a] dark:via-[#0c1324] dark:to-[#090e1a] border-b border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden transition-colors duration-300" id="work">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-500/10 dark:bg-violet-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-16 flex flex-col items-center">
          <span className="font-mono-tech text-xs text-violet-700 dark:text-violet-300 font-semibold tracking-wider uppercase mb-3 px-3.5 py-1 rounded-full bg-violet-100/80 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800/60 inline-flex items-center gap-1.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-violet-500" /> SELECTED CASE STUDIES
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            Products we’ve brought to life.
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real outcomes shipped for ambitious teams.
          </p>
        </div>

        {/* 3 Modern Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              onClick={() => setSelectedCase(study)}
              className="flex flex-col rounded-none bg-white/90 dark:bg-[#151d30]/90 border border-slate-200/90 dark:border-slate-800/90 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-violet-500/15 hover:border-violet-500/50 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer backdrop-blur-xl relative"
            >
              {/* Card Image Container */}
              <div className="relative w-full h-64 bg-slate-900 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 group-hover:from-slate-950/90 transition-all duration-300"></div>

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`inline-flex items-center px-3 py-1 rounded-none text-xs font-mono-tech font-bold backdrop-blur-md border shadow-md ${study.categoryColor}`}>
                    {study.category}
                  </span>
                </div>

                {/* Bottom Metric Pill */}
                <div className="absolute bottom-4 right-4 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-none border border-emerald-500/30 text-xs font-mono-tech text-emerald-400 font-bold flex items-center gap-1.5 shadow-lg z-10">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{study.metric}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div>
                  <h3 className="font-headline text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-4">
                    {study.description}
                  </p>

                  {/* Tech Tags Row */}
                  <div className="flex flex-wrap gap-1.5">
                    {study.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-none bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-[11px] font-mono-tech text-slate-600 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono-tech text-violet-600 dark:text-violet-400 font-bold group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
                  <span>View Case Study Specs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Inspector Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#151d30] border border-slate-200 dark:border-slate-800 rounded-none p-6 sm:p-8 max-w-2xl w-full relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-6 right-6 p-2 rounded-none bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className={`inline-flex items-center px-3 py-1 rounded-none text-xs font-mono-tech font-semibold border ${selectedCase.categoryColor}`}>
                {selectedCase.category}
              </span>
              <h3 className="font-headline text-2xl font-bold text-slate-900 dark:text-white">
                {selectedCase.title}
              </h3>
            </div>

            <div className="relative w-full h-60 rounded-none overflow-hidden border border-slate-200 dark:border-slate-800">
              <img
                src={selectedCase.image}
                alt={selectedCase.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-[#1a233a] p-4 rounded-none border border-slate-200 dark:border-slate-800 font-sans">
              {selectedCase.fullCaseStudy}
            </p>

            <div className="bg-violet-50 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800/60 p-4 rounded-none text-xs text-violet-900 dark:text-violet-200 font-mono-tech leading-relaxed">
              {selectedCase.clientQuote}
            </div>

            <div>
              <h4 className="text-xs font-mono-tech text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                Tech Stack Architecture:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedCase.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-none bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono-tech text-slate-800 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono-tech text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Delivered Ahead of Schedule
              </span>
              <a
                href="#contact"
                onClick={() => setSelectedCase(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-violet-600 hover:bg-violet-700 text-white text-xs font-mono-tech font-bold shadow-md transition-all"
              >
                <span>Request Similar Build</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
