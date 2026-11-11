# Phase 3 — Pages à potentiel (propositions, rien d'appliqué)

Date : 11 novembre 2026. Données : exports Search Console depuis le 4 mai 2026.

## Limite importante de cette étape
Le prompt demande de lire les 3 premiers résultats de chaque requête. **Je n'ai pas pu ouvrir les pages concurrentes** : leurs domaines (helsana.ch, suunto.com, futura-sciences.com, 24matins.fr, pourquoidocteur.fr, metricgate.com, etc.) ne sont pas accessibles depuis cet environnement. Ce que je sais d'eux vient **uniquement des extraits de résultats de recherche** (titres, résumés). Les listes « ce que font les autres » ci-dessous sont donc partielles ; les propositions de titres et de sections sont des brouillons à confirmer. De plus, la recherche web utilisée est américaine : l'ordre des résultats peut différer de Google France.

## 0. Constats transversaux (vérifiés dans le code)

1. **Suffixe de titre.** `_layouts/default.html` ajoute « — Montre de Vie » (17 caractères) à tout titre qui ne contient pas déjà « Montre de Vie ». Les titres des articles dépassent donc largement 60 caractères dans la balise `<title>` :

| Page | Titre actuel | Longueur réelle de la balise |
|---|---|---|
| VO2 max (24 juin) | VO₂max selon l'âge — tableau de normes et comment progresser | 76 |
| Calculer son espérance de vie | Comment calculer son espérance de vie ? Le guide complet | 72 |
| Courir (6 mai) | Courir augmente l'espérance de vie de combien d'années ? La science répond | 90 |
| Luxembourg travail (10 mai) | Espérance de vie au Luxembourg : combien d'années vraiment vivant ? Le calcul | 93 |
| Luxembourg vs France (24 mai) | Luxembourg vs France : qui vit le plus longtemps en 2026 ? (Moselle, Metz, Nancy vs Grand-Duché) | 112 |
| Vit-on plus longtemps (30 mai) | Vit-on plus longtemps au Luxembourg ? | 53 |

   **Proposition :** ne plus ajouter le suffixe sur les articles (`layout: post`) : la marque apparaît déjà dans l'URL affichée. Changement d'une ligne dans le layout, qui touche tous les articles. Les titres proposés ci-dessous font moins de 60 caractères **sans suffixe**.
2. **Écriture de « VO₂max ».** Les titres utilisent le caractère « ₂ » (indice Unicode), alors que les requêtes sont tapées « vo2 max » / « vo2max ». Hypothèse (non démontrée) : la correspondance est moins directe. Proposition : écrire « VO2 max » dans le title et la meta, garder « VO₂max » dans le texte.
3. **JSON-LD en double.** Le layout génère un `BlogPosting` pour tous les articles ; certains articles (10 mai, 24 mai, 30 août…) en ajoutent un deuxième dans leur code. À dédoublonner article par article, sans toucher aux blocs `FAQPage`.
4. **Alt text.** Le layout place une illustration commune à tous les articles avec un alt unique (« Memento Mori - Montre de Vie - Âge biologique et longévité au Luxembourg »). Aucune autre image dans les 6 pages auditées. Pas d'alt manquant, mais le même alt partout n'apporte rien : proposition d'un alt dérivé du titre de l'article (champ `image_alt` optionnel).
5. **Liens vers `/montre/`.** Les 6 pages en ont déjà 1 à 3. Les ancres actuelles sont courtes (« Montre de Vie », « ⚡ Lancer la Montre »). Les ancres proposées ci-dessous sont descriptives.
6. **`/methodologie/` et `/sources/`.** Absents de l'article VO2 max, de l'article « courir » et de l'article du 30 mai, alors qu'ils s'appuient sur des études (règle CLAUDE.md §7).
7. **`/montre/` (le calculateur).** Page autonome : pas de canonical, pas de JSON-LD. Proposition : ajouter `<link rel="canonical">` et un JSON-LD `WebApplication` (nom, URL, `inLanguage: fr`, offre à 0 €, catégorie santé/forme). **Pas de `aggregateRating`** : aucun avis n'existe.

