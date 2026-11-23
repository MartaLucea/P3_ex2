import { Component } from '@angular/core';
import { ImageComponent } from '../image/image.component';
@Component({
  imports: [ImageComponent],
  selector: 'app-gallery',
  styleUrl: './gallery.component.css',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {}
