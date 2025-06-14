import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { ContentSectionComponent } from '../../components/content-section/content-section.component';

@Component({
  selector: 'app-imprint-page',
  imports: [PageHeaderComponent, SpacerComponent, ContentSectionComponent],
  templateUrl: './imprint-page.component.html',
  styleUrl: './imprint-page.component.css',
})
export class ImprintPageComponent {}
