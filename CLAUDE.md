# Memento Mori — règles de rédaction du blog

Site Jekyll (GitHub Pages) : montre-de-vie.com. Auteur affiché : « Montre de Vie ». Le nom et le prénom de Sébastien ne doivent apparaître sur aucune page publique (articles, footer, JSON-LD, à propos, contact, guide), sauf dans `mentions-legales/`. Pour une citation signée, utiliser « Run Nature ».
Ce fichier fixe les règles pour tout nouvel article ou toute modification de contenu éditorial.
Les consignes explicites données pour un article précis priment sur ce fichier.

## 1. Principes

1. **Ne rien inventer.** Ni chiffre, ni source, ni expérience, ni opinion, ni citation, ni émotion. Si une information déterminante manque, poser une question courte ou la laisser de côté.
2. **Le concret avant le vernis.** Un détail vérifiable vaut mieux qu'une formule vague. Dire ce qu'un chiffre permet réellement de conclure, et ce qu'il ne permet pas.
3. **Honnêteté avant mise en scène.** Reconnaître les limites (du sujet, de la méthode, de notre propre outil). Ne jamais embellir.
4. **Pas de ton marketing.** Pas de superlatifs ni de promesses vagues : « révolutionnaire », « incontournable », « game changer », « exceptionnel ». Une recommandation repose sur des raisons précises.
5. **Distinguer mesure, ressenti et interprétation.** Une expérience personnelle ne prouve rien de général.
6. **Éléments personnels de Sébastien.** Ce que Sébastien dit de lui-même (vécu, famille, âge, pratique sportive, observations de son entourage, années d'expérience) n'a besoin ni de source ni de confirmation supplémentaire : sa relecture suffit. Ne jamais en ajouter de nouveaux de ma propre initiative ; si un détail personnel manque, poser la question. Un élément personnel présent dans un ancien texte et non confirmé par lui reste à signaler.

## 2. Voix

- Tutoiement, première personne, ton direct et naturel, comme quelqu'un qui explique à un lecteur, pas un rédacteur qui fabrique du contenu.
- Sérieux sur le fond, sans solennité. L'humour est rare, sec et seulement s'il vient tout seul. Jamais sur la santé, les blessures ou les personnes vulnérables.
- Ton de marque : **sérieux sans morbidité**. Pas de catastrophisme, pas de culpabilisation, pas de « il te reste X ans » sensationnaliste.
- Varier le rythme : phrases courtes après un passage explicatif, une conclusion sèche plutôt qu'une morale.
- Pas de caricature : ne pas insérer mécaniquement « franchement », « bon… » ou « pour être honnête ».
- **Première personne et faits :** « j'ai lu », « j'ai testé », « j'ai mesuré » seulement si c'est vrai de Sébastien. Quand l'analyse vient d'une page ou d'un code qu'il a transmis, écrire « d'après le code de la page, consulté en [mois année] ».

## 3. Tics d'IA à éviter

- Accroches sensationnalistes suivies d'une banalité ; introductions « À l'heure où… ».
- Conclusions qui répètent le texte ; morales explicites.
- Listes de trois systématiques ; oppositions « ce n'est pas X, c'est Y » répétées.
- Phrases abstraites (passion, dépassement, authenticité) ; ton de coach de vie.
- Callouts « Soyons honnêtes » / « et c'est très bien ainsi » : à utiliser une fois au plus par article.
- Emojis, hashtags et appels à l'action ajoutés par réflexe.
- Test : peut-on supprimer cette phrase sans perdre de sens ? Si oui, la supprimer.

## 4. Santé et sources

- Chaque chiffre de santé a une source citée dans l'article ou renvoie vers `/sources/` (ajouter la source à cette page si elle n'y est pas).
- Dire ce qui est établi, discuté ou inconnu. Ne pas présenter une corrélation comme une preuve de causalité.
- Aucune prescription médicale. Aucun article ne se présente comme un avis de santé. Rappeler le caractère indicatif de l'outil quand c'est pertinent.
- Ne pas promettre d'années gagnées au-delà de ce que la source soutient. Les fourchettes de « gain potentiel » de l'outil (RECO_DB) doivent rester cohérentes avec les sources.
- Nous ne sommes pas des professionnels de santé : ne jamais se présenter comme tels.

## 5. Articles comparatifs « Montre de Vie vs X »

Gabarit de référence : `_posts/2026-11-04-montre-de-vie-vs-cleage.html`.

