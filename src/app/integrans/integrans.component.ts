import { Component } from '@angular/core';
import { INTEGRANT } from './integrants';
import { PortadaIntegrantComponent } from './portada-integrant/portada-integrant.component'; 

@Component({
  imports: [PortadaIntegrantComponent],
  selector: 'app-integrans',
  templateUrl: './integrans.component.html',
})
export class IntegransComponent {
  integrants = INTEGRANT;
  selectedIntegrantId?: string;

  onSelectIntegrant(id: string) {
    this.selectedIntegrantId = id;
  }
}
