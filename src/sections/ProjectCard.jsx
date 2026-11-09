import ProjectPreview from './ProjectPreview.jsx';
import './ProjectCard.css';

/** Une carte projet : texte à gauche, mini-illustration à droite. */
export default function ProjectCard({ project, number }) {
  return (
    <article className="project-card">
      <div>
        <h3 className="project-card__title">
          <span className="project-card__number">{String(number).padStart(2, '0')}</span>
          {project.title}
        </h3>
        <p className="eyebrow project-card__category">{project.category}</p>
        <p className="project-card__description">{project.description}</p>
        <ul className="project-card__tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className="project-card__preview" aria-hidden="true">
        <div className="project-card__preview-bar">{project.url}</div>
        <ProjectPreview type={project.preview} />
      </div>
    </article>
  );
}
