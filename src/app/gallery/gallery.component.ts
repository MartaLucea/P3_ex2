import { Component } from '@angular/core';
import { ImageComponent } from '../image/image.component';
@Component({
  imports: [ImageComponent],
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {}
