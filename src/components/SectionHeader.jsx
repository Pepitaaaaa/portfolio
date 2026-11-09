import Reveal from './Reveal.jsx';
import './SectionHeader.css';

/**
 * En-tête de section : petit sur-titre + grand titre (dont une partie en violet).
 * Ex : <SectionHeader eyebrow="Travail" title="Projets" accent="à la une" />
 */
export default function SectionHeader({ eyebrow, title, accent, align = 'center' }) {
  return (
    <Reveal className={`section-header section-header--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-header__title">
        {title} <span className="accent">{accent}</span>
      </h2>
    </Reveal>
  );
}
