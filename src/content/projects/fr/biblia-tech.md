---
title: BIBL'IA Tech
tagline: Une photo d'étagère suffit pour repérer les livres bien rangés, mal rangés ou manquants — segmentation YOLO, OCR et réconciliation avec la base.
order: 4
status: school
categories: [ia]
stack: [YOLOv11-seg, PaddleOCR, OpenCV, FastAPI, React, SQLite]
context: ESME, projet de semestre en équipe de 3 (encadrant Alessandro Leite)
role: Modèles de vision — segmentation YOLO des tranches et reconnaissance de texte (OCR)
period: '2026'
metric: { value: '0,886', label: 'mask mAP@50 en segmentation des tranches' }
cover: ../../../assets/projects/biblia/resultat-etagere.jpg
coverAlt: Étagère analysée — chaque livre est segmenté, numéroté et coloré selon son statut de rangement
gallery:
  - { src: ../../../assets/projects/biblia/pipeline.jpg, alt: "Pipeline en 5 étapes — acquisition, marqueur ArUco, segmentation YOLO, OCR, réconciliation" }
  - { src: ../../../assets/projects/biblia/segmentation-yolo.jpg, alt: "Masques de segmentation YOLO sur des livres inclinés" }
  - { src: ../../../assets/projects/biblia/application-web.jpg, alt: "Écran de résultats de l'application — 17 livres attendus, 17 détectés" }
links:
  github: https://github.com/Monday69/BIBLIA-TECH
---

## Le problème

Vérifier l'inventaire d'une bibliothèque se fait encore livre par livre, à la main ou à la douchette. Une étagère complète prend de longues minutes et les livres mal rangés passent souvent inaperçus.

## La solution

L'utilisateur photographie une étagère depuis l'application mobile. Le pipeline fait le reste, en cinq étapes :

1. **Localisation** : un marqueur ArUco collé sur l'étagère l'identifie et charge son plan de rangement depuis SQLite.
2. **Segmentation** : YOLOv11-seg isole chaque tranche avec un masque polygonal, ce qui gère les livres penchés mieux qu'une boîte droite. Les annotations ont été accélérées avec SAM.
3. **Redressement** : égalisation CLAHE contre les reflets, puis homographie pour remettre chaque tranche à plat.
4. **Lecture** : PaddleOCR extrait titre et auteur, en 134 ms par livre en moyenne.
5. **Réconciliation** : un fuzzy matching (distance de Levenshtein) compare la lecture au plan attendu et classe chaque livre : bien placé, mal placé, intrus ou illisible.

Le tout est exposé par une API FastAPI et une interface React / TypeScript, encapsulée dans une application Android (Capacitor).

## Résultats

Évaluation sur 276 tranches, tirées d'une base de 303 ouvrages répartis sur 18 étagères :

- Segmentation : mask mAP@50 de 0,886, sans faux positif sur l'arrière-plan.
- Reconnaissance : 58,3 % des livres identifiés de façon fiable, 24,6 % à confirmer visuellement, 17 % non lus (tranches trop fines, reflets).
- Latence de bout en bout : 34,5 s pour une étagère de vingt livres, en réseau local.

## Ce que j'en retiens : l'échec de TrOCR

Avant PaddleOCR, j'ai fine-tuné TrOCR sur jusqu'à 76 500 tranches synthétiques (bruit, reflets, polices variées), environ 24 h d'entraînement sur une RTX 4070. Le modèle convergeait sur les données synthétiques, mais sur de vraies photos il inventait des titres mémorisés (CER de 1,18). Cette hallucination d'un OCR génératif nous a fait passer à PaddleOCR, qui ne peut pas inventer de texte. Le générateur et les scripts sont publiés dans [trocr-book-spines](https://github.com/Monday69/trocr-book-spines).

_Projet d'équipe avec Matteo Bergeron (application mobile) et Tom Valette (données, tests, design)._
