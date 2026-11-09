import React from 'react';
import ReactDOM from 'react-dom/client';

// Polices installées via npm et servies par le site lui-même :
// aucune requête vers Google Fonts, donc aucune adresse IP transmise à un tiers (RGPD).
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/700.css';

// Styles globaux (l'ordre compte : les variables d'abord)
import './styles/variables.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/animations.css';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
