import { Route } from '@angular/router';

export const SITE_URL = 'https://www.cyril-defaye.fr';
export const DEFAULT_OG_IMAGE = '/favicon.png';

export interface SeoMetadata {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalPath?: string;
}

export interface SeoRouteData {
  seo: SeoMetadata;
}

export function withSeoMetadata(seo: SeoMetadata): Route['data'] & SeoRouteData {
  return { seo };
}

