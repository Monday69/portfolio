---
title: Jarvis Runner
tagline: Coach d'entraînement personnel — planification, analyse physiologique (CP, W′, ACWR) et assistant IA local.
order: 3
status: private
categories: [ia, fullstack]
stack: [FastAPI, PostgreSQL, Alembic, React, TypeScript, Ollama]
context: Projet personnel
role: Conception et développement
metric: { value: '787', label: 'tests automatisés' }
cover: ../../../assets/projects/jarvis/dashboard-desktop.png
coverAlt: Tableau de bord de Jarvis Runner avec la charge d'entraînement
gallery:
  - { src: ../../../assets/projects/jarvis/analytics-pdc-wellness.png, alt: Courbe de puissance et indicateurs de forme }
  - { src: ../../../assets/projects/jarvis/workout-builder.png, alt: Construction d'une séance par intervalles }
  - { src: ../../../assets/projects/jarvis/week-generator-modal.png, alt: Génération d'une semaine d'entraînement }
  - { src: ../../../assets/projects/jarvis/mobile-pwa.png, alt: Version mobile }
featured: true
---

## Le problème

Les plateformes d'entraînement affichent beaucoup de données, mais aident peu à décider quoi faire demain.

## La solution

Une application qui modélise la physiologie de l'athlète et en tire un plan : puissance critique et réserve anaérobie (Monod-Scherrer, W′bal de Skiba), charge aiguë/chronique (ACWR), score de forme, générateur de semaines et assistant IA local.

## Qualité

API FastAPI protégée par clé, schéma PostgreSQL versionné avec Alembic, 787 tests automatisés.

_Dépôt privé : les captures utilisent uniquement des données de démonstration._
