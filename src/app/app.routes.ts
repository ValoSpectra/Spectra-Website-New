import { Routes } from '@angular/router';
import { AppComponent } from './components/app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DemoPageComponent } from './pages/demo-page/demo-page.component';
import { CreditsPageComponent } from './pages/credits-page/credits-page.component';
import { DownloadPageComponent } from './pages/download-page/download-page.component';
import { ImprintPageComponent } from './pages/imprint-page/imprint-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    title: 'Spectra - Spectating Valorant',
    data: {
      description:
        'Spectra is your all-in-one solution for an amazing looking Valorant Tournament Overlay, enabling all Organizers to display live game information.',
    },
  },
  {
    path: 'credits',
    component: CreditsPageComponent,
    title: 'Spectra - Credits',
    data: {
      description:
        'Everyone who has contributed to Spectra in one way or another. Developers, Designers, and more.',
    },
  },
  {
    path: 'live-demo',
    component: DemoPageComponent,
    title: 'Spectra - Live Demo',
    data: {
      description:
        'Learn more about the live demo for Spectra - created to test out Spectra functionality in a simple and intuitive way.',
    },
  },
  {
    path: 'download',
    component: DownloadPageComponent,
    title: 'Spectra - Client Download',
    data: {
      description: 'Download the latest version of the Spectra Client here.',
    },
  },
  {
    path: 'legal',
    children: [
      {
        path: 'imprint',
        component: ImprintPageComponent,
        title: 'Spectra - Imprint',
      },
      {
        path: 'privacy-policy',
        loadComponent: () =>
          import('./pages/legal/privacy-policy-page/privacy-policy-page.component').then(
            (m) => m.PrivacyPolicyPageComponent,
          ),
        title: 'Spectra - Privacy Policy',
      },
      {
        path: 'terms-of-service',
        loadComponent: () =>
          import('./pages/legal/terms-of-service-page/terms-of-service-page.component').then(
            (m) => m.TermsOfServicePageComponent,
          ),
        title: 'Spectra - Terms of Service',
      },
      {
        path: 'acceptable-use',
        loadComponent: () =>
          import('./pages/legal/acceptable-use-page/acceptable-use-page.component').then(
            (m) => m.AcceptableUsePageComponent,
          ),
        title: 'Spectra - Acceptable Use Policy',
      },
    ],
  },
];
