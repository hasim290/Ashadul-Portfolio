import React, { useEffect, useState, useRef } from 'react';

export function CustomCursor({ enabled = true }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (!enabled) return;

    // Check if coarse pointer (mobile/tablet touch screen)
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleTouchStart = () => {
      setIsTouchDevice(true);
      document.body.classList.remove('custom-cursor-active');
    };
    window.addEventListener('touchstart', handleTouchStart, { passive: true });

    document.body.classList.add('custom-cursor-active');

    const updateMouse = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      mousePos.current = { x, y };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      }
    };

    let animationFrameId;

    // Lerp loop for outer ring
    const render = () => {
      const lerpFactor = 0.25;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (ringRef.current) {
        const scale = isClicked ? 0.75 : isHovered ? 1.6 : 1;
        ringRef.current.style.transform = `translate3d(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px, 0) scale(${scale})`;
      }

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = (e) => {
      // Ensure position is fresh on click
      if (e.clientX && e.clientY) {
        mousePos.current = { x: e.clientX, y: e.clientY };
      }
      setIsClicked(true);
    };

    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', updateMouse);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('mousemove', updateMouse);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled, isHovered, isClicked]);

  if (!enabled || isTouchDevice) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-50 transition-colors duration-150 ease-out hidden md:block ${
          isHovered
            ? 'border-teal-400 bg-teal-400/15 backdrop-blur-[1px]'
            : isClicked
            ? 'border-blue-400 bg-blue-500/20'
            : 'border-blue-500/80 bg-transparent'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Inner Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-400 pointer-events-none z-50 transition-opacity duration-150 hidden md:block ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
