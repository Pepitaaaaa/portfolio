import useParisTime from '../hooks/useParisTime.js';
import Button from '../components/Button.jsx';
import { CoffeeIcon } from '../components/Icons.jsx';
import './StatusBar.css';

export default function StatusBar({ coffees, onAddCoffee }) {
  const time = useParisTime();

  return (
    <footer className="statusbar">
      <button type="button" className="statusbar__coffee" onClick={onAddCoffee} aria-label="Ajouter un café">
        <CoffeeIcon />
      </button>

      <p className="statusbar__infos">
        <span className="statusbar__optional">Basée en France</span>
        <span>Heure locale {time}</span>
        <span className="statusbar__optional">{coffees} cafés aujourd’hui</span>
      </p>

      <Button href="#contact" variant="small">
        me-contacter →
      </Button>
    </footer>
  );
}
