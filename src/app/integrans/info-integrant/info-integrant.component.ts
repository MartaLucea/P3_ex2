import { Component, Input } from '@angular/core';
import { Integrant } from '../integrant.model';

@Component({
  imports: [],
  selector: 'app-info-integrant',
  templateUrl: './info-integrant.component.html',
})
export class InfoIntegrantComponent {
  @Input({ required: true }) integrant!: Integrant;
}
