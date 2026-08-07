import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../constants/portfolioData';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12 overflow-hidden">
      {/* Glow Mesh Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-blue-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-teal-400 flex items-center justify-center text-white font-black text-xs">
                AH
              </div>
              <span className="font-extrabold text-slate-100 text-base">Sk Ashadul Hossain</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Frontend Developer, UI/UX Designer, Graphic Designer & Video Editor crafting high-performance digital experiences.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-900 hover:bg-blue-600 hover:text-white transition-colors text-slate-400">
                <Github className="w-4 h-4" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-900 hover:bg-blue-600 hover:text-white transition-colors text-slate-400">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={PERSONAL_INFO.twitter} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-900 hover:bg-blue-600 hover:text-white transition-colors text-slate-400">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="p-2 rounded-xl bg-slate-900 hover:bg-blue-600 hover:text-white transition-colors text-slate-400">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-xs text-slate-200 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Story</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills & Stack</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Featured Projects</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services Offered</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">Career Timeline</a></li>
            </ul>
          </div>

          {/* Column 3: Creative Disciplines */}
          <div className="space-y-3">
            <h4 className="font-semibold text-xs text-slate-200 uppercase tracking-wider">Disciplines</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-blue-400" /> React 19 Frontend</li>
              <li className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-teal-400" /> Figma UI/UX Systems</li>
              <li className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-amber-400" /> Brand Graphic Design</li>
              <li className="flex items-center gap-1.5"><Sparkles className="w-3 h-3 text-purple-400" /> 4K Motion Video Editing</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-3">
            <h4 className="font-semibold text-xs text-slate-200 uppercase tracking-wider">Stay In Touch</h4>
            <p className="text-xs text-slate-400">Subscribe to get notified about new articles, project case studies, and design assets.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  required
                  className="w-full py-2.5 px-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Subscribed successfully!
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Sk Ashadul Hossain. Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> in React JS.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
