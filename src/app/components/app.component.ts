import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SpacerComponent } from './spacer/spacer.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-component',
  imports: [RouterOutlet, NavbarComponent, SpacerComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected route = inject(ActivatedRoute);

  public get navbarAnimated(): boolean {
    const ret = this.route.snapshot.firstChild?.routeConfig?.path == '';
    // console.log(ret);

    return ret;
  }
}
