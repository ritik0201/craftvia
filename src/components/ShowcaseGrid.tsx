"use client";

import React, { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function ShowcaseGrid() {
  const [, setActiveCard] = useState<number | null>(null);

  return (
    <section className="w-full py-24 bg-slate-950 dark:bg-[#060911] text-white border-b border-slate-800 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="font-mono-tech text-xs text-[#5de6ff] uppercase tracking-widest font-semibold block mb-2">
              FEATURED DIGITAL SHOWCASE
            </span>
            <h2 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Shipped with Craftvia
            </h2>
          </div>

          <a
            href="#work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono-tech text-white font-medium backdrop-blur-md transition-all duration-200 cursor-pointer group"
          >
            <span>See Craftvia sites</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Showcase Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
          {/* ================= ROW 1 ================= */}

          {/* Card 1: Light Modern Studio Workstation (2 Cols Wide) */}
          <div
            onMouseEnter={() => setActiveCard(1)}
            onMouseLeave={() => setActiveCard(null)}
            className="lg:col-span-2 relative h-[420px] sm:h-[480px] rounded-none overflow-hidden border border-white/15 group cursor-pointer shadow-2xl bg-slate-800"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Craftvia Design Studio Light Mockup"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20 group-hover:from-slate-950/95 transition-all duration-300"></div>

            {/* Top Widget Nav */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-xs font-mono-tech text-white/90 z-10">
              <span className="px-3 py-1 rounded-none bg-slate-900/70 backdrop-blur-md border border-white/20 font-semibold flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#5de6ff]"></span> Craftvia Studio
              </span>
              <div className="hidden sm:flex items-center gap-3 px-3 py-1 rounded-none bg-slate-900/70 backdrop-blur-md border border-white/20 text-[11px] text-white/80 shadow-md">
                <span>London 15:42:42</span>
                <span className="text-white/40">|</span>
                <span>New York 10:42:42</span>
              </div>
            </div>

            {/* Top Right Floating Action Badges */}
            <div className="absolute top-16 right-5 hidden sm:flex flex-col gap-2 max-w-[210px] z-10">
              <div className="p-2.5 rounded-none bg-slate-900/80 backdrop-blur-md border border-white/20 text-xs font-sans text-white/90 shadow-xl">
                <div className="flex items-center justify-between font-mono-tech text-[10px] text-slate-300 mb-1">
                  <span>Book a call</span>
                  <span className="text-[#5de6ff]">CONTACT</span>
                </div>
                <p className="text-[11px] leading-tight text-slate-200">Let's talk about your next digital project</p>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white mb-3 max-w-md leading-tight drop-shadow-md">
                A design studio for startups and scaleups
              </h3>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-white/20 hover:bg-white/30 backdrop-blur-md text-xs font-mono-tech text-white border border-white/30 transition-colors shadow-lg"
              >
                <span>Book a Call</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Light Editorial Fashion Portrait (1 Col Wide) */}
          <div
            onMouseEnter={() => setActiveCard(2)}
            onMouseLeave={() => setActiveCard(null)}
            className="lg:col-span-1 relative h-[420px] sm:h-[480px] rounded-none overflow-hidden border border-white/15 group cursor-pointer shadow-2xl bg-slate-800"
          >
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
              alt="Editorial Fashion Light Showcase"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/30 group-hover:from-slate-950/95 transition-all duration-300"></div>

            {/* Top Badge */}
            <div className="absolute top-5 left-5 z-10">
              <span className="px-3 py-1 rounded-none bg-amber-300 text-slate-950 font-headline font-bold text-xs tracking-wider shadow-md">
                i-D
              </span>
            </div>

            {/* Bottom Overlay Text */}
            <div className="absolute bottom-6 left-6 right-6 text-left z-10">
              <h3 className="font-headline text-3xl font-bold text-[#5de6ff] tracking-tighter leading-none mb-1 drop-shadow-md">
                LLE, OH, ELLE
              </h3>
              <p className="text-xs font-mono-tech text-slate-200">Urban Chic Issue 05</p>
            </div>
          </div>

          {/* Card 3: Light Alpine Snow Mountains (1 Col Wide) */}
          <div
            onMouseEnter={() => setActiveCard(3)}
            onMouseLeave={() => setActiveCard(null)}
            className="lg:col-span-1 relative h-[420px] sm:h-[480px] rounded-none overflow-hidden border border-white/15 group cursor-pointer shadow-2xl bg-slate-800"
          >
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
              alt="ORO AI Mountain Platform Light Showcase"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/20 group-hover:from-slate-950/95 transition-all duration-300"></div>

            {/* Top Logo */}
            <div className="absolute top-5 left-5 z-10">
              <span className="font-headline font-bold text-2xl tracking-widest text-white drop-shadow-md">
                ORO
              </span>
            </div>

            {/* Bottom Subtext */}
            <div className="absolute bottom-6 left-6 right-6 text-left space-y-2 z-10">
              <p className="text-xs font-sans text-slate-100 leading-relaxed drop-shadow-md">
                "Your data is the most valuable commodity in the AI world. It's time you get rewarded for it."
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono-tech text-[#5de6ff]">
                <Sparkles className="w-3.5 h-3.5" /> <span>AI Data Economy</span>
              </div>
            </div>
          </div>

          {/* ================= ROW 2 ================= */}

          {/* Card 4: Light Sunlit Stadium Sports (1 Col Wide) */}
          <div
            onMouseEnter={() => setActiveCard(4)}
            onMouseLeave={() => setActiveCard(null)}
            className="lg:col-span-1 relative h-[420px] sm:h-[480px] rounded-none overflow-hidden border border-white/15 group cursor-pointer shadow-2xl bg-slate-800"
          >
            <img
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80"
              alt="Tripadvisor Chase The Match Light Showcase"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/20 group-hover:from-slate-950/95 transition-all duration-300"></div>

            {/* Top Logo */}
            <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
              <div className="w-6 h-6 rounded-none bg-emerald-400 text-slate-950 font-bold flex items-center justify-center text-xs shadow-md">
                ⚽
              </div>
              <span className="font-headline font-bold text-sm tracking-wide text-white drop-shadow-md">
                Tripadvisor
              </span>
            </div>

            {/* Center Text Overlay */}
            <div className="absolute bottom-8 left-6 right-6 z-10">
              <h3 className="font-headline text-3xl font-extrabold text-white leading-tight tracking-tight mb-2 drop-shadow-md">
                Chase the Match
              </h3>
              <span className="text-xs font-mono-tech text-emerald-300 font-semibold">Real-time Football Telemetry</span>
            </div>
          </div>

          {/* Card 5: Light Modern White Glass Architecture (2 Cols Wide) */}
          <div
            onMouseEnter={() => setActiveCard(5)}
            onMouseLeave={() => setActiveCard(null)}
            className="lg:col-span-2 relative h-[420px] sm:h-[480px] rounded-none overflow-hidden border border-white/15 group cursor-pointer shadow-2xl bg-slate-800"
          >
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
              alt="LEGORA Legal Tech Light Glass Architecture Showcase"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20 group-hover:from-slate-950/95 transition-all duration-300"></div>

            {/* Top Header Bar */}
            <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-xs font-mono-tech text-white/90 z-10">
              <span className="font-headline font-bold text-base tracking-widest text-white drop-shadow-md">
                LEGORA
              </span>
              <div className="hidden md:flex items-center gap-6 text-[11px] text-slate-200">
                <span>Product</span>
                <span>Solutions</span>
                <span>Reports</span>
                <span>Customers</span>
                <span>Company</span>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 z-10">
              <div>
                <h3 className="font-headline text-3xl sm:text-4xl font-serif text-white mb-2 leading-tight drop-shadow-md">
                  Law just got more attractive.
                </h3>
                <p className="text-xs font-mono-tech text-slate-200 max-w-sm">
                  Elevated legal intelligence & automated workflow suites for modern law firms.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-mono-tech text-xs font-bold transition-colors shadow-xl"
              >
                <span>Book a Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 6: Light Finance Office Interior (1 Col Wide) */}
          <div
            onMouseEnter={() => setActiveCard(6)}
            onMouseLeave={() => setActiveCard(null)}
            className="lg:col-span-1 relative h-[420px] sm:h-[480px] rounded-none overflow-hidden border border-white/15 group cursor-pointer shadow-2xl bg-slate-800"
          >
            <img
              src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800&q=80"
              alt="Rogo Finance Light Office Showcase"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/20 group-hover:from-slate-950/95 transition-all duration-300"></div>

            {/* Top Logo */}
            <div className="absolute top-5 left-5 flex items-center justify-between right-5 z-10">
              <span className="font-headline font-bold text-xl tracking-wider text-white drop-shadow-md">
                rogo
              </span>
              <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded-none bg-slate-900/80 border border-white/20 text-slate-200 shadow-md">
                FINANCE
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6 text-left space-y-3 z-10">
              <h3 className="font-headline text-xl font-bold text-white leading-tight drop-shadow-md">
                For the most ambitious firms in finance
              </h3>
              <p className="text-[11px] font-sans text-slate-200 leading-snug">
                Rogo is the trusted AI partner to the world's leading financial institutions.
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-white/20 text-[10px] font-mono-tech text-slate-300">
                <span>MAURA</span>
                <span>|</span>
                <span>Rothschild & Co</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
