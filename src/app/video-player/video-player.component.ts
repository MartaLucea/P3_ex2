import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
})
export class VideoPlayerComponent implements AfterViewInit, OnDestroy {
  @Input() nom: string = '';

  @ViewChild('videoMusical') videoRef!: ElementRef<HTMLVideoElement>;
  
  videoVisible = false;
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!('IntersectionObserver' in window)) {
      this.activateVideo();
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.activateVideo();
          this.observer?.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    this.observer.observe(this.videoRef.nativeElement);
  }

  private activateVideo(): void {
    this.videoVisible = true;
    const video = this.videoRef.nativeElement;

    const mp4 = video.querySelector<HTMLSourceElement>('[data-format="mp4"]');
    const webm = video.querySelector<HTMLSourceElement>('[data-format="webm"]');

    if (mp4) mp4.src = `/videos/${this.nom}.mp4`;
    if (webm) webm.src = `/videos/${this.nom}.webm`;

    video.load();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
