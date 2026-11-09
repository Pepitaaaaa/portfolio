import { useState } from 'react';

import Topbar from './layout/Topbar.jsx';
import Sidebar from './layout/Sidebar.jsx';
import StatusBar from './layout/StatusBar.jsx';

import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Journey from './sections/Journey.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  // Le compteur de cafés est affiché dans "À propos" ET dans la barre du bas :
  // on le garde ici, dans leur parent commun.
  // Il n'est pas sauvegardé (ni cookie, ni localStorage) → rien à déclarer côté RGPD.
  const [coffees, setCoffees] = useState(11);
  const addCoffee = () => setCoffees((count) => count + 1);

  return (
    <div className="frame">
      <Topbar />
      <Sidebar />

      <main className="main">
        <Hero />
        <About coffees={coffees} onAddCoffee={addCoffee} />
        <Projects />
        <Journey />
        <Contact />
      </main>

      <StatusBar coffees={coffees} onAddCoffee={addCoffee} />
    </div>
  );
}
