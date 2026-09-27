"use client";

import React from "react";
import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "@/components/lightswind/3d-scroll-trigger";
import { Star, Quote, Sparkles } from "lucide-react";

interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  project: string;
  rating: number;
}

const REVIEWS_ROW_1: Review[] = [
  {
    id: "rev-1",
    name: "Alex Rivera",
    role: "Founder & CEO",
    company: "Quantum SaaS",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "Craftvia delivered our entire dashboard rebuild in just 12 days. Our user retention shot up by 38% after launch!",
    project: "Next.js Dashboard Rebuild",
    rating: 5,
  },
  {
    id: "rev-2",
    name: "Elena Rostova",
    role: "Head of Product",
    company: "Aura Lifestyle",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    quote: "The conversion lift was immediate on day one. Craftvia’s attention to high-end UI details and performance is world-class.",
    project: "Headless E-Commerce Store",
    rating: 5,
  },
  {
    id: "rev-3",
    name: "Marcus Vance",
    role: "VP of Engineering",
    company: "AutomateFlow",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    quote: "Our ops team reclaimed over 70 hours a month. It felt like bringing on 3 full-time engineers without the headcount.",
    project: "Gemini RAG Copilot",
    rating: 5,
  },
  {
    id: "rev-4",
    name: "Sophia Chen",
    role: "Chief Technology Officer",
    company: "Nexus Finance",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    quote: "Zero bloated legacy code. The Next.js 15 server actions architecture gave us sub-100ms global latency.",
    project: "Institutional Web Portal",
    rating: 5,
  },
];

const REVIEWS_ROW_2: Review[] = [
  {
    id: "rev-5",
    name: "David Korb",
    role: "Managing Director",
    company: "Lex Architects",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    quote: "Working directly with Kai and senior engineers saved us weeks of corporate red tape. Execution speed was unmatched.",
    project: "Luxury Web Application",
    rating: 5,
  },
  {
    id: "rev-6",
    name: "Rachel Thorne",
    role: "Head of Growth",
    company: "Pulse Analytics",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    quote: "Lighthouse 100/100 performance across all Core Web Vitals. Our SEO organic traffic doubled within a month.",
    project: "SEO & Web Speed Migration",
    rating: 5,
  },
  {
    id: "rev-7",
    name: "Liam O'Connor",
    role: "Founder",
    company: "Starlight Digital",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
    quote: "Fixed transparent pricing with zero surprise charges. They delivered 2 days ahead of the agreed sprint deadline.",
    project: "SaaS Mobile App MVP",
    rating: 5,
  },
  {
    id: "rev-8",
    name: "Camila Torres",
    role: "Product Lead",
    company: "Bespoke Labs",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    quote: "The interactive 3D elements and micro-animations blown away our board members during our seed funding pitch.",
    project: "Interactive Pitch Experience",
    rating: 5,
  },
];

export default function Reviews3DScrollSection() {
  const renderReviewCard = (rev: Review) => (
    <div
      key={rev.id}
      className="w-[340px] sm:w-[390px] p-6 rounded-none bg-white dark:bg-[#151d30] border border-slate-200 dark:border-slate-800 shadow-xl whitespace-normal flex flex-col justify-between mx-3 transition-transform hover:-translate-y-1"
    >
      <div>
        {/* Rating Stars & Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(rev.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-[10px] font-mono-tech text-[#006877] dark:text-[#5de6ff] bg-[#a2eeff] dark:bg-[#00515d]/40 px-2.5 py-0.5 rounded-none border border-[#2fd9f4] dark:border-[#006877] font-semibold">
            {rev.project}
          </span>
        </div>

        {/* Quote */}
        <p className="text-xs sm:text-sm font-sans text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
          &ldquo;{rev.quote}&rdquo;
        </p>
      </div>

      {/* Client Profile Footer */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
        <img
          src={rev.avatar}
          alt={rev.name}
          className="w-10 h-10 rounded-none object-cover border border-slate-200 dark:border-slate-700 shadow-sm"
        />
        <div>
          <h5 className="font-headline font-bold text-sm text-slate-900 dark:text-white leading-tight">
            {rev.name}
          </h5>
          <p className="text-xs font-mono-tech text-slate-500 dark:text-slate-400">
            {rev.role} @ <span className="text-[#5542db] dark:text-[#c6c0ff] font-semibold">{rev.company}</span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full py-24 bg-[#f3f2ff] dark:bg-[#0f172a] border-b border-slate-200/80 dark:border-slate-800/80 relative transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center mb-12">
        <span className="font-mono-tech text-xs text-[#150066] dark:text-[#c6c0ff] font-semibold tracking-wider uppercase mb-3 px-3.5 py-1 rounded-none bg-[#e4dfff] dark:bg-[#201c47] border border-[#c6c0ff] dark:border-[#5542db]/40 inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> CLIENT REVIEWS & VERDICTS
        </span>
        <h2 className="font-headline text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          What founders say about Craftvia.
        </h2>
        <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
          Scroll up or down to watch the 3D velocity cards react dynamically to your scroll speed.
        </p>
      </div>

      {/* Scroll Trigger Velocity Container */}
      <ThreeDScrollTriggerContainer className="py-4">
        {/* Row 1: Left to Right */}
        <ThreeDScrollTriggerRow baseVelocity={5} direction={1} tiltEffect={false} className="mb-6">
          {REVIEWS_ROW_1.map(renderReviewCard)}
        </ThreeDScrollTriggerRow>

        {/* Row 2: Right to Left */}
        <ThreeDScrollTriggerRow baseVelocity={4} direction={-1} tiltEffect={false}>
          {REVIEWS_ROW_2.map(renderReviewCard)}
        </ThreeDScrollTriggerRow>
      </ThreeDScrollTriggerContainer>
    </section>
  );
}
