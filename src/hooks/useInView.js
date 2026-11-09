import { useEffect, useRef, useState } from 'react';

/**
 * Indique si un élément est entré dans l'écran (une seule fois).
 * Utilisation : const [ref, inView] = useInView();  puis  <div ref={ref}>
 */
export default function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // plus besoin de surveiller
        }
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
