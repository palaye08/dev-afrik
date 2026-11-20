import { Component, inject, signal } from '@angular/core';
import { SITE_CONFIG } from '../../config/site.config';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  host: { '(window:scroll)': 'onScroll()' },
})
export class Header {
  protected readonly i18n = inject(I18nService);
  protected readonly config = SITE_CONFIG;
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  onScroll(): void {
    this.scrolled.set(window.scrollY > 10);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
