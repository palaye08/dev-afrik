import { Lang } from '../models/product.model';

/** Tous les textes du site, en français et en anglais */
export const TRANSLATIONS = {
  fr: {
    nav: { products: 'Produits', how: 'Comment ça marche', faq: 'FAQ', cta: 'Voir la boutique' },
    hero: {
      eyebrow: 'Ressources pour développeurs en Afrique francophone',
      title1: 'Apprends à coder.',
      title2: 'Décroche ton premier job.',
      subtitle:
        'E-books, packs et formations concrets pour passer de débutant à développeur Java/Spring. Paiement Wave, Orange Money ou carte. Téléchargement immédiat.',
      cta: 'Voir les produits',
      ctaFree: 'Prendre le PDF gratuit',
      trust1: 'Paiement sécurisé',
      trust2: 'Accès immédiat',
      trust3: 'Wave · Orange Money · Carte',
    },
    filters: { all: 'Tout', free: 'Gratuit', ebook: 'E-books', pack: 'Packs', course: 'Formations', template: 'Modèles' },
    products: {
      title: 'Nos produits digitaux',
      subtitle: 'Choisis, paie en 1 minute, télécharge tout de suite.',
      buy: 'Acheter',
      getFree: 'Télécharger gratuitement',
      free: 'Gratuit',
    },
    how: {
      title: 'Comment ça marche ?',
      steps: [
        { title: 'Choisis ton produit', text: 'Clique sur « Acheter » sous le produit qui t’intéresse.' },
        { title: 'Paie en toute sécurité', text: 'Wave, Orange Money, MTN, Moov ou carte bancaire, sur la page de paiement sécurisée.' },
        { title: 'Télécharge immédiatement', text: 'Tu reçois ton produit par e-mail et dans ton espace client, juste après le paiement.' },
      ],
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        { q: 'Comment je reçois mon produit ?', a: 'Juste après le paiement, un lien de téléchargement s’affiche et t’est aussi envoyé par e-mail. Tu peux le retélécharger à tout moment depuis ton espace client.' },
        { q: 'Quels moyens de paiement sont acceptés ?', a: 'Wave, Orange Money et les autres Mobile Money selon ton pays, ainsi que les cartes Visa et Mastercard.' },
        { q: 'Je débute complètement, c’est pour moi ?', a: 'Oui. Tout est expliqué pas à pas, avec des exemples concrets et le code source.' },
        { q: 'J’ai un problème avec ma commande', a: 'Écris-moi sur WhatsApp ou par e-mail, je te réponds rapidement.' },
      ],
    },
    final: { title: 'Prêt à passer au niveau supérieur ?', text: 'Commence par le PDF gratuit, puis avance à ton rythme.', cta: 'Voir les produits' },
    footer: { rights: 'Tous droits réservés.', contact: 'Contact', follow: 'Suis-moi sur TikTok' },
  },
  en: {
    nav: { products: 'Products', how: 'How it works', faq: 'FAQ', cta: 'Visit the store' },
    hero: {
      eyebrow: 'Resources for developers in Africa',
      title1: 'Learn to code.',
      title2: 'Land your first job.',
      subtitle:
        'Practical e-books, packs and courses to go from beginner to Java/Spring developer. Pay with Wave, Orange Money or card. Instant download.',
      cta: 'See the products',
      ctaFree: 'Get the free PDF',
      trust1: 'Secure payment',
      trust2: 'Instant access',
      trust3: 'Wave · Orange Money · Card',
    },
    filters: { all: 'All', free: 'Free', ebook: 'E-books', pack: 'Bundles', course: 'Courses', template: 'Templates' },
    products: {
      title: 'Our digital products',
      subtitle: 'Pick one, pay in a minute, download right away.',
      buy: 'Buy',
      getFree: 'Download for free',
      free: 'Free',
    },
    how: {
      title: 'How does it work?',
      steps: [
        { title: 'Choose your product', text: 'Click “Buy” under the product you want.' },
        { title: 'Pay securely', text: 'Wave, Orange Money, MTN, Moov or card, on the secure checkout page.' },
        { title: 'Download instantly', text: 'You get your product by email and in your customer area right after payment.' },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      items: [
        { q: 'How do I receive my product?', a: 'Right after payment, a download link is shown and also emailed to you. You can download it again anytime from your customer area.' },
        { q: 'Which payment methods are accepted?', a: 'Wave, Orange Money and other Mobile Money services depending on your country, plus Visa and Mastercard.' },
        { q: 'I’m a complete beginner, is this for me?', a: 'Yes. Everything is explained step by step, with real examples and source code.' },
        { q: 'I have a problem with my order', a: 'Message me on WhatsApp or by email and I’ll reply quickly.' },
      ],
    },
    final: { title: 'Ready to level up?', text: 'Start with the free PDF, then move at your own pace.', cta: 'See the products' },
    footer: { rights: 'All rights reserved.', contact: 'Contact', follow: 'Follow me on TikTok' },
  },
} satisfies Record<Lang, unknown>;

export type Translation = (typeof TRANSLATIONS)['fr'];
