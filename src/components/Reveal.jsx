import useInView from '../hooks/useInView.js';
import './Reveal.css';

/**
 * Fait apparaître son contenu (fondu + glissement vers le haut)
 * quand il entre dans l'écran.
 * delay : décalage en millisecondes, pour enchaîner plusieurs blocs.
 */
export default function Reveal({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
