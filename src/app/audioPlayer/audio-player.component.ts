import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
})
export class AudioPlayerComponent {
  @Input() nom: string='';

}
