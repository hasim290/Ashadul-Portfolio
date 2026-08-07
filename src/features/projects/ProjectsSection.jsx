import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, ExternalLink, Github, Search, X, Sparkles, CheckCircle2, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PROJECTS_DATA } from '../../constants/portfolioData';

export function ProjectsSection({ onPlayClick }) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: t('projects.filterAll') },
    { id: 'web', label: t('projects.filterWeb') },
    { id: 'uiux', label: t('projects.filterDesign') },
    { id: 'video', label: t('projects.filterVideo') }
  ];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    const matchesFilter = filter === 'all' || proj.category === filter || (filter === 'uiux' && proj.category === 'graphic');
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Folder className="w-3.5 h-3.5" />
            <span>{t('projects.title')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Crafted Engineering & Visual Work
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setFilter(tab.id);
                  onPlayClick();
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('projects.searchPlaceholder')}
              className="w-full py-2 pl-9 pr-4 bg-slate-900/80 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={proj.id}
                className="group flex flex-col justify-between p-6 glass-panel dark:glass-panel bg-slate-900/50 rounded-3xl border border-slate-800/80 hover:border-blue-500/50 transition-all shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className={`w-full h-44 rounded-2xl bg-gradient-to-tr ${proj.imageBg} relative p-4 flex flex-col justify-between overflow-hidden mb-5 shadow-inner`}>
                    <div className="flex items-center justify-between relative z-10">
                      <span className="px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-[11px] font-mono font-medium text-slate-200 border border-white/10">
                        {proj.tag}
                      </span>
                      {proj.featured && (
                        <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/90 text-slate-950 font-bold text-[10px] uppercase">
                          <Sparkles className="w-3 h-3" /> Featured
                        </span>
                      )}
                    </div>

                    <div className="relative z-10">
                      <h4 className="text-lg font-extrabold text-white leading-tight drop-shadow-md">
                        {proj.title}
                      </h4>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {proj.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-[10px] font-mono text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Links */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedProject(proj);
                      onPlayClick();
                    }}
                    className="text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1"
                  >
                    <span>{t('projects.viewDetails')}</span>
                    <Zap className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {proj.githubUrl !== '#' && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-300 transition-colors"
                        title="GitHub Code"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {proj.liveUrl !== '#' && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-slate-800 hover:bg-teal-500 hover:text-slate-950 text-slate-300 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-2xl relative max-h-[85vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className={`w-full h-48 rounded-2xl bg-gradient-to-tr ${selectedProject.imageBg} p-6 flex flex-col justify-end mb-6 relative overflow-hidden`}>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 text-xs font-mono text-blue-300">
                    {selectedProject.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-white relative z-10">{selectedProject.title}</h3>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs uppercase font-mono text-teal-400 font-bold">Overview</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>

                  <h4 className="text-xs uppercase font-mono text-teal-400 font-bold pt-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 text-xs font-mono text-blue-400">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {selectedProject.metrics && (
                    <div className="pt-4 grid grid-cols-3 gap-3">
                      {Object.entries(selectedProject.metrics).map(([key, val]) => (
                        <div key={key} className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                          <span className="text-xs text-slate-400 capitalize block">{key}</span>
                          <span className="text-sm font-bold font-mono text-teal-400">{val}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-6 border-t border-slate-800 flex items-center justify-end gap-3">
                    {selectedProject.githubUrl !== '#' && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200"
                      >
                        <Github className="w-4 h-4" /> Source Code
                      </a>
                    )}
                    {selectedProject.liveUrl !== '#' && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-lg shadow-blue-600/30"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
