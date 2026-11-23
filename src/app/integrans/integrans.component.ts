import { Component } from '@angular/core';
import { INTEGRANT } from './integrants';
import { Integrant } from './integrant.model'
import { PortadaIntegrantComponent } from './portada-integrant/portada-integrant.component'; 
import { InfoIntegrantComponent } from './info-integrant/info-integrant.component';
@Component({
  imports: [PortadaIntegrantComponent, InfoIntegrantComponent],
  selector: 'app-integrans',
  styleUrl: './integrans.component.css',
  templateUrl: './integrans.component.html',
})
export class IntegransComponent {
  integrants = INTEGRANT;
  selectedIntegrant?: Integrant;

  onSelectIntegrant(i: Integrant ) {
    this.selectedIntegrant = i;
  }
}
