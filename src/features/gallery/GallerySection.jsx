import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Maximize2, X, Play, Palette, Layout } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GALLERY_DATA } from '../../constants/portfolioData';

export function GallerySection({ onPlayClick }) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [lightboxItem, setLightboxItem] = useState(null);

  const filteredItems = filter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.type === filter);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{t('gallery.title')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Creative Visual Showcase
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-10">
          {['all', 'graphic', 'uiux', 'video'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                onPlayClick();
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={item.id}
                onClick={() => {
                  setLightboxItem(item);
                  onPlayClick();
                }}
                className={`group cursor-pointer relative h-64 rounded-3xl bg-gradient-to-tr ${item.color} p-6 flex flex-col justify-end overflow-hidden shadow-xl border border-slate-800 hover:border-teal-400 transition-all`}
              >
                <div className="absolute top-4 right-4 p-2 rounded-xl bg-slate-950/70 text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.type === 'video' ? <Play className="w-4 h-4 fill-white" /> : <Maximize2 className="w-4 h-4" />}
                </div>

                <div className="relative z-10">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-950/80 text-[10px] font-mono text-teal-300 uppercase mb-2 inline-block border border-white/10">
                    {item.type}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h4>
                </div>

                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative"
              >
                <button
                  onClick={() => setLightboxItem(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-slate-950/80 text-slate-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className={`w-full h-80 bg-gradient-to-tr ${lightboxItem.color} flex items-center justify-center relative p-8`}>
                  {lightboxItem.type === 'video' ? (
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                      <Play className="w-8 h-8 fill-white ml-1" />
                    </div>
                  ) : (
                    <div className="text-center text-white space-y-2">
                      <Palette className="w-12 h-12 mx-auto text-teal-300" />
                      <span className="text-xs font-mono tracking-widest uppercase">Design Asset Preview</span>
                    </div>
                  )}
                </div>

                <div className="p-6 bg-slate-900 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">{lightboxItem.title}</h3>
                    <p className="text-xs text-slate-400 uppercase font-mono mt-0.5">{lightboxItem.type} Project Asset</p>
                  </div>
                  <button
                    onClick={() => setLightboxItem(null)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200"
                  >
                    Close Preview
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
