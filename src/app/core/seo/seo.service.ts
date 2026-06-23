import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { DEFAULT_OG_IMAGE, SeoMetadata, SITE_URL } from '@core/seo/seo-metadata';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly title = inject(Title);

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.applyRouteMetadata());
  }

  private applyRouteMetadata(): void {
    const seo = this.getDeepestRoute(this.router.routerState.snapshot.root).data['seo'] as SeoMetadata | undefined;

    if (!seo) {
      return;
    }

    const canonicalPath = seo.canonicalPath ?? this.router.url.split('?')[0].split('#')[0];
    const description = seo.description;
    const ogTitle = seo.ogTitle ?? seo.title;
    const ogDescription = seo.ogDescription ?? description;
    const canonicalUrl = this.toAbsoluteUrl(canonicalPath);
    const ogImage = this.toAbsoluteUrl(seo.ogImage ?? DEFAULT_OG_IMAGE);

    this.title.setTitle(seo.title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: ogTitle });
    this.meta.updateTag({ property: 'og:description', content: ogDescription });
    this.meta.updateTag({ property: 'og:image', content: ogImage });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.updateCanonicalLink(canonicalUrl);
  }

  private getDeepestRoute(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    let current = route;

    while (current.firstChild) {
      current = current.firstChild;
    }

    return current;
  }

  private updateCanonicalLink(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  private toAbsoluteUrl(pathOrUrl: string): string {
    if (/^https?:\/\//.test(pathOrUrl)) {
      return pathOrUrl;
    }

    const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;

    return `${SITE_URL}${path}`;
  }
}

