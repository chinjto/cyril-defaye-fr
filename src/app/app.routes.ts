import { Routes } from '@angular/router';

import { withSeoMetadata } from './core/seo/seo-metadata';

export const routes: Routes = [
  {
    path: '',
    data: withSeoMetadata({
      title: 'Cyril DEFAYE - Senior Full-Stack Engineer & Tech Lead',
      description: 'Senior Full-Stack Engineer and Tech Lead with 12+ years of experience in Java, Spring Boot and Angular. Based in Dublin, Ireland.',
      canonicalPath: '/',
    }),
    loadComponent: () =>
      import('./pages/home/home')
        .then(m => m.Home)
  },
  {
    path: 'works',
    data: withSeoMetadata({
      title: 'Works - Cyril DEFAYE',
      description: 'Professional experience of Cyril DEFAYE across legal-tech, payments, banking and enterprise Java and Angular applications.',
      canonicalPath: '/works',
    }),
    loadComponent: () =>
      import('./pages/works/works')
        .then(m => m.Works)
  },
  {
    path: 'studies',
    data: withSeoMetadata({
      title: 'Studies - Cyril DEFAYE',
      description: 'Education, certifications and continuous learning background of Cyril DEFAYE, Senior Full-Stack Engineer and Tech Lead.',
      canonicalPath: '/studies',
    }),
    loadComponent: () =>
      import('./pages/studies/studies')
        .then(m => m.Studies)
  },
  {
    path: 'projects',
    data: withSeoMetadata({
      title: 'Projects - Cyril DEFAYE',
      description: 'Personal, community and open-source projects maintained by Cyril DEFAYE, including Angular sites and developer tooling.',
      canonicalPath: '/projects',
    }),
    loadComponent: () =>
      import('./pages/projects/projects')
        .then(m => m.Projects)
  }
];
