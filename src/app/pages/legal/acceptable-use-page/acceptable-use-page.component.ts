import { Component } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-acceptable-use-page',
  imports: [Button],
  templateUrl: './acceptable-use-page.component.html',
  styleUrl: './acceptable-use-page.component.css',
})
export class AcceptableUsePageComponent {
  openInNewTab(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
