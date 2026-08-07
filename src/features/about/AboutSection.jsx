import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Figma, Palette, Video, Download, CheckCircle2, Sparkles, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PERSONAL_INFO } from '../../constants/portfolioData';

export function AboutSection() {
  const { t } = useTranslation();

  const values = t('about.values', { returnObjects: true }) || [
    { title: "User Centric", desc: "Building intuitive interfaces prioritizing accessibility & delight." },
    { title: "Performance First", desc: "Optimized code, lightning-fast load times, and fluid 60fps animations." },
    { title: "Visual Elegance", desc: "Precision typography, glassmorphism, and subtle micro-interactions." }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>{t('about.title')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering & Creative Story
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Creative Avatar & Highlights (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 glass-panel dark:glass-panel bg-slate-900/40 rounded-3xl border border-slate-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-teal-500 to-amber-500 p-1 shadow-xl">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-2xl font-black text-white">
                  AH
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-teal-400 text-xs font-mono font-semibold mt-1">
                  Frontend Dev & Visual Creative
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <Code2 className="w-5 h-5 text-blue-400 shrink-0" />
                  <div>
                    <h5 className="text-xs font-semibold text-slate-200">Frontend Engineering</h5>
                    <p className="text-[11px] text-slate-400">React 19, Vite, Next.js, Tailwind v4</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <Figma className="w-5 h-5 text-teal-400 shrink-0" />
                  <div>
                    <h5 className="text-xs font-semibold text-slate-200">UI/UX Systems</h5>
                    <p className="text-[11px] text-slate-400">Design Tokens, Figma, Prototyping</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <Palette className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <h5 className="text-xs font-semibold text-slate-200">Graphic Branding</h5>
                    <p className="text-[11px] text-slate-400">Photoshop, Illustrator, Vector Art</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <Video className="w-5 h-5 text-purple-400 shrink-0" />
                  <div>
                    <h5 className="text-xs font-semibold text-slate-200">Video & Motion FX</h5>
                    <p className="text-[11px] text-slate-400">Premiere Pro, After Effects, 4K Editing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">Based in Kolkata, IN</span>
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Bio & Core Values (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-8"
          >
            <div className="p-8 glass-panel dark:glass-panel bg-slate-900/40 rounded-3xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Passionate Developer & Creator</span>
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {t('about.bioP1')}
              </p>

              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {t('about.bioP2')}
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold px-1">
                {t('about.coreValues')}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {values.map((val, idx) => (
                  <div
                    key={idx}
                    className="p-5 glass-panel dark:glass-panel bg-slate-900/40 rounded-2xl border border-slate-800 space-y-2 hover:border-blue-500/40 transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal-400" />
                    <h5 className="font-bold text-sm text-slate-900 dark:text-white">{val.title}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
