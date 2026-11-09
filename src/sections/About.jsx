import { links, passions } from '../data/content.js';
import BigWord from '../components/BigWord.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import Window from '../components/Window.jsx';
import './About.css';

const GAUGE_SIZE = 10;

export default function About({ coffees, onAddCoffee }) {
  // Jauge en texte : █ = rempli, ░ = vide
  const filled = Math.min(coffees, GAUGE_SIZE);
  const gauge = '█'.repeat(filled) + '░'.repeat(GAUGE_SIZE - filled);

  return (
    <section id="a-propos" className="section">
      <BigWord>code</BigWord>

      <SectionHeader eyebrow="À propos" title="Développeuse" accent="en alternance" />

      <Reveal className="about__intro">
        <Window title="qui-je-suis">
          <p className="about__intro-text">
            [Ta présentation en 2–3 phrases, avec tes mots : ton parcours, ce que tu aimes
            construire, ce que tu cherches.] Bachelor{' '}
            <span className="accent">Concepteur Développeur d’Applications</span> au CESI, en
            alternance depuis 2024.
          </p>
        </Window>
      </Reveal>

      <div className="about__grid">
        <div className="about__column about__column--left">
          <Reveal>
            <Window title="ce-que-je-cherche">
              <p className="about__mono">
                <span className="yellow">→</span> Une alternance de [durée] à partir de [date],
                rythme [x sem. entreprise / y sem. école].
              </p>
            </Window>
          </Reveal>

          <Reveal delay={100}>
            <Window title="perso.txt">
              <ol className="code-lines">
                {passions.map((passion) => (
                  <li key={passion}>{passion}</li>
                ))}
              </ol>

              <div className="about__coffee">
                <span>
                  <span className="yellow">[{gauge}]</span> {coffees} cafés
                </span>
                <Button variant="yellow" onClick={onAddCoffee}>+1 café</Button>
              </div>
            </Window>
          </Reveal>
        </div>

        <div className="about__column about__column--right">
          <Reveal delay={150}>
            <Window title="en-ligne">
              <ol className="code-lines">
                <li><a href={links.linkedin} target="_blank" rel="noopener noreferrer">linkedin ↗</a></li>
                <li><a href={links.github} target="_blank" rel="noopener noreferrer">github ↗</a></li>
                <li><a href={links.cv} download>cv.pdf ↓</a></li>
              </ol>
            </Window>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
