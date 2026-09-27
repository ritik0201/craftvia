"use client";

import React, { useState } from "react";
import { MessageSquare, Sparkles, Send, CheckCircle2, User, Cpu } from "lucide-react";

export default function KaiAvatarSection() {
  const [userPrompt, setUserPrompt] = useState("");
  const [messages, setMessages] = useState<
    { sender: "user" | "kai"; text: string }[]
  >([
    {
      sender: "kai",
      text: "Hey! I'm Kai, your lead product architect at Craftvia. Tell me about your app or website concept, and I'll lay out the ideal tech stack and timeline for you right now.",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userPrompt.trim()) return;

    const current = userPrompt;
    setMessages((prev) => [...prev, { sender: "user", text: current }]);
    setUserPrompt("");
    setIsTyping(true);

    setTimeout(() => {
      let reply =
        "That sounds like an exciting project! For this scope, I'd recommend a Next.js 15 App Router frontend paired with Tailwind CSS, a Supabase PostgreSQL backend, and Vercel Edge deployment. We could ship a v1 MVP in approximately 12 business days.";
      if (current.toLowerCase().includes("ai")) {
        reply =
          "Awesome idea! Integrating AI here would be super straightforward. We can deploy a custom Gemini RAG pipeline using vector embeddings. This will allow your app to answer complex queries with sub-200ms latency.";
      } else if (current.toLowerCase().includes("ecommerce") || current.toLowerCase().includes("shop")) {
        reply =
          "For an e-commerce platform, we'd build a headless Next.js storefront powered by Shopify Storefront API or Stripe. This will give you instant mobile page loads and a 30%+ boost in checkout conversion!";
      }

      setMessages((prev) => [...prev, { sender: "kai", text: reply }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <section className="w-full py-24 bg-[#faf8ff] dark:bg-[#090e1a] border-b border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden transition-colors duration-300">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#6e5ef5]/10 dark:bg-[#6e5ef5]/15 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Title Bar */}
        <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col items-center">
          <span className="font-mono-tech text-xs text-[#5542db] dark:text-[#c6c0ff] font-semibold tracking-wider uppercase mb-3 px-3.5 py-1 rounded-full bg-[#e4dfff]/60 dark:bg-[#201c47] border border-[#c6c0ff] dark:border-[#5542db]/40 inline-flex items-center gap-1.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-violet-500" /> AI STUDIO CONSULTANT
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Meet Kai, Your Digital Product Architect.
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Get instant architecture recommendations and tech stack timelines directly from our AI Host.
          </p>
        </div>

        {/* Symmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Kai Profile Card */}
          <div className="lg:col-span-5 bg-white dark:bg-[#151d30] p-8 rounded-none border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between items-center text-center relative overflow-hidden h-full min-h-[520px]">
            
            {/* Top Badge Bar */}
            <div className="w-full flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono-tech font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>ONLINE NOW</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-none bg-[#a2eeff]/60 dark:bg-[#00515d]/50 text-[#004e5a] dark:text-[#5de6ff] text-xs font-mono-tech font-semibold border border-[#2fd9f4] dark:border-[#006877]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>3D Studio Host</span>
              </div>
            </div>

            {/* Profile Avatar & Info */}
            <div className="my-auto py-6 flex flex-col items-center">
              <div className="relative w-40 h-40 rounded-none p-1.5 bg-gradient-to-tr from-[#6e5ef5] via-[#006877] to-[#006a48] mb-5 shadow-lg group">
                <img
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XYN-_gt4Mn5rYVmdP5W0T9_vlfpxgvFte_sJtLYbh2iQVmTifhmpyMTBpvNRNJBNR3OJGcfoQkxpCkZncneAvHp1vTx856vvj4QY3RftYm1AuspX549e9HrFq4kZhY8ZeV5tsQ11bFuLAJb4LMP-y1eEBe28n5yzRkR6v1_qGY9mPAuA-ZvDmHxAr1ibl-07KytINPdJC_3YWhtZnkJSNoklP_1YeUkJtcIl5J7B6YXoDDsPg6bXrr1bAF"
                  alt="Kai — 3D Host for Craftvia Studio"
                  className="w-full h-full object-cover rounded-none"
                />
              </div>

              <h3 className="font-headline text-2xl font-bold text-slate-900 dark:text-white mb-1">
                Kai
              </h3>
              <p className="text-xs font-mono-tech text-[#5542db] dark:text-[#c6c0ff] font-semibold mb-3">
                Lead Digital Product Architect
              </p>
              <p className="text-xs sm:text-sm font-sans text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm">
                Specialized in high-performance web applications, modern UI frameworks, and real-time AI automation pipelines.
              </p>
            </div>

            {/* Bottom Badges */}
            <div className="w-full pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-3 text-xs font-mono-tech text-slate-700 dark:text-slate-300">
              <div className="p-3 rounded-none bg-slate-50 dark:bg-[#1a233a] border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#006a48] dark:text-[#45dfa4]" />
                <span className="font-semibold">100% In-House</span>
              </div>
              <div className="p-3 rounded-none bg-slate-50 dark:bg-[#1a233a] border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2">
                <Cpu className="w-4 h-4 text-[#5542db] dark:text-[#c6c0ff]" />
                <span className="font-semibold">AI Native</span>
              </div>
            </div>

          </div>

          {/* Right Live Consultation Chat Console */}
          <div className="lg:col-span-7 bg-white dark:bg-[#151d30] rounded-none border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl flex flex-col justify-between h-full min-h-[520px]">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-[#e4dfff] dark:bg-[#5542db]/20 border border-[#c6c0ff] dark:border-[#5542db]/40 flex items-center justify-center text-[#5542db] dark:text-[#c6c0ff] shadow-xs">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                    Ask Kai — Instant Architecture Advice
                  </h4>
                  <span className="text-xs font-mono-tech text-slate-500 dark:text-slate-400">
                    AI Copilot Trained on Craftvia Engineering Standards
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-mono-tech text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 rounded-none border border-emerald-300 dark:border-emerald-800 font-bold tracking-wider">
                ACTIVE
              </span>
            </div>

            {/* Chat Messages Stream */}
            <div className="flex-1 overflow-y-auto my-5 space-y-4 pr-1">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-3 text-sm ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "kai" && (
                    <div className="w-8 h-8 rounded-none bg-[#5542db] flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm">
                      K
                    </div>
                  )}
                  <div
                    className={`p-4 rounded-none max-w-lg font-sans text-xs sm:text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#6e5ef5] text-white shadow-sm font-medium"
                        : "bg-slate-100 dark:bg-[#1a233a] border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.sender === "user" && (
                    <div className="w-8 h-8 rounded-none bg-slate-800 dark:bg-slate-700 flex items-center justify-center text-white text-xs shrink-0 shadow-sm">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#006877] dark:text-[#5de6ff] bg-slate-100 dark:bg-[#1a233a] p-3 rounded-none w-fit border border-slate-200 dark:border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-[#006877] dark:bg-[#5de6ff] animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-[#006877] dark:bg-[#5de6ff] animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#006877] dark:bg-[#5de6ff] animate-bounce [animation-delay:0.4s]"></span>
                  <span className="ml-1 font-semibold">Kai is analyzing architecture...</span>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="flex gap-2 pt-2">
              <input
                type="text"
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="Ask Kai e.g., 'What tech stack is best for my SaaS MVP?'..."
                className="flex-1 h-12 px-4 rounded-none bg-slate-50 dark:bg-[#1a233a] border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-sans text-xs sm:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#6e5ef5] focus:ring-1 focus:ring-[#6e5ef5] transition-all"
              />
              <button
                type="submit"
                className="h-12 px-6 rounded-none bg-[#6e5ef5] hover:bg-[#5644dc] text-white font-mono-tech text-xs font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer shrink-0"
              >
                <span>Ask</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>

        </div>
      </div>
    </section>
  );
}
