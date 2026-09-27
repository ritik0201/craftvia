"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const COLOR_NAV_BG = "rgba(26, 29, 41, 0.96)";
const COLOR_PANEL_BG = "rgb(35, 35, 37)";

const layoutSpring = { type: "spring" as const, bounce: 0.15, duration: 0.45 };

// Underline hover link matching screenshot
interface FlowLinkProps {
  label: string;
  href: string;
  isActive?: boolean;
  activeColor?: string;
  hoverLineColor?: string;
  onClick?: () => void;
}

function FlowLink({
  label,
  href,
  isActive = false,
  activeColor = "#1E5631",
  hoverLineColor = "#ffffff",
  onClick,
}: FlowLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="no-underline block group text-left"
    >
      <motion.div
        initial="initial"
        whileHover="hover"
        className="flex flex-col items-start gap-0.5 py-0.5 cursor-pointer overflow-hidden w-max"
      >
        <span
          className={`font-sans text-2xl sm:text-3xl font-normal tracking-tight transition-colors duration-200 ${
            isActive ? "font-medium" : "text-[#eeeeee] group-hover:text-white"
          }`}
          style={{ color: isActive ? activeColor : undefined }}
        >
          {label}
        </span>
        <div className="w-full h-[2px] relative overflow-hidden">
          <motion.div
            variants={{
              initial: { width: isActive ? "100%" : "0%", left: isActive ? 0 : -10 },
              hover: { width: "100%", left: 0 },
            }}
            transition={layoutSpring}
            className="absolute top-0 bottom-0"
            style={{ backgroundColor: isActive ? activeColor : hoverLineColor }}
          />
        </div>
      </motion.div>
    </a>
  );
}

