import { Component } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-privacy-policy-page',
  imports: [Button],
  templateUrl: './privacy-policy-page.component.html',
  styleUrl: './privacy-policy-page.component.css',
})
export class PrivacyPolicyPageComponent {
  openInNewTab(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
