import { Directive, ElementRef, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollReveal implements OnInit {
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    // Ne rien faire côté serveur (SSR) : le code navigateur n'existe pas là
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const element = this.el.nativeElement;

    // Respecter la préférence "réduire les animations"
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      element.classList.add('reveal-visible');
      return;
    }

    // État initial : caché
    element.classList.add('reveal-hidden');

    // Créer l'observer qui détecte l'entrée à l'écran
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          element.classList.add('reveal-visible');
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.15 });

    observer.observe(element);
  }
}