// 8 Image Grid for "LATEST WORK" matching exact screenshot
const WORK_GRID_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
    alt: "Team Collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80",
    alt: "Product Design",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80",
    alt: "Global Conference",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
    alt: "Development Sprint",
  },
  {
    src: "https://images.unsplash.com/photo-1542744801-43245f100e04?auto=format&fit=crop&w=400&q=80",
    alt: "Analytics Dashboard",
  },
  {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
    alt: "Client Pitch",
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    alt: "Engineering Strategy",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    alt: "Cloud Infrastructure",
  },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Form state
  const [contactSubject, setContactSubject] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("submitting");
    setTimeout(() => {
      setSubmitStatus("success");
    }, 1000);
  };

  return (
    <>
      {/* Top Floating Glass Pill Header */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <nav className="pointer-events-auto w-full max-w-[1360px] flex flex-col items-center relative">
          <motion.div
            layout
            transition={layoutSpring}
            style={{
              width: open ? "100%" : isMobile ? "100%" : "680px",
              backgroundColor: COLOR_NAV_BG,
              borderRadius: open ? 24 : 18,
            }}
            className="backdrop-blur-xl border border-white/10 p-2 shadow-2xl overflow-hidden text-white transition-all duration-300"
          >
            {/* Top Bar Row (Matching Exact Reference Screenshot + Theme Switcher) */}
            <motion.div
              layout="position"
              transition={layoutSpring}
              className="flex items-center justify-between w-full px-1 py-0.5"
            >
              {/* Left Button: Contact */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsContactOpen(true)}
                className="bg-[#232325] hover:bg-[#2d2d30] text-white px-5 py-2.5 rounded-xl font-sans text-sm font-semibold tracking-wide transition-colors cursor-pointer border border-white/5"
              >
                Contact
              </motion.button>

              {/* Center Logo: MasterVia / Craftvia with Green Dot */}
              <a
                href="#"
                className="flex items-center gap-1.5 group cursor-pointer px-2"
              >
                <span className="font-serif text-2xl font-bold tracking-tight text-white group-hover:text-slate-200 transition-colors">
                  Craftvia
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#1E5631] dark:bg-emerald-400 inline-block shadow-sm shadow-emerald-400/50" />
              </a>

              {/* Right Controls: Theme Toggle + Menu Button */}
              <div className="flex items-center gap-2">
                {/* Theme Toggle Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleTheme}
                  aria-label="Toggle light/dark mode"
                  className="bg-[#232325] hover:bg-[#2d2d30] text-white p-2.5 rounded-xl transition-colors cursor-pointer border border-white/5 flex items-center justify-center"
                  title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                >
                  {theme === "light" ? (
                    <Moon className="w-4 h-4 text-violet-400" />
                  ) : (
                    <Sun className="w-4 h-4 text-amber-400" />
                  )}
                </motion.button>

                {/* Right Button: Menu ≡ / Close ✕ */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setOpen(!open)}
                  className="bg-[#232325] hover:bg-[#2d2d30] text-white px-5 py-2.5 rounded-xl font-sans text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer border border-white/5"
                >
                  <span>{open ? "Close" : "Menu"}</span>
                  <div className="w-4 h-4 flex items-center justify-center">
                    {open ? (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    ) : (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                      </svg>
                    )}
                  </div>
                </motion.button>
              </div>
            </motion.div>

            {/* Expanding FlowMenu Content Panels (Matching Reference Image) */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={layoutSpring}
                  className="mt-3 pt-3 border-t border-white/10 px-1 pb-1 w-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 w-full">
                    {/* Panel 1: SITE MAP (Left 4 cols) */}
                    <div className="md:col-span-4 p-6 bg-[#232325] border border-white/5 rounded-2xl flex flex-col justify-between">
                      <div>
                        <span className="font-mono-tech text-xs text-[#f69dc8] uppercase tracking-wider font-bold block mb-4">
                          SITE MAP
                        </span>
                        <div className="flex flex-col gap-1">
                          <FlowLink
                            label="Home"
                            href="#"
                            isActive={true}
                            activeColor="#22c55e"
                            onClick={() => setOpen(false)}
                          />
                          <FlowLink
                            label="Services"
                            href="#services"
                            onClick={() => setOpen(false)}
                          />
                          <FlowLink
                            label="About us"
                            href="#why-us"
                            onClick={() => setOpen(false)}
                          />
                          <FlowLink
                            label="Industries"
                            href="#services"
                            onClick={() => setOpen(false)}
                          />
                          <FlowLink
                            label="Languages"
                            href="#calculator"
                            onClick={() => setOpen(false)}
                          />
                          <FlowLink
                            label="Careers"
                            href="#contact"
                            onClick={() => setOpen(false)}
                          />
                          <FlowLink
                            label="FAQ"
                            href="#how-it-works"
                            onClick={() => setOpen(false)}
                          />
                          <FlowLink
                            label="Contact"
                            href="#contact"
                            onClick={() => setOpen(false)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Panel 2: SOCIALS (Center 4 cols) */}
                    <div className="md:col-span-4 p-6 bg-[#232325] border border-white/5 rounded-2xl flex flex-col justify-between">
                      <div>
                        <span className="font-mono-tech text-xs text-[#6be4df] uppercase tracking-wider font-bold block mb-4">
                          SOCIALS
                        </span>
                        <div className="flex flex-col gap-1.5">
                          <FlowLink
                            label="LinkedIn"
                            href="https://linkedin.com"
                            hoverLineColor="#6be4df"
                          />
                          <FlowLink
                            label="X (Twitter)"
                            href="https://x.com"
                            hoverLineColor="#6be4df"
                          />
                          <FlowLink
                            label="Instagram"
                            href="https://instagram.com"
                            hoverLineColor="#6be4df"
                          />
                          <FlowLink
                            label="Facebook"
                            href="https://facebook.com"
                            hoverLineColor="#6be4df"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Panel 3: LATEST WORK (Right 4 cols - 2 Column Image Grid matching screenshot) */}
                    <div className="md:col-span-4 p-6 bg-[#232325] border border-white/5 rounded-2xl flex flex-col justify-between">
                      <div>
                        <span className="font-mono-tech text-xs text-[#767ee1] uppercase tracking-wider font-bold block mb-4">
                          LATEST WORK
                        </span>
                        <div className="grid grid-cols-2 gap-2 max-h-[360px] overflow-y-auto no-scrollbar pr-1">
                          {WORK_GRID_IMAGES.map((img, index) => (
                            <a
                              key={index}
                              href="#work"
                              onClick={() => setOpen(false)}
                              className="group relative h-20 rounded-lg overflow-hidden border border-white/10 block"
                            >
                              <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-1.5">
                                <span className="text-[10px] font-mono-tech text-white truncate">
                                  {img.alt}
                                </span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </nav>
      </header>

      {/* Left Contact Side Drawer Overlay (Matching MasterVia Reference) */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex justify-start bg-black/75 backdrop-blur-md overflow-hidden"
            onClick={() => setIsContactOpen(false)}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0.05, duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg h-screen max-h-screen bg-[#232325] border-r border-white/10 text-white shadow-2xl relative overflow-y-auto"
            >
              {/* Sticky Close Button */}
              <div className="sticky top-0 z-20 flex justify-end p-4 sm:p-6 bg-gradient-to-b from-[#232325] via-[#232325]/90 to-transparent pointer-events-none">
                <button
                  onClick={() => setIsContactOpen(false)}
                  className="pointer-events-auto text-white hover:opacity-75 transition-opacity cursor-pointer p-2 rounded-full hover:bg-white/10 bg-[#232325]/80 backdrop-blur-sm border border-white/10"
                  aria-label="Close Contact Overlay"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Form Content */}
              <div className="px-6 sm:px-8 pb-12 pt-16 sm:pt-20 flex flex-col justify-end min-h-[calc(100vh-80px)]">
                <h2 className="text-3xl sm:text-4xl font-headline font-black text-white tracking-tight uppercase mb-5 pr-8">
                  HELLO!!!
                </h2>

                {submitStatus === "success" ? (
                  <div className="py-8 text-center flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#6be4df]/20 text-[#6be4df] flex items-center justify-center border border-[#6be4df]/30">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                    <p className="text-sm text-white/80 max-w-xs">
                      Thank you! Our engineering team will review your message and reply within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    {/* Old-School Email Box */}
                    <div className="bg-[#EBEBEB] text-[#1A1D29] p-4 rounded-xl text-sm sm:text-base font-normal leading-relaxed border border-black/5">
                      Welcome to our little corner. Prefer the old-school way? You can always drop us a line directly at:{" "}
                      <a
                        href="mailto:hello@craftvia.tech"
                        className="font-semibold underline hover:text-[#1E5631]"
                      >
                        hello@craftvia.tech
                      </a>
                    </div>

                    {/* Question Prompt Box */}
                    <div className="bg-[#EBEBEB] text-[#1A1D29] p-4 rounded-xl text-sm sm:text-base font-medium border border-black/5">
                      What would you like to talk about?
                    </div>

                    {/* Select Dropdown */}
                    <div>
                      <select
                        value={contactSubject}
                        onChange={(e) => setContactSubject(e.target.value)}
                        required
                        className="w-full bg-[#EBEBEB] text-[#1A1D29] p-4 rounded-xl text-sm sm:text-base font-medium border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#1E5631] cursor-pointer"
                      >
                        <option value="">Select...</option>
                        <option value="Custom Web App">Custom Next.js Web Application</option>
                        <option value="AI Integration & RAG">AI Vector Pipeline & Gemini Integration</option>
                        <option value="E-Commerce Storefront">Headless E-Commerce Storefront</option>
                        <option value="General Consultation">General Consultation & Architecture Audit</option>
                      </select>
                    </div>

                    {/* Name Input */}
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full bg-[#EBEBEB] text-[#1A1D29] placeholder-[#1A1D29]/60 p-4 rounded-xl text-sm sm:text-base font-medium border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#1E5631]"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Your Email *"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full bg-[#EBEBEB] text-[#1A1D29] placeholder-[#1A1D29]/60 p-4 rounded-xl text-sm sm:text-base font-medium border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#1E5631]"
                      />
                    </div>

                    {/* Message Input */}
                    <div>
                      <textarea
                        rows={3}
                        placeholder="Your Message..."
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        className="w-full bg-[#EBEBEB] text-[#1A1D29] placeholder-[#1A1D29]/60 p-4 rounded-xl text-sm sm:text-base font-medium border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#1E5631] resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitStatus === "submitting"}
                      className="w-full bg-[#1A1D29] hover:bg-[#1E5631] text-white font-bold tracking-wider uppercase p-4 rounded-xl text-sm sm:text-base transition-colors shadow-lg cursor-pointer disabled:opacity-50 mt-2"
                    >
                      {submitStatus === "submitting"
                        ? "Sending Message..."
                        : "SEND MESSAGE"}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
