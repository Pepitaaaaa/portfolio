import { links } from '../data/content.js';
import useMouseGlow from '../hooks/useMouseGlow.js';
import useScrollExit from '../hooks/useScrollExit.js';
import BigWord from '../components/BigWord.jsx';
import Button from '../components/Button.jsx';
import { LinkedinIcon, GithubIcon, DownloadIcon } from '../components/Icons.jsx';
import './Hero.css';

const TITLE = 'Salut, moi c’est Sarah, développeuse d’applications';

// Le titre, ligne par ligne. Chaque mot reçoit un délai d'apparition
// (70 ms de plus que le mot précédent) pour qu'ils montent les uns après les autres.
let wordIndex = 0;
const titleLines = [
  { text: 'Salut, moi c’est Sarah,' },
  { text: 'développeuse' },
  { text: 'd’applications', accent: true },
].map((line) => ({
  ...line,
  words: line.text.split(' ').map((word) => ({ word, delay: 150 + wordIndex++ * 70 })),
}));

export default function Hero() {
  const glowRef = useMouseGlow(); // halo violet qui suit la souris
  const contentRef = useScrollExit(); // le contenu s'éloigne quand on scrolle

  return (
    <section id="accueil" ref={glowRef} className="section hero">
      <span className="hero__glow decor" aria-hidden="true" />
      <BigWord>dev</BigWord>

      <div ref={contentRef} className="hero__content">
        <p className="eyebrow hero__eyebrow">Accueil</p>

        {/* aria-label : les lecteurs d'écran lisent la phrase entière, pas mot par mot */}
        <h1 className="hero__title" aria-label={TITLE}>
          {titleLines.map((line) => (
            <span key={line.text} className="hero__line" aria-hidden="true">
              {line.words.map(({ word, delay }) => (
                <span key={word} className="hero__word">
                  <span className={line.accent ? 'accent' : ''} style={{ animationDelay: `${delay}ms` }}>
                    {word}
                  </span>
                </span>
              ))}
              {line.accent && <span className="hero__cursor" />}
            </span>
          ))}
        </h1>

        <p className="hero__text fade-in" style={{ animationDelay: '700ms' }}>
          Bachelor CDA au CESI, en alternance. Je cherche une alternance de 2 ans à partir d'octobre 2027.
        </p>

        <div className="button-row hero__buttons">
          <Button href={links.linkedin} icon={LinkedinIcon} external>linkedin</Button>
          <Button href={links.github} icon={GithubIcon} external>github</Button>
          <Button href={links.cv} icon={DownloadIcon} download>cv.pdf</Button>
        </div>
      </div>

      <span className="hero__scroll-hint decor" aria-hidden="true" />
    </section>
  );
}
