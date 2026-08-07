import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { EXPERIENCE_DATA } from '../../constants/portfolioData';

export function ExperienceSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('work');

  const filteredItems = EXPERIENCE_DATA.filter((item) => item.type === activeTab);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t('experience.title')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Career Timeline & Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('work')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl text-xs font-bold transition-all ${
              activeTab === 'work'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 scale-105'
                : 'bg-slate-900/80 text-slate-400 border border-slate-800'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>{t('experience.workTab')}</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl text-xs font-bold transition-all ${
              activeTab === 'education'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 scale-105'
                : 'bg-slate-900/80 text-slate-400 border border-slate-800'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>{t('experience.eduTab')}</span>
          </button>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-3xl mx-auto relative border-l-2 border-slate-800 pl-6 sm:pl-8 space-y-10 ml-4 sm:ml-auto">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Glowing Timeline Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-950 group-hover:scale-125 group-hover:bg-teal-400 transition-all shadow-md" />

              <div className="p-6 rounded-3xl glass-panel dark:glass-panel bg-slate-900/50 border border-slate-800 group-hover:border-blue-500/40 transition-all space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-teal-400" />
                    {item.location}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-400 transition-colors">
                    {item.role}
                  </h3>
                  <h4 className="text-xs font-semibold text-teal-400">
                    {item.company}
                  </h4>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-[10px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
