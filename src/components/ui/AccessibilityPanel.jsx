import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Volume2, VolumeX, MousePointer, X, Sliders, Type, Check } from 'lucide-react';

export function AccessibilityPanel({
  soundEnabled,
  onToggleSound,
  cursorEnabled,
  onToggleCursor,
  highContrast,
  onToggleContrast,
  fontSize,
  onChangeFontSize
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-label="Accessibility and Experience Settings"
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            className="mb-3 w-80 p-5 glass-panel bg-slate-950/95 dark:bg-[#070b1e]/95 text-slate-100 rounded-3xl shadow-2xl border border-slate-800 backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-teal-400" />
                <h4 className="font-bold text-xs text-slate-100 tracking-wide">Accessibility & Experience</h4>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close settings"
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3.5 mt-3.5">
              {/* Sound FX Toggle */}
              <div className="flex items-center justify-between">
                <label htmlFor="toggle-sound-fx" className="text-xs text-slate-200 font-medium flex items-center gap-2 cursor-pointer">
                  {soundEnabled ? <Volume2 className="w-4 h-4 text-blue-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
                  Sound Feedback
                </label>
                <button
                  id="toggle-sound-fx"
                  role="switch"
                  aria-checked={soundEnabled}
                  aria-label="Toggle Sound Effects"
                  onClick={onToggleSound}
                  className={`w-10 h-5 rounded-full transition-colors relative focus-visible:ring-2 focus-visible:ring-blue-400 ${
                    soundEnabled ? 'bg-blue-600' : 'bg-slate-800 border border-slate-700'
                  }`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full bg-white absolute top-0.75 transition-all ${soundEnabled ? 'left-5' : 'left-1'}`} />
                </button>
              </div>

              {/* Custom Cursor Toggle */}
              <div className="flex items-center justify-between">
                <label htmlFor="toggle-custom-cursor" className="text-xs text-slate-200 font-medium flex items-center gap-2 cursor-pointer">
                  <MousePointer className="w-4 h-4 text-teal-400" />
                  Animated Cursor
                </label>
                <button
                  id="toggle-custom-cursor"
                  role="switch"
                  aria-checked={cursorEnabled}
                  aria-label="Toggle Animated Cursor"
                  onClick={onToggleCursor}
                  className={`w-10 h-5 rounded-full transition-colors relative focus-visible:ring-2 focus-visible:ring-teal-400 ${
                    cursorEnabled ? 'bg-teal-500' : 'bg-slate-800 border border-slate-700'
                  }`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full bg-white absolute top-0.75 transition-all ${cursorEnabled ? 'left-5' : 'left-1'}`} />
                </button>
              </div>

              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <label htmlFor="toggle-high-contrast" className="text-xs text-slate-200 font-medium flex items-center gap-2 cursor-pointer">
                  <Eye className="w-4 h-4 text-amber-400" />
                  High Contrast
                </label>
                <button
                  id="toggle-high-contrast"
                  role="switch"
                  aria-checked={highContrast}
                  aria-label="Toggle High Contrast Mode"
                  onClick={onToggleContrast}
                  className={`w-10 h-5 rounded-full transition-colors relative focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    highContrast ? 'bg-amber-500' : 'bg-slate-800 border border-slate-700'
                  }`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full bg-white absolute top-0.75 transition-all ${highContrast ? 'left-5' : 'left-1'}`} />
                </button>
              </div>

              {/* Font Size Selector */}
              <div className="pt-3 border-t border-slate-800">
                <div className="text-[11px] text-slate-400 mb-2 font-mono uppercase tracking-wider flex items-center gap-1.5">
                  <Type className="w-3.5 h-3.5 text-blue-400" /> Interface Font Scale
                </div>
                <div className="grid grid-cols-3 gap-1.5 bg-slate-950 p-1 rounded-2xl border border-slate-800">
                  {['sm', 'base', 'lg'].map((sz) => (
                    <button
                      key={sz}
                      aria-label={`Set font size to ${sz}`}
                      onClick={() => onChangeFontSize(sz)}
                      className={`py-1.5 text-xs rounded-xl uppercase font-bold transition-all focus-visible:ring-2 focus-visible:ring-blue-400 ${
                        fontSize === sz ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Accessibility & Experience Settings"
        className="p-3.5 rounded-full bg-slate-900/90 text-slate-200 border border-slate-700/80 shadow-2xl hover:text-white hover:border-teal-400 hover:scale-105 transition-all focus-visible:ring-2 focus-visible:ring-teal-400"
        title="Accessibility Settings"
      >
        <Sliders className="w-4.5 h-4.5" />
      </button>
    </div>
  );
}
