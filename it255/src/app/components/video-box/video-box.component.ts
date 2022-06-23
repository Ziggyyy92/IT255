import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-box',
  templateUrl: './video-box.component.html',
  styleUrls: ['./video-box.component.scss']
})
export class VideoBoxComponent implements OnInit {

  @Input() video: any;
  public link: any;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.embedUrl();
  }

  public embedUrl() {
    this.link = this._sanitizer.bypassSecurityTrustResourceUrl(this.video.link);
  }

}
