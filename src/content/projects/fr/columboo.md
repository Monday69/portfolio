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
cover: ../../../assets/projects/columboo/cover-columboo.png
coverAlt: Chaîne d'agents Columboo — Auditor, Planner, Developer, Reviewer et banc de compilation KVM sur VM isolée
gallery: []
featured: true
---

## Enjeu industriel

Chez BH Technologies, le patrimoine qui manipule des données de paiement tient dans trois bases legacy : **Titréo** (Delphi XE7 / Firebird), **Carteo** et **E-Gift** (.NET C#). La conformité **PCI-DSS v4.0** interdit que le code ou une donnée de carte sorte du réseau, ce qui élimine les LLM SaaS ; et les SAST classiques produisent des faux positifs massifs parce qu’ils ne comprennent ni le Pascal objet ni les idiomes Firebird.

## Architecture & 4 agents

Quatre tiers : interface React 19 / TypeScript, backend FastAPI (**74 routes**, **≈ 42 000 LOC**), inférence Ollama sur Mac Mini M6 (24 Go unifiés), validation dans une VM Windows 7 isolée. Un seul modèle résident à la fois, et le verdict final vient du compilateur.

| Agent | Modèle | Sortie |
| --- | --- | --- |
| Auditor | `BugTraceAI-Apex 26B` | Failles classées (CWE-89, CWE-78…) |
| Planner | `Cyber-agentic-27B` | Plan JSON, sans code |
| Developer | `Swift-Qwen-27B` | `EditHunk` ciblé, offsets recalculés |
| Reviewer | `Ornith-1.0-9B Q8_0` | Verdict motivé, critique réinjectée |

## Quatre verrous d'ingénierie résolus

<div class="verrous-grid">

<article class="verrou-card">
<h3>Thrashing de la mémoire unifiée</h3>
<p><b>Problème</b>Quatre modèles de 9 à 27 B dans 24 Go : charger le suivant pendant que le précédent se libère provoquait des ralentissements en cascade, parfois un <code>OOM</code> d’Ollama.</p>
<p><b>Arbitrage</b>Un singleton <code>GpuQueueManager</code> : une inférence à la fois, file à priorités, quota de 3 tâches par utilisateur, sonde <code>/api/ps</code> avant tout chargement.</p>
<p class="verrou-impact"><b>Impact</b><strong>Un seul modèle de 16 Go résident</strong>, plus de swap, débit stable même en audit de fond.</p>
</article>

<article class="verrou-card">
<h3>Hallucinations syntaxiques Delphi</h3>
<p><b>Problème</b>Des diffs plausibles qui ne compilaient pas : une déclaration <code>var</code> glissée entre <code>begin</code> et <code>end</code> donne <code>E2003</code>, réflexe hérité du C#.</p>
<p><b>Arbitrage</b>Règles du Pascal objet dans le prompt du Developer, Reviewer quantifié <code>Q8_0</code>, et compilation réelle <code>DCC32</code> avant tout verdict.</p>
<p class="verrou-impact"><b>Impact</b><strong>94 % des correctifs validés en ≤ 2 passes</strong>, le reste repart avec la critique du Reviewer.</p>
</article>

<article class="verrou-card">
<h3>Latence d’interface</h3>
<p><b>Problème</b>Le premier tableau de bord rafraîchissait tout toutes les deux secondes : 2 à 3 s de latence perçue sur une simple action de triage.</p>
<p><b>Arbitrage</b>Cache serveur des manifestes, parallélisation <code>Promise.all</code> des appels indépendants, UI optimiste affichée avant confirmation.</p>
<p class="verrou-impact"><b>Impact</b><strong>Boucle perçue &lt; 200 ms</strong>, y compris sur les fichiers de plusieurs milliers de lignes.</p>
</article>

<article class="verrou-card">
<h3>Faux état GPU cloud</h3>
<p><b>Problème</b>Un ancien profil OVH restait affiché alors que l’inférence tournait en local : le HUD mentait sur l’état réel de la machine.</p>
<p><b>Arbitrage</b>Priorité absolue au profil actif, et cache en <em>stale-while-revalidate</em> de 4 s pour l’état GPU.</p>
<p class="verrou-impact"><b>Impact</b><strong>Extinction détectée en &lt; 5 s</strong>, sans bloquer l’affichage pendant la vérification.</p>
</article>

</div>

## Local vs Cloud & qualification

| Critère | OVH L4 | Mac Mini M6 |
| --- | --- | --- |
| Puissance | 250 – 350 W | 30 – 50 W en charge · 3 – 7 W au repos |
| Coût | 0,80 € / h | 0 € au token |
| Latence d'appel | 80 – 150 ms | < 1 ms |
| Débit mesuré | 6,2 s / bloc | **7,46 s / bloc** |
| Confidentialité | Code hors du réseau | **Aucune ligne ne sort** |

Le cloud reste ~20 % plus rapide sur le calcul brut, mais consomme cinq à dix fois plus d'énergie : le passage en local, aidé par le fenêtrage à **4 096 tokens** et le **KV-Cache (−35 % de pré-remplissage)**, représente **−80 % d'énergie** à débit comparable.

- **259 tests `pytest`**, dont **41** dédiés à la résilience de l'inférence et du réseau.
- **0 `any`** sur 15 000 LOC TypeScript — typage strict de bout en bout.
- **Démarrage à froid < 2 min** : migration, vérification de la VM, premier modèle chargé, sans intervention humaine.

_Code propriétaire : captures et extraits proviennent d'un projet de démonstration fictif, sans code ni donnée de l'entreprise._
