import { RenderMode, ServerRoute } from '@angular/ssr';
import { Route, Routes } from '@angular/router';

export function getPrerenderServerRoutes(routes: Routes): ServerRoute[] {
  return collectStaticPaths(routes).map(path => ({
    path,
    renderMode: RenderMode.Prerender,
  }));
}

export function getPrerenderPaths(routes: Routes): string[] {
  return collectStaticPaths(routes).map(path => path ? `/${path}` : '/');
}

function collectStaticPaths(routes: Routes, parentPath = ''): string[] {
  return routes.flatMap(route => {
    if (!isPrerenderableRoute(route)) {
      return [];
    }

    const path = joinPaths(parentPath, route.path ?? '');
    const childPaths = route.children ? collectStaticPaths(route.children, path) : [];

    return [path, ...childPaths];
  });
}

function isPrerenderableRoute(route: Route): boolean {
  const path = route.path ?? '';

  return !route.redirectTo && path !== '**' && !path.includes(':');
}

function joinPaths(parentPath: string, childPath: string): string {
  return [parentPath, childPath]
    .filter(Boolean)
    .join('/');
}

