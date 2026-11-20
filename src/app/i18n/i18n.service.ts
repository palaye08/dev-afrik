import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Lang } from '../models/product.model';
import { TRANSLATIONS, Translation } from './translations';

const STORAGE_KEY = 'lang';

/** Gère la langue du site (FR / EN) et la mémorise dans le navigateur */
@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>(this.initialLang());
  readonly t = computed<Translation>(() => TRANSLATIONS[this.lang()] as Translation);

  constructor() {
    effect(() => {
      const lang = this.lang();
      this.document.documentElement.lang = lang;
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        /* stockage indisponible : on ignore */
      }
    });
  }

  toggle(): void {
    this.lang.update((l) => (l === 'fr' ? 'en' : 'fr'));
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }

  private initialLang(): Lang {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'fr' || saved === 'en') return saved;
    } catch {
      /* ignore */
    }
    const nav = (globalThis.navigator?.language ?? 'fr').toLowerCase();
    return nav.startsWith('en') ? 'en' : 'fr';
  }
}
