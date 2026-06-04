import { useEffect, useRef } from 'react';

export default function useScrollReveal() {
  const elementsRef = useRef([]);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            // Once revealed, we can stop observing it
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observerRef.current = observer;

    // Observe all registered elements
    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      observerRef.current = null;
    };
  }, []);

  const register = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
      // Immediately observe dynamically registered element if observer is active
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    }
  };

  return register;
}
