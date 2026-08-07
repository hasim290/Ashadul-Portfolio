import React from 'react';
import { Sparkles, Code2, Palette, Video, Layers, Zap, Star } from 'lucide-react';

export function MarqueeBanner() {
  const itemsTop = [
    "FRONTEND DEVELOPER",
    "UI/UX DESIGNER",
    "GRAPHIC DESIGNER",
    "VIDEO EDITOR",
    "REACT 19",
    "TAILWIND CSS V4",
    "MOTION GRAPHICS",
    "DESIGN SYSTEMS",
    "CLEAN ARCHITECTURE"
  ];

  const itemsBottom = [
    "PIXEL PERFECT UI",
    "60FPS ANIMATIONS",
    "HIGH PERFORMANCE",
    "ACCESSIBLE UX",
    "AWWWARDS VIBE",
    "CREATIVE DEV",
    "SK ASHADUL HOSSAIN",
    "MODERN TECH STACK"
  ];

  return (
    <div className="relative py-14 overflow-hidden my-8 select-none pointer-events-none">
      {/* Top Banner (Angled -rotate-2, Running Left) */}
      <div className="transform -rotate-2 scale-105 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 border-y-2 border-blue-400/30 py-3.5 shadow-2xl shadow-blue-600/30 relative z-20 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...itemsTop, ...itemsTop, ...itemsTop, ...itemsTop].map((text, idx) => (
            <div key={idx} className="flex items-center gap-6 mx-4">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white font-mono flex items-center gap-2 drop-shadow">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
                {text}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-300/80" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Banner (Angled rotate-2, Running Right) */}
      <div className="transform rotate-2 scale-105 bg-slate-900/95 dark:bg-[#090d24]/95 border-y-2 border-teal-500/40 py-3.5 shadow-2xl shadow-teal-500/10 relative z-10 -mt-6 overflow-hidden backdrop-blur-md">
        <div className="flex w-max animate-marquee" style={{ animationDirection: 'reverse' }}>
          {[...itemsBottom, ...itemsBottom, ...itemsBottom, ...itemsBottom].map((text, idx) => (
            <div key={idx} className="flex items-center gap-6 mx-4">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-100 font-mono flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-teal-400 fill-teal-400" />
                {text}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
