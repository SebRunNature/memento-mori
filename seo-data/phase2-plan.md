# Phase 2 — Corrections de cannibalisation (proposition, rien d'appliqué)

Données : exports Search Console depuis le 4 mai 2026 (`gsc-pages.csv`, `gsc-requetes.csv`), carte `keyword-map.csv`.
Le code a été relu article par article (plan, longueur, liens entrants) avant de proposer une fusion.

Résultat : après lecture, **une seule vraie fusion se justifie** (retraite anticipée). Les autres groupes visent des requêtes ou des angles distincts : les fusionner ferait perdre des pages qui ont leurs propres requêtes. Plusieurs lignes « fusionner » de la phase 1 sont donc révisées ci-dessous.

## Synthèse

| Groupe | Phase 1 | Proposition phase 2 | Redirection |
|---|---|---|---|
| Retraite anticipée (13 et 26 mai) | fusionner | **Fusionner** dans l'article du 26 mai | oui (13 mai → 26 mai) |
| VO2max (24 juin / 10 août) | fait | Déjà fusionné le 12/10 | déjà en place |
| `vo2max-longevite` | fusionner | **Garder et différencier** | non |
| Âge biologique (15 pages) | un principal | **Pas de fusion** ; hiérarchie par liens internes, pilier = `/blog/age-biologique/` | non |
| Score de vie | garder | **Garder les deux**, liens croisés | non |
| Espérance de vie Luxembourg (05-30 / 06-22) | fusionner | **Garder les deux**, retirer le doublon | non |
| Moringa (7 et 8 mai) | fusionner | **Laisser** | non |
| `/don/` | rediriger | Fait (PR #23) | oui, en ligne |

## 1. Retraite anticipée au Luxembourg — fusion proposée

Constat (code et données) :
- Même requête visée, deux titres presque identiques (« …que faire des 23 ans qui restent ? » / « …que faire de tes 20-25 années restantes en bonne santé ? »).
- 26 mai : 205 impressions, position 13,6, 0 clic, 2 721 mots. Contenu propre : réforme des pensions 2026 (cinq changements chiffrés, source officielle santesecu.public.lu), choc de la retraite, pension progressive, FAQ.
- 13 mai : 37 impressions, position 8,5, 1 clic, 4 013 mots. Contenu propre : trois « capitaux » (musculaire, social, de sens), calcul des années, cinq questions à se poser, FAQ.
- Requête « retraite anticipée luxembourg » : positions 27 à 31 (pages indéterminées).

**Page principale proposée : 26 mai** (5 fois plus d'impressions, sujet d'actualité qui correspond aux requêtes « retraite anticipée luxembourg »). Alternative défendable : le 13 mai, mieux placé et plus long. À trancher.

À reprendre du 13 mai dans le 26 mai (version condensée, pas de copier-coller) :
1. « Le calcul que personne ne fait » (années restantes).
2. Les trois capitaux, en une section d'environ 400 mots.
3. Les « 5 questions à se poser » (liste courte).
4. Les questions de FAQ absentes du 26 mai (healthspan, retraite et santé).
5. Les sources du 13 mai (STATEC, observatoire de la santé, RTL).

Modifications :
- `_posts/2026-05-26-retraite-anticipee-luxembourg-annees-longevite.html` : nouveau plan, `last_modified_at`, title et description à reformuler en phase 3.
- `_posts/2026-05-13-retraite-anticipee-luxembourg-23-ans-qui-restent.html` : remplacé par une page de redirection vers le 26 mai (même gabarit que `/don/` : refresh, canonical, `noindex`, `sitemap: false`). Le fichier doit rester dans `_posts/` pour garder l'URL datée du 13 mai.
- Liens internes à mettre à jour (vers le 13 mai) : `2026-05-30-vit-on-plus-longtemps-luxembourg.html`, `2026-05-14-cadre-ouvrier-luxembourg-esperance-vie-longevite.html`, `2026-05-26-…` (auto-lien à retirer).
- Retirer le 13 mai de la liste du blog : `blog/index.html` se met à jour seul, mais la page de redirection doit être exclue (à vérifier au build).

À vérifier avant publication `[CHECK]` : les chiffres de la réforme (calendrier +1/+2/+4/+6/+8 mois, taux 24 % → 25,5 %, plafond 3 200 → 4 500 €) viennent de l'article existant et d'une source officielle citée ; je ne les ai pas revérifiés à la source.

## 2. VO2max — déjà traité

- 24 juin : article principal. 10 août : redirection HTML en place depuis le commit `cb189a9` (12/10/2026), hors sitemap.
- Les 268 impressions du 10 août dans l'export sont probablement antérieures ou résiduelles ; aucune action.
- `vo2max-longevite` (2 440 mots, 82 imp., 3 clics, CTR 3,7 %, pos 21) : **13 pages y renvoient** (tout le cluster âge biologique et score). Sa structure (mortalité, normes, mesure, amélioration, FAQ) recoupe l'article du 24 juin, mais son angle est « longévité » (requête « vo2 max et espérance de vie »). Proposition : **garder**, recentrer sur l'angle espérance de vie (title, H1, introduction) en phase 3, et retirer ses tableaux de normes au profit d'un lien vers l'article du 24 juin. Une redirection obligerait à modifier 13 pages pour un gain incertain.

## 3. Âge biologique — pas de fusion

Les satellites correspondent à des requêtes distinctes visibles dans l'export :
- `phenoage` / `pheno age` / `phenoage test` → page PhenoAge (33 clics, la deuxième du site).
- `age biologique vs chronologique` → page « vs » (274 imp.).
- `comment connaitre / calculer son âge biologique` → article « comment connaître ».
- `age biologique` / `âge biologique calcul` / `age biologique def` → pilier.

Fusionner ferait perdre ces requêtes. Proposition :
- **Page principale du groupe : `/blog/age-biologique/`** (pilier), hors PhenoAge qui garde son rôle propre.
- Chaque satellite renvoie vers le pilier avec une ancre uniforme (« âge biologique : définition et calcul »), et le pilier renvoie vers chaque satellite. Diff limité aux blocs « Pour aller plus loin ».
- Deux recouvrements à examiner plus tard (phase 4, trop peu de données) : `reduire-age-biologique` (11 imp.) face à la partie « comment le réduire » du pilier ; `calculateur-age-biologique-comment-ca-marche` (0 imp.) face à `/methodologie/`.
- Le pilier est à la position 14,6 : le titre est à retravailler en phase 3, pas à fusionner.

## 4. Score de vie — garder les deux

- « Quel est un bon Score de Vie ? » (141 imp., CTR 2,1 %) et « Comment calculer son Score de Vie » (28 imp., CTR 10,7 %) répondent à deux intentions différentes. Aucune requête externe sur « score de vie » dans l'export : la notion est propre au site.
- Proposition : liens croisés entre les deux et vers `/score-de-vie/`, sans fusion. Pas de redirection.

## 5. Espérance de vie au Luxembourg

- 05-30 « Vit-on plus longtemps au Luxembourg ? » (333 imp.) et 06-22 « Espérance de vie en bonne santé… » (86 imp.) : angles distincts (durée de vie vs années en bonne santé), mais le 05-30 contient une section « Vivre longtemps, oui — mais en bonne santé ? » qui double le 06-22.
- Proposition : réduire cette section du 05-30 à un paragraphe avec lien vers le 06-22. Pas de redirection. Le 06-22 est déjà lié depuis le 05-10.

## 6. Moringa — laisser

- 7 mai (1 028 mots, 48 imp., pos 4,5) : généraliste ; 8 mai (1 041 mots, 8 imp.) : usage par les coureurs. Angles distincts, quasi aucun trafic : une fusion ne rapporterait rien. Les deux articles se citent déjà.

## Liste des redirections

| Source | Destination | Statut |
|---|---|---|
| `/don/` | `/` | en ligne (PR #23) |
| `/score/` | `/montre/` | en place |
| `/blog/2026/08/10/vo2max-selon-l-age-…/` | `/blog/2026/06/24/vo2max-selon-l-age-…/` | en place |
| `/blog/2026/05/13/retraite-anticipee-luxembourg-23-ans-qui-restent/` | `/blog/2026/05/26/retraite-anticipee-luxembourg-annees-longevite/` | **proposée** |

Rappel : sur GitHub Pages ces redirections répondent 200 avec refresh + canonical, pas 301 stricte.

## Décisions attendues
1. Retraite : page principale 26 mai (recommandé) ou 13 mai ?
2. `vo2max-longevite` : garder et recentrer (recommandé) ou fusionner dans l'article du 24 juin ?
3. Moringa, Score de vie, Luxembourg : tu valides « laisser / différencier » ?
