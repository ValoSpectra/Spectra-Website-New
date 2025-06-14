import { Component } from '@angular/core';
import { ContentSectionComponent } from '../../components/content-section/content-section.component';
import { SpacerComponent } from '../../components/spacer/spacer.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-main-page',
  imports: [ContentSectionComponent, SpacerComponent, ButtonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {}
