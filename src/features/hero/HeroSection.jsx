import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Folder, Send, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PERSONAL_INFO } from '../../constants/portfolioData';
import { MarqueeBanner } from '../../components/common/MarqueeBanner';

export function HeroSection({ onPlayClick }) {
  const { t } = useTranslation();
  const roles = t('hero.roles', { returnObjects: true }) || [
    "Frontend Developer",
    "UI/UX Designer",
    "Graphic Designer",
    "Video Editor"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex] || roles[0];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section id="hero" className="relative min-h-[92vh] pt-24 pb-4 flex flex-col justify-between overflow-hidden">
      {/* Glow Mesh Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      {/* Hero Content Grid with Flanking Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6 pb-8">
          
          {/* Left Flanking Column: Top Left (Exp) & Lower Left (Projects) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-4 order-2 lg:order-1"
          >
            {/* Top Left Box: 3+ Years Experience */}
            <div className="p-5 glass-panel dark:glass-panel bg-slate-900/50 rounded-2xl border border-slate-800 text-left hover:border-blue-500/50 transition-all shadow-xl group">
              <div className="text-3xl font-extrabold text-blue-400 font-mono group-hover:scale-105 transition-transform">
                {PERSONAL_INFO.experienceYears}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                {t('hero.expYears')}
              </div>
            </div>

            {/* Lower Left Box: 25+ Projects Completed */}
            <div className="p-5 glass-panel dark:glass-panel bg-slate-900/50 rounded-2xl border border-slate-800 text-left hover:border-teal-500/50 transition-all shadow-xl group">
              <div className="text-3xl font-extrabold text-teal-400 font-mono group-hover:scale-105 transition-transform">
                {PERSONAL_INFO.projectsCompleted}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                {t('hero.projectsDone')}
              </div>
            </div>
          </motion.div>

          {/* Center Main Hero Content */}
          <div className="lg:col-span-6 text-center space-y-4 order-1 lg:order-2">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 dark:bg-slate-900/60 border border-slate-800 backdrop-blur-md mb-2 shadow-xl"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-slate-300 dark:text-slate-200">
                {t('hero.availableBadge')}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            </motion.div>

            {/* Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <p className="text-xs uppercase tracking-widest text-teal-500 font-mono font-bold">
                {t('hero.greeting')}
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {PERSONAL_INFO.name}
              </h1>

              {/* Typing Role Animation */}
              <div className="h-10 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-bold gradient-text">
                  {displayText}
                </span>
                <span className="w-0.5 h-7 bg-teal-400 ml-1 animate-pulse" />
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-base max-w-xl mx-auto leading-relaxed pt-1">
                {t('hero.description')}
              </p>
            </motion.div>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-3 pt-2"
            >
              <a
                href="#projects"
                onClick={onPlayClick}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-teal-500 to-amber-500 hover:opacity-95 text-white font-semibold text-xs shadow-xl shadow-blue-500/25 transition-all hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Folder className="w-4 h-4" />
                <span>{t('hero.viewProjects')}</span>
              </a>

              <a
                href="#contact"
                onClick={onPlayClick}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-900 dark:bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-xs border border-slate-800 backdrop-blur-md transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Send className="w-4 h-4 text-blue-400" />
                <span>{t('hero.contactMe')}</span>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-900/50 hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 text-xs font-semibold border border-slate-800/80 transition-all focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
            </motion.div>
          </div>

          {/* Right Flanking Column: 100% Client Satisfaction */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 flex justify-center lg:justify-end order-3"
          >
            {/* Right Box: 100% Client Satisfaction */}
            <div className="w-full sm:w-auto lg:w-full p-5 glass-panel dark:glass-panel bg-slate-900/50 rounded-2xl border border-slate-800 text-center lg:text-right hover:border-amber-500/50 transition-all shadow-xl group">
              <div className="text-3xl font-extrabold text-amber-400 font-mono group-hover:scale-105 transition-transform">
                {PERSONAL_INFO.satisfiedClients}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                {t('hero.clientSatisfaction')}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Live Angled Intersecting Marquee Banner at the bottom of Hero */}
      <div className="w-full relative z-10 mt-4">
        <MarqueeBanner />
      </div>
    </section>
  );
}
