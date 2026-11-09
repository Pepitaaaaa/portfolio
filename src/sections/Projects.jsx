import { projects, links } from '../data/content.js';
import BigWord from '../components/BigWord.jsx';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import ProjectCard from './ProjectCard.jsx';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projets" className="section">
      <BigWord>projets</BigWord>

      <SectionHeader eyebrow="Travail" title="Projets" accent="à la une" />

      <div className="projects__list">
        {projects.map((project, index) => (
          <Reveal key={project.title}>
            <ProjectCard project={project} number={index + 1} />
          </Reveal>
        ))}
      </div>

      <Reveal className="projects__more">
        <Button href={links.github} external>tous-les-projets →</Button>
      </Reveal>
    </section>
  );
}
