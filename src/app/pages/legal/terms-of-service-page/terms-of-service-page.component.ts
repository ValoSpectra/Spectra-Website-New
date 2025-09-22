import { Component } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-terms-of-service-page',
  imports: [Button],
  templateUrl: './terms-of-service-page.component.html',
  styleUrl: './terms-of-service-page.component.css',
})
export class TermsOfServicePageComponent {
  openInNewTab(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
