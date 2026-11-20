import { Component, Input } from '@angular/core';
import { Integrant } from '../integrant.model';
import { AudioPlayerComponent } from '../../audioPlayer/audio-player.component'
@Component({
  imports: [AudioPlayerComponent],
  selector: 'app-info-integrant',
  templateUrl: './info-integrant.component.html',
})
export class InfoIntegrantComponent {
  @Input({ required: true }) integrant!: Integrant;
}
