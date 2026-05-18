# Montre de Vie — Guide de déploiement pas à pas

## Structure des fichiers à uploader sur GitHub

```
ton-repo/
├── _config.yml
├── _layouts/
│   └── default.html
├── _posts/
│   └── 2026-05-05-pourquoi-compter-ses-secondes-change-tout.md
├── blog/
│   └── index.html
├── montre/
│   └── index.html          ← TON FICHIER HTML ACTUEL (renommer en index.html)
├── index.html
└── robots.txt
```

---

## ÉTAPE 1 — Préparer le repo GitHub

1. Va sur https://github.com/sebrunnature/memento-mori
2. Ton fichier HTML actuel → renomme-le `index.html` et déplace-le dans un dossier `montre/`
3. Upload tous les nouveaux fichiers dans l'ordre ci-dessus

---

## ÉTAPE 2 — Activer Jekyll sur GitHub Pages

1. Dans ton repo GitHub, clique sur **Settings**
2. Dans le menu gauche, clique sur **Pages**
3. Sous "Source", sélectionne **Deploy from a branch**
4. Branche : **main** (ou master), dossier : **/ (root)**
5. Clique **Save**
6. Attends 2-3 minutes → GitHub génère ton site Jekyll automatiquement

✅ Ton site sera accessible sur : https://sebrunnature.github.io/memento-mori/

---

## ÉTAPE 3 — Connecter montre-de-vie.com (Gandi → GitHub)

### Sur GitHub :
1. Dans Settings > Pages, tu vois un champ **Custom domain**
2. Saisis : `montre-de-vie.com`
3. Clique Save → GitHub crée un fichier CNAME automatiquement
4. Coche "Enforce HTTPS" (disponible après quelques minutes)

### Sur Gandi :
1. Connecte-toi sur gandi.net
2. Va dans **Domaines > montre-de-vie.com > DNS**
3. Supprime les enregistrements A existants (s'il y en a)
4. Ajoute ces 4 enregistrements **A** pointant vers GitHub :
   ```
   @ A 185.199.108.153
   @ A 185.199.109.153
   @ A 185.199.110.153
   @ A 185.199.111.153
   ```
5. Ajoute un enregistrement **CNAME** :
   ```
   www CNAME sebrunnature.github.io.
   ```
6. Attends 10-30 minutes pour la propagation DNS

✅ montre-de-vie.com pointe vers ton site GitHub Pages !

---

## ÉTAPE 4 — Vérifier le SEO

1. Va sur https://search.google.com/search-console
2. Ajoute la propriété `montre-de-vie.com`
3. Vérifie via le fichier HTML ou le DNS
4. Soumet le sitemap : `https://montre-de-vie.com/sitemap.xml`

---

## ÉTAPE 5 — Écrire des articles

Les articles vont dans le dossier `_posts/` avec ce format de nom :
```
AAAA-MM-JJ-titre-de-larticle.md
```

En-tête obligatoire en haut de chaque fichier :
```yaml
---
layout: default
title: "Ton titre ici"
description: "Ta description SEO ici (160 caractères max)"
date: 2026-05-05
author: Sébastien Salomon
---
```

Puis le contenu en Markdown normal.

---

## Idées d'articles pour le SEO

- `comment-calculer-son-esperance-de-vie.md`
- `moringa-et-longevite-ce-que-dit-la-science.md`
- `trail-running-et-longevite-les-etudes.md`
- `variabilite-frequence-cardiaque-vfc-guide.md`
- `memento-mori-philosophie-stoicienne.md`
- `tikker-watch-alternative-gratuite.md`  ← excellent pour le SEO (gens qui cherchent Tikker)

---

## Coût total

| Poste | Coût |
|-------|------|
| GitHub Pages | Gratuit |
| Domaine .com sur Gandi | ~15€/an |
| SSL/HTTPS | Gratuit (Let's Encrypt via GitHub) |
| **Total** | **~15€/an** |


