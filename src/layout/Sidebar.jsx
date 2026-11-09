import { sections, links } from '../data/content.js';
import useActiveSection from '../hooks/useActiveSection.js';
import {
  HomeIcon, UserIcon, LaptopIcon, BranchIcon, MailIcon, LinkedinIcon, GithubIcon,
} from '../components/Icons.jsx';
import './Sidebar.css';

// Fait le lien entre le nom d'icône écrit dans content.js et le composant.
const icons = {
  home: HomeIcon,
  user: UserIcon,
  laptop: LaptopIcon,
  branch: BranchIcon,
  mail: MailIcon,
};

// Calculé une seule fois (hors du composant) pour ne pas relancer l'observer à chaque rendu.
const sectionIds = sections.map((section) => section.id);

export default function Sidebar() {
  const active = useActiveSection(sectionIds);

  return (
    <nav className="sidebar" aria-label="Navigation principale">
      <ul className="sidebar__nav">
        {sections.map(({ id, label, icon }) => {
          const Icon = icons[icon];
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`sidebar__link ${active === id ? 'is-active' : ''}`}
                aria-label={label}
                title={label}
              >
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="sidebar__socials">
        <li>
          <a href={links.linkedin} className="sidebar__link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
        </li>
        <li>
          <a href={links.github} className="sidebar__link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}
