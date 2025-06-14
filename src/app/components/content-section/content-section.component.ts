import { Component, ContentChild, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-content-section',
  imports: [NgTemplateOutlet],
  templateUrl: './content-section.component.html',
  styleUrl: './content-section.component.css',
})
export class ContentSectionComponent {
  @ContentChild('content')
  contentTemplate!: TemplateRef<any>;

  public get context() {
    return this;
  }
}
