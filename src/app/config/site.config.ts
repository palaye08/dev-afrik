/**
 * ============================================================
 *  CONFIGURATION DU SITE — modifie seulement ce fichier
 *  (et src/app/data/products.ts pour tes produits)
 * ============================================================
 */
export const SITE_CONFIG = {
  /** Nom de ta marque (affiché dans le menu, le pied de page, l'onglet) */
  brandName: 'DevAfrik',
  /** Petit mot affiché à côté du logo */
  brandTagline: 'Academy',

  /** Lien de ta boutique Chariow (page d'accueil de la boutique) */
  chariowStoreUrl: 'https://wbdryrsl.mychariow.shop',

  /** Réseaux / contact — laisse '' pour masquer un lien */
  tiktokUrl: 'https://www.tiktok.com/@ton_pseudo',
  whatsappNumber: '221770000000', // format international SANS le + (ex: 221771234567)
  email: 'contact@exemple.com',

  /** Taux indicatif pour afficher le prix en dollars en anglais (1 USD ≈ X FCFA) */
  fcfaPerUsd: 560,

  /** Année affichée dans le pied de page */
  year: new Date().getFullYear(),
};
