import './Window.css';

/**
 * Bloc façon fenêtre de terminal : une barre de titre + un contenu.
 * flush : retire le padding intérieur (utile pour une image).
 */
export default function Window({ title, children, flush = false, className = '' }) {
  return (
    <div className={`window ${className}`}>
      <div className="window__bar">{title}</div>
      <div className={`window__body ${flush ? 'window__body--flush' : ''}`}>{children}</div>
    </div>
  );
}
