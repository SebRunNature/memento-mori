# Routine SEO du lundi

Objectif : chaque lundi, repérer en 15 minutes les pages qui méritent un coup de pouce, sans produire de contenu en masse. On ne change que des pages bien choisies, et on note tout dans `seo-log.md`.

## 1. Comment lancer la routine

Dis simplement à Claude : **« Lance la routine SEO du lundi »**. Il fait le reste.

Les données Search Console peuvent venir de deux sources :

**Source A (recommandée) : le connecteur Supermetrics, déjà branché.** Claude interroge Google Search Console directement (site `sc-domain:montre-de-vie.com`). Tu n'as rien à exporter. Limites constatées le 11 novembre 2026 sur l'offre gratuite :
- 100 lignes maximum par requête ;
- seulement les données récentes (depuis le 28 octobre 2026 à cette date) ;
- une allocation quotidienne de requêtes (elle se renouvelle toutes les 24 heures) ;
- la période d'essai gratuite a expiré le 24 octobre : si le connecteur cesse de répondre, passe à la source B.

**Source B : exports manuels.** Dans Search Console → Performances → Résultats de recherche, choisis les 28 derniers jours, puis exporte (bouton « Exporter » en haut à droite, format CSV) :
1. l'onglet **Pages** → `gsc-pages.csv` ;
2. l'onglet **Requêtes** → `gsc-requetes.csv` ;
3. si tu peux, la vue **Requêtes × Pages** (clique sur une page puis ouvre l'onglet Requêtes) pour les 5 pages les plus visibles.

Dépose les fichiers dans `seo-data/exports/AAAA-MM-JJ/` (la date du lundi), par exemple sur GitHub avec « Add file → Upload files », puis préviens Claude.

## 2. Les 5 étapes (ce que fait Claude)

1. **Requêtes en position 5 à 15.** Liste des requêtes dont la position moyenne est entre 5 et 15, avec clics, impressions et page. Ce sont celles qu'un petit changement peut faire monter, parce qu'elles sont déjà proches de la première page.
2. **Regrouper par page et garder les 3 pages les plus visibles.** Pour chaque page, Claude dit précisément ce qu'il propose d'ajouter ou de changer : title, meta description, une section qui répond mieux à la requête, un lien interne manquant, une source.
3. **Ignorer les pages modifiées depuis moins de 60 jours.** Claude lit `seo-log.md` : une page touchée récemment est laissée tranquille, pour laisser à Google le temps de la réévaluer et éviter de changer deux fois pour rien.
4. **Vérifier le sitemap.** Commande : `python3 seo-data/check-sitemap.py`. Elle vérifie que chaque article publié, dont le dernier, est dans `https://montre-de-vie.com/sitemap.xml`. Si un article manque, c'est un problème technique à traiter avant le reste.
5. **Noter chaque modification dans `seo-log.md`**, avec la date, la page et ce qui a été changé.

## 3. Règles à respecter

- Les règles de rédaction de `CLAUDE.md` s'appliquent à toute modification : rien d'inventé, chaque chiffre de santé a une source, pas de ton marketing, tes éléments personnels n'ont besoin que de ta relecture.
- **Au maximum 3 pages par semaine.** Sans quoi on ne saura pas ce qui a fonctionné.
- Rien n'est poussé ni fusionné sans ton accord. Une page n'est jamais supprimée sans redirection validée.
- Avant de modifier un article, relire ce qui a déjà été corrigé en phase 3 (`phase3-proposals.md`).
- Si une requête vient d'une page redirigée (par exemple l'ancien article VO₂max du 10 août), regarder la page de destination.

## 4. Calendrier utile

| Quand | Quoi |
|---|---|
| Chaque lundi | Routine ci-dessus |
| Le 10 janvier 2027 | Les pages modifiées le 11 novembre 2026 sortent de la période de 60 jours : elles redeviennent candidates |
| Tous les 3 mois | Relire les 20 pages à moins de 60 impressions (`phase4-proposals.md`) |

Important : comme beaucoup de pages ont été modifiées le 11 novembre 2026, **la règle des 60 jours fera passer la plupart d'entre elles en « ignorées » jusqu'au 10 janvier**. Entre-temps, la routine portera surtout sur les pages non touchées (par exemple « Âge biologique — définition », les articles de juin et de juillet) et sur les nouvelles requêtes.

## 5. Ce qu'on mesure, honnêtement

- Avec des volumes aussi faibles (quelques centaines d'impressions par mois sur la plupart des pages), une variation d'une semaine à l'autre est du bruit. On regarde la tendance sur 6 à 8 semaines.
- Le suivi se fait sur trois chiffres : clics, impressions et position moyenne des 6 pages travaillées en phase 3.
- Un changement de titre met souvent 2 à 4 semaines à produire un effet visible sur le taux de clic.

## 6. Données utiles (état au 11 novembre 2026)

Premiers résultats de la routine (30 derniers jours, position 5 à 15) : la requête `vo2 max âge tableau` (32 impressions, position 13) sur l'article VO₂max ; `espérance de vie luxembourg` (17 impressions, position 8,5) sur l'article du 10 mai ; `phenoage` (41 impressions, position 5,4) sur la page PhenoAge ; `calculer espérance de vie` apparaît sur `/methodologie/` (position 15) en plus de l'article du 30 août.
