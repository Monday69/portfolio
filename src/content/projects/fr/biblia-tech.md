---
title: BIBL'IA Tech
tagline: Une photo d'étagère suffit pour repérer les livres bien rangés, mal rangés ou manquants — segmentation YOLO, OCR et réconciliation avec la base.
order: 2
status: school
categories: [ia]
stack: [YOLOv11, PaddleOCR, OpenCV, FastAPI, React / TS, Capacitor]
context: ESME, projet de semestre en équipe de 3 (encadrant Alessandro Leite)
role: Computer Vision — datasets, segmentation, OCR et réconciliation
period: '2026'
metric: { value: '0,886 mAP@50 · 303 livres', label: '18 étagères · 76 500 tranches synthétiques' }
cover: ../../../assets/projects/biblia/01-analyse-titres.jpg
coverAlt: Diagnostic d'une étagère avec marqueur ArUco — livres conformes, mal placés et non reconnus identifiés dans l'interface
gallery:
  - { src: ../../../assets/projects/biblia/01-analyse-titres.jpg, alt: "Diagnostic complet d'étagère dans l'interface : 15 ouvrages bien placés, 1 mal placé, 1 non reconnu, 0 illisible" }
  - { src: ../../../assets/projects/biblia/02-localisation-aruco.jpg, alt: "Marqueur fiduciaire ArUco en coin d'étagère liant la photographie au plan de rangement SQLite" }
  - { src: ../../../assets/projects/biblia/03-annotation-sam.jpg, alt: "Annotation polygonale assistée par SAM (active learning sur Roboflow) sur tranches serrées" }
  - { src: ../../../assets/projects/biblia/04-polygones-inclines.jpg, alt: "Masques polygonaux sur livres inclinés à 15°, évitant le bruit de fond des boîtes englobantes droites" }
  - { src: ../../../assets/projects/biblia/05-validation-yolo.jpg, alt: "Mosaïque d'inférence de validation YOLOv11n-seg sur des rayonnages denses et variés" }
  - { src: ../../../assets/projects/biblia/06-catalogue-bibliotheque.png, alt: "Gestion du catalogue de référence SQLite (303 ouvrages répartis sur 18 étagères ordonnées)" }
links:
  github: https://github.com/marmat3/BIBLIA-TECH
---

## Du rayonnage photographié à l'audit d'inventaire

Une photo d'étagère suffit : le marqueur ArUco identifie le rayonnage, YOLOv11n-seg (5,7 Mo) isole chaque tranche en polygone, l'homographie la redresse et PaddleOCR en lit le titre. RapidFuzz réconcilie ensuite la lecture avec les 303 ouvrages du plan de rangement, répartis sur 18 étagères.

## Quatre décisions de Computer Vision & R&D

<div class="verrous-grid">

<article class="verrou-card">
<p class="verrou-kpi">0,886 mAP@50 · 303 livres</p>
<h3>Segmentation polygonale &amp; benchmark YOLO</h3>
<p class="verrou-summary">Annotation en active learning via <code>SAM</code> (4 000 à 7 500 tranches) puis comparaison de trois générations : <code>YOLOv11n-seg</code> retenu face à <code>YOLOv8n</code> (livres inclinés) et à <code>YOLO26s</code> (10 s par étagère, faux positifs sur l'arrière-plan).</p>
<div class="verrou-tags"><span>YOLOv11n-seg</span><span>SAM</span><span>OpenCV</span></div>
</article>

<article class="verrou-card">
<p class="verrou-kpi">76 500 tranches · pivot CER 1,18</p>
<h3>Du fine-tuning TrOCR à PaddleOCR</h3>
<p class="verrou-summary">Dataset synthétique multilingue généré par <code>synthetic_factory.py</code> puis 24 h d'entraînement <code>TrOCR</code> sur RTX 4070 ; face aux hallucinations génératives sur photos réelles (CER 1,18), pivot assumé vers <code>PaddleOCR</code> discriminatif.</p>
<div class="verrou-tags"><span>PaddleOCR</span><span>TrOCR</span><span>RTX 4070</span></div>
</article>

<article class="verrou-card">
<p class="verrou-kpi">7 dictionnaires · CLAHE LAB</p>
<h3>Localisation ArUco &amp; redressement géométrique</h3>
<p class="verrou-summary">Détection multi-dictionnaires <code>ArUco</code>, exclusion du marqueur carré par ratio d'aspect (<code>H/W &gt; 2</code>), égalisation <code>CLAHE</code> (<code>clipLimit=2.0</code>, tuiles <code>8×8</code>) et projection <code>warpPerspective</code> tranche par tranche.</p>
<div class="verrou-tags"><span>ArUco</span><span>CLAHE</span><span>Homographie</span></div>
</article>

<article class="verrou-card">
<p class="verrou-kpi">58,3 % fiable · +24,6 % assisté</p>
<h3>Réconciliation RapidFuzz &amp; latence mesurée</h3>
<p class="verrou-summary">Score hybride <code>0,8 × token_set + 0,2 × token_sort</code> classant quatre états métier sur 276 tranches testées ; <code>34,5 s</code> de bout en bout pour une étagère complète, dont <code>1,29 s/livre</code> en OCR complet et <code>≈134 ms</code> par ouvrage en inférence.</p>
<div class="verrou-tags"><span>RapidFuzz</span><span>FastAPI</span><span>SQLite</span></div>
</article>

</div>

## Benchmark segmentation & répartition d'équipe

| Modèle | mask mAP@50 | mask mAP@50-95 | Arbitrage |
|---|---|---|---|
| YOLOv8n-seg | 0,891 | 0,768 | Écarté sur tranches inclinées |
| YOLOv11n-seg | 0,886 | 0,769 | Retenu — 5,7 Mo, généralisation stable |
| YOLO26s-seg | 0,872 | 0,773 | Écarté — 10 s par étagère, faux positifs sur l'arrière-plan |

Projet de semestre ESME (Majeure IA, encadré par Alessandro Leite), mené en trinôme avec Matteo Bergeron et Tom Valette : conception du pipeline Computer Vision, des jeux de données et des entraînements de mon côté ; interface React/TypeScript et packaging Android Capacitor par l'équipe. Le générateur de données et les scripts TrOCR sont publiés dans [trocr-book-spines](https://github.com/Monday69/script-d-entra-nement-OCR).
