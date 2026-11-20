import { SITE_CONFIG } from '../config/site.config';
import { Lang } from '../models/product.model';

/** Formate un prix : "5 000 FCFA" en français, "5,000 FCFA (~$9)" en anglais */
export function formatPrice(amount: number, lang: Lang): string {
  const locale = lang === 'fr' ? 'fr-FR' : 'en-US';
  const fcfa = new Intl.NumberFormat(locale).format(amount) + ' FCFA';
  if (lang === 'en' && amount > 0) {
    const usd = Math.max(1, Math.round(amount / SITE_CONFIG.fcfaPerUsd));
    return `${fcfa} (~$${usd})`;
  }
  return fcfa;
}
