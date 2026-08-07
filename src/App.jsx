import React, { useState } from 'react';
import './i18n';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';
import { useAudio } from './hooks/useAudio';

import { ParticleBackground } from './components/canvas/ParticleBackground';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/navigation/Navbar';
import { CommandPalette } from './components/navigation/CommandPalette';
import { RecruiterBar } from './components/ui/RecruiterBar';
import { AccessibilityPanel } from './components/ui/AccessibilityPanel';
import { Footer } from './components/navigation/Footer';

import { HeroSection } from './features/hero/HeroSection';
import { AboutSection } from './features/about/AboutSection';
import { SkillsSection } from './features/skills/SkillsSection';
import { ProjectsSection } from './features/projects/ProjectsSection';
import { ServicesSection } from './features/services/ServicesSection';
import { ExperienceSection } from './features/experience/ExperienceSection';
import { TestimonialsSection } from './features/testimonials/TestimonialsSection';
import { GallerySection } from './features/gallery/GallerySection';
import { CertificationsSection } from './features/certifications/CertificationsSection';
import { BlogSection } from './features/blog/BlogSection';
import { GithubSection } from './features/github/GithubSection';
import { ContactSection } from './features/contact/ContactSection';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { currentLanguage, changeLanguage } = useLanguage();
  const { soundEnabled, toggleSound, playClick, playHover, playSuccess } = useAudio();

  // Accessibility State
  const [cursorEnabled, setCursorEnabled] = useState(true);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('base'); // sm, base, lg

  // Command Palette State
  const [commandOpen, setCommandOpen] = useState(false);

  const getFontSizeClass = () => {
    if (fontSize === 'sm') return 'text-[92%]';
    if (fontSize === 'lg') return 'text-[108%]';
    return '';
  };

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${highContrast ? 'contrast-125 saturate-150 font-medium' : ''} ${getFontSizeClass()}`}>
      {/* Background Interactive Particle Mesh */}
      <ParticleBackground />

      {/* Animated Dual-Ring Custom Cursor */}
      <CustomCursor enabled={cursorEnabled} />

      {/* Glassmorphic Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCommand={() => setCommandOpen(true)}
        onPlayClick={playClick}
      />

      {/* Main Sections Flow */}
      <main className="relative z-10 space-y-4">
        {/* HeroSection contains the main content, flanking stats, and bottom MarqueeBanner */}
        <HeroSection onPlayClick={playClick} />

        <AboutSection />
        <SkillsSection />
        <ProjectsSection onPlayClick={playClick} />
        <ServicesSection onPlayClick={playClick} />
        <ExperienceSection />
        <TestimonialsSection />
        <GallerySection onPlayClick={playClick} />
        <CertificationsSection />
        <BlogSection onPlayClick={playClick} />
        <GithubSection />
        <ContactSection onPlaySuccess={playSuccess} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Recruiter Widget */}
      <RecruiterBar />

      {/* Accessibility & Experience Controls Drawer */}
      <AccessibilityPanel
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        cursorEnabled={cursorEnabled}
        onToggleCursor={() => setCursorEnabled(!cursorEnabled)}
        highContrast={highContrast}
        onToggleContrast={() => setHighContrast(!highContrast)}
        fontSize={fontSize}
        onChangeFontSize={setFontSize}
      />

      {/* Global Command Palette (Ctrl + K) */}
      <CommandPalette
        isOpen={commandOpen}
        onClose={() => setCommandOpen(false)}
        onToggleTheme={toggleTheme}
        onChangeLang={changeLanguage}
        isDark={theme === 'dark'}
      />
    </div>
  );
}
