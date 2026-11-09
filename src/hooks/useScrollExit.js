import { useEffect, useRef } from 'react';

/**
 * Donne à l'élément une variable CSS --exit qui va de 0 à 1
 * pendant qu'on scrolle vers le bas (0 = tout en haut de la page).
 * Le CSS s'en sert pour faire "partir" le contenu au scroll.
 */
export default function useScrollExit() {
  const ref = useRef(null);

  useEffect(() => {
    // On respecte le réglage système "réduire les animations".
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const update = () => {
      const distance = window.innerHeight * 0.8; // on atteint 1 après 80 % d'écran
      const exit = Math.min(window.scrollY / distance, 1);
      ref.current.style.setProperty('--exit', exit);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return ref;
}
