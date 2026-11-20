import { Product } from '../models/product.model';

/**
 * ============================================================
 *  TES PRODUITS
 *  - price : prix en FCFA (0 = gratuit)
 *  - chariowUrl : colle ici le lien de la page produit Chariow
 *    (Chariow > Produits > ton produit > "Copier le lien")
 *  - cover : couleur + mot affiché sur la couverture générée
 *    (ou mets image: 'covers/mon-ebook.png' et place le fichier
 *     dans le dossier public/covers/)
 * ============================================================
 */
export const PRODUCTS: Product[] = [
  {
    id: 'git-pdf',
    category: 'free',
    price: 0,
    chariowUrl: 'https://wbdryrsl.mychariow.shop/prd_u0f4xixw',
    cover: { color: '#22c55e', label: 'GIT', format: 'PDF' },
    badge: { fr: 'Gratuit', en: 'Free' },
    title: {
      fr: 'Les 20 commandes Git indispensables',
      en: 'The 20 essential Git commands',
    },
    description: {
      fr: 'La fiche mémo que tous les développeurs débutants devraient avoir. Imprime-la, garde-la près de toi.',
      en: 'The cheat sheet every beginner developer should have. Print it and keep it close.',
    },
    features: {
      fr: ['Fiche PDF de 6 pages', 'Exemples concrets', 'Téléchargement immédiat'],
      en: ['6-page PDF cheat sheet', 'Real examples', 'Instant download'],
    },
  },
  {
    id: 'pack-premier-job',
    category: 'pack',
    price: 6500,
    oldPrice: 8000,
    chariowUrl: 'https://wbdryrsl.mychariow.shop/prd_q832n88x',
    cover: { color: '#ec4899', label: 'PREMIER JOB', format: 'PACK' },
    badge: { fr: 'Promo', en: 'Sale' },
    title: {
      fr: 'Pack Premier Job développeur (CV + entretien)',
      en: 'First Developer Job Pack (CV + interview)',
    },
    description: {
      fr: 'Le pack consacré au CV et à l’entretien pour décrocher ton premier emploi de développeur.',
      en: 'The pack dedicated to your CV and interview, to land your first developer job.',
    },
    features: {
      fr: ['CV développeur', 'Préparation à l’entretien', 'Téléchargement immédiat'],
      en: ['Developer CV', 'Interview preparation', 'Instant download'],
    },
  },
  {
    id: '50-questions',
    category: 'ebook',
    price: 3000, // À CONFIRMER : prix provisoire, à aligner sur la page Chariow
    chariowUrl: 'https://wbdryrsl.mychariow.shop/prd_g8n30qwm',
    cover: { color: '#6366f1', label: '50 QUESTIONS', format: 'E-BOOK' },
    badge: { fr: 'Nouveau', en: 'New' },
    title: {
      fr: "50 questions d'entretien pour développeur",
      en: '50 developer interview questions',
    },
    description: {
      fr: 'Prépare ton entretien de développeur avec 50 questions à travailler avant le jour J.',
      en: 'Get ready for your developer interview with 50 questions to work through beforehand.',
    },
    features: {
      fr: ['50 questions', 'Préparation à l’entretien', 'Téléchargement immédiat'],
      en: ['50 questions', 'Interview preparation', 'Instant download'],
    },
  },
  {
    id: 'cv-templates',
    category: 'template',
    price: 3000, // À CONFIRMER : prix repris de l'ancienne fiche
    chariowUrl: 'https://wbdryrsl.mychariow.shop/prd_21gcon8j',
    cover: { color: '#a855f7', label: 'CV DÉVELOPPEUR', format: 'TEMPLATES' },
    title: {
      fr: '3 modèles de CV pour développeur',
      en: '3 developer CV templates',
    },
    description: {
      fr: 'Des CV modernes, sobres et lisibles par les recruteurs. Modifiables en 10 minutes sur Word ou Canva.',
      en: 'Modern, clean, recruiter-friendly CVs. Editable in 10 minutes in Word or Canva.',
    },
    features: {
      fr: ['Format Word + Canva', 'Exemples remplis', 'Conseils de rédaction'],
      en: ['Word + Canva formats', 'Filled-in examples', 'Writing tips'],
    },
  },
];

