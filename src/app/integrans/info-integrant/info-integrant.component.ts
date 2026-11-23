import { Component, Input } from '@angular/core';
import { Integrant } from '../integrant.model';
import { AudioPlayerComponent } from '../../audioPlayer/audio-player.component'
import { VideoPlayerComponent } from '../../video-player/video-player.component';
import { ImageComponent } from '../../image/image.component';

@Component({
  imports: [AudioPlayerComponent, VideoPlayerComponent, ImageComponent],
  selector: 'app-info-integrant',
  styleUrl: './info-integrant.component.css',
  templateUrl: './info-integrant.component.html',
})
export class InfoIntegrantComponent {
  @Input({ required: true }) integrant!: Integrant;

  
}
