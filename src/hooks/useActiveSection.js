import { useEffect, useState } from 'react';

/**
 * Renvoie l'id de la section actuellement au milieu de l'écran.
 * ids = liste des id HTML des sections à surveiller.
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-50% 0px -50% 0px' } // = une ligne horizontale au milieu de l'écran
    );

    ids.forEach((id) => observer.observe(document.getElementById(id)));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
