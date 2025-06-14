import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { ContentSectionComponent } from '../../components/content-section/content-section.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-demo-page',
  imports: [PageHeaderComponent, SpacerComponent, ContentSectionComponent, ButtonModule],
  templateUrl: './demo-page.component.html',
  styleUrl: './demo-page.component.css',
})
export class DemoPageComponent {}
