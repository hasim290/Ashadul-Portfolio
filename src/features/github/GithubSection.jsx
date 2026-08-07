import React from 'react';
import { motion } from 'framer-motion';
import { Github, GitCommit, GitPullRequest, Star, ExternalLink, Activity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PERSONAL_INFO } from '../../constants/portfolioData';

export function GithubSection() {
  const { t } = useTranslation();

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Github className="w-3.5 h-3.5" />
            <span>{t('github.title')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Open Source & Git Metrics
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('github.subtitle')}
          </p>
        </div>

        {/* GitHub Stats Card */}
        <div className="p-8 rounded-3xl glass-panel dark:glass-panel bg-slate-900/50 border border-slate-800 space-y-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 text-center">
              <GitCommit className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <div className="text-2xl font-extrabold font-mono text-white">520+</div>
              <span className="text-[11px] text-slate-400">Commits Past Year</span>
            </div>

            <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 text-center">
              <Star className="w-5 h-5 text-amber-400 mx-auto mb-1" />
              <div className="text-2xl font-extrabold font-mono text-white">120+</div>
              <span className="text-[11px] text-slate-400">Stars Earned</span>
            </div>

            <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 text-center">
              <GitPullRequest className="w-5 h-5 text-teal-400 mx-auto mb-1" />
              <div className="text-2xl font-extrabold font-mono text-white">45+</div>
              <span className="text-[11px] text-slate-400">PRs Merged</span>
            </div>

            <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 text-center">
              <Activity className="w-5 h-5 text-purple-400 mx-auto mb-1" />
              <div className="text-2xl font-extrabold font-mono text-white">99.2%</div>
              <span className="text-[11px] text-slate-400">Code Quality</span>
            </div>
          </div>

          {/* Activity Heatmap Grid Visualization */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>Contribution Activity Heatmap</span>
              <span className="font-mono text-[11px] text-teal-400">@sk-ashadul</span>
            </div>
            <div className="grid grid-cols-12 sm:grid-cols-24 gap-1.5 p-4 bg-slate-950 rounded-2xl border border-slate-800/80 overflow-x-auto">
              {[...Array(48)].map((_, i) => {
                const intensity = (i * 7) % 5;
                const colors = [
                  'bg-slate-900 border border-slate-800',
                  'bg-teal-900/60 border border-teal-800/50',
                  'bg-teal-700/80',
                  'bg-teal-500',
                  'bg-emerald-400 shadow-sm shadow-emerald-400/50'
                ];
                return (
                  <div
                    key={i}
                    className={`h-4 rounded-md ${colors[intensity]} transition-transform hover:scale-125`}
                    title={`Day ${i + 1}: ${intensity * 3} contributions`}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
