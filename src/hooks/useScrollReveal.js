import { useEffect } from 'react';

/**
 * useScrollReveal — observes elements matching the given selector
 * and animates them into view when they enter the viewport.
 */
export function useScrollReveal(selector) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s, background 0.3s';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selector]);
}
