import { useEffect, useRef } from 'react';

/**
 * Scroll-reveal hook — progressive enhancement pattern.
 *
 * Adds `stagger-grid--init` (or a custom initClass) to the element so CSS can
 * set the hidden initial state, then adds `is-visible` once the element enters
 * the viewport.  If JS never runs, elements stay visible (no content flash).
 *
 * Usage:
 *   const ref = useInView();
 *   <div ref={ref} className="grid ...">...</div>
 *
 * For single-element reveals pass initClass = 'reveal--init'.
 */
export const useInView = (initClass = 'stagger-grid--init', options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Progressive enhancement: mark as animation-ready only when JS runs
    el.classList.add(initClass);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el); // fire once
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -32px 0px',
        ...options,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [initClass]);

  return ref;
};
