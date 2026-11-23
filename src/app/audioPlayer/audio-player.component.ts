import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
})
export class AudioPlayerComponent implements OnChanges {
  @Input() nom: string = '';

  @ViewChild('audioMusical') audioRef?: ElementRef<HTMLAudioElement>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['nom'] && !changes['nom'].firstChange) {
      this.reiniciarAudio();
    }
  }

  private reiniciarAudio(): void {
    const audio = this.audioRef?.nativeElement;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      audio.load(); 
    }
  }
}
