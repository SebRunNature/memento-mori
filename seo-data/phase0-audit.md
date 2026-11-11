# Phase 0 — Audit technique (aucune modification du site)

Date de l'audit : 11 novembre 2026. Sources : code du dépôt, sitemap et codes HTTP du site en ligne.

## Exports Search Console
- `gsc-pages.csv` et `gsc-requetes.csv` : copiés dans ce dossier.
- Période exportée : depuis le 4 mai 2026 (indiquée par Sébastien ; date de fin à préciser). Les fichiers de ce dossier sont l'export complet depuis cette date (282 clics, 10 638 impressions toutes pages confondues).
- `gsc-requetes.csv` donne les requêtes sans la page associée : l'association requête → page sera une déduction par le sens, marquée comme telle.

## Stack
- Jekyll, construit par GitHub Pages (pas de Gemfile, pas de GitHub Actions). Domaine personnalisé via `CNAME`.
- Plugins activés (`_config.yml`) : `jekyll-seo-tag`, `jekyll-sitemap`. `jekyll-seo-tag` est activé mais la balise `{% seo %}` n'est pas utilisée : les balises sont écrites à la main dans `_layouts/default.html`.
- `future: false` : un article daté dans le futur n'est pas publié.

## Génération des articles et des URLs
- Articles : 44 fichiers dans `_posts/` (`AAAA-MM-JJ-slug.html` ou `.md`), layout `post` (qui hérite de `default`).
- `permalink: /blog/:year/:month/:day/:title/` → les articles ont une date dans l'URL.
- Les pages **sans date** (`/blog/age-biologique/`, `/blog/phenoage-algorithme-age-biologique/`, `/blog/biomarqueurs-age-biologique/`, `/blog/reduire-age-biologique/`, `/blog/age-biologique-vs-age-chronologique/`, `/blog/vo2max-longevite/`) ne sont pas des articles : ce sont des pages statiques `blog/<slug>/index.html`, avec layout `default` et leur propre JSON-LD. Leur URL est celle de leur dossier.
- Conséquence : deux familles de contenu aux mécanismes différents (articles datés vs pages statiques), ce qui explique le mélange d'URL.

## Sitemap
- Généré automatiquement par `jekyll-sitemap` (pas de fichier à maintenir). Une page est exclue avec `sitemap: false` dans son front matter (utilisé sur `/score/` et sur l'ancienne URL VO2max).
- Sitemap en ligne consulté le 11/11/2026 : 62 URL. Les **44 articles de `_posts/` y figurent tous**, dont les plus récents (9 novembre 2026). Rien ne manque.
- Les 6 pages statiques du blog y figurent aussi. `/score/` est absent (voulu).
- `lastmod` : date de l'article ou `last_modified_at` si présent ; pour les pages sans date, date du dernier build (12/10/2026 observée pour l'accueil, /montre/, etc.).

## Balises SEO (tout dans `_layouts/default.html`)
- `title` : `page.title` + « — Montre de Vie » (sauf si le titre contient déjà « Montre de Vie »). Attention : le suffixe compte dans la limite de 60 caractères de la phase 3.
- `meta description` : `page.description`, sinon description du site.
- **Canonical** : `{{ site.url }}{{ page.url }}`, auto-référent sur toutes les pages. Les pages statiques `blog/*/index.html` ont aussi un champ `canonical` dans le front matter, qui n'est **pas lu** par le layout (inoffensif tant que les deux valeurs sont identiques).
- Open Graph et Twitter Card : générés dans le layout. Image par défaut commune à tous les articles.
- **JSON-LD** : `BlogPosting` généré automatiquement pour tous les articles (layout `post`) ; blocs propres dans les 6 pages statiques du blog. **Aucun `WebApplication`** : ni `/montre/` ni l'accueil n'ont de JSON-LD.
- `noindex` : aucune page n'en porte aujourd'hui.

## Redirections : état actuel
- GitHub Pages ne permet **pas** de vraie 301 (pas de configuration serveur, pas de `.htaccess`).
- Mécanisme déjà utilisé dans le dépôt : page HTML de remplacement avec `<meta http-equiv="refresh">`, `<link rel="canonical">` vers la cible et `window.location.replace`, plus `sitemap: false`. Exemples : `/score/` → `/montre/`, ancienne URL VO2max.
- Constaté en ligne : ces pages répondent **HTTP 200**, pas 301. Google traite généralement un refresh instantané comme une redirection et consolide vers le canonical, mais c'est un signal moins fort qu'une 301 et plus lent à être pris en compte.
- Le plugin `jekyll-redirect-from` est disponible sur GitHub Pages mais n'est pas activé. Il génère le même type de page (refresh + canonical), pas une 301.

## Constats importants pour la suite
1. **La fusion VO2max a déjà été faite le 12/10/2026** (commit `cb189a9`) : l'URL du 24 juin est la version canonique, l'URL du 10 août est une redirection HTML. La ligne « 2 clics, 268 impressions » de l'export GSC correspond donc probablement à une URL déjà redirigée, ou à des données antérieures. Dépend de la période exportée : à vérifier.
2. ~~`blog/vo2max-longevite/index.html` pointe vers l'ancienne URL~~ : erreur d'audit. Le lien (ligne 330) pointe déjà vers l'URL du 24 juin. Rien à corriger.
3. `/don/` apparaît dans l'export (2 clics, 17 impressions) mais n'existe pas dans le dépôt et renvoie 404 en ligne. Sébastien confirme que la page n'existe plus : Google garde l'ancienne adresse en mémoire, aucune action.
4. `/grille/?age` est enregistré à part dans GSC : URL avec paramètre, sans canonical propre à la variante.
5. Pas de page 404 personnalisée.
6. Les articles datés ne portent pas de champ `canonical` dans leur front matter : le canonical est calculé, ce qui est correct.

## Ce que cette phase n'a pas pu vérifier
- Le rendu final du HTML (Jekyll n'est pas installé dans cet environnement) : les balises décrites viennent de la lecture du layout, pas d'un build local.
- Les redirections ont été testées uniquement sur `/score/` et l'ancienne URL VO2max.
