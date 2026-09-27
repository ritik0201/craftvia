"use client";

import React from "react";
import ThreeDHoverGallery, { GalleryItem } from "@/components/lightswind/3d-hover-gallery";
import { Sparkles, Layers } from "lucide-react";

const UNSPLASH_ITEMS: GalleryItem[] = [
  {
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
    title: "Interactive Fluid Motion",
    category: "3D Visual Engineering",
    description: "Sleek flowing shapes with real-time WebGL textures and 60fps animations.",
    glow: "rgba(110,94,245,0.45)",
  },
  {
    url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85",
    title: "Next.js 15 App Architecture",
    category: "Full Stack Development",
    description: "Sub-100ms server actions, Edge CDN caching, and ultra-fast SSR.",
    glow: "rgba(0,104,119,0.45)",
  },
  {
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
    title: "Gemini AI Copilots",
    category: "Artificial Intelligence",
    description: "Custom RAG vector search pipelines with real-time natural language streaming.",
    glow: "rgba(63,225,253,0.45)",
  },
  {
    url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85",
    title: "High-Scale SaaS MVPs",
    category: "Cloud Systems",
    description: "Supabase PostgreSQL databases, multi-tenant roles, and Stripe billing.",
    glow: "rgba(69,223,164,0.45)",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    title: "Headless E-Commerce",
    category: "Storefront Tech",
    description: "Instantaneous global mobile page loads boosting checkout conversion.",
    glow: "rgba(198,192,255,0.45)",
  },
  {
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=85",
    title: "Legacy Site Modernization",
    category: "Performance Upgrade",
    description: "Migrating slow legacy monoliths into lightweight, zero-downtime web apps.",
    glow: "rgba(0,134,92,0.45)",
  },
  {
    url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=85",
    title: "Creative Design Systems",
    category: "Brand & UI/UX",
    description: "Tailored design tokens, typography, and responsive micro-interactions.",
    glow: "rgba(245,158,11,0.45)",
  },
];

export default function GallerySection() {
  return (
    <section className="w-full py-24 bg-[#faf8ff] dark:bg-[#0c1324] border-b border-slate-200/80 dark:border-slate-800/80 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        {/* Header */}
        <div className="text-center max-w-2xl mb-12 flex flex-col items-center">
          <span className="font-mono-tech text-xs text-[#5542db] dark:text-[#c6c0ff] font-semibold tracking-wider uppercase mb-3 px-3.5 py-1 rounded-none bg-[#e4dfff] dark:bg-[#201c47] border border-[#c6c0ff] dark:border-[#5542db]/40 inline-flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" /> 3D INTERACTIVE GALLERY
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Explore Our Digital Innovations
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Hover or tap any card to inspect high-resolution project architectures and live design concepts.
          </p>
        </div>

        {/* 3D Lightswind Hover Gallery */}
        <div className="w-full relative">
          <ThreeDHoverGallery
            items={UNSPLASH_ITEMS}
            itemHeight={480}
            gap={12}
            perspective={1200}
            hoverScale={1.06}
            autoPlay={false}
            className="w-full py-6"
          />
        </div>
      </div>
    </section>
  );
}
