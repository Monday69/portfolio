---
title: ColocOS
tagline: Jumeau numérique d'une cuisine partagée — frigo 3D synchronisé à l'inventaire réel, utilisé au quotidien par ma colocation.
order: 2
status: production
categories: [fullstack]
stack: [React Three Fiber, Node.js, Express, Prisma, PostgreSQL, Docker]
context: Projet personnel
role: Conception, développement et déploiement
cover: ../../../assets/projects/colocos/hero-3d-kitchen.png
coverAlt: Cuisine 3D de ColocOS avec le frigo ouvert et l'inventaire
gallery:
  - { src: ../../../assets/projects/colocos/inventory-fridge.png, alt: Inventaire du frigo avec dates de péremption }
  - { src: ../../../assets/projects/colocos/finance-split.png, alt: Partage des dépenses entre colocataires }
  - { src: ../../../assets/projects/colocos/nutrition-planner.png, alt: Suivi nutritionnel }
  - { src: ../../../assets/projects/colocos/recipes-planner.png, alt: Planificateur de recettes }
  - { src: ../../../assets/projects/colocos/auth-invite-flow.png, alt: Invitation et connexion par PIN }
links:
  github: https://github.com/Monday69/ColocOS
  site: https://coloc.mbombrun.dev
featured: true
---

## Le problème

Dans une colocation, personne ne sait ce qu'il reste dans le frigo, ce qui va périmer, ni qui doit combien à qui.

## La solution

Une PWA avec une cuisine en 3D (React Three Fiber) reliée à l'inventaire réel : scan de codes-barres, dates de péremption, nutrition et dépenses partagées. Back-end Node/Express, Prisma et PostgreSQL.

## Mise en production

L'application tourne sur mon VPS (Docker, Caddy) et a été sécurisée pour Internet : invitations, appareils de confiance (cookie HttpOnly, secret haché) et code PIN, rafraîchissement de session lié à l'appareil.
