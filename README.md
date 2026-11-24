# mbombrun.dev

Portfolio de Mattéo Bombrun, élève-ingénieur en IA appliquée.
Site statique construit avec [Astro](https://astro.build), servi par Caddy sur un VPS.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # vérification TypeScript + build dans dist/
```

## Ajouter un projet

Créer `src/content/projects/fr/<slug>.md`. Le frontmatter est validé au build
(voir `src/content.config.ts`) : titre, accroche, ordre, statut, catégories, stack…
Aucun composant à modifier.

## Arborescence

```
src/
  content/projects/fr/   une fiche Markdown par projet (en/ plus tard, mêmes slugs)
  components/            Hero, ProjectCard, Timeline, Topo (courbes de niveau)…
  layouts/               BaseLayout (SEO, en-tête, pied de page)
  pages/                 index.astro, projets/[slug].astro
  styles/                tokens.css (couleurs, typo), global.css
  i18n/                  textes d'interface
  data/                  infos personnelles, parcours, compétences
public/                  CV, favicon, robots.txt
```

## Déploiement

```bash
./deploy.sh            # build puis rsync de dist/ vers le VPS
```

Bloc Caddy correspondant :

```
mbombrun.dev {
    root * /srv/portfolio
    file_server
    encode zstd gzip
}

www.mbombrun.dev {
    redir https://mbombrun.dev{uri} permanent
}
```
