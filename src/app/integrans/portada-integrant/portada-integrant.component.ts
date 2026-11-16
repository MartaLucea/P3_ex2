import { Component, input, output } from '@angular/core';
import { InfoIntegrantComponent } from '../info-integrant/info-integrant.component';
import { Integrant } from '../integrant.model';
@Component({
  imports: [InfoIntegrantComponent],
  selector: 'app-portada-integrant',
  templateUrl: './portada-integrant.component.html',
})
export class PortadaIntegrantComponent {
  integrant = input.required<Integrant>();
  selected = input.required<boolean>();
  select = output<string>();

  onSelectPersonaje() {
    this.select.emit(this.integrant().id);
  }

}
