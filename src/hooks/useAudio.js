import { useState, useCallback } from 'react';

export function useAudio() {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    return localStorage.getItem('sound_enabled') === 'true';
  });

  const toggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      localStorage.setItem('sound_enabled', String(next));
      return next;
    });
  };

  const playSynthSound = useCallback((freq = 440, type = 'sine', duration = 0.08) => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio context ignored if user hasn't interacted
    }
  }, [soundEnabled]);

  const playClick = () => playSynthSound(600, 'sine', 0.05);
  const playHover = () => playSynthSound(300, 'triangle', 0.03);
  const playSuccess = () => playSynthSound(800, 'sine', 0.15);

  return {
    soundEnabled,
    toggleSound,
    playClick,
    playHover,
    playSuccess
  };
}
