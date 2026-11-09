// Tout le contenu du site est ici.
// Pour changer un texte, un projet ou un lien : on modifie ce fichier, jamais les composants.

export const links = {
  linkedin: 'https://www.linkedin.com/in/TON-PROFIL', // TODO
  github: 'https://github.com/TON-PSEUDO', // TODO
  email: 'ton.email@exemple.fr', // TODO
  cv: '/cv.pdf', // déposer le fichier dans public/
};

// Les sections de la page, dans l'ordre (utilisées par le menu de gauche).
export const sections = [
  { id: 'accueil', label: 'Accueil', icon: 'home' },
  { id: 'a-propos', label: 'À propos', icon: 'user' },
  { id: 'projets', label: 'Projets', icon: 'laptop' },
  { id: 'parcours', label: 'Parcours', icon: 'branch' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
];

export const passions = ['[passion 1]', '[passion 2]', '[passion 3]'];

export const projects = [
  {
    title: 'DashBoardPassion',
    category: 'Projet perso',
    description:
      'Une app pour suivre mes livres, films, séries et animés, avec autocomplétion et affiches. Pensée pour être ouverte à tous, hébergée sur ma Raspberry Pi.',
    tags: ['UML', 'PlantUML', 'Raspberry Pi'],
    preview: 'collection',
    url: 'dashboard-passion.app',
  },
  {
    title: 'Les Improbables',
    category: 'Associatif',
    description:
      'Le site de l’association : photos, participants et formulaire de contact conforme RGPD. Déployé automatiquement à chaque push.',
    tags: ['React', 'TypeScript', 'Netlify', 'Formspark'],
    preview: 'site',
    url: 'lesimprobables.fr',
  },
  {
    title: 'Mesures Sylvac en Bluetooth',
    category: 'Alternance',
    description:
      'Connexion en Bluetooth Low Energy d’instruments de mesure Sylvac : scan des adresses, adaptateurs, lecture des mesures.',
    tags: ['Python', 'bleak', 'BLE'],
    preview: 'terminal',
    url: '~/ble-sylvac',
  },
  {
    title: 'Supervision Angular + MQTT',
    category: 'Alternance',
    description:
      'Reprise d’une architecture complète : front Angular, API backend, API bridge et broker MQTT pour faire remonter des données.',
    tags: ['Angular', 'MQTT', 'Mosquitto', 'MongoDB'],
    preview: 'chart',
    url: 'dashboard.local:4200',
  },
  {
    title: 'CESIZen',
    category: 'CESI · Projet solo',
    description:
      'Conception d’une solution logicielle de A à Z : cahier des charges, bête à cornes, diagramme pieuvre et diagrammes UML.',
    tags: ['UML', 'Cahier des charges', 'Analyse'],
    preview: 'usecase',
    url: 'cesizen · use-case.puml',
  },
  {
    title: '(RE)Sources Relationnelles',
    category: 'CESI · Projet en équipe',
    description:
      'Projet collaboratif : cadrage, diagrammes UML, schéma de base de données et soutenance devant jury.',
    tags: ['UML', 'BDD', 'Travail d’équipe'],
    preview: 'database',
    url: 'schema_bdd.mcd',
  },
];

export const experiences = [
  {
    hash: 'a3f9c21',
    title: 'Développeuse en alternance · [Entreprise]',
    detail: 'Contrat d’apprentissage, en parallèle du bachelor CDA au CESI.',
    date: 'sept. 2026 — auj.',
  },
  {
    hash: '7be0d14',
    title: 'Développeuse web en alternance · [Entreprise]',
    detail: '[Une ligne sur tes missions principales]',
    date: '2024 — août 2026',
  },
  {
    hash: '0e41b7a',
    title: '[Formation précédente]',
    detail: '[Diplôme, établissement]',
    date: '[année]',
  },
];

export const stack = [
  { folder: 'front/', items: ['React', 'TypeScript', 'Angular'] },
  { folder: 'back/', items: ['API REST', 'MongoDB'] },
  { folder: 'iot/', items: ['Python', 'bleak', 'MQTT'] },
  { folder: 'conception/', items: ['UML', 'PlantUML', 'Schéma BDD'] },
  { folder: 'outils/', items: ['Git', 'GitLab', 'Netlify', 'VS Code'] },
];
