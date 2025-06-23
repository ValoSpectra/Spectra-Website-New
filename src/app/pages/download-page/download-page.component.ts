import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ContentSectionComponent } from '../../components/content-section/content-section.component';

@Component({
  selector: 'app-download-page',
  imports: [ButtonModule, ContentSectionComponent],
  templateUrl: './download-page.component.html',
  styleUrl: './download-page.component.css',
})
export class DownloadPageComponent {}
