import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Clock, ArrowRight, X, BookOpen, Share2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { BLOGS_DATA } from '../../constants/portfolioData';

export function BlogSection({ onPlayClick }) {
  const { t } = useTranslation();
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>{t('blog.title')}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Thoughts & Design Notes
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOGS_DATA.map((article) => (
            <motion.article
              key={article.id}
              whileHover={{ y: -4 }}
              className="p-6 rounded-3xl glass-panel dark:glass-panel bg-slate-900/50 border border-slate-800 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono font-semibold uppercase">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime} {t('blog.readTime')}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white hover:text-blue-400 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono">{article.date}</span>
                <button
                  onClick={() => {
                    setSelectedBlog(article);
                    onPlayClick();
                  }}
                  className="text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors flex items-center gap-1"
                >
                  <span>{t('blog.readArticle')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Article Reader Modal */}
        <AnimatePresence>
          {selectedBlog && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 text-slate-100 shadow-2xl relative max-h-[85vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-600/10 text-blue-400 text-xs font-mono">
                      {selectedBlog.category}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{selectedBlog.date}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-white">{selectedBlog.title}</h2>

                  <p className="text-sm text-slate-300 leading-relaxed italic border-l-2 border-teal-500 pl-4 py-1 bg-slate-950/40 rounded-r-xl">
                    {selectedBlog.summary}
                  </p>

                  <div className="pt-4 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-4">
                    <p>{selectedBlog.content}</p>
                    <p>When structuring modern web products, performance optimization cannot be an afterthought. By utilizing fine-grained state containers like Zustand alongside React 19 concurrent features, we achieve immediate UI responsiveness.</p>
                  </div>

                  <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-xs text-slate-500">Written by Sk Ashadul Hossain</span>
                    <button
                      onClick={() => setSelectedBlog(null)}
                      className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
                    >
                      Done Reading
                    </button>
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
