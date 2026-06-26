'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't initialize on touch devices/tablets
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Apply global CSS rule to hide original cursor
    const style = document.createElement('style');
    style.innerHTML = `
      @media (pointer: fine) {
        body, a, button, input, select, textarea, [role="button"] {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Initial position
    gsap.set(dot, { xPercent: -50, yPercent: -50, x: window.innerWidth / 2, y: window.innerHeight / 2 });
    gsap.set(ring, { xPercent: -50, yPercent: -50, x: window.innerWidth / 2, y: window.innerHeight / 2 });

    const xToDot = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3.out' });
    const yToDot = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3.out' });

    const xToRing = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' });
    const yToRing = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' });

    const onMouseMove = (e: MouseEvent) => {
      xToDot(e.clientX);
      yToDot(e.clientY);
      xToRing(e.clientX);
      yToRing(e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);

    // Interactive expansion states
    const onMouseEnterInteractive = () => {
      gsap.to(ring, {
        scale: 2.0,
        backgroundColor: 'rgba(22, 209, 150, 0.16)',
        borderColor: 'transparent',
        duration: 0.3,
        ease: 'power3.out',
      });
      gsap.to(dot, {
        scale: 0.6,
        backgroundColor: '#D9E38A',
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    const onMouseLeaveInteractive = () => {
      gsap.to(ring, {
        scale: 1,
        backgroundColor: 'transparent',
        borderColor: '#16D196',
        duration: 0.3,
        ease: 'power3.out',
      });
      gsap.to(dot, {
        scale: 1,
        backgroundColor: '#16D196',
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    // Attach listeners to interactive elements
    const addListeners = () => {
      const interactives = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, .interactive-card, .price-card, .box-lilac, .glass-visual'
      );
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
        el.addEventListener('mouseenter', onMouseEnterInteractive);
        el.addEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };

    addListeners();

    // Use MutationObserver to observe dynamic route changes and element additions
    const observer = new MutationObserver(() => {
      addListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#16D196] rounded-full pointer-events-none z-[99999] pointer-coarse:hidden"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-[#16D196] rounded-full pointer-events-none z-[99998] pointer-coarse:hidden transition-transform duration-75"
      />
    </>
  );
}
