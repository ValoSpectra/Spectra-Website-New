import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  imports: [],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css',
})
export class PageHeaderComponent {
  @Input()
  title: string = '';

  @Input({ required: false })
  subtitle: string = '';

  @Input()
  imageSrc: string = '';
}
