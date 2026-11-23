import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
@Component({
  imports: [GalleryComponent],
  selector: 'app-home',
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
