import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Moon, Sun, Globe, FileText, Send, User, Briefcase, Code, Sparkles, Folder, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function CommandPalette({ isOpen, onClose, onToggleTheme, onChangeLang, isDark }) {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const actions = [
    { id: 'sec-hero', title: t('nav.home'), icon: Sparkles, category: 'Navigation', action: () => scrollToSection('hero') },
    { id: 'sec-about', title: t('nav.about'), icon: User, category: 'Navigation', action: () => scrollToSection('about') },
    { id: 'sec-skills', title: t('nav.skills'), icon: Code, category: 'Navigation', action: () => scrollToSection('skills') },
    { id: 'sec-projects', title: t('nav.projects'), icon: Folder, category: 'Navigation', action: () => scrollToSection('projects') },
    { id: 'sec-services', title: t('nav.services'), icon: Layers, category: 'Navigation', action: () => scrollToSection('services') },
    { id: 'sec-experience', title: t('nav.experience'), icon: Briefcase, category: 'Navigation', action: () => scrollToSection('experience') },
    { id: 'sec-contact', title: t('nav.contact'), icon: Send, category: 'Navigation', action: () => scrollToSection('contact') },

    { id: 'act-theme', title: `Switch Theme to ${isDark ? 'Light' : 'Dark'} Mode`, icon: isDark ? Sun : Moon, category: 'Preferences', action: onToggleTheme },
    { id: 'act-lang-en', title: 'Language: English 🇬🇧', icon: Globe, category: 'Language', action: () => onChangeLang('en') },
    { id: 'act-lang-hi', title: 'Language: हिन्दी 🇮🇳', icon: Globe, category: 'Language', action: () => onChangeLang('hi') },
    { id: 'act-lang-bn', title: 'Language: বাংলা 🇧🇩', icon: Globe, category: 'Language', action: () => onChangeLang('bn') },
    { id: 'act-lang-ar', title: 'Language: العربية 🇦🇪 (RTL)', icon: Globe, category: 'Language', action: () => onChangeLang('ar') },
    { id: 'act-lang-ur', title: 'Language: اردو 🇵🇰 (RTL)', icon: Globe, category: 'Language', action: () => onChangeLang('ur') },
    { id: 'act-resume', title: 'Download Resume (PDF)', icon: FileText, category: 'Action', action: () => window.open('#', '_blank') }
  ];

  const filteredActions = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSelect = (item) => {
    item.action();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="w-full max-w-xl bg-slate-900/90 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 border-b border-slate-800">
              <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command or search sections..."
                className="w-full py-4 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-base"
              />
              <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-800 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results List */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filteredActions.length === 0 ? (
                <div className="py-8 text-center text-slate-500">No matching commands found.</div>
              ) : (
                filteredActions.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors text-left ${
                        idx === selectedIndex ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-slate-300 hover:bg-slate-800/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-blue-400" />
                        <span className="font-medium text-sm">{item.title}</span>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                        {item.category}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
              <div className="flex gap-3">
                <span><kbd className="px-1.5 py-0.5 bg-slate-800 rounded">ESC</kbd> to close</span>
                <span><kbd className="px-1.5 py-0.5 bg-slate-800 rounded">CTRL + K</kbd> to toggle</span>
              </div>
              <span className="text-blue-400 font-semibold">Sk Ashadul Hossain</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
