"use client";

import React from "react";
import { ExpandableSpeedDial, SpeedDialAction } from "@/components/lightswind/expandable-speed-dial";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Calculator, MessageSquare, Send, ArrowUp } from "lucide-react";

export default function FloatingSpeedDial() {
  const { theme, toggleTheme } = useTheme();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const actions: SpeedDialAction[] = [
    {
      icon: <ArrowUp className="w-5 h-5 text-slate-700 dark:text-slate-200" />,
      label: "Back To Top",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      icon:
        theme === "light" ? (
          <Moon className="w-5 h-5 text-[#5542db]" />
        ) : (
          <Sun className="w-5 h-5 text-amber-400" />
        ),
      label: `Switch to ${theme === "light" ? "Dark" : "Light"} Mode`,
      onClick: toggleTheme,
    },
    {
      icon: <Calculator className="w-5 h-5 text-[#006877] dark:text-[#5de6ff]" />,
      label: "Scope Estimator",
      onClick: () => handleScrollTo("calculator"),
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#5542db] dark:text-[#c6c0ff]" />,
      label: "Ask Kai AI Host",
      onClick: () => handleScrollTo("how-it-works"),
    },
    {
      icon: <Send className="w-5 h-5 text-[#006a48] dark:text-[#45dfa4]" />,
      label: "Start Your Project",
      onClick: () => handleScrollTo("contact"),
    },
  ];

  return (
    <ExpandableSpeedDial
      actions={actions}
      direction="up"
      size="lg"
      className="fixed bottom-6 right-6 z-50"
    />
  );
}
