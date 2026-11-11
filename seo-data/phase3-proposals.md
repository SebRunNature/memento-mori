# Phase 3 — Pages à potentiel (propositions, rien d'appliqué)

Date : 11 novembre 2026. Données : exports Search Console depuis le 4 mai 2026.
Version 2 : les pages concurrentes ont été lues (via `curl`, après autorisation réseau).

## Ce qui a pu être lu et ce qui ne l'a pas été
- **Lues :** Helsana, A Faster You (VO2 max) ; Futura, 24matins, Pourquoi Docteur (courir) ; Futura, Metricgate (calcul de l'espérance de vie) ; Paperjam, Luxtoday (Luxembourg).
- **Non lues :** Suunto, Synonyme-du-mot, Lesfrontaliers (réponse 403, accès refusé aux robots).
- La recherche web utilisée est américaine : l'ordre des résultats peut différer de Google France. Les « 3 premiers résultats » sont ceux de cette recherche, pas forcément ceux de Google.fr.

## 0. Constats transversaux (vérifiés)

1. **Suffixe de titre.** `_layouts/default.html` ajoute « — Montre de Vie » (16 caractères avec l'espace) à tout titre qui ne contient pas déjà « Montre de Vie ». Balises `<title>` réelles, relevées sur le site en ligne :

| Page | Balise `<title>` réelle | Long. |
|---|---|---|
| VO2 max (24 juin) | VO₂max selon l'âge — tableau de normes et comment progresser — Montre de Vie | 76 |
| Luxembourg vs France | Luxembourg vs France : qui vit le plus longtemps en 2026 ? (Moselle, Metz, Nancy vs Grand-Duché) — Montre de Vie | 112 |
| PhenoAge | PhenoAge : calcule ton âge biologique gratuitement (formule Levine 2018) — Montre de Vie | 87 |

   Google coupe autour de 60 caractères : la fin du titre (et donc l'argument qui donne envie de cliquer) n'est pas visible. **Proposition :** ne plus ajouter le suffixe sur les articles, et écrire des titres de 60 caractères maximum. Changement d'une ligne dans le layout.
2. **« VO₂max » avec indice.** Les deux pages concurrentes lues écrivent « VO2max » / « VO2 Max » sans indice, comme les requêtes. Hypothèse (non démontrée) : écrire « VO2 max » dans le title et la meta aide la correspondance ; garder « VO₂max » dans le texte.
3. **JSON-LD en double.** Le layout génère un `BlogPosting` pour tous les articles ; certains en ajoutent un deuxième dans leur code (10 mai, 24 mai, 30 août…). À dédoublonner.
4. **Alt text.** Une seule illustration, commune à tous les articles, avec un alt unique. Aucun autre `<img>` dans les 6 pages. Proposition : alt dérivé du titre de l'article.
5. **Liens `/montre/`.** Les 6 pages en ont 1 à 3, avec des ancres courtes. Ancres descriptives proposées ci-dessous.
6. **`/methodologie/` et `/sources/`** absents de l'article VO2 max, de l'article « courir » et de l'article du 30 mai.
7. **`/montre/`** : pas de canonical ni de JSON-LD. Proposition : canonical + `WebApplication` (nom, URL, `inLanguage: fr`, offre à 0 €). **Pas d'`aggregateRating`** (aucun avis).

## 1. VO2 max par âge (24 juin) — 2 259 imp., 21 clics, 0,93 %, pos 9,1
**Ce que font les résultats lus**
- *A Faster You* — titre « VO2 Max par Âge: Tableau Femme & Homme (ACSM, 2026) » (51 car.) : tableaux hommes / femmes, percentiles, « comment lire le tableau », méthodologie, fiabilité de la montre, section longévité, FAQ avec JSON-LD `FAQPage`. La source (ACSM) et l'année sont dans le titre.
- *Helsana* — « VO2max : définition, valeurs et entraînement » : 6 tableaux, tranches de 5 ans (20-24 … 60-65), calcul, entraînement, effet de la perte de poids.
- Les deux utilisent « VO2 » sans indice et mettent le tableau en tête.

**Ce que tous ont :** tableaux par sexe, entraînement, calcul / estimation.
**Ce qu'un seul a :** percentiles, FAQ balisée, fiabilité de la montre, section longévité.
**Ce qu'aucun n'a et que nous pouvons montrer :** le lien chiffré avec la mortalité d'après les études (cf. l'article « VO2 max et espérance de vie »), un calculateur qui intègre le VO2 max, la méthode publiée, la mention de ce qu'une estimation de montre ne mesure pas.

**Notre page :** tableaux hommes et femmes par tranche de 10 ans (20-29 … ), étude JAMA, estimation, déclin, protocoles ; FAQ sans JSON-LD ; 2 921 mots. **À vérifier :** tranches 60-69 et 70+ (les requêtes visent 70, 75 et 80 ans).

- **Title proposé (56 car.) :** `VO2 max par âge : le tableau pour savoir où tu te situes`
- **Meta proposée (133 car.) :** `Tableau du VO2 max par âge pour les hommes et les femmes, comment l'estimer sans laboratoire, ce qu'il indique et comment progresser.`
- **H1 :** `VO2 max par âge : tableau de normes hommes et femmes`
- **Sections à ajouter :** « comment lire le tableau » ; tranches 60-69 et 70+ si absentes ; paragraphe sur la fiabilité d'une estimation de montre (d'après nos propres limites) ; source des normes citée dans la page et dans le titre si confirmée `[CHECK : origine exacte de nos tableaux]`.
- **Liens `/montre/` :** « estimer ton espérance de vie et ton âge biologique avec ton VO2 max » (introduction) ; « calculateur gratuit de Montre de Vie » (sous le tableau).
- **JSON-LD :** ajouter `FAQPage` depuis la FAQ existante ; garder `BlogPosting` du layout.
- Ajouter `/methodologie/` et `/sources/`.

## 2. Comment calculer son espérance de vie (30 août) — 750 imp., 6 clics, 0,8 %, pos 13,4
**Ce que font les résultats lus**
- *Futura* (« Longévité : et si vous calculiez votre espérance de vie ! », 1 447 mots) : article d'actualité sur un calculateur américain, sans méthode détaillée.
- *Metricgate* (« Espérance de vie - Calculateur ») : page statistique générique (méthodologie, étapes, code R, limites, FAQ balisée), qui ne répond pas à la question d'un particulier.
- *Synonyme-du-mot* : non lu.

**Ce que tous ont :** une explication de principe. **Ce qu'aucun n'a (d'après ces deux pages) :** une estimation personnelle utilisable tout de suite, avec la méthode publiée et les limites dites.

**Notre page :** définition, calcul, tableau France par âge (ordre de grandeur), pourquoi les calculateurs divergent, limite d'une moyenne. 1 791 mots. Description actuelle : 241 caractères.

- **Title proposé (57 car.) :** `Calculer son espérance de vie : la méthode et ton chiffre`
- **Meta proposée (133 car.) :** `Comment est calculée l'espérance de vie, pourquoi les calculateurs divergent, et comment estimer la tienne gratuitement, sans compte.`
- **Sections :** définition actuarielle (tables de mortalité) avec source INSEE `[CHECK]` ; vérifier que le tableau France est daté et sourcé.
- **Liens `/montre/` :** « estime ton espérance de vie en 11 questions » (introduction) ; « calculateur d'espérance de vie gratuit » (conclusion).
- Ajouter `/sources/`. JSON-LD : dédoublonner.

## 3. Courir et espérance de vie (6 mai) — 392 imp., 3 clics, 0,77 %, pos 5,8
Le problème est le titre et la meta (position 5,8).

**Ce que font les résultats lus** (tous résument la même étude : université d'État de l'Iowa, *Progress in Cardiovascular Disease*)
- *Futura* — « Courir une heure pourrait vous faire gagner sept heures de vie » (62 car.), 1 411 mots, comparaison course / marche / vélo.
- *24matins* — « Courir régulièrement peut faire gagner 3 ans d'espérance de vie » (63 car.), 751 mots, « 3 ans gagnés en 6 mois de running », « Pas immortel ».
- *Pourquoi Docteur* — « Running : une heure fait gagner 7 heures de vie » (47 car.), 397 mots.
- Les trois utilisent un **chiffre concret dans le titre** (3 ans, 7 heures). Ce sont des articles d'actualité courts, sans FAQ ni tableau.

**Ce qu'aucun n'a :** les limites (association observationnelle), la référence complète de l'étude, la dose (combien courir), le lien avec un calcul personnel.

**Notre page :** 863 mots, aucune source en fin d'article, 1 lien `/montre/`.

- **Title proposé (52 car.) :** `Courir augmente l'espérance de vie : le chiffre réel`
- **Meta proposée (135 car.) :** `Courir est associé à environ 3 ans d'espérance de vie en plus dans les études d'observation. Ce que ça montre, ce que ça ne prouve pas.`
- **Sections :** placer l'ordre de grandeur et son statut (association) en tête ; références complètes `[CHECK : auteurs, année, DOI de l'étude de l'Iowa]` ; section « ce que ça ne dit pas » ; sources.
- **Liens `/montre/` :** « voir l'effet de l'activité physique sur ton espérance de vie estimée » ; « calculateur gratuit ».
- Attention aux chiffres cités par les concurrents (40 % de mort prématurée en moins, 7 heures par heure) : ne les reprendre qu'avec la publication d'origine en main.

## 4. Espérance de vie au Luxembourg : trois pages sur la même requête
Requêtes : « espérance de vie luxembourg » (125 imp., pos 8,7) ; « vit-on plus longtemps et en bonne santé au luxembourg ? » (62 imp., pos 6) ; « niveau de vie luxembourg vs france » (68 imp., pos 9,9).

**Ce que font les résultats lus :** *Paperjam* (321 mots, STATEC : 83,4 ans en 2023, femmes plus longévives) et *Luxtoday* (actualité Eurostat, Luxembourg parmi les premiers) sont des brèves. Les sources officielles (Observatoire de la santé, STATEC, Eurostat) dominent la page de résultats. Lesfrontaliers : non lu.

**Chiffres divergents** (résultats de recherche) : 83,4 en 2023 (STATEC, Paperjam) ; 83,2 en 2024 (Observatoire de la santé) ; 83,5 en 2024 (Eurostat, d'après un article non lu). Nos articles citent 83, 83,2 et 83,4 selon la page : **à harmoniser** sur une source datée `[CHECK]`.

**Répartition proposée :**
- **30 mai** = page principale. Title (51 car.) : `Espérance de vie au Luxembourg : et en bonne santé ?`
- **24 mai** = comparaison. Title (52 car.) : `Luxembourg ou France : où vit-on le plus longtemps ?` ; description actuelle de 185 caractères à ramener à ~150.
- **10 mai** = angle « temps vraiment vivant ». Title (59 car.) : `Années vraiment vivant au Luxembourg : le calcul sur 83 ans`.
- « niveau de vie luxembourg vs france » : intention différente (revenus, coût de la vie) ; ne pas poursuivre sans données.

## Décisions attendues
1. Supprimer le suffixe « — Montre de Vie » sur les articles (recommandé) ?
2. Valider les titres / metas ci-dessus, page par page.
3. Commencer par le VO2 max (24 juin) ?
