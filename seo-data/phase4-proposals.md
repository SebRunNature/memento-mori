# Phase 4 — Pages faibles (propositions, rien d'appliqué)

Date : 11 novembre 2026. Données : exports Search Console depuis le 4 mai 2026 ; code du dépôt (mots, liens entrants, dates).
Aucune suppression ni redirection n'est faite sans ton accord.

## À savoir avant de lire le tableau

1. **« 0 impression » ne veut pas dire « page mauvaise ».** Cela peut vouloir dire que la page n'est **pas indexée** par Google. Je n'ai pas accès à ce rapport : dans Search Console, ouvre « Pages » (indexation) et regarde si l'URL est « Indexée » ou « Explorée, actuellement non indexée ». Selon le cas, l'action n'est pas la même (améliorer ou réindexer plutôt que fusionner).
2. **Les pages récentes ne se jugent pas.** Publiées depuis moins de deux mois (comparatifs, articles de novembre), elles n'ont pas eu le temps de se positionner.
3. **Volumes minuscules.** Les 20 pages de l'export sous 60 impressions cumulent 434 impressions sur six mois, contre 10 638 pour l'ensemble du site, et une vingtaine d'autres pages n'apparaissent pas du tout dans l'export. Le gain à attendre est faible : il vaut mieux consacrer l'effort aux 6 pages de la phase 3.
4. **Fusionner a un coût.** Chaque fusion demande de réécrire un article, de mettre à jour les liens internes et d'ajouter une redirection (refresh + canonical, pas une vraie 301 sur GitHub Pages).

## Propositions page par page

