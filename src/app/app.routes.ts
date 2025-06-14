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
    data: {
      title: 'Spectra - Spectating Valorant',
      description:
        'Spectra is your all-in-one solution for an amazing looking Valorant Tournament Overlay, enabling all Organizers to display live game information.',
    },
  },
  {
    path: 'credits',
    component: CreditsPageComponent,
    data: {
      title: 'Spectra - Credits',
      description:
        'Everyone who has contributed to Spectra in one way or another. Developers, Designers, and more.',
    },
  },
  {
    path: 'live-demo',
    component: DemoPageComponent,
    data: {
      title: 'Spectra - Live Demo',
      description:
        'Learn more about the live demo for Spectra - created to test out Spectra functionality in a simple and intuitive way.',
    },
  },
  {
    path: 'download',
    component: DownloadPageComponent,
    data: {
      title: 'Spectra - Client Download',
      description: 'Download the latest version of the Spectra Client here.',
    },
  },
  {
    path: 'imprint',
    component: ImprintPageComponent,
    data: {
      title: 'Spectra - Imprint',
    },
  },
];
