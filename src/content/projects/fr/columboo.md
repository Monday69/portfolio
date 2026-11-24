---
title: Columboo
tagline: Plateforme SecOps multi-agents qui audite et corrige du code legacy critique (Delphi, C#), avec une IA 100 % locale.
order: 1
status: internship
categories: [ia, fullstack]
stack: [Python, FastAPI, Ollama, React, TypeScript, KVM]
context: BH Technologies, Nanterre
role: Stagiaire ingénieur IA & développement logiciel
period: Juin – sept. 2026
metric: { value: '94 %', label: 'des correctifs validés en 2 passes maximum' }
cover: ../../../assets/projects/columboo/fiche-faille.png
coverAlt: Fiche d'une faille d'injection SQL, code vulnérable surligné à la ligne 17 et correctif suggéré
gallery:
  - { src: ../../../assets/projects/columboo/cockpit-agents.png, alt: Cockpit multi-agents — verdict du Reviewer puis Planner et Developer }
  - { src: ../../../assets/projects/columboo/correctif-trace.png, alt: Correctif tracé — diff unifié avec l'identifiant de chaque patch }
  - { src: ../../../assets/projects/columboo/registre.png, alt: Grand Livre d'audit avec mapping OWASP ASVS et PCI-DSS }
  - { src: ../../../assets/projects/columboo/audit-console.png, alt: "Audit sémantique en direct, bloc par bloc" }
  - { src: ../../../assets/projects/columboo/triage.png, alt: Triage des failles par l'ingénieur }
  - { src: ../../../assets/projects/columboo/validation.png, alt: Écran de validation avant compilation en VM }
featured: true
---

## Le problème

Du code legacy critique (Delphi, C#) soumis à la conformité PCI-DSS doit être audité et corrigé, sans qu'aucune ligne ne quitte l'entreprise.

## La solution

Quatre agents LLM travaillent en boucle d'auto-correction, avec une inférence 100 % locale (Ollama sur Apple Silicon). Chaque correctif est compilé et validé dans une VM KVM isolée, puis consigné dans un registre d'audit immuable.

- API FastAPI : 74 routes REST/SSE et un ordonnanceur GPU à priorités.
- Interface React / TypeScript, mise à jour en temps réel.
- 259 tests pytest.

## Résultat

94 % des correctifs validés en deux passes maximum, avec des modèles et des prompts calibrés par des campagnes de tests.

_Code propriétaire : les captures sont réalisées sur un projet de démonstration fictif, sans code ni donnée de l'entreprise._
