import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Globe, Search, Menu, X, Command, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';

export function Navbar({ theme, onToggleTheme, onOpenCommand, onPlayClick }) {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage, languages, isRtl } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#services', label: t('nav.services') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#contact', label: t('nav.contact') }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-slate-950/80 dark:bg-[#050816]/80 backdrop-blur-xl border-b border-slate-800/60 shadow-xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={onPlayClick}
          className="flex items-center gap-2.5 font-bold text-lg text-slate-900 dark:text-white group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-teal-500 to-amber-500 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="gradient-text font-black text-sm tracking-wider">AH</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight leading-none text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
              Sk Ashadul
            </span>
            <span className="text-[10px] font-mono text-teal-500 dark:text-teal-400 tracking-wider">
              PORTFOLIO
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/40 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onPlayClick}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions (Command, Theme, Language, Contact CTA) */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              onPlayClick();
              onOpenCommand();
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 text-xs transition-all"
            title="Search Commands (Ctrl + K)"
          >
            <Search className="w-3.5 h-3.5 text-blue-400" />
            <div className="flex items-center gap-1 font-mono text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">
              <Command className="w-2.5 h-2.5" /> K
            </div>
          </button>

          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-teal-400" />
              <span className="uppercase">{currentLanguage}</span>
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className={`absolute top-full mt-2 ${isRtl ? 'left-0' : 'right-0'} w-36 bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden py-1 z-50`}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setLangDropdownOpen(false);
                        onPlayClick();
                      }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium transition-colors ${
                        currentLanguage === lang.code ? 'bg-blue-600/20 text-blue-400 font-bold' : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => {
              onToggleTheme();
              onPlayClick();
            }}
            className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-amber-400 transition-all"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />}
          </button>

          {/* Hire Me CTA */}
          <a
            href="#contact"
            onClick={onPlayClick}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white font-semibold text-xs transition-all shadow-md shadow-blue-500/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('nav.hireMe')}</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => {
              onToggleTheme();
              onPlayClick();
            }}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 py-4 space-y-3"
          >
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onPlayClick();
                  }}
                  className="px-3 py-2 rounded-lg bg-slate-900 text-xs font-medium text-slate-200 hover:bg-blue-600/20 hover:text-blue-400"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-400">Language:</span>
              <div className="flex gap-1 overflow-x-auto py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      onPlayClick();
                    }}
                    className={`px-2 py-1 rounded text-xs ${currentLanguage === lang.code ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-300'}`}
                  >
                    {lang.flag} {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
