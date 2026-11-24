export const site = {
  name: 'Mattéo Bombrun',
  title: 'Élève-ingénieur en IA appliquée',
  pitch:
    'Je construis des systèmes IA complets, du capteur et de la donnée jusqu’au produit utilisé en production.',
  availability: ['Stage de fin d’études', '6 mois', 'dès avril 2027', 'Lyon / Grenoble'],
  email: 'matteo.bombrun@esme.fr',
  linkedin: 'https://www.linkedin.com/in/matt%C3%A9o-bombrun-b67993257/',
  github: 'https://github.com/Monday69',
  cv: '/cv-matteo-bombrun.pdf',
  description:
    'Mattéo Bombrun, élève-ingénieur en IA appliquée (ESME). Agents LLM, vision par ordinateur, full-stack et embarqué. Recherche un stage de fin d’études de 6 mois dès avril 2027 à Lyon ou Grenoble.',
};

export const keyFigures = [
  { value: '94 %', label: 'de correctifs validés en 2 passes', source: 'Columboo' },
  { value: '787', label: 'tests automatisés', source: 'Jarvis Runner' },
  { value: '134 ms', label: 'de lecture OCR par livre', source: 'BIBL’IA Tech' },
  { value: '1', label: 'app utilisée au quotidien', source: 'ColocOS' },
];

export const timeline = [
  {
    period: '2022 – 2027',
    title: 'Diplôme d’ingénieur, majeure Intelligence Artificielle',
    place: 'ESME Paris',
    kind: 'formation',
    detail: 'LLM, RAG & agents · vision · deep learning · MLOps · cloud & DevOps · IoT',
  },
  {
    period: 'Juin – sept. 2026',
    title: 'Stagiaire ingénieur IA & développement logiciel',
    place: 'BH Technologies, Nanterre',
    kind: 'experience',
    detail: 'Columboo : système multi-agents en IA locale pour auditer et corriger du code legacy.',
  },
  {
    period: 'Août – déc. 2025',
    title: 'Mécanicien vélo (temps partiel)',
    place: '99 Bikes, Melbourne',
    kind: 'experience',
    detail: 'Plus de 15 vélos assemblés par jour, en anglais.',
  },
  {
    period: 'Juil. – déc. 2025',
    title: 'Semestre d’échange',
    place: 'Swinburne University of Technology, Melbourne',
    kind: 'formation',
  },
  {
    period: 'Étés 2022 – 2025',
    title: 'Mécanicien VTT, skiman en extra l’hiver',
    place: 'Altitudes Sports, L’Alpe d’Huez',
    kind: 'experience',
    detail: 'Descente, enduro, cross-country et électriques.',
  },
  {
    period: 'Juin – juil. 2022',
    title: 'Stagiaire logistique & data',
    place: 'Cummins, Chassieu',
    kind: 'experience',
    detail: 'Base de plus de 10 000 composants normalisée : −20 % de temps de préparation.',
  },
] as const;

export const skills = [
  {
    family: 'IA & données',
    items: ['Agents LLM', 'Ollama', 'YOLO', 'OpenCV', 'OCR', 'Séries temporelles', 'Pandas', 'NumPy'],
  },
  { family: 'Langages', items: ['Python', 'TypeScript', 'SQL', 'C# (Unity)', 'C++ (bases)'] },
  {
    family: 'Web & back-end',
    items: ['FastAPI', 'React', 'Three.js (R3F)', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
  },
  {
    family: 'Déploiement & outils',
    items: ['Linux', 'Docker', 'Caddy', 'VPS', 'KVM', 'Git', 'GitLab CI', 'pytest', 'Raspberry Pi'],
  },
] as const;
