import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/app/models/video';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-video-box',
  templateUrl: './video-box.component.html',
  styleUrls: ['./video-box.component.scss']
})
export class VideoBoxComponent implements OnInit {

  @Input() video: any;
  @Output() videoToDelete: EventEmitter<Video>;
  @Output() updateVideo: EventEmitter<Video>;
  public link: any;

  constructor(private _sanitizer: DomSanitizer, private _youtubeService: YoutubeService) {
    this.videoToDelete = new EventEmitter();
    this.updateVideo = new EventEmitter();
   }

  ngOnInit(): void {
    this.embedUrl();
  }

  public embedUrl() {
    this.link = this._sanitizer.bypassSecurityTrustResourceUrl(this._youtubeService.getEmbedLink(this.video.link));
  }

  public deleteProduct(): void{
    this.videoToDelete.emit(this.video);
  }

  public changeContent(): void{
    this.updateVideo.emit(this.video);
  }
}
