import { Component, input, output } from '@angular/core';
import { Integrant } from '../integrant.model';
@Component({
  imports: [],
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
