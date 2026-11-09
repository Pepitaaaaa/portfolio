import useParallax from '../hooks/useParallax.js';
import './BigWord.css';

/** Le grand mot décoratif en fond de section ("dev", "code"...), qui glisse au scroll. */
export default function BigWord({ children }) {
  const ref = useParallax();

  return (
    <span ref={ref} className="big-word decor" aria-hidden="true">
      {children}
    </span>
  );
}
