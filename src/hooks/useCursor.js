import { useEffect, useRef } from 'react';

/**
 * useCursor — drives the custom cursor dot and animated ring.
 * Attaches mouse-move and hover listeners globally.
 */
export function useCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = e.clientX - 4 + 'px';
      cursor.style.top = e.clientY - 4 + 'px';
    };

    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x - 14) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y - 14) * 0.12;
      ring.style.left = ringPos.current.x + 'px';
      ring.style.top = ringPos.current.y + 'px';
      rafRef.current = requestAnimationFrame(animateRing);
    };

    const onEnter = () => {
      cursor.style.transform = 'scale(2)';
      ring.style.width = '48px';
      ring.style.height = '48px';
    };

    const onLeave = () => {
      cursor.style.transform = 'scale(1)';
      ring.style.width = '28px';
      ring.style.height = '28px';
    };

    document.addEventListener('mousemove', onMouseMove);
    rafRef.current = requestAnimationFrame(animateRing);

    const interactables = document.querySelectorAll(
      'a, button, .stat-card, .skill-group, .proj-card, .contact-item, .theme-toggle'
    );
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return { cursorRef, ringRef };
}
