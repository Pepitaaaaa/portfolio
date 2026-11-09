# Portfolio — Sarah Louveau

Site vitrine en React + Vite. Aucune librairie d'animation : tout est en CSS.

```bash
npm install     # une seule fois
npm run dev     # lance le site en local
npm run build   # génère le site final dans dist/
```

## Organisation

```
public/                 fichiers servis tels quels (image, cv.pdf)
src/
├── main.jsx            point d'entrée : charge les polices et les styles globaux
├── App.jsx             assemble la page
│
├── data/
│   └── content.js      TOUT le contenu (textes, projets, liens) → c'est ici qu'on modifie
│
├── layout/             le cadre fixe autour de la page
│   ├── Topbar          barre du haut
│   ├── Sidebar         menu de gauche
│   └── StatusBar       barre du bas
│
├── sections/           les parties de la page, dans l'ordre
│   ├── Hero
│   ├── About
│   ├── Projects        + ProjectCard (une carte) + ProjectPreview (son illustration)
│   ├── Journey
│   └── Contact
│
├── components/         petites briques réutilisées par les sections
│   ├── Button          bouton / lien
│   ├── Window          bloc façon fenêtre de terminal
│   ├── SectionHeader   sur-titre + grand titre
│   ├── Reveal          apparition au scroll
│   ├── BigWord         grand mot en fond, qui glisse au scroll
│   └── Icons           icônes SVG
│
├── hooks/              la logique, séparée de l'affichage
│   ├── useInView         l'élément est-il visible ?
│   ├── useParallax       décalage au scroll
│   ├── useScrollExit     le contenu de l'accueil s'éloigne au scroll
│   ├── useMouseGlow      halo qui suit la souris
│   ├── useActiveSection  quelle section est à l'écran ?
│   └── useParisTime      heure de Paris
│
└── styles/             styles globaux
    ├── variables.css   couleurs, polices, tailles
    ├── base.css        remise à zéro + classes utilitaires
    ├── layout.css      cadre et sections
    └── animations.css  @keyframes + "réduire les animations"
```

**Règle :** chaque composant a son fichier `.css` à côté de lui, du même nom.
Les classes CSS suivent le schéma `bloc__element--variante`
(ex. `project-card__title`, `btn--primary`).

## RGPD

- Polices hébergées localement (pas de Google Fonts).
- Aucun cookie, aucun `localStorage`, aucune mesure d'audience → pas de bandeau cookies.
- Contact par simple lien `mailto:` (aucune donnée collectée).
- Mentions légales en bas de la section Contact (à compléter : hébergeur).
