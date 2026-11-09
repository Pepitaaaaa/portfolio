import './ProjectPreview.css';

// Les mini-illustrations à droite de chaque projet.
// Ce sont de simples blocs en CSS : on pourra les remplacer plus tard par une vraie
// capture d'écran (<img src="..." />).

const COLLECTION_COLORS = ['#7c5ce0', '#f5c451', '#3b2f55', '#c084fc', '#5b4880',
  '#e8a3c0', '#4c3a6e', '#a78bfa', '#f0d38a', '#2a2438'];

const SITE_COLORS = ['#5b4880', '#e8a3c0', '#4c3a6e', '#f0d38a'];

function CollectionPreview() {
  return (
    <div className="preview">
      <div className="preview__row">
        <strong>Ma collection</strong>
        <span className="preview__pill preview__pill--accent">+ ajouter</span>
      </div>
      <div className="preview__row preview__row--start">
        <span className="preview__pill is-on">Tout</span>
        <span className="preview__pill">Livres</span>
        <span className="preview__pill">Films</span>
        <span className="preview__pill">Animés</span>
      </div>
      <div className="preview__tiles">
        {COLLECTION_COLORS.map((color) => <span key={color} style={{ background: color }} />)}
      </div>
    </div>
  );
}

function SitePreview() {
  return (
    <div className="preview">
      <div className="preview__row">
        <strong>LES IMPROBABLES</strong>
        <span className="preview__muted">photos · membres · contact</span>
      </div>
      <div className="preview__banner">
        <strong>Les Improbables</strong>
        <span>L’association, ses membres et ses souvenirs</span>
      </div>
      <div className="preview__tiles preview__tiles--square">
        {SITE_COLORS.map((color) => <span key={color} style={{ background: color }} />)}
      </div>
    </div>
  );
}

function TerminalPreview() {
  return (
    <div className="preview preview--terminal">
      <p><span className="accent">$</span> python scan.py --adapter hci0</p>
      <p className="preview__muted">scan des appareils BLE…</p>
      <p><span className="green">✓</span> SY289 trouvé · C4:7F:51:0A:3E:12</p>
      <p><span className="green">✓</span> connecté · service mesure</p>
      <p>mesure <span className="yellow">12.457 mm</span></p>
      <p>mesure <span className="yellow">12.459 mm</span></p>
      <p>mesure <span className="yellow">12.458 mm</span></p>
    </div>
  );
}

function ChartPreview() {
  return (
    <div className="preview preview--chart">
      <div className="preview__side">
        <span className="is-on" />
        <span />
        <span />
        <span />
      </div>
      <div className="preview__chart-main">
        <div className="preview__stats">
          <div><small>capteurs</small>12</div>
          <div><small>msg/min</small>348</div>
          <div><small>broker</small><span className="green">● ok</span></div>
        </div>
        {/* Les courbes se dessinent quand la carte apparaît (voir .preview__line) */}
        <svg viewBox="0 0 300 130" className="preview__svg">
          <polyline className="preview__line" stroke="var(--accent)"
            points="0,100 30,80 60,90 90,50 120,60 150,25 180,40 210,15 240,30 270,0 300,10" />
          <polyline className="preview__line" stroke="var(--yellow)"
            points="0,125 40,115 75,120 110,95 150,105 185,85 220,92 260,70 300,75" />
        </svg>
      </div>
    </div>
  );
}

function UseCasePreview() {
  return (
    <div className="preview preview--usecase">
      <div className="preview__actor">
        <svg viewBox="0 0 24 40" width="24" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="6" r="5" />
          <path d="M12 11v15M3 17h18M12 26l-8 12M12 26l8 12" />
        </svg>
        <small>Utilisateur</small>
      </div>
      <div className="preview__system">
        <small className="preview__muted">CESIZen</small>
        <span>S’inscrire</span>
        <span>Consulter les infos santé</span>
        <span>Faire un exercice de respiration</span>
        <span>Gérer son compte</span>
      </div>
    </div>
  );
}

function DatabasePreview() {
  return (
    <div className="preview preview--database">
      <svg className="preview__links" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline points="32,30 50,30 50,80 68,80" />
        <polyline points="32,35 68,35" />
      </svg>
      <div className="preview__table" style={{ top: '10%', left: '4%' }}>
        <strong>utilisateur</strong>
        <p># id<br />pseudo<br />email<br />role</p>
      </div>
      <div className="preview__table" style={{ top: '5%', right: '4%' }}>
        <strong>ressource</strong>
        <p># id<br />titre<br />categorie<br />#id_auteur</p>
      </div>
      <div className="preview__table" style={{ bottom: '6%', right: '4%' }}>
        <strong>commentaire</strong>
        <p># id<br />contenu<br />#id_ressource</p>
      </div>
    </div>
  );
}

// Le champ `preview` de content.js choisit l'illustration à afficher.
const previews = {
  collection: CollectionPreview,
  site: SitePreview,
  terminal: TerminalPreview,
  chart: ChartPreview,
  usecase: UseCasePreview,
  database: DatabasePreview,
};

export default function ProjectPreview({ type }) {
  const Preview = previews[type];
  return Preview ? <Preview /> : null;
}
