# Guide complet — de 0 à ta boutique en ligne

Suis les étapes dans l'ordre. Coche au fur et à mesure.

---

## ÉTAPE 1 — Lancer le site sur ton PC

Prérequis : **Node.js 22** (ou plus récent) — https://nodejs.org
et Angular CLI : `npm install -g @angular/cli`

```bash
cd boutique-digitale
npm install      # une seule fois (installe les dépendances)
ng serve         # démarre le site
```

Ouvre http://localhost:4200 dans ton navigateur.

---

## ÉTAPE 2 — Personnaliser le site (2 fichiers seulement)

| Fichier | Ce que tu changes |
|---|---|
| `src/app/config/site.config.ts` | Nom de la marque, lien TikTok, numéro WhatsApp, e-mail, lien de la boutique Chariow |
| `src/app/data/products.ts` | Tes produits : titre FR/EN, description, prix en FCFA, **lien Chariow** de chaque produit |

Autres réglages utiles :
- Couleur principale : `--accent` dans `src/styles.css`
- Textes du site (accueil, FAQ…) en FR et EN : `src/app/i18n/translations.ts`
- Titre / description Google et WhatsApp : `src/index.html`
- Mettre une vraie image de couverture : place `mon-ebook.png` dans `public/covers/`
  puis ajoute `image: 'covers/mon-ebook.png'` dans le `cover` du produit.

Le bouton FR/EN en haut à droite change la langue ; le choix est mémorisé.
En anglais, le prix s'affiche aussi en dollars (taux réglable : `fcfaPerUsd`).

---

## ÉTAPE 3 — Créer ta boutique Chariow

Chariow s'occupe du paiement (Wave, Orange Money, carte…) **et** de la livraison
automatique du fichier. Ton site sert de vitrine, Chariow encaisse et livre.

1. Va sur https://chariow.com → **Créer un compte** (e-mail + mot de passe), confirme ton e-mail.
2. Crée ta boutique : nom (ex. DevAfrik), devise **FCFA (XOF)**, pays **Sénégal**.
3. **Vérifie ton compte** (pièce d'identité) dans les paramètres — souvent obligatoire pour retirer ton argent.
4. Frais : pas d'abonnement, Chariow prend une commission sur chaque vente
   (15 % au départ d'après leur site — vérifie le tarif actuel dans ton tableau de bord).

### Déposer un produit (e-book, PDF, pack…)
1. Tableau de bord → **Produits** → **Ajouter un produit** → type **Fichier / E-book** (ou Formation pour la vidéo).
2. Remplis : titre, description, image de couverture, **prix** (mets 0 pour le PDF gratuit).
3. **Téléverse ton fichier** (PDF, ZIP…). Pour plusieurs fichiers, mets-les dans un ZIP.
4. Active si proposé la protection du PDF (filigrane avec l'e-mail de l'acheteur) : ça limite le partage.
5. Publie, puis **copie le lien de la page produit**.
6. Colle ce lien dans `chariowUrl` du produit correspondant dans `src/app/data/products.ts`.

### Comment le client reçoit son produit
Tout est automatique :
1. Le client clique **Acheter** sur ton site → il arrive sur la page de paiement Chariow.
2. Il entre son e-mail et paie (Wave, Orange Money, carte…).
3. Juste après le paiement, Chariow lui affiche le lien de téléchargement, le lui **envoie par e-mail**,
   et le produit reste disponible dans son espace client.

➡️ **Teste avant de lancer** : crée ton produit gratuit, clique sur le bouton de ton site
et vérifie que tu reçois bien le fichier par e-mail.

### Recevoir ton argent (Wave)
1. Tableau de bord → **Retraits / Portefeuille** → **Ajouter un moyen de retrait**.
2. Choisis l'opérateur Mobile Money et entre ton numéro.
3. Fais une demande de retrait quand tu as un solde.

⚠️ Je n'ai pas pu confirmer que **Wave Sénégal** est déjà proposé pour les **retraits**
(la liste des opérateurs évolue). Regarde la liste dans ton tableau de bord :
si Wave n'y est pas pour le Sénégal, utilise **Orange Money**, puis transfère vers Wave.
En cas de doute, le support Chariow répond par chat dans l'application.

---

## ÉTAPE 4 — Mettre le code sur GitHub

```bash
cd boutique-digitale
git init
git add .
git commit -m "Ma boutique digitale"
git branch -M main
git remote add origin https://github.com/TON-PSEUDO/boutique-digitale.git
git push -u origin main
```
(Crée d'abord le dépôt vide sur github.com → New repository.)

---

## ÉTAPE 5 — Mettre le site en ligne gratuitement

### ⚠️ Important sur Vercel
L'offre gratuite de Vercel (Hobby) est **réservée à un usage personnel non commercial**.
Un site qui vend des produits est considéré comme commercial → il faudrait l'offre Pro (payante).
Pour rester à 0 FCFA **et** respecter les règles, utilise plutôt **Cloudflare Pages** (gratuit, usage commercial autorisé).

### Option recommandée — Cloudflare Pages (gratuit, commercial OK)
1. https://dash.cloudflare.com → crée un compte → **Workers & Pages** → **Create** → onglet **Pages** → **Connect to Git**.
2. Choisis ton dépôt `boutique-digitale`.
3. Réglages :
   - Framework preset : **Angular**
   - Build command : `npm run build`
   - Build output directory : `dist/boutique-digitale/browser`
4. **Save and Deploy**. Ton site sera sur `https://boutique-digitale.pages.dev`.

### Option Vercel (si tu passes en Pro ou pour tester)
1. https://vercel.com → connecte-toi avec GitHub → **Add New → Project** → importe le dépôt.
2. Le fichier `vercel.json` est déjà configuré → clique **Deploy**.

À chaque `git push`, le site se met à jour automatiquement (sur les deux plateformes).

---

## ÉTAPE 6 — TikTok

Voir le fichier `TIKTOK.md` (dans le dossier des visuels) : bio, lien, légendes, hashtags et calendrier.
