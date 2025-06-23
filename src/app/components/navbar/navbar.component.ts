import { AfterViewInit, booleanAttribute, Component, inject, Input } from '@angular/core';
import { animate, JSAnimation, onScroll } from 'animejs';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [],
})
export class NavbarComponent implements AfterViewInit {
  @Input({ transform: booleanAttribute })
  animated = false;

  fadeAnimation!: JSAnimation;

  ngAfterViewInit(): void {
    this.setup();
  }

  setup(): void {
    if (!this.animated) return;
    //setup animation
    this.fadeAnimation = animate('#nav', {
      // opacity: [0, 1],
      y: ['-100%', 0],
      duration: 250,
      ease: 'out',
      autoplay: onScroll({
        container: 'body',
        debug: false,
        enter: '5 200',
        leave: '0 300',
        sync: 'play play reverse reverse',
      }),
    });
  }
}
