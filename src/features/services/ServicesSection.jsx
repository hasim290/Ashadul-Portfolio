import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Code2, Figma, Palette, Video, CheckCircle2, Calculator, ArrowRight, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SERVICES_DATA } from '../../constants/portfolioData';

const iconMap = { Code2, Figma, Palette, Video };

export function ServicesSection({ onPlayClick }) {
  const { t } = useTranslation();
  const [estimatorOpen, setEstimatorOpen] = useState(false);

  // Estimator Form State
  const [selectedService, setSelectedService] = useState('Frontend Web Development');
  const [timeline, setTimeline] = useState('1-2 Weeks');
  const [complexity, setComplexity] = useState('Medium');

  const calculateEstimate = () => {
    let base = 500;
    if (selectedService.includes('UI/UX')) base = 400;
    if (selectedService.includes('Graphic')) base = 250;
    if (selectedService.includes('Video')) base = 350;

    if (complexity === 'High') base *= 1.8;
    if (complexity === 'Enterprise') base *= 2.5;

    return Math.round(base);
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>{t('services.title')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            High-Impact Technical & Creative Solutions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {SERVICES_DATA.map((serv) => {
            const IconComp = iconMap[serv.icon] || Layers;

            return (
              <motion.div
                key={serv.id}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl glass-panel dark:glass-panel bg-slate-900/50 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {serv.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {serv.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {serv.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  onClick={onPlayClick}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors pt-4 border-t border-slate-800/80"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Project Estimator Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-900/50 via-teal-900/40 to-slate-900 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Calculator className="w-5 h-5 text-teal-400" /> Need a Fast Quote for Your Next Build?
            </h4>
            <p className="text-xs text-slate-300">
              Use our interactive estimator to calculate estimated timeframe & budget scope.
            </p>
          </div>

          <button
            onClick={() => {
              setEstimatorOpen(true);
              onPlayClick();
            }}
            className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-amber-500/20 shrink-0"
          >
            {t('services.estimateProject')}
          </button>
        </div>

        {/* Estimator Modal */}
        <AnimatePresence>
          {estimatorOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-2xl relative"
              >
                <button
                  onClick={() => setEstimatorOpen(false)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-amber-400" /> Interactive Scope Estimator
                </h3>
                <p className="text-xs text-slate-400 mb-6">Select your project parameters to calculate approximate cost scope.</p>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">Primary Service</label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full py-2.5 px-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-blue-500"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">Complexity Level</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Standard', 'High', 'Enterprise'].map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          onClick={() => setComplexity(lvl)}
                          className={`py-2 text-xs rounded-xl border transition-all ${
                            complexity === lvl
                              ? 'bg-amber-500/20 border-amber-500 text-amber-400 font-bold'
                              : 'bg-slate-950 border-slate-800 text-slate-400'
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800/80 flex items-center justify-between mt-6">
                    <div>
                      <span className="text-xs text-slate-400 block">Estimated Budget Range</span>
                      <span className="text-2xl font-extrabold font-mono text-teal-400">
                        ${calculateEstimate()} — ${Math.round(calculateEstimate() * 1.4)}
                      </span>
                    </div>
                    <a
                      href="#contact"
                      onClick={() => setEstimatorOpen(false)}
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white"
                    >
                      Lock In Estimate
                    </a>
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
