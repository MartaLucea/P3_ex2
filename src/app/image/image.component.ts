import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-image',
  templateUrl: './image.component.html',
})
export class ImageComponent {
  @Input() nom: string = '';
  @Input() ample: string = '';
  @Input() altura: string = '';
  @Input() alt: string = '';
}