## 1. VO2 max par âge (24 juin) — 2 259 imp., 21 clics, 0,93 %, pos 9,1
- Requêtes : vo2 max âge tableau (249 imp., pos 13), vo2max tableau, vo2 max homme 70 ans (13 imp., pos 6,9), tableau vo2 max par age.
- Vu dans les résultats (extraits) : tableaux séparés hommes / femmes (Helsana, A Faster You), tableaux de montres (Garmin, percentiles), guide Suunto, calculateurs en ligne (rundida, getfitcraft). Les sources et les marges d'erreur ne sont pas toujours visibles.
- **Notre page** : tableaux hommes et femmes par tranche de 10 ans (20-29, 30-39, 40-49…), étude JAMA et seuils de mortalité, estimation sans labo, déclin avec l'âge, protocoles. 2 921 mots, FAQ. **À vérifier :** présence des tranches 60-69 et 70+ (des requêtes visent « 70 ans », « 75 ans », « 80 ans »).
- Ce qu'aucun extrait ne montre et que nous pouvons apporter : lien avec la mortalité (cf. l'article « VO2 max et espérance de vie »), sources citées, calculateur.
- **Title proposé (49 car.) :** `VO2 max par âge : tableau hommes et femmes (2026)`
- **Meta proposée (133 car.) :** `Tableau du VO2 max par âge pour les hommes et les femmes, comment l'estimer sans laboratoire, ce qu'il indique et comment progresser.`
- **H1 :** `VO2 max par âge : tableau de normes hommes et femmes` (un seul H1).
- **Sections :** ajouter les tranches 60-69 et 70+ si absentes ; une courte section « lire ton résultat » ; lien vers l'article espérance de vie ; conserver les protocoles.
- **Liens `/montre/` :** « estimer ton espérance de vie et ton âge biologique avec ton niveau de VO2 max » (dans l'introduction) ; « le calculateur gratuit de Montre de Vie » (après le tableau).
- **JSON-LD :** dédoublonnage non nécessaire (aucun bloc propre) ; garder `BlogPosting` du layout ; ajouter `FAQPage` à partir de la FAQ existante.
- Aussi : lien vers `/methodologie/` et `/sources/`.

## 2. Comment calculer son espérance de vie (30 août) — 750 imp., 6 clics, 0,8 %, pos 13,4
- Requêtes : comment calculer l'espérance de vie (pos 8), calculer / calcul espérance de vie (pos 22-37), comment est calculé l'espérance de vie.
- Vu dans les résultats : explications actuarielles (tables de mortalité, INSEE), pages viager, vulgarisation (Futura), calculateurs (Sun Life), un site à formule simpliste non documentée. Les extraits décrivent le principe « espérance de vie = années restantes cumulées / survivants à l'âge x » (à citer depuis l'INSEE, non vérifié ici).
- **Notre page** : définition, calcul, tableau France par âge (ordre de grandeur), pourquoi les calculateurs divergent, limite d'une moyenne, suivi. 1 791 mots. Description actuelle : 241 caractères (trop longue, tronquée).
- Ce que nous avons et pas les autres (d'après les extraits) : un calculateur gratuit sans compte, une méthode publiée.
- **Title proposé (56 car.) :** `Comment calculer son espérance de vie : méthode et outil`
- **Meta proposée (133 car.) :** `Comment est calculée l'espérance de vie, pourquoi les calculateurs divergent, et comment estimer la tienne gratuitement, sans compte.`
- **Sections :** ajouter la définition actuarielle avec source INSEE `[CHECK]` ; vérifier que le tableau France est daté et sourcé.
- **Liens `/montre/` :** « estime ton espérance de vie en 11 questions » (introduction) ; « calculateur d'espérance de vie gratuit » (conclusion).
- Ajouter `/sources/`.

## 3. Courir et espérance de vie (6 mai) — 392 imp., 3 clics, 0,77 %, pos 5,8
- Le problème est le titre et la meta (pos 5,8, CTR 0,77 %), pas la position. Titre actuel : 90 caractères réels.
- Vu dans les résultats : ~3 ans de gain (université d'Iowa, revue *Progress in Cardiovascular Diseases*), « une heure de course = 7 heures de vie » (Futura), ~12 % de risque en moins pour marche et vélo, une étude sur 150 000 personnes cardio + musculation. Résultats observationnels.
- **Notre page** : « L'étude qui a tout changé », combien courir, coureurs d'élite, comparaison aux autres sports, démarrage. 863 mots, aucune source citée en fin d'article, 1 lien `/montre/`.
- **Title proposé (58 car.) :** `Courir et espérance de vie : combien d'années gagne-t-on ?`
- **Meta proposée (135 car.) :** `Courir est associé à environ 3 ans d'espérance de vie en plus dans les études d'observation. Ce que ça montre, ce que ça ne prouve pas.`
- **Sections :** préciser dès le début qu'il s'agit d'associations ; ajouter les références complètes `[CHECK : retrouver auteurs, année, DOI]` ; une section « ce que ça ne dit pas » ; sources.
- **Liens `/montre/` :** « voir l'effet de l'activité physique sur ton espérance de vie estimée » (milieu) ; « calculateur » (fin).
- JSON-LD : celui du layout suffit.

## 4. Espérance de vie au Luxembourg : trois pages sur la même requête
Requête : « espérance de vie luxembourg » (125 imp., pos 8,7) ; « vit-on plus longtemps et en bonne santé au luxembourg ? » (62 imp., pos 6) ; « niveau de vie luxembourg vs france » (68 imp., pos 9,9).
- **Vu dans les résultats :** Observatoire de la santé (83,2 ans en 2024 ; 85,5 femmes, 81,0 hommes), Eurostat via Lesfrontaliers (83,5 en 2024 selon un article), Paperjam, Luxtoday, étude de la Chambre des députés (2026). **Les sources divergent** (83,2 / 83,4 / 83,5 selon l'année et l'organisme).
- **Nos articles** utilisent aussi des chiffres variables : 83,4 (30 mai), 83,2 et 83,4 (24 mai), 83 (10 mai). **À harmoniser** sur une source datée.
- Proposition de répartition :
  - **30 mai** = page principale « espérance de vie Luxembourg » : title `Espérance de vie au Luxembourg : chiffres 2024, classement` (58 car.).
  - **24 mai** = comparaison avec la France : title `Luxembourg vs France : espérance de vie comparée (2026)` (55 car.) ; description actuelle de 185 caractères à ramener à ~150.
  - **10 mai** = angle « temps vraiment vivant » : title `Années vraiment vivant au Luxembourg : le calcul sur 83 ans` (59 car.).
- « niveau de vie luxembourg vs france » : intention différente (revenus, coût de la vie), à ne pas poursuivre sans données.
- Chiffres à confirmer à la source (Observatoire, Eurostat) avant de modifier le texte `[CHECK]`.

## Décisions attendues
1. Layout : supprimer le suffixe « — Montre de Vie » sur les articles ? (Recommandé.)
2. Valider les titres / metas proposés, page par page, ou m'indiquer ceux à reformuler.
3. Autoriser l'accès aux sites concurrents (réglage réseau de la session) pour compléter l'analyse, ou accepter de travailler sans.
4. Priorité : commencer par le VO2 max (24 juin) ?
