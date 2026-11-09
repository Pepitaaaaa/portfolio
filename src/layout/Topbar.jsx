import './Topbar.css';

export default function Topbar() {
  return (
    <header className="topbar">
      <a href="#accueil" className="topbar__logo" aria-label="Retour en haut">
        ctrl+N
      </a>
      <p className="topbar__title">
        sarah <span className="accent">&lt;louveau&gt;</span>
      </p>
    </header>
  );
}