| Page | Impr. | Mots | Liens entrants | Constat | Action proposée |
|---|---|---|---|---|---|
| `/blog/2026/11/04/…vs-cleage/`, `…11/08/…vs-iscalculator/`, `…11/04/…vs-calculatrice-now/` (3 imp.) | 0-3 | 1 300-1 500 | 6 | Publiés il y a quelques jours | **Laisser** (pas d'autre comparatif, selon CLAUDE.md) |
| `/blog/2026/11/09/…fonctions-vitales…`, `…test-age-biologique-gratuit-ou-payant/` | 0 | 1 500-1 800 | 2 | Publiés il y a deux jours | **Laisser** |
| `/blog/2026/10/12/…vs-calcvita/`, `…10/13/…vs-age-reel/` | 18 / 12 | 1 100-1 200 | 7 / 6 | Environ un mois, positions 5 | **Laisser** |
| `/blog/2026/06/18/alimentation-anti-vieillissement…` | 3 | 2 638 | 6 | Position 7,3, requête peu fréquente | **Laisser** |
| `/blog/2026/06/26/stress-chronique…` | 29 | 3 252 | 2 | CTR 10 % | **Laisser** |
| `/blog/2026/06/17/sommeil-et-longevite…` | 14 | 2 432 | 7 | Position 10, requête très concurrentielle | **Laisser** (reprendre en phase 3 si le temps le permet) |
| `/blog/2026/05/14/cadre-ouvrier-luxembourg…` | 26 | 2 734 | 6 | Alimente le groupe Luxembourg | **Laisser** |
| `/blog/2026/05/17/age-biologique-luxembourg…` | 46 | 2 756 | **1** | Peu de liens entrants | **Améliorer** : lier depuis le pilier âge biologique et depuis le 30 mai |
| `/blog/2026/05/11/force-prehension…` | 59 | 3 264 | 17 | Bien relié, position 6,7, 1 clic | **Laisser** |
| `/blog/2026/06/05/comment-calculer-son-score-de-vie…` | 28 | 2 679 | 3 | CTR 10,7 % | **Laisser** |
| `/blog/2026/06/07/comment-ameliorer-son-score-de-vie…` | 0 | 3 009 | 10 | 0 impression, bien relié | **Laisser**, vérifier l'indexation |
| `/blog/2026/06/20/inflammation-chronique…` | 0 | 2 680 | 5 | Requête concurrentielle | **Laisser**, vérifier l'indexation |
| `/blog/2026/06/30/age-biologique-femme-vs-homme…` | 0 | 2 531 | 2 | Angle propre | **Laisser**, vérifier l'indexation |
| `/blog/2026/07/02/score-physique-apres-50-ans…` | 0 | 2 578 | 2 | Angle propre | **Laisser**, vérifier l'indexation |
| `/blog/reduire-age-biologique/` | 11 | 1 687 | 10 | Chevauche la partie « réduire » du pilier | **Laisser** |
| **`/blog/2026/06/11/score-de-vie-et-montre-de-vie…`** | 0 | 1 677 | **1** | Titre : « Espérance de vie et âge biologique : les deux chiffres que calcule la Montre de Vie » ; recoupe `/methodologie/` et l'article « calculateur… comment ça marche » | **Fusionner** dans l'article « calculateur… comment ça marche », puis rediriger |
| **`/blog/2026/06/03/calculateur-age-biologique-comment-ca-marche/`** | 0 | 2 355 | 5 | Recoupe `/methodologie/` et `/montre/` | **Améliorer** : le recentrer sur ce que la méthodologie ne dit pas (cas concrets, lecture d'un résultat), ou le fusionner dans `/methodologie/` |
| **`/blog/2026/05/05/pourquoi-compter-ses-secondes/`** | 0 | **461** | 1 | Texte court, notion de marque, 190 jours sans impression | **Fusionner** dans « Memento Mori — signification… » (même thème), puis rediriger |
| `/blog/2026/05/06/memento-mori-signification…` | 0 | 1 601 | 3 | Requête très concurrentielle (encyclopédies) | **Laisser**, vérifier l'indexation |
| **`/blog/2026/05/06/tikker-watch-alternative-gratuite/`** | 0 | 606 | 1 | Texte court, titre à superlatif (« la meilleure alternative gratuite ») contraire à CLAUDE.md §1.4 | **Améliorer** : relire la page de Tikker, réécrire en comparatif factuel selon le gabarit §5 ; à défaut, **noindex** |
| **`/blog/2026/05/08/zones-bleues-habitudes-centenaires…`** | 7 | 1 488 | 7 | Même thème que l'article du 28 juin | **Fusionner** dans `…06/28/zones-bleues-ce-qu-on-peut-vraiment-appliquer/` (plus complet, 2 526 mots), mettre à jour 7 liens |
| `/blog/2026/06/28/zones-bleues-ce-qu-on-peut-vraiment-appliquer/` | 0 | 2 526 | 3 | Destination de la fusion ci-dessus | **Améliorer** (reprend les habitudes utiles de l'article du 8 mai) |
| **`/blog/2026/05/07/trail-running-nature-longevite/`** | 14 | 692 | 2 | Texte court, recoupe l'article Mullerthal | **Fusionner** dans `…05/22/trail-grande-region-mullerthal…`, puis rediriger |
| `/blog/2026/05/22/trail-grande-region-mullerthal…` | 0 | 2 876 | 3 | Angle trail, proche de ton autre site run-nature.com | **À trancher** : voir « Trail » ci-dessous |
| `/blog/2026/05/08/moringa-coureurs-trail…` | 8 | 712 | 2 | Affirmations non sourcées (voir `moringa-audit.md`), lien vers un ebook | **Améliorer** (même traitement que l'article du 7 mai) |
| `/blog/2026/05/07/moringa-longevite-science/` | 48 | 1 139 | 1 | Réécrit le 11 novembre | **Laisser** ; ajouter des liens entrants |
| `/grille/` (`/grille/?age`) | 4 | 51 | 1 | Page autonome, variante avec paramètre indexée | **Améliorer** : ajouter un canonical vers `/grille/` (sans paramètre) |
| `/blog/` | 14 | — | 51 | Page d'index | **Laisser** |
| `/sources/`, `/limites/`, `/faq/`, `/apropos/`, `/contact/`, `/confidentialite/`, `/score-de-vie/` | 0-11 | 200-1 800 | 4-20 | Pages de confiance ou d'usage, pas faites pour attirer de recherches | **Laisser** |

## Trail : une décision à prendre
Quatre pages parlent de course et de trail (Mullerthal, trail et nature, moringa coureurs, zones bleues coureurs), sans trafic notable, alors que ton autre site, run-nature.com, traite le même sujet. Trois options :
1. **Les garder**, sans investir (statu quo).
2. **Les regrouper** en un seul article trail (fusions ci-dessus).
3. **Les transférer** vers run-nature.com avec une redirection (risque : perte des quelques liens internes ; nécessite un accès à l'autre site).
Si l'article Mullerthal reprend du texte publié sur run-nature.com, il faut vérifier le **doublon** (canonical vers l'original, ou réécriture).

## Récapitulatif
- **Fusions proposées : 4** (score et Montre → comment ça marche ; compter ses secondes → Memento Mori ; zones bleues du 8 mai → 28 juin ; trail et nature → Mullerthal).
- **Améliorations : 6** (comment ça marche, Tikker, zones bleues 28 juin, moringa coureurs, âge biologique Luxembourg, `/grille/`).
- **Noindex : 0** pour l'instant (une seule piste, Tikker, si la page n'est pas reprise).
- **Laisser : le reste.**

## Décisions attendues
1. Peux-tu vérifier dans Search Console l'indexation des pages à 0 impression ? (Je te donne la liste ; sinon, je les laisse telles quelles.)
2. Valides-tu les 4 fusions ? Une à une, ou toutes ?
3. Trail : option 1, 2 ou 3 ?
4. Tikker : comparatif factuel ou noindex ?
