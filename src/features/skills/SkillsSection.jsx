import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Code2, FileCode, Palette, Sparkles, Layout, Database, Globe, Box, Figma, LayoutTemplate, Search, Layers, Image, PenTool, FileImage, Video, Film, Sliders, Clapperboard, GitBranch, Cloud, Container, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SKILLS_DATA } from '../../constants/portfolioData';

const iconMap = {
  Code2, FileCode, Palette, Sparkles, Layout, Database, Globe, Box,
  Figma, LayoutTemplate, Search, Layers, Image, PenTool, Sparkle: Sparkles,
  FileImage, Video, Film, Sliders, Clapperboard, GitBranch, Cloud, Container, Zap
};

export function SkillsSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: t('skills.categories.all') },
    { id: 'frontend', label: t('skills.categories.frontend') },
    { id: 'uiux', label: t('skills.categories.uiux') },
    { id: 'graphic', label: t('skills.categories.graphic') },
    { id: 'video', label: t('skills.categories.video') },
    { id: 'tools', label: t('skills.categories.tools') }
  ];

  const filteredSkills = activeTab === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Code className="w-3.5 h-3.5" />
            <span>{t('skills.title')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Stack & Creative Tools
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg shadow-blue-500/20 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const IconComp = iconMap[skill.icon] || Code;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={skill.name}
                  className={`p-5 rounded-2xl glass-panel dark:glass-panel bg-slate-900/50 border ${
                    skill.highlight ? 'border-blue-500/40 shadow-lg shadow-blue-500/5' : 'border-slate-800'
                  } hover:border-teal-500/50 transition-all group`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-slate-800/80 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-400">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h4 className="font-semibold text-xs text-slate-900 dark:text-white group-hover:text-teal-400 transition-colors">
                        {skill.name}
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Level Progress Bar */}
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-600 via-teal-500 to-amber-500 rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
