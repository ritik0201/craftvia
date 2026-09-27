"use client";

import React from "react";
import { SlidingLogoMarquee, SlidingLogoMarqueeItem } from "@/components/lightswind/sliding-logo-marquee";
import { Sparkles, ShieldCheck } from "lucide-react";

// Brand Logo SVGs & Metadata
const logoData = [
  {
    id: "nextjs",
    name: "Next.js",
    href: "https://nextjs.org",
    svg: (
      <svg className="w-6 h-6 fill-current text-slate-900 dark:text-white" viewBox="0 0 180 180">
        <path d="M180 90C180 139.706 139.706 180 90 180C40.2944 180 0 139.706 0 90C0 40.2944 40.2944 0 90 0C139.706 0 180 40.2944 180 90Z" fill="currentColor" fillOpacity="0.05"/>
        <path d="M149.508 157.52L69.142 54H54V126H67.892V73.47L136.883 162.298C141.258 160.916 145.485 159.317 149.508 157.52Z" fill="currentColor"/>
        <rect x="115" y="54" width="14" height="72" fill="currentColor"/>
      </svg>
    ),
    tag: "Framework",
  },
  {
    id: "react",
    name: "React 19",
    href: "https://react.dev",
    svg: (
      <svg className="w-6 h-6 text-cyan-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
    tag: "UI Library",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    href: "https://tailwindcss.com",
    svg: (
      <svg className="w-6 h-6 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
      </svg>
    ),
    tag: "Styling Engine",
  },
  {
    id: "openai",
    name: "OpenAI",
    href: "https://openai.com",
    svg: (
      <svg className="w-6 h-6 text-emerald-500 dark:text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 23.99a6.0462 6.0462 0 0 0 5.7721-4.2058 5.9847 5.9847 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7469-7.063z"/>
      </svg>
    ),
    tag: "AI Architecture",
  },
  {
    id: "supabase",
    name: "Supabase",
    href: "https://supabase.com",
    svg: (
      <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.362 9.354H12V.311a.76.76 0 0 0-1.333-.5l-9.92 11.758a.76.76 0 0 0 .584 1.252h9.362v9.043a.76.76 0 0 0 1.333.5l9.92-11.758a.76.76 0 0 0-.584-1.252z"/>
      </svg>
    ),
    tag: "Database & Auth",
  },
  {
    id: "vercel",
    name: "Vercel",
    href: "https://vercel.com",
    svg: (
      <svg className="w-6 h-6 fill-current text-slate-900 dark:text-white" viewBox="0 0 24 24">
        <path d="M12 1L24 22H0L12 1Z"/>
      </svg>
    ),
    tag: "Edge Infrastructure",
  },
  {
    id: "stripe",
    name: "Stripe",
    href: "https://stripe.com",
    svg: (
      <svg className="w-6 h-6 text-indigo-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C17.701.757 15.116 0 12.308 0 7.378 0 4.024 2.588 4.024 6.786c0 5.419 7.432 5.68 7.432 8.605 0 .962-.843 1.488-2.227 1.488-2.316 0-5.263-.996-7.25-2.062l-.934 5.645c2.148 1.05 5.093 1.538 7.986 1.538 5.234 0 8.788-2.449 8.788-6.786 0-5.733-7.843-5.975-7.843-8.625z"/>
      </svg>
    ),
    tag: "Global Payments",
  },
  {
    id: "typescript",
    name: "TypeScript",
    href: "https://typescriptlang.org",
    svg: (
      <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.864 13.136c.866 0 1.564.225 2.096.675.532.45.837 1.096.915 1.936h-1.921c-.066-.375-.205-.656-.418-.844-.213-.188-.507-.282-.882-.282-.366 0-.66.103-.882.31-.222.207-.333.488-.333.844 0 .282.08.511.24.685.16.174.457.347.891.516l.962.375c.994.384 1.702.83 2.124 1.336.422.507.633 1.139.633 1.899 0 1.078-.366 1.927-1.097 2.546-.731.62-1.744.929-3.038.929-1.201 0-2.176-.328-2.926-.985-.75-.657-1.177-1.57-1.28-2.738h1.968c.066.525.263.929.591 1.21.328.282.774.422 1.337.422.45 0 .807-.103 1.07-.31.263-.207.394-.497.394-.872 0-.319-.108-.576-.324-.773-.216-.197-.567-.398-1.055-.605l-.844-.366c-.957-.403-1.636-.858-2.035-1.364-.399-.506-.599-1.125-.599-1.856 0-1.041.361-1.861 1.083-2.46.722-.6 1.7-.9 2.934-.9zm-7.618 0v1.734H8.761V22.5H6.703V14.87H4.093V13.136h7.278z"/>
      </svg>
    ),
    tag: "Type Safety",
  },
  {
    id: "framer",
    name: "Framer Motion",
    href: "https://framer.com/motion",
    svg: (
      <svg className="w-6 h-6 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
      </svg>
    ),
    tag: "Animations",
  },
  {
    id: "figma",
    name: "Figma",
    href: "https://figma.com",
    svg: (
      <svg className="w-6 h-6 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 24c2.21 0 4-1.79 4-4v-4H8c-2.21 0-4 1.79-4 4s1.79 4 4 4zm0-24C5.79 0 4 1.79 4 4s1.79 4 4 4h4V0H8zm0 8c-2.21 0-4 1.79-4 4s1.79 4 4 4h4V8H8zm8-4c0-2.21-1.79-4-4-4v8c2.21 0 4-1.79 4-4zm0 8c0-2.21-1.79-4-4-4v8c2.21 0 4-1.79 4-4z"/>
      </svg>
    ),
    tag: "Design System",
  },
];

export function LogoMarqueeSection() {
  const marqueeItems: SlidingLogoMarqueeItem[] = logoData.map((logo) => ({
    id: logo.id,
    href: logo.href,
    content: (
      <div className="group relative flex items-center gap-3.5 px-6 py-3.5 rounded-none bg-white/70 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800/80 shadow-md backdrop-blur-md hover:border-violet-500/50 dark:hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 transform group-hover:-translate-y-0.5 min-w-[200px] justify-center">
        <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
          {logo.svg}
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold tracking-tight text-slate-800 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            {logo.name}
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">
            {logo.tag}
          </span>
        </div>
      </div>
    ),
  }));

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-b from-purple-50/50 via-white to-purple-50/30 dark:from-[#090e1a] dark:via-[#0c1324] dark:to-[#090e1a] border-y border-slate-200/60 dark:border-slate-800/60 overflow-hidden transition-colors duration-300">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/10 dark:bg-violet-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-violet-100/80 dark:bg-violet-950/60 border border-violet-200 dark:border-violet-800/60 text-violet-700 dark:text-violet-300 text-xs font-medium mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-violet-500" />
          <span>POWERING NEXT-GEN DIGITAL EXPERIENCES</span>
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Trusted Modern Stack & Enterprise Partners
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-normal">
          We leverage cutting-edge frameworks, serverless cloud primitives, and AI infrastructure to ship sub-100ms web applications.
        </p>
      </div>

      {/* Marquee Component Container */}
      <div className="relative w-full py-4">
        <SlidingLogoMarquee
          items={marqueeItems}
          speed={20}
          pauseOnHover={true}
          enableBlur={true}
          blurIntensity={1.5}
          height="85px"
          gap="1.5rem"
          direction="horizontal"
          autoPlay={true}
          showGridBackground={false}
          showControls={false}
          className="w-full"
        />
      </div>
    </section>
  );
}

export default LogoMarqueeSection;
