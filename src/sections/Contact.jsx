import { links } from '../data/content.js';
import Button from '../components/Button.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import Window from '../components/Window.jsx';
import { LinkedinIcon, GithubIcon } from '../components/Icons.jsx';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <Reveal>
        <Window title="sarah.png" flush className="contact__avatar">
          <img src="/sarah.jpg" alt="" width="800" height="989" loading="lazy" />
        </Window>
      </Reveal>

      <div>
        <SectionHeader eyebrow="Contact" title="On travaille" accent="ensemble ?" align="left" />

        <Reveal delay={150}>
          <p className="contact__text">[Ta phrase d’invitation, avec tes mots.]</p>

          <div className="button-row button-row--left">
            {/* Simple lien mailto : pas de formulaire → aucune donnée collectée (RGPD). */}
            <Button href={`mailto:${links.email}`} variant="primary">m-ecrire →</Button>
            <Button href={links.linkedin} icon={LinkedinIcon} external>linkedin ↗</Button>
            <Button href={links.github} icon={GithubIcon} external>github ↗</Button>
          </div>
        </Reveal>
      </div>

      {/* Mentions légales : obligatoires en France (loi LCEN), même pour un site perso. */}
      <details className="contact__legal">
        <summary>mentions-legales &amp; confidentialité</summary>
        <p>
          <strong>Éditrice :</strong> Sarah Louveau — contact : {links.email}
          <br />
          <strong>Hébergeur :</strong> [Nom de l’hébergeur, adresse, téléphone] {/* TODO */}
        </p>
        <p>
          <strong>Données personnelles :</strong> ce site ne dépose aucun cookie, n’utilise aucun
          outil de mesure d’audience et ne collecte aucune donnée. Les polices sont hébergées
          localement. Les liens LinkedIn et GitHub mènent vers des sites tiers soumis à leur propre
          politique de confidentialité.
        </p>
      </details>
    </section>
  );
}
