import { useEffect, useState } from 'react';

const formatParisTime = () =>
  new Date().toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Paris',
  });

/** Heure de Paris au format "15:36", mise à jour toutes les 30 secondes. */
export default function useParisTime() {
  const [time, setTime] = useState(formatParisTime);

  useEffect(() => {
    const id = setInterval(() => setTime(formatParisTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  return time;
}
