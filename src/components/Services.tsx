"use client";

import React, { useState } from "react";
import {
  Globe,
  RefreshCw,
  Smartphone,
  Brain,
  ArrowRight,
  CheckCircle2,
  X,
  Zap,
} from "lucide-react";

interface ServiceDetail {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  textColor: string;
  fullDetails: string;
  techStack: string[];
  timeline: string;
  deliverables: string[];
}

const servicesData: ServiceDetail[] = [
  {
    id: "new-website",
    title: "New Website Development",
    badge: "Next.js & Tailwind",
    description: "High-speed, conversion-focused websites built on modern frameworks.",
    icon: <Globe className="w-6 h-6 text-[#5542db]" />,
    iconBg: "bg-[#e4dfff]",
    textColor: "text-[#3d23c4] font-medium",
    fullDetails:
      "We design and engineer bespoke web platforms with Next.js App Router, Tailwind CSS, and headless CMS integrations. Built for maximum speed, accessibility, and SEO ranking.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Sanity / Strapi CMS", "Framer Motion"],
    timeline: "7–14 Days",
    deliverables: [
      "Custom responsive design system",
      "SEO & OpenGraph tags optimized",
      "Core Web Vitals 95+ guarantee",
      "Content Management System setup",
    ],
  },
  {
    id: "modernization",
    title: "Website Modernization",
    badge: "Old → Modern Stack",
    description: "Transform legacy sites into lightning-fast, mobile-first web experiences.",
    icon: <RefreshCw className="w-6 h-6 text-[#006877]" />,
    iconBg: "bg-[#a2eeff]",
    textColor: "text-[#004e5a] font-medium",
    fullDetails:
      "Is your website sluggish or hard to update? We migrate outdated WordPress, jQuery, or custom legacy monoliths into lightweight, secure modern web apps.",
    techStack: ["React 19", "Vite / Next.js", "Edge Middleware", "Modern CSS", "Zero-Downtime Migration"],
    timeline: "10–18 Days",
    deliverables: [
      "Complete code refactoring & speed upgrade",
      "Mobile-first responsive optimization",
      "Data & URL redirect preservation",
      "Automated deployment pipeline",
    ],
  },
  {
    id: "custom-apps",
    title: "Custom App Development",
    badge: "iOS, Android & Web",
    description: "Intuitive web and mobile apps engineered for seamless everyday workflows.",
    icon: <Smartphone className="w-6 h-6 text-[#5542db]" />,
    iconBg: "bg-[#e4dfff]",
    textColor: "text-[#3d23c4] font-medium",
    fullDetails:
      "From SaaS MVPs to customer portals and internal tools, we create scalable web and cross-platform mobile apps with real-time database synching.",
    techStack: ["React Native / Expo", "Node.js / Express", "PostgreSQL / Supabase", "Prisma ORM", "Stripe API"],
    timeline: "2–4 Weeks",
    deliverables: [
      "Full stack App Architecture",
      "User Authentication & Roles",
      "Payment & Subscription integration",
      "App Store & Web Deployment",
    ],
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    badge: "Smart Automation",
    description: "Practical AI copilots, customer bots, and automated smart pipelines.",
    icon: <Brain className="w-6 h-6 text-[#006a48]" />,
    iconBg: "bg-[#6ffbbe]/60",
    textColor: "text-[#005137] font-medium",
    fullDetails:
      "Empower your platform with intelligent AI capabilities. We integrate custom LLM workflows, automated document processing, and RAG chatbots tailored to your business data.",
    techStack: ["Gemini AI SDK", "OpenAI / Anthropic APIs", "LangChain / LlamaIndex", "Vector DB (Pinecone)", "Python / FastAPI"],
    timeline: "7–14 Days",
    deliverables: [
      "Custom RAG Knowledge Base setup",
      "Intelligent Chatbot & Support Agent",
      "Automated Data extraction pipeline",
      "API Rate limit & Security controls",
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#f3f2ff]/60 via-[#faf9f6] to-[#f3f2ff]/40 dark:from-[#0f172a] dark:via-[#0c1324] dark:to-[#0f172a] border-b border-slate-200/60 dark:border-slate-800/60 relative transition-colors duration-300" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-16 flex flex-col items-center">
          <span className="font-mono-tech text-xs text-[#150066] dark:text-[#c6c0ff] font-semibold tracking-wider uppercase mb-4 px-4 py-1.5 rounded-none bg-white dark:bg-[#1e273e] border border-slate-200 dark:border-slate-700 shadow-xs">
            WHAT WE DO
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Four pillars. Complete digital execution.
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal">
            Tailored solutions designed to make modern technology effortless for your team.
          </p>
        </div>

        {/* Seamless Rimless Service Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer flex flex-col justify-between p-8 rounded-none bg-white/80 dark:bg-[#151d30]/80 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/70 shadow-sm hover:shadow-xl hover:border-violet-400/50 dark:hover:border-violet-500/50 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div>
                <div className={`w-12 h-12 rounded-none ${service.iconBg} dark:bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xs`}>
                  {service.icon}
                </div>
                <h3 className="font-headline text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#5542db] dark:group-hover:text-[#c6c0ff] transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2.5 mt-auto">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-none bg-slate-100 dark:bg-slate-800 text-[11px] font-mono-tech ${service.textColor} dark:text-slate-200 whitespace-nowrap shrink-0`}>
                  {service.badge}
                </span>
                <span className="text-xs font-mono-tech text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white flex items-center gap-1 font-semibold whitespace-nowrap shrink-0">
                  View Specs <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#5542db] dark:text-[#c6c0ff]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Specifications Drawer / Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#151d30] border border-slate-200 dark:border-slate-800 rounded-none p-6 sm:p-8 max-w-2xl w-full relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-none bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-none ${selectedService.iconBg} dark:bg-opacity-20 flex items-center justify-center`}>
                {selectedService.icon}
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedService.title}
                </h3>
                <span className="text-xs font-mono-tech text-[#006877] dark:text-[#5de6ff] font-semibold">
                  Estimated Delivery: {selectedService.timeline}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-[#1a233a] p-4 rounded-none border border-slate-200/80 dark:border-slate-800">
              {selectedService.fullDetails}
            </p>

            <div>
              <h4 className="text-xs font-mono-tech text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5 font-semibold">
                <Zap className="w-4 h-4 text-[#5542db] dark:text-[#c6c0ff]" /> Core Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-none bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono-tech text-slate-800 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono-tech text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 font-semibold">
                Included Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-slate-700 dark:text-slate-300">
                {selectedService.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#006a48] dark:text-[#45dfa4] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-mono-tech text-slate-500 dark:text-slate-400">
                Transparent Fixed Pricing
              </span>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-none bg-[#6e5ef5] hover:bg-[#5644dc] text-white text-xs font-mono-tech font-semibold shadow-md transition-all"
              >
                <span>Book Scoping Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
