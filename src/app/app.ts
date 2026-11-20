import { Component, computed, effect, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Header } from './components/header/header';
import { ProductCard } from './components/product-card/product-card';
import { SITE_CONFIG } from './config/site.config';
import { PRODUCTS } from './data/products';
import { I18nService } from './i18n/i18n.service';
import { ProductCategory } from './models/product.model';

type Filter = 'all' | ProductCategory;

@Component({
  selector: 'app-root',
  imports: [Header, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly i18n = inject(I18nService);
  protected readonly config = SITE_CONFIG;
  private readonly title = inject(Title);

  /** Filtres affichés uniquement s'il existe au moins un produit de la catégorie */
  protected readonly filters = computed<Filter[]>(() => {
    const cats = new Set(PRODUCTS.map((p) => p.category));
    return (['all', 'free', 'ebook', 'pack', 'course', 'template'] as Filter[]).filter(
      (f) => f === 'all' || cats.has(f),
    );
  });
  protected readonly activeFilter = signal<Filter>('all');
  protected readonly products = computed(() => {
    const f = this.activeFilter();
    return f === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === f);
  });

  protected readonly freeProduct = PRODUCTS.find((p) => p.price === 0);
  protected readonly openFaq = signal<number | null>(0);

  // Redirection WhatsApp désactivée (bouton flottant + lien du pied de page masqués).
  // Pour la réactiver : supprime la ligne `whatsappUrl = ''` et décommente les 3 lignes suivantes.
  // protected readonly whatsappUrl = SITE_CONFIG.whatsappNumber
  //   ? `https://wa.me/${SITE_CONFIG.whatsappNumber}`
  //   : '';
  protected readonly whatsappUrl = '';

  constructor() {
    effect(() => {
      const t = this.i18n.t();
      this.title.setTitle(`${SITE_CONFIG.brandName} — ${t.hero.title1} ${t.hero.title2}`);
    });
  }

  protected toggleFaq(i: number): void {
    this.openFaq.update((cur) => (cur === i ? null : i));
  }
}
