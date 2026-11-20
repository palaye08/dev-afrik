export type Lang = 'fr' | 'en';

export type Localized<T = string> = Record<Lang, T>;

export type ProductCategory = 'free' | 'ebook' | 'pack' | 'course' | 'template';

export interface Product {
  id: string;
  category: ProductCategory;
  /** Prix en FCFA. 0 = gratuit */
  price: number;
  /** Ancien prix barré (optionnel) */
  oldPrice?: number;
  /** Lien de la page produit Chariow */
  chariowUrl: string;
  title: Localized;
  description: Localized;
  features: Localized<string[]>;
  badge?: Localized;
  cover: {
    color: string;
    label: string;
    format: string;
    /** Image optionnelle (ex: 'covers/ebook.png' dans public/) */
    image?: string;
  };
}
