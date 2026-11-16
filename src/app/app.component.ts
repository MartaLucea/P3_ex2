import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component';

@Component({
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected readonly title = signal('P3_ex2');
}
