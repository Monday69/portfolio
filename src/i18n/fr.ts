export const ui = {
  nav: { projects: 'Projets', path: 'Parcours', about: 'À propos', contact: 'Contact', cv: 'CV' },
  status: {
    internship: 'Stage · Étude de cas',
    production: 'En production',
    private: 'Projet privé',
    school: 'Projet de semestre',
    personal: 'Projet personnel',
    ongoing: 'En cours',
  },
  categories: {
    all: 'Tous',
    ia: 'IA & données',
    fullstack: 'Full-stack & 3D',
    iot: 'IoT & embarqué',
  },
  project: {
    back: 'Tous les projets',
    role: 'Rôle',
    context: 'Contexte',
    period: 'Période',
    stack: 'Stack',
    code: 'Code source',
    site: 'Voir le site',
    demo: 'Démo',
    privateCode: 'Code non public',
    prev: 'Projet précédent',
    next: 'Projet suivant',
    gallery: 'Captures',
  },
} as const;

export type Ui = typeof ui;
