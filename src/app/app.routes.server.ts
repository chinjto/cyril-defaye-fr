import { ServerRoute } from '@angular/ssr';

import { getPrerenderServerRoutes } from './core/routing/prerender-routes';
import { routes } from './app.routes';

export const serverRoutes: ServerRoute[] = getPrerenderServerRoutes(routes);

