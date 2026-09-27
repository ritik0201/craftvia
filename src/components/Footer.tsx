"use client";

import React from "react";
import { Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden transition-colors duration-300 bg-[#2d0310] dark:bg-[#120106]">
      
      {/* 1. SEAMLESS UNIFIED BACKGROUND IMAGE & GRADIENT */}
      <img
        src="/footer.webp"
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-80 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#2d0310]/60 to-[#120106]/95 pointer-events-none" />

      {/* 2. TOP HERO BANNER */}
      <div className="relative py-24 sm:py-32 px-6 lg:px-12 text-white flex flex-col items-center text-center overflow-hidden z-10">
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
            See Craftvia in action.
          </h2>
          <p className="font-sans text-base sm:text-lg text-rose-100/90 font-normal max-w-xl mb-10 leading-relaxed drop-shadow">
            Test drive our Next-Gen Web & AI Engineering Platform™, personalized to your goals, metrics, and workforce.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full bg-[#d2fb00] hover:bg-[#bce400] text-slate-950 font-sans text-sm font-bold shadow-xl shadow-rose-950/40 transition-all duration-200 transform hover:scale-105 cursor-pointer"
            >
              Request a personalized demo
            </a>
            <a
              href="#why-us"
              className="px-7 py-3.5 rounded-full border border-white/40 hover:border-white text-white font-sans text-sm font-medium backdrop-blur-md flex items-center gap-2.5 transition-all duration-200 hover:bg-white/10 cursor-pointer"
            >
              <span>Watch the demo video</span>
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <Play className="w-3 h-3 fill-white text-white ml-0.5" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. INSET CREAM/WHITE FOOTER CONTAINER CARD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-8 sm:-mt-12 mb-12">
        <div className="bg-[#fbf9f4]/95 dark:bg-[#161a26]/95 backdrop-blur-2xl text-slate-900 dark:text-slate-100 rounded-t-[32px] sm:rounded-t-[40px] border-t border-x border-slate-200/80 dark:border-slate-800 shadow-2xl p-8 sm:p-12 lg:p-16 transition-colors duration-300">
          
          {/* Brand Logo */}
          <div className="mb-12 flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <span className="font-headline font-extrabold text-3xl sm:text-4xl tracking-tight text-slate-900 dark:text-white">
                Craftvia<span className="text-[#6e5ef5]">.</span>
              </span>
            </a>
          </div>

          {/* 5-Column Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-slate-200/80 dark:border-slate-800">
            
            {/* Col 1: PLATFORM */}
            <div>
              <h4 className="font-mono-tech text-[11px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-4">
                PLATFORM
              </h4>
              <ul className="space-y-2.5 text-xs font-sans font-medium text-slate-700 dark:text-slate-300">
                <li><a href="#services" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Overview</a></li>
                <li><a href="#services" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Integrations</a></li>
                <li><a href="#kai" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Powered by AI</a></li>
                <li><a href="#why-us" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Trust & Security</a></li>
              </ul>
            </div>

            {/* Col 2: SOLUTIONS */}
            <div>
              <h4 className="font-mono-tech text-[11px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-4">
                SOLUTIONS
              </h4>
              <ul className="space-y-2.5 text-xs font-sans font-medium text-slate-700 dark:text-slate-300">
                <li><a href="#services" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Web Applications</a></li>
                <li><a href="#services" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Website Modernization</a></li>
                <li><a href="#kai" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">AI Copilot Hub</a></li>
                <li><a href="#why-us" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Edge Architecture</a></li>
                <li><a href="#work" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">For Enterprise</a></li>
              </ul>
            </div>

            {/* Col 3: INSIGHTS */}
            <div>
              <h4 className="font-mono-tech text-[11px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-4">
                INSIGHTS
              </h4>
              <ul className="space-y-2.5 text-xs font-sans font-medium text-slate-700 dark:text-slate-300">
                <li><a href="#work" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Case Studies</a></li>
                <li><a href="#why-us" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Engineering Blog</a></li>
                <li><a href="#calculator" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Sprint Benchmarks</a></li>
                <li><a href="#kai" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Craftvia Labs</a></li>
              </ul>
            </div>

            {/* Col 4: COMPANY */}
            <div>
              <h4 className="font-mono-tech text-[11px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-4">
                COMPANY
              </h4>
              <ul className="space-y-2.5 text-xs font-sans font-medium text-slate-700 dark:text-slate-300">
                <li><a href="#why-us" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">About us</a></li>
                <li><a href="#why-us" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Leadership</a></li>
                <li><a href="#contact" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Careers</a></li>
                <li><a href="#work" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">News and Press</a></li>
              </ul>
            </div>

            {/* Col 5: POPULAR LINKS */}
            <div>
              <h4 className="font-mono-tech text-[11px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-4">
                POPULAR LINKS
              </h4>
              <ul className="space-y-2.5 text-xs font-sans font-medium text-slate-700 dark:text-slate-300">
                <li><a href="#contact" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Contact sales</a></li>
                <li><a href="#contact" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Help center</a></li>
                <li><a href="#calculator" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Reserve Sprint Slot</a></li>
                <li><a href="#" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Legal hub</a></li>
                <li><a href="#" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Privacy notice</a></li>
                <li><a href="#" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Cookie notice</a></li>
              </ul>
            </div>

          </div>

          {/* Social Icons Bar */}
          <div className="py-6 flex items-center gap-3">
            <a href="#" className="w-9 h-9 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:border-slate-900 dark:hover:border-white transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:border-slate-900 dark:hover:border-white transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:border-slate-900 dark:hover:border-white transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:border-slate-900 dark:hover:border-white transition-colors">
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>

          {/* Bottom Divider & Location Info */}
          <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-tech text-slate-500 dark:text-slate-400">
            <div>
              <span>3100 E 5th Street, Suite 350, Austin, TX 78702 • Craftvia HQ</span>
            </div>
            <div>
              <span>215 Spadina Avenue, Suite 400, Toronto, Ontario M5T 2C7 • London Studio</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
