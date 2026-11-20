import { Component, computed, inject, input } from '@angular/core';
import { SITE_CONFIG } from '../../config/site.config';
import { I18nService } from '../../i18n/i18n.service';
import { Product } from '../../models/product.model';
import { formatPrice } from '../../shared/price';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  readonly product = input.required<Product>();

  protected readonly i18n = inject(I18nService);
  protected readonly brand = SITE_CONFIG.brandName;

  protected readonly lang = this.i18n.lang;
  protected readonly isFree = computed(() => this.product().price === 0);
  protected readonly price = computed(() => formatPrice(this.product().price, this.lang()));
  protected readonly oldPrice = computed(() => {
    const old = this.product().oldPrice;
    return old ? formatPrice(old, 'fr') : null;
  });
}
