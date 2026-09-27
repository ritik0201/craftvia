"use client";

import React, { useState } from "react";
import { Compass, Palette, Code, Rocket, CheckCircle2, Clock } from "lucide-react";

interface StepDetail {
  num: string;
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  duration: string;
  activities: string[];
}

const stepsData: StepDetail[] = [
  {
    num: "01",
    title: "Discover",
    shortDesc: "We align on your goals, tech stack, and project scope in 48 hours.",
    icon: <Compass className="w-5 h-5 text-[#5542db]" />,
    color: "text-[#5542db]",
    bgColor: "bg-[#e4dfff]",
    borderColor: "border-[#5542db]",
    duration: "48 Hours",
    activities: [
      "Discovery call & architecture mapping",
      "Feature backlog prioritization & fixed pricing breakdown",
      "Tech stack recommendation (Next.js / AI / Database)",
      "Project timeline & milestones signoff",
    ],
  },
  {
    num: "02",
    title: "Design",
    shortDesc: "Interactive UI prototypes tailored to your brand identity.",
    icon: <Palette className="w-5 h-5 text-[#006877]" />,
    color: "text-[#006877]",
    bgColor: "bg-[#a2eeff]",
    borderColor: "border-[#006877]",
    duration: "3–5 Days",
    activities: [
      "Stitch UI wireframes & visual design system",
      "Interactive Figma / Stitch clickable prototype",
      "Design review & feedback iteration",
      "Design token & asset export for engineering",
    ],
  },
  {
    num: "03",
    title: "Build",
    shortDesc: "Clean, production-grade code with regular progress previews.",
    icon: <Code className="w-5 h-5 text-[#5542db]" />,
    color: "text-[#5542db]",
    bgColor: "bg-[#e4dfff]",
    borderColor: "border-[#5542db]",
    duration: "7–14 Days",
    activities: [
      "Modular Next.js / TypeScript engineering",
      "Database schema & API route integration",
      "Daily async Loom preview updates & staging URL",
      "Automated unit & end-to-end testing",
    ],
  },
  {
    num: "04",
    title: "Launch",
    shortDesc: "Seamless deployment, training, and ongoing technical support.",
    icon: <Rocket className="w-5 h-5 text-[#006a48]" />,
    color: "text-[#006a48]",
    bgColor: "bg-[#6ffbbe]/60",
    borderColor: "border-[#006a48]",
    duration: "1–2 Days",
    activities: [
      "Domain setup, SSL & Edge CDN configuration",
      "100/100 Lighthouse speed audit verification",
      "Client admin walkthrough & documentation",
      "30-day post-launch warranty & maintenance",
    ],
  },
];

export default function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = stepsData[activeStepIndex];

  return (
    <section className="w-full py-24 bg-[#faf8ff] dark:bg-[#0c1324] border-b border-slate-200/80 dark:border-slate-800/80 relative transition-colors duration-300" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-16 flex flex-col items-center">
          <span className="font-mono-tech text-xs text-[#001f25] dark:text-[#5de6ff] font-semibold tracking-wider uppercase mb-4 px-4 py-1.5 rounded-none bg-[#a2eeff] dark:bg-[#00515d] border border-[#2fd9f4] dark:border-[#006877]">
            THE PROCESS
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Simple, transparent, and fast.
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            Four disciplined steps from initial idea to live production launch.
          </p>
        </div>

        {/* 4-Step Interactive Pill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {stepsData.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative flex flex-col p-8 rounded-none bg-white/80 dark:bg-[#151d30]/80 backdrop-blur-md border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 ${
                  isSelected
                    ? `${step.borderColor} ring-2 ring-[#6e5ef5]/30 shadow-md bg-gradient-to-b from-white to-[#f3f2ff] dark:from-[#151d30] dark:to-[#1a233a]`
                    : "border-slate-200/70 dark:border-slate-800/70 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className={`font-headline text-3xl font-bold ${step.color} dark:text-white`}>
                    {step.num}
                  </span>
                  <div className={`w-10 h-10 rounded-none ${step.bgColor} dark:bg-opacity-20 flex items-center justify-center shadow-xs`}>
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-headline text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {step.shortDesc}
                </p>

                {isSelected && (
                  <div className="mt-4 pt-3 border-t border-slate-200/70 dark:border-slate-800/70 flex items-center gap-2 text-xs font-mono-tech text-[#006877] dark:text-[#5de6ff]">
                    <span className="w-2 h-2 rounded-none bg-[#006877] dark:bg-[#5de6ff] animate-pulse"></span>
                    <span>Active Phase</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Detailed Active Step Inspector Box */}
        <div className="w-full max-w-4xl bg-white/90 dark:bg-[#151d30]/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 rounded-none p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <span className={`font-headline text-2xl font-bold ${activeStep.color} dark:text-white`}>
                Phase {activeStep.num} — {activeStep.title}
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-none bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono-tech text-slate-700 dark:text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#006877] dark:text-[#5de6ff]" />
              <span>Est. Duration: {activeStep.duration}</span>
            </div>
          </div>

          <h4 className="text-xs font-mono-tech text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 font-semibold">
            Key Execution Milestones:
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activeStep.activities.map((act) => (
              <div
                key={act}
                className="flex items-start gap-3 p-4 rounded-none bg-[#f3f2ff] dark:bg-[#1a233a] border border-slate-200/60 dark:border-slate-800"
              >
                <CheckCircle2 className={`w-5 h-5 ${activeStep.color} dark:text-[#45dfa4] shrink-0 mt-0.5`} />
                <span className="text-sm text-slate-800 dark:text-slate-200 font-sans leading-snug">
                  {act}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
