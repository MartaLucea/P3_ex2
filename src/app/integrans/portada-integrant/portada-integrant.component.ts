import { Component, input, output } from '@angular/core';
import { Integrant } from '../integrant.model';
import { ImageComponent } from '../../image/image.component';
@Component({
  imports: [ImageComponent],
  selector: 'app-portada-integrant',
  templateUrl: './portada-integrant.component.html',
})
export class PortadaIntegrantComponent {
  integrant = input.required<Integrant>();
  selected = input.required<boolean>();
  select = output<Integrant>();

  onSelectIntegrant() {
    this.select.emit(this.integrant());
  }

}
