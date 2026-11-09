import { useEffect, useRef } from 'react';

/**
 * Décale horizontalement un élément pendant le scroll (effet parallaxe).
 * Le calcul se base sur la position de son parent (la section).
 * strength = déplacement maximum en %.
 */
export default function useParallax(strength = 12) {
  const ref = useRef(null);

  useEffect(() => {
    // On respecte le réglage système "réduire les animations".
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const update = () => {
      const section = ref.current.parentElement;
      // 1 = section en bas de l'écran, 0 = en haut, négatif = déjà dépassée
      const progress = section.getBoundingClientRect().top / window.innerHeight;
      ref.current.style.transform = `translateX(${progress * strength}%)`;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [strength]);

  return ref;
}
