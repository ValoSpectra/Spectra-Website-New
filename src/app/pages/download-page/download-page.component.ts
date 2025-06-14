import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { ContentSectionComponent } from '../../components/content-section/content-section.component';

@Component({
  selector: 'app-download-page',
  imports: [ButtonModule, PageHeaderComponent, SpacerComponent, ContentSectionComponent],
  templateUrl: './download-page.component.html',
  styleUrl: './download-page.component.css',
})
export class DownloadPageComponent {}
