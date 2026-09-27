"use client";

import React, { useState } from "react";
import {
  Terminal,
  MessageSquare,
  Zap,
  Calculator,
  Check,
  ArrowRight,
  Sparkles,
  Globe,
  Smartphone,
  Cpu,
  ShieldCheck,
  Clock,
  DollarSign,
  Layers,
  ChevronRight,
} from "lucide-react";

export default function WhyUs() {
  // Calculator State
  const [projectType, setProjectType] = useState<"website" | "modernization" | "app" | "ai">("website");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["cms", "analytics", "seo"]);

  const projectTypes = [
    {
      id: "website",
      name: "Web Platform",
      baseDays: 10,
      basePrice: 2500,
      icon: <Globe className="w-5 h-5 text-violet-500 dark:text-violet-400" />,
      tag: "Next.js 15 & CMS",
      desc: "High-speed marketing site & web engine",
    },
    {
      id: "modernization",
      name: "Modernization",
      baseDays: 7,
      basePrice: 2000,
      icon: <Zap className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
      tag: "Legacy Refactor",
      desc: "Speed up sluggish code & tech stack",
    },
    {
      id: "app",
      name: "SaaS App MVP",
      baseDays: 18,
      basePrice: 4800,
      icon: <Smartphone className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />,
      tag: "Full-Stack App",
      desc: "Web & Mobile App with DB & Auth",
    },
    {
      id: "ai",
      name: "AI Copilot Hub",
      baseDays: 12,
      basePrice: 3600,
      icon: <Cpu className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
      tag: "RAG & LLM Engine",
      desc: "Custom AI workflows & smart bots",
    },
  ];

  const integrationFeatures = [
    { id: "cms", name: "Headless CMS", addedDays: 2, price: 400, desc: "Sanity / Strapi CMS setup" },
    { id: "auth", name: "User Auth & Roles", addedDays: 2, price: 500, desc: "Secure SSO & permission tiers" },
    { id: "payment", name: "Stripe Billing", addedDays: 3, price: 600, desc: "Subscriptions & checkout" },
    { id: "ai-bot", name: "AI Vector Search", addedDays: 4, price: 900, desc: "Custom knowledge retrieval" },
    { id: "analytics", name: "Real-time Telemetry", addedDays: 1, price: 300, desc: "Usage metrics & event logs" },
    { id: "seo", name: "CWV 100/100 SEO", addedDays: 1, price: 350, desc: "Core Web Vitals max score" },
  ];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const currentType = projectTypes.find((t) => t.id === projectType) || projectTypes[0];

  const computedFeaturesDays = selectedFeatures.reduce((acc, featId) => {
    const feat = integrationFeatures.find((f) => f.id === featId);
    return acc + (feat ? feat.addedDays : 0);
  }, 0);

  const computedFeaturesPrice = selectedFeatures.reduce((acc, featId) => {
    const feat = integrationFeatures.find((f) => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const totalEstDays = Math.max(7, currentType.baseDays + computedFeaturesDays);
  const totalEstPrice = currentType.basePrice + computedFeaturesPrice;

  const phase1Days = Math.max(2, Math.round(totalEstDays * 0.25));
  const phase2Days = Math.max(3, Math.round(totalEstDays * 0.55));
  const phase3Days = Math.max(1, totalEstDays - phase1Days - phase2Days);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#faf9f6] via-purple-50/20 to-[#faf9f6] dark:from-[#090e1a] dark:via-[#0d1527] dark:to-[#090e1a] border-b border-slate-200/60 dark:border-slate-800/60 relative overflow-hidden transition-colors duration-300" id="why-us">
      {/* Background Glow Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-violet-500/10 via-indigo-500/10 to-cyan-500/10 dark:from-violet-600/15 dark:via-indigo-600/15 dark:to-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col items-center relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-16 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 font-mono-tech text-xs text-violet-700 dark:text-violet-300 font-semibold tracking-wider uppercase mb-4 px-4 py-1.5 rounded-full bg-violet-100/80 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-violet-500" />
            WHY CRAFTVIA
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
            Built for founders who want results, not red tape.
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal max-w-2xl">
            We eliminate agency bloat and deliver production-ready software with senior engineering precision.
          </p>
        </div>

        {/* 3 Differentiators (Premium Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-20">
          
          {/* Card 1 */}
          <div className="p-8 rounded-none bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 shadow-md backdrop-blur-xl hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 group relative">
            <div className="w-12 h-12 rounded-none bg-violet-100 dark:bg-violet-950/70 border border-violet-200 dark:border-violet-800/50 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-6 group-hover:scale-110 transition-transform">
              <Terminal className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
              Modern Tech Stack
            </h3>
            <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Zero legacy bloat. Built exclusively on fast, type-safe Next.js 15, TypeScript, and edge cloud primitives.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-none bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 shadow-md backdrop-blur-xl hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group relative">
            <div className="w-12 h-12 rounded-none bg-cyan-100 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-800/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              Direct Senior Access
            </h3>
            <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Work directly with senior product builders who architect the database, write the code, and ship the product.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-none bg-white/70 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 shadow-md backdrop-blur-xl hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group relative">
            <div className="w-12 h-12 rounded-none bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Rapid Sprint Delivery
            </h3>
            <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Aggressive 2-week execution tracks designed to launch your project fast without sacrificing code quality.
            </p>
          </div>

        </div>

        {/* HIGH-TECH INTERACTIVE SCOPE & TIMELINE CALCULATOR CARD */}
        <div className="w-full scroll-mt-28" id="calculator">
          <div className="relative rounded-none bg-white/90 dark:bg-[#0c1324]/90 border border-slate-200/90 dark:border-slate-800/90 shadow-2xl backdrop-blur-2xl p-6 sm:p-10 lg:p-12 overflow-hidden">
            
            {/* Ambient Corner Glows inside Card */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-violet-500/15 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none" />

            {/* Header Bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 pb-8 border-b border-slate-200/70 dark:border-slate-800/80 relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 text-xs font-mono-tech font-bold uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>INTERACTIVE SCOPE ESTIMATOR</span>
                </div>
                <h3 className="font-headline text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Estimate Your Project Scope & Timeline
                </h3>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono-tech font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>100% Fixed Price Guarantee</span>
              </div>
            </div>

            {/* Interactive Steps */}
            <div className="space-y-10 relative z-10">
              
              {/* STEP 1: Select Architecture (Card Selector Grid) */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono-tech text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-violet-600 text-white flex items-center justify-center text-[10px] font-bold">1</span>
                    SELECT PRODUCT ARCHITECTURE
                  </span>
                  <span className="text-xs font-mono-tech text-violet-600 dark:text-violet-400 font-medium">
                    Base: {currentType.name} ({currentType.baseDays} Days)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  {projectTypes.map((type) => {
                    const isSelected = projectType === type.id;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setProjectType(type.id as any)}
                        className={`p-4 rounded-none text-left transition-all duration-200 cursor-pointer relative flex flex-col justify-between border ${
                          isSelected
                            ? "bg-violet-600 text-white border-violet-500 shadow-lg shadow-violet-500/20 ring-2 ring-violet-400/40"
                            : "bg-slate-50/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-violet-400/60 dark:hover:border-violet-500/50 hover:bg-white dark:hover:bg-slate-800/90"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className={`p-2 rounded-none ${isSelected ? "bg-white/20 text-white" : "bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300"}`}>
                            {type.icon}
                          </div>
                          {isSelected && (
                            <span className="w-5 h-5 rounded-full bg-white text-violet-600 flex items-center justify-center">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </span>
                          )}
                        </div>

                        <div>
                          <h4 className={`font-headline text-base font-bold mb-1 ${isSelected ? "text-white" : "text-slate-900 dark:text-white"}`}>
                            {type.name}
                          </h4>
                          <p className={`text-[11px] font-sans mb-3 line-clamp-1 ${isSelected ? "text-white/80" : "text-slate-500 dark:text-slate-400"}`}>
                            {type.desc}
                          </p>
                          <div className="flex items-center justify-between text-[11px] font-mono-tech border-t pt-2 border-white/20 dark:border-slate-800">
                            <span className={isSelected ? "text-white/90" : "text-slate-500 dark:text-slate-400"}>
                              ~{type.baseDays} Days
                            </span>
                            <span className={`font-bold ${isSelected ? "text-white" : "text-violet-600 dark:text-violet-400"}`}>
                              ${type.basePrice.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* STEP 2: Select Integrations (Interactive Toggle Badges) */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono-tech text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-violet-600 text-white flex items-center justify-center text-[10px] font-bold">2</span>
                    SELECT REQUIRED INTEGRATIONS
                  </span>
                  <span className="text-xs font-mono-tech text-slate-500 dark:text-slate-400">
                    {selectedFeatures.length} Selected (+{computedFeaturesDays} Days)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {integrationFeatures.map((feat) => {
                    const isChecked = selectedFeatures.includes(feat.id);
                    return (
                      <button
                        key={feat.id}
                        onClick={() => toggleFeature(feat.id)}
                        className={`p-3.5 rounded-none text-left transition-all duration-200 cursor-pointer flex items-center justify-between border ${
                          isChecked
                            ? "bg-slate-900 text-white dark:bg-slate-800 dark:text-white border-violet-500 shadow-md ring-1 ring-violet-500/50"
                            : "bg-slate-50/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-none flex items-center justify-center transition-colors ${
                            isChecked ? "bg-violet-500 text-white" : "border border-slate-300 dark:border-slate-700 text-transparent"
                          }`}>
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <div>
                            <span className="block font-mono-tech text-xs font-semibold">
                              {feat.name}
                            </span>
                            <span className={`block text-[10px] font-sans ${isChecked ? "text-slate-300 dark:text-slate-400" : "text-slate-400 dark:text-slate-500"}`}>
                              {feat.desc}
                            </span>
                          </div>
                        </div>

                        <div className="text-right font-mono-tech text-[11px] flex flex-col items-end">
                          <span className={isChecked ? "text-violet-300 dark:text-violet-400 font-bold" : "text-slate-500 dark:text-slate-400"}>
                            +${feat.price}
                          </span>
                          <span className="text-[10px] opacity-70">
                            +{feat.addedDays}d
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* STEP 3: Animated Production Sprint Track Timeline */}
              <div className="pt-2">
                <span className="text-xs font-mono-tech text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-2 mb-4">
                  <span className="w-5 h-5 rounded-full bg-violet-600 text-white flex items-center justify-center text-[10px] font-bold">3</span>
                  ESTIMATED PRODUCTION SPRINT TRACK ({totalEstDays} DAYS TOTAL)
                </span>

                <div className="p-6 rounded-none bg-slate-900 dark:bg-slate-950 text-white border border-slate-800 shadow-inner">
                  {/* Progress Bar */}
                  <div className="relative w-full h-2.5 bg-slate-800 rounded-none overflow-hidden mb-6">
                    <div className="h-full bg-gradient-to-r from-violet-500 via-indigo-500 to-emerald-400 rounded-none w-full animate-pulse" />
                  </div>

                  {/* 3 Phase Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-3.5 rounded-none bg-slate-800/80 border border-slate-700/80">
                      <div className="flex items-center justify-between text-[11px] font-mono-tech text-violet-400 mb-1 font-semibold">
                        <span>PHASE 1: ARCHITECTURE</span>
                        <span>{phase1Days} Days</span>
                      </div>
                      <p className="text-xs font-sans text-slate-300">
                        UX wireframes, DB schema, API design & setup.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-none bg-slate-800/80 border border-slate-700/80">
                      <div className="flex items-center justify-between text-[11px] font-mono-tech text-indigo-400 mb-1 font-semibold">
                        <span>PHASE 2: CORE BUILD</span>
                        <span>{phase2Days} Days</span>
                      </div>
                      <p className="text-xs font-sans text-slate-300">
                        Next.js components, backend logic & integrations.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-none bg-slate-800/80 border border-slate-700/80">
                      <div className="flex items-center justify-between text-[11px] font-mono-tech text-emerald-400 mb-1 font-semibold">
                        <span>PHASE 3: QA & LAUNCH</span>
                        <span>{phase3Days} Days</span>
                      </div>
                      <p className="text-xs font-sans text-slate-300">
                        CWV audit, security checks & production deploy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 4: LIVE ESTIMATE HUD SUMMARY & CALL TO ACTION */}
              <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex flex-wrap items-center gap-8">
                  <div>
                    <span className="text-xs font-mono-tech text-slate-500 dark:text-slate-400 block mb-1 uppercase tracking-wider font-semibold">
                      Target Delivery
                    </span>
                    <div className="text-3xl sm:text-4xl font-headline font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                      <Clock className="w-7 h-7 text-violet-500" />
                      <span>~{totalEstDays} Days</span>
                    </div>
                  </div>

                  <div className="h-12 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />

                  <div>
                    <span className="text-xs font-mono-tech text-slate-500 dark:text-slate-400 block mb-1 uppercase tracking-wider font-semibold">
                      Fixed Turnkey Budget
                    </span>
                    <div className="text-3xl sm:text-4xl font-headline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 dark:from-violet-400 dark:via-indigo-300 dark:to-cyan-400">
                      ${totalEstPrice.toLocaleString()} – ${Math.round(totalEstPrice * 1.2).toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* CTA Action Button */}
                <a
                  href="#contact"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-none bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 hover:from-violet-500 hover:to-indigo-600 text-white font-mono-tech text-sm font-bold shadow-xl shadow-violet-500/25 transition-all duration-300 group cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform" />
                  <span>Reserve Build Slot</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
