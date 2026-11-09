import { experiences, stack } from '../data/content.js';
import BigWord from '../components/BigWord.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import Window from '../components/Window.jsx';
import './Journey.css';

export default function Journey() {
  return (
    <section id="parcours" className="section">
      <BigWord>git</BigWord>

      <SectionHeader eyebrow="Parcours & stack" title="D’où je viens," accent="avec quoi je code" />

      <div className="journey__grid">
        <Reveal>
          <Window title="git log --oneline">
            <ul className="journey__log">
              {experiences.map((xp) => (
                <li key={xp.hash}>
                  <span className="yellow">{xp.hash}</span>
                  <div>
                    <strong>{xp.title}</strong>
                    <p>{xp.detail}</p>
                  </div>
                  <span className="journey__date">{xp.date}</span>
                </li>
              ))}
            </ul>
          </Window>
        </Reveal>

        <Reveal delay={150}>
          <Window title="stack">
            <ul className="journey__stack">
              {stack.map((group) => (
                <li key={group.folder}>
                  <span className="accent">{group.folder}</span>
                  <p>{group.items.join('  ')}</p>
                </li>
              ))}
            </ul>
          </Window>
        </Reveal>
      </div>
    </section>
  );
}
