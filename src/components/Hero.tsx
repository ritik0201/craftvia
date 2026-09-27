"use client";

import React, { useState } from "react";

interface NodeData {
  id: string;
  name: string;
  description: string;
  category: string;
  count: string;
}

export default function Hero() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodeDetails: Record<string, NodeData> = {
    gsheets: {
      id: "gsheets",
      name: "Google Sheets",
      category: "Intake Data",
      description: "Auto-sync raw survey data & user responses.",
      count: "1,420 rows synced",
    },
    discord: {
      id: "discord",
      name: "Discord",
      category: "Field Notes",
      description: "Stream live feedback channels & stakeholder voice clips.",
      count: "84 active threads",
    },
    figma: {
      id: "figma",
      name: "Figma",
      category: "Design System",
      description: "Pull component specs, wireframes, and design tokens.",
      count: "320 components linked",
    },
    github: {
      id: "github",
      name: "GitHub",
      category: "Code Commits",
      description: "Link PRs and issue trackers directly to research briefs.",
      count: "48 PRs referenced",
    },
    gdrive: {
      id: "gdrive",
      name: "Google Drive",
      category: "Asset Archive",
      description: "Index video interviews, PDFs, and raw transcriptions.",
      count: "2.4 GB indexed",
    },
    notion: {
      id: "notion",
      name: "Notion",
      category: "Knowledge Base",
      description: "Publish finalized briefs to product team workspaces.",
      count: "14 briefs published",
    },
    dropbox: {
      id: "dropbox",
      name: "Dropbox",
      category: "Media Storage",
      description: "High-res user study screen recordings and assets.",
      count: "95 files stored",
    },
    linear: {
      id: "linear",
      name: "Linear",
      category: "Issue Tracking",
      description: "Convert research insights into actionable engineering tasks.",
      count: "62 tickets created",
    },
    central: {
      id: "central",
      name: "Central Sync Hub",
      category: "AI Processing",
      description: "Real-time cross-platform synthesis & insight indexing.",
      count: "Active (0ms latency)",
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#faf9f6] dark:bg-[#0c1324] pt-28 pb-20 lg:pt-36 lg:pb-28 transition-colors duration-300">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-500/5 dark:bg-blue-600/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Main Headline */}
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white max-w-4xl leading-[1.12] mb-6">
          Keep finished research on a desk the brief can open
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-10 leading-relaxed font-normal">
          Folio files interviews, tickets, and field notes. Writers and PMs pull from the same stack instead of booking the study again.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-16 sm:mb-20">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-none bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200"
          >
            Start a collection
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-none bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-semibold text-sm shadow-xs hover:border-slate-300 transition-all duration-200"
          >
            See how it works
          </a>
        </div>

        {/* Interactive Diagram Canvas */}
        <div className="w-full max-w-4xl relative py-8 px-2 sm:px-6">
          {/* Floating Hover Tooltip */}
          {hoveredNode && nodeDetails[hoveredNode] && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full bg-slate-900 dark:bg-slate-800 text-white px-4 py-2.5 rounded-none shadow-xl border border-slate-700/60 text-xs font-mono-tech flex items-center gap-3 z-40 transition-all animate-in fade-in zoom-in-95 duration-150">
              <span className="w-2.5 h-2.5 rounded-none bg-blue-400 animate-pulse" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-blue-300 text-sm">{nodeDetails[hoveredNode].name}</span>
                  <span className="text-slate-400 text-[10px] uppercase font-semibold bg-slate-800 dark:bg-slate-700 px-2 py-0.5 rounded-none">
                    {nodeDetails[hoveredNode].category}
                  </span>
                </div>
                <span className="block text-slate-300 text-xs mt-0.5">{nodeDetails[hoveredNode].description}</span>
              </div>
            </div>
          )}

          {/* Diagram Container */}
          <div className="relative w-full h-[360px] sm:h-[400px] flex items-center justify-center select-none">
            
            {/* SVG Connecting Lines - Originating directly from the center '=' logo */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 900 400"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* 
                Center Logo '=' is at (450, 220)
                Upper Horizontal Bar at y=110
              */}

              {/* 1. VERTICAL LINE FROM TOP OF CENTER LOGO (450, 190) UP TO UPPER BAR (450, 110) */}
              <line
                x1="450"
                y1="190"
                x2="450"
                y2="110"
                className="stroke-slate-300 dark:stroke-slate-700"
                strokeWidth="4"
              />

              {/* 2. UPPER HORIZONTAL BAR (from x=220 to x=680 at y=110) */}
              <line
                x1="220"
                y1="110"
                x2="680"
                y2="110"
                className="stroke-slate-300 dark:stroke-slate-700"
                strokeWidth="4"
              />

              {/* 3. LEFT HORIZONTAL LINE FROM LEFT SIDE OF CENTER LOGO (420, 220) OUT TO DISCORD (140, 220) */}
              <line
                x1="420"
                y1="220"
                x2="140"
                y2="220"
                className="stroke-slate-300 dark:stroke-slate-700"
                strokeWidth="4"
              />

              {/* 4. RIGHT HORIZONTAL LINE FROM RIGHT SIDE OF CENTER LOGO (480, 220) OUT TO NOTION (760, 220) */}
              <line
                x1="480"
                y1="220"
                x2="760"
                y2="220"
                className="stroke-slate-300 dark:stroke-slate-700"
                strokeWidth="4"
              />

              {/* 5. TOP-LEFT VERTICAL LINE: From Upper Bar (220, 110) UP to Google Sheets (220, 45) */}
              <line
                x1="220"
                y1="110"
                x2="220"
                y2="45"
                className="stroke-slate-300 dark:stroke-slate-700"
                strokeWidth="4"
              />

              {/* 6. BOTTOM-LEFT VERTICAL BRANCH: From Left Horizontal Line (260, 220) DOWN to Figma/GitHub (260, 350) */}
              <line
                x1="260"
                y1="220"
                x2="260"
                y2="350"
                className="stroke-slate-300 dark:stroke-slate-700"
                strokeWidth="4"
              />
              {/* Branch to GitHub at (210, 350) */}
              <line
                x1="260"
                y1="350"
                x2="210"
                y2="350"
                className="stroke-slate-300 dark:stroke-slate-700"
                strokeWidth="4"
              />

              {/* 7. TOP-RIGHT VERTICAL LINE: From Upper Bar (680, 110) UP to Google Drive (680, 45) */}
              <line
                x1="680"
                y1="110"
                x2="680"
                y2="45"
                className="stroke-slate-300 dark:stroke-slate-700"
                strokeWidth="4"
              />

              {/* 8. BOTTOM-RIGHT VERTICAL BRANCH: From Right Horizontal Line (640, 220) DOWN to Dropbox/Linear (640, 350) */}
              <line
                x1="640"
                y1="220"
                x2="640"
                y2="350"
                className="stroke-slate-300 dark:stroke-slate-700"
                strokeWidth="4"
              />
              {/* Branch to Linear at (690, 350) */}
              <line
                x1="640"
                y1="350"
                x2="690"
                y2="350"
                className="stroke-slate-300 dark:stroke-slate-700"
                strokeWidth="4"
              />
            </svg>

            {/* LABELED MILESTONE BADGES */}
            {/* Labeled Badge: "Intake" */}
            <div className="absolute top-[110px] left-[37.5%] -translate-x-1/2 -translate-y-1/2 z-10">
              <span className="px-3 py-1 rounded-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs text-[11px] font-medium text-slate-600 dark:text-slate-300">
                Intake
              </span>
            </div>

            {/* Labeled Badge: "Archive" */}
            <div className="absolute top-[110px] left-[62.5%] -translate-x-1/2 -translate-y-1/2 z-10">
              <span className="px-3 py-1 rounded-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs text-[11px] font-medium text-slate-600 dark:text-slate-300">
                Archive
              </span>
            </div>

            {/* SUB-ANNOTATION TEXT LABELS */}
            <div className="absolute bottom-[115px] left-[34%] -translate-x-1/2 text-[11px] font-sans text-slate-400 dark:text-slate-500 tracking-wide pointer-events-none">
              Fresh from the field
            </div>

            <div className="absolute bottom-[115px] left-[66%] -translate-x-1/2 text-[11px] font-sans text-slate-400 dark:text-slate-500 tracking-wide pointer-events-none">
              Ready for the brief
            </div>

            {/* INTEGRATION TOOL NODES */}

            {/* 1. Google Sheets (Top Left: x=24.4% y=11.25%) */}
            <div
              onMouseEnter={() => setHoveredNode("gsheets")}
              onMouseLeave={() => setHoveredNode(null)}
              className="absolute top-[25px] left-[24.4%] -translate-x-1/2 z-20 group cursor-pointer"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-none bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md group-hover:shadow-xl group-hover:scale-110 group-hover:border-emerald-400 transition-all duration-200 flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="0" fill="#0F9D58" />
                  <path d="M7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" fill="white" />
                </svg>
              </div>
            </div>

            {/* 2. Discord (Far Left Main Horizontal Line: x=15.5% y=55%) */}
            <div
              onMouseEnter={() => setHoveredNode("discord")}
              onMouseLeave={() => setHoveredNode(null)}
              className="absolute top-[196px] left-[15.5%] -translate-x-1/2 z-20 group cursor-pointer"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-none bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md group-hover:shadow-xl group-hover:scale-110 group-hover:border-indigo-400 transition-all duration-200 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.009c.12.098.245.195.372.288a.077.077 0 0 1-.006.128c-.598.344-1.22.642-1.873.893a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
            </div>

            {/* 3. Figma (Bottom Left Branch 1: x=28.8%) */}
            <div
              onMouseEnter={() => setHoveredNode("figma")}
              onMouseLeave={() => setHoveredNode(null)}
              className="absolute bottom-[75px] left-[28.8%] -translate-x-1/2 z-20 group cursor-pointer"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-none bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md group-hover:shadow-xl group-hover:scale-110 group-hover:border-rose-400 transition-all duration-200 flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M8 24c2.21 0 4-1.79 4-4v-4H8c-2.21 0-4 1.79-4 4s1.79 4 4 4z" fill="#0ACF83"/>
                  <path d="M4 12c0-2.21 1.79-4 4-4h4v8H8c-2.21 0-4-1.79-4-4z" fill="#A259FF"/>
                  <path d="M4 4c0-2.21 1.79-4 4-4h4v8H8C5.79 8 4 6.21 4 4z" fill="#F24E1E"/>
                  <path d="M12 0h4c2.21 0 4 1.79 4 4s-1.79 4-4 4h-4V0z" fill="#FF7262"/>
                  <path d="M20 12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" fill="#1ABCFE"/>
                </svg>
              </div>
            </div>

            {/* 4. GitHub (Bottom Left Branch 2: x=23.3%) */}
            <div
              onMouseEnter={() => setHoveredNode("github")}
              onMouseLeave={() => setHoveredNode(null)}
              className="absolute bottom-[25px] left-[23.3%] -translate-x-1/2 z-20 group cursor-pointer"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-none bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md group-hover:shadow-xl group-hover:scale-110 group-hover:border-slate-600 transition-all duration-200 flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
            </div>

            {/* CENTRAL LOGO HUB ('=') - Exact center at x=50% y=55% (220px) */}
            <div
              onMouseEnter={() => setHoveredNode("central")}
              onMouseLeave={() => setHoveredNode(null)}
              className="absolute top-[220px] left-[50%] -translate-x-1/2 -translate-y-1/2 z-30 group cursor-pointer"
            >
              <div className="relative">
                {/* Ambient Pulsing Glow */}
                <div className="absolute -inset-3 rounded-none bg-blue-500/25 dark:bg-blue-400/35 blur-md group-hover:bg-blue-500/50 transition-all duration-300 animate-pulse" />
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-none bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-2xl shadow-blue-500/40 group-hover:scale-110 flex items-center justify-center transition-all duration-200 border border-blue-400/50 relative z-10">
                  <span className="font-bold text-2xl sm:text-3xl tracking-tighter leading-none select-none">
                    =
                  </span>
                </div>
              </div>
            </div>

            {/* 5. Google Drive (Top Right: x=75.5% y=11.25%) */}
            <div
              onMouseEnter={() => setHoveredNode("gdrive")}
              onMouseLeave={() => setHoveredNode(null)}
              className="absolute top-[25px] left-[75.5%] -translate-x-1/2 z-20 group cursor-pointer"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-none bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md group-hover:shadow-xl group-hover:scale-110 group-hover:border-blue-400 transition-all duration-200 flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12.012 3L4 16.89h4.945L16.957 3h-4.945z" fill="#FFBA00" />
                  <path d="M7.055 17.89L3 21h13.91l4.055-3.11H7.055z" fill="#0F9D58" />
                  <path d="M16.957 3l4.055 7-4.945 8.89h-4.945l4.945-8.89-4.055-7h4.945z" fill="#4285F4" />
                </svg>
              </div>
            </div>

            {/* 6. Notion (Far Right Main Horizontal Line: x=84.5% y=55%) */}
            <div
              onMouseEnter={() => setHoveredNode("notion")}
              onMouseLeave={() => setHoveredNode(null)}
              className="absolute top-[196px] left-[84.5%] -translate-x-1/2 z-20 group cursor-pointer"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-none bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md group-hover:shadow-xl group-hover:scale-110 group-hover:border-slate-700 transition-all duration-200 flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.047-.326L17.86 1.782c-.467-.373-1.213-.653-2.286-.56L3.433 2.155c-.467.047-.653.28-.467.56l1.493 1.493zm.56 3.638v14.135c0 .7.373 1.026 1.026 1.026h14.228c.653 0 .933-.42.933-.98V7.472c0-.56-.373-.84-.933-.84H6.045c-.653.047-1.026.373-1.026 1.214zm13.355 1.54c.093.42.047.886-.326 1.119l-5.646 7.604v-7.884c.373-.186.746-.28 1.166-.326l4.806-.513zM8.334 10.229l2.753-.326v7.744l-2.753.326v-7.744z" />
                </svg>
              </div>
            </div>

            {/* 7. Dropbox (Bottom Right Branch 1: x=71.1%) */}
            <div
              onMouseEnter={() => setHoveredNode("dropbox")}
              onMouseLeave={() => setHoveredNode(null)}
              className="absolute bottom-[75px] left-[71.1%] -translate-x-1/2 z-20 group cursor-pointer"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-none bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md group-hover:shadow-xl group-hover:scale-110 group-hover:border-blue-500 transition-all duration-200 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#0061FF]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 2l6 3.75L6 9.5 0 5.75 6 2zm12 0l6 3.75-6 3.75-6-3.75L18 2zM0 13.25l6-3.75 6 3.75-6 3.75-6-3.75zm24 0l-6-3.75-6 3.75 6 3.75 6-3.75zM6 18.25l6-3.75 6 3.75-6 3.75-6-3.75z" />
                </svg>
              </div>
            </div>

            {/* 8. Linear (Bottom Right Branch 2: x=76.6%) */}
            <div
              onMouseEnter={() => setHoveredNode("linear")}
              onMouseLeave={() => setHoveredNode(null)}
              className="absolute bottom-[25px] left-[76.6%] -translate-x-1/2 z-20 group cursor-pointer"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-none bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md group-hover:shadow-xl group-hover:scale-110 group-hover:border-purple-500 transition-all duration-200 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 12a9 9 0 1018 0 9 9 0 00-18 0zm9-6a6 6 0 110 12 6 6 0 010-12z" />
                </svg>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
