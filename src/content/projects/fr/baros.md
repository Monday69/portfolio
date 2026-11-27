---
title: BarOS
tagline: Bar à cocktails automatisé — un Raspberry Pi pilote 12 électrovannes pour doser chaque ingrédient.
order: 3
status: personal
categories: [iot, fullstack]
stack: [Raspberry Pi, FastAPI, React 19, Three.js, SQLite, Docker]
context: Projet personnel
role: Électronique, back-end et interface
metric: { value: '12 cuves · 73 routes', label: 'pilotage temps réel sur 14 tables SQL' }
cover: ../../../assets/projects/baros/5_assignation_cuves.png
coverAlt: Jumeau 3D interactif des 12 cuves — chaque pompe est mappée à une boisson et surlignée en émissif
gallery:
  - { src: ../../../assets/projects/baros/2_selection_cocktails.png, alt: "Catalogue dynamique filtré selon les boissons assignées aux 12 cuves" }
  - { src: ../../../assets/projects/baros/3_presentation_cocktail.png, alt: "Fiche détaillée calculée à la volée — degré d'alcool, sucres, coût de revient, marge et contrôle volumique" }
  - { src: ../../../assets/projects/baros/4_custom_cocktail.png, alt: "Configurateur sur mesure pour doser un cocktail au millilitre près" }
  - { src: ../../../assets/projects/baros/5_assignation_cuves.png, alt: "Jumeau 3D interactif (Three.js) — mapping des boissons sur les 12 pompes avec surlignage émissif" }
  - { src: ../../../assets/projects/baros/6_arriere_boutique.png, alt: "Arrière-boutique — gestion des réserves, alertes de niveau et transferts vers les cuves" }
  - { src: ../../../assets/projects/baros/8_profil.png, alt: "Profil utilisateur et cockpit admin — alcoolémie estimée (Widmark), dépenses, recommandations, crédits et exports CSV/XLSX" }
  - { src: ../../../assets/projects/baros/9_reglage_cuves.png, alt: "Réglage d'une cuve — prix d'achat et enrichissement nutritionnel par code-barres OpenFoodFacts, avec cache SQLite hors-ligne" }
circuit:
  image: ../../../assets/projects/baros/schema-cablage.png
  title: Schéma de câblage · 12 électrovannes, double carte relais & Raspberry Pi
  alt: "Schéma électronique complet de BarOS : alimentation 12 V, convertisseur DC-DC, deux modules 8 relais, 12 électrovannes avec diodes de roue libre, Raspberry Pi, lecteur NFC, anneau LED et écran tactile Waveshare"
  embedUrl: https://app.cirkitdesigner.com/project/3c3d8b7b-426b-4911-8215-8e80d87d5fbb?view=interactive_preview
  projectUrl: https://app.cirkitdesigner.com/project/3c3d8b7b-426b-4911-8215-8e80d87d5fbb
links:
  github: https://github.com/Monday69/BarOS_V4
---

## Du scan bouteille au pilotage des 12 cuves

BarOS V4 relie douze cuves à une PWA React 19 : 73 routes FastAPI sur 14 tables SQLite, le tout en Docker derrière Nginx, pour environ 14 500 lignes. Une bouteille scannée rejoint le jumeau 3D, la machine prépare, Hybrid-Pay encaisse.

## Quatre choix d'ingénierie clés

<div class="verrous-grid">

<article class="verrou-card">
<p class="verrou-kpi">×730 · écart &lt; 6 ms</p>
<h3>Physique des fluides analytique</h3>
<p class="verrou-summary">Remplacement de la simulation pas-à-pas du débit gravitaire par la solution fermée de Torricelli — exacte même en fin de cuve et couverte par 29 tests unitaires.</p>
<div class="verrou-tags"><span>Torricelli</span><span>29 tests</span><span>Python</span></div>
</article>

<article class="verrou-card">
<p class="verrou-kpi">0 débit fantôme</p>
<h3>Transactions &amp; remboursement idempotent</h3>
<p class="verrou-summary">Un verrou <code>asyncio.Lock</code> sérialise les pompes, un triple contrôle renvoie <code>402</code> avant versement, et <code>_refund_sequence</code> recrédite atomiquement les seules étapes non servies en cas de panne.</p>
<div class="verrou-tags"><span>asyncio.Lock</span><span>HTTP 402</span><span>SQLite</span></div>
</article>

<article class="verrou-card">
<p class="verrou-kpi">12 cuves · 8 → 60 s</p>
<h3>Jumeau 3D, mixeur CMY &amp; file adaptative</h3>
<p class="verrou-summary">Mapping explicite des nœuds GLTF avec surlignage émissif, correction colorimétrique CMY par <code>max</code>, et file WebSocket FIFO à backoff exponentiel avec code à 6 chiffres.</p>
<div class="verrou-tags"><span>Three.js</span><span>WebSocket</span><span>CMY</span></div>
</article>

<article class="verrou-card">
<p class="verrou-kpi">Hybrid-Pay · fenêtre 12 h</p>
<h3>Paiement, scan hors-ligne &amp; Widmark</h3>
<p class="verrou-summary">Recharge Stripe par QR code (webhook signé), badge UID + PIN <code>bcrypt</code>, cache SQLite OpenFoodFacts hors-ligne et courbe d'alcoolémie Widmark avec suggestions pondérées.</p>
<div class="verrou-tags"><span>Stripe QR</span><span>bcrypt</span><span>OpenFoodFacts</span><span>Widmark</span></div>
</article>

</div>

## État logiciel et avancement matériel

La stack Docker complète tourne : 12 relais actifs à l'état bas, plafond anti-inondation de 30 s et bascule automatique en simulation. Le schéma de câblage est finalisé et les composants sont reçus ; le câblage est en cours de réalisation, avant le couplage GPIO et l'assemblage du châssis.

_Modèle 3D de la machine réalisé par Corentin Haverlant._