1. **Lire réellement la page** (code source ou contenu complet transmis) avant d'écrire. Annoncer dans l'introduction ce qui n'a pas pu être analysé (iframe, calcul côté serveur, contenu derrière un compte).
2. **Faits observables uniquement**, formulés avec « d'après la page consultée en [mois année] ». Pas de procès d'intention (« ils veulent… »), pas de spéculation sur les motivations.
3. **Commencer par ce que l'autre outil fait bien**, de manière précise, avant les limites.
4. **Rester sur l'outil, pas sur les personnes.** Ne jamais juger les compétences d'une personne nommée. On peut décrire une relecture ou une équipe telle qu'elle est affichée, sans conclusion sur les individus.
5. **Reconnaître nos propres limites** quand elles sont comparables (ex. le mode express repose aussi sur des habitudes déclarées).
6. Chaque affirmation sur le concurrent doit être retrouvable dans la page ; en cas de doute, ne pas l'écrire.
7. Avertissement obligatoire en bas : comparaison à visée informative, observations datées, susceptibles de changer.

## 6. Structure et technique

**Fichier :** `_posts/AAAA-MM-JJ-slug.html`. L'URL est `/blog/AAAA/MM/JJ/slug/`. La date ne doit pas être dans le futur (`future: false` dans `_config.yml`).

**Front matter :** `layout: post`, `title`, `description` (une phrase, environ 150 caractères), `excerpt` (2 à 3 phrases), `date`, `author: Montre de Vie`. Ajouter `last_modified_at` lors d'une mise à jour de fond.

**Ordre d'un article :**
1. `<a class="back-link" href="/blog/">← Retour au blog</a>`
2. `<article>` avec un seul `<h1>`, puis `<div class="post-meta">` (date, auteur, temps de lecture)
3. Introduction (2 paragraphes max), puis sections `<h2>`
4. `<div class="cta-montre">` avant les lectures complémentaires
5. `<div class="further-reading">` (liens internes)
6. `{% include support-box.html %}` (encart « Si cet article t'a servi » : plan d'action + don), placé juste avant la FAQ
7. `<h2>❓ Questions fréquentes</h2>` avec 3 à 4 `faq-item` (`faq-q` / `faq-a`) qui répondent à de vraies questions de recherche
8. `<div class="disclaimer">` puis `<div class="sources">`
9. `<style>` propre à l'article (pour un tableau comparatif : classe `vs-table-wrap{N}` avec N incrémenté, le dernier utilisé est 7)

**Composants disponibles :** `callout`, `cta-montre`, `support-box` (via l'include), `further-reading`, `faq-item`, `disclaimer`, `sources`. Pas de nouvelle classe sans raison.

**Signature :** pas de nom de personne dans la ligne `post-meta` (date, temps de lecture seulement), ni dans le JSON-LD (`Organization` « Montre de Vie »).

**Lecture :** temps de lecture estimé réaliste (environ 200 mots par minute).

## 7. Maillage interne et maintenance

- Tout nouveau comparatif est ajouté dans la liste « Lectures complémentaires » de **tous** les comparatifs existants **et** dans la page pilier `blog/age-biologique/index.html`.
- Tout article renvoie vers `/methodologie/` et `/sources/` quand il s'appuie sur la méthode ou des études.
- Liens internes en chemin absolu (`/montre/`, `/methodologie/`), sans domaine.
- Le blog (`blog/index.html`) se met à jour automatiquement : ne pas y ajouter l'article à la main.

## 8. Avant de proposer un article : vérifier

- [ ] Chaque fait sur un tiers est retrouvable dans la source consultée, avec sa date.
- [ ] Chaque chiffre de santé a une source.
- [ ] Aucune expérience ou opinion inventée ; les « j'ai » sont vrais, soit fournis ou confirmés par Sébastien, soit signalés.
- [ ] Les limites de l'analyse sont dites (iframe, etc.).
- [ ] Pas de ton marketing, pas de tics d'IA, pas de conclusion qui répète.
- [ ] Front matter complet, un seul H1, FAQ, disclaimer, sources.
- [ ] Maillage mis à jour (comparatifs existants + page pilier).
- [ ] Les éléments incertains sont signalés à Sébastien dans la réponse, pas cachés dans le texte.

## 9. Évolution de ce fichier

Quand Sébastien dit qu'un texte « ne lui ressemble pas » ou corrige une formulation, identifier le principe qui a échoué (ton, humour forcé, fait non vérifié, structure) et mettre à jour ce fichier plutôt que de corriger uniquement le texte concerné.