/*
 * ------------------------------------------------------------
 *  PRODUITS MASQUÉS : pas encore de lien Chariow.
 *  Pour en réafficher un : renseigne son chariowUrl et déplace-le
 *  dans le tableau PRODUCTS ci-dessus.
 * ------------------------------------------------------------
 *
  {
    id: 'spring-ebook',
    category: 'ebook',
    price: 5000,
    oldPrice: 9000,
    chariowUrl: 'https://VOTRE-BOUTIQUE.chariow.com/LIEN-EBOOK-SPRING',
    cover: { color: '#6366f1', label: 'SPRING BOOT', format: 'E-BOOK' },
    badge: { fr: 'Best-seller', en: 'Best-seller' },
    title: {
      fr: 'Spring Boot : de zéro à ta première API',
      en: 'Spring Boot: from zero to your first API',
    },
    description: {
      fr: 'Le guide pas à pas pour créer une vraie API REST en Java, même si tu débutes. Avec le code source complet.',
      en: 'A step-by-step guide to building a real Java REST API, even as a beginner. Full source code included.',
    },
    features: {
      fr: ['E-book PDF de 60 pages', 'Code source du projet', 'Mises à jour gratuites'],
      en: ['60-page PDF e-book', 'Project source code', 'Free updates'],
    },
  },
  {
    id: 'hexa-ebook',
    category: 'ebook',
    price: 5000,
    chariowUrl: 'https://VOTRE-BOUTIQUE.chariow.com/LIEN-EBOOK-HEXAGONAL',
    cover: { color: '#f59e0b', label: 'ARCHITECTURE HEXAGONALE', format: 'E-BOOK' },
    badge: { fr: 'Nouveau', en: 'New' },
    title: {
      fr: "L'architecture hexagonale expliquée simplement",
      en: 'Hexagonal architecture made simple',
    },
    description: {
      fr: 'Ports, adaptateurs, domaine : comprends enfin la clean architecture avec un projet Spring réel et des schémas clairs.',
      en: 'Ports, adapters, domain: finally understand clean architecture with a real Spring project and clear diagrams.',
    },
    features: {
      fr: ['Schémas clairs', 'Projet Spring complet', 'Questions d\'entretien'],
      en: ['Clear diagrams', 'Complete Spring project', 'Interview questions'],
    },
  },
  {
    id: 'pack-dev',
    category: 'pack',
    price: 15000,
    oldPrice: 25000,
    chariowUrl: 'https://VOTRE-BOUTIQUE.chariow.com/LIEN-PACK',
    cover: { color: '#ec4899', label: 'PACK DÉV JUNIOR', format: 'PACK' },
    badge: { fr: '-40 %', en: '-40%' },
    title: {
      fr: 'Pack Développeur Junior',
      en: 'Junior Developer Pack',
    },
    description: {
      fr: 'Les 2 e-books + 3 modèles de CV développeur + la checklist pour décrocher ton premier stage ou job.',
      en: 'Both e-books + 3 developer CV templates + the checklist to land your first internship or job.',
    },
    features: {
      fr: ['2 e-books', '3 modèles de CV (Word + Canva)', 'Checklist entretien'],
      en: ['2 e-books', '3 CV templates (Word + Canva)', 'Interview checklist'],
    },
  },
  {
    id: 'formation-video',
    category: 'course',
    price: 25000,
    chariowUrl: 'https://VOTRE-BOUTIQUE.chariow.com/LIEN-FORMATION',
    cover: { color: '#06b6d4', label: 'PROJET COMPLET', format: 'VIDÉO' },
    title: {
      fr: 'Formation vidéo : un projet Spring complet',
      en: 'Video course: a complete Spring project',
    },
    description: {
      fr: 'Construis avec moi, en vidéo, une application complète en architecture hexagonale, de la base de données au déploiement.',
      en: 'Build a full hexagonal-architecture app with me on video, from the database to deployment.',
    },
    features: {
      fr: ['+5 h de vidéo', 'Accès à vie', 'Groupe WhatsApp d\'entraide'],
      en: ['5+ hours of video', 'Lifetime access', 'WhatsApp support group'],
    },
  },
*/
