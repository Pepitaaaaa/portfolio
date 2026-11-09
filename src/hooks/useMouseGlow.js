import { useEffect, useRef } from 'react';

/**
 * Donne la position de la souris à l'élément, sous forme de variables CSS
 * (--mouse-x et --mouse-y). Le CSS s'en sert pour placer un halo lumineux.
 */
export default function useMouseGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const onMove = (event) => {
      const box = element.getBoundingClientRect();
      element.style.setProperty('--mouse-x', `${event.clientX - box.left}px`);
      element.style.setProperty('--mouse-y', `${event.clientY - box.top}px`);
    };

    element.addEventListener('mousemove', onMove);
    return () => element.removeEventListener('mousemove', onMove);
  }, []);

  return ref;
}
