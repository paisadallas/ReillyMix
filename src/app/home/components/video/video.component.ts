import { Component, OnInit, Sanitizer } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { DomSanitizer } from '@angular/platform-browser';
import {Video} from '../../../core/model/video.model';
import {LiveService} from '../../../core/services/data/live.service';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  dangerous ="https://www.youtube-nocookie.com/embed/5qap5aO4i9A"
 pass
 safeUrl;

  video:Video[];
  url:string;
  constructor(
    private live: LiveService,
    private ft: AngularFirestore,
    private _sanitizer: DomSanitizer
  ) { 

    
    this.live.getLive().subscribe((res:Video[])=>{
    
      this.video = res;

  console.log(this.video[0]);

  this.url = this.video[0].url;
  console.log(this.url)

  this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.url)
    })

  }

  ngOnInit(): void {

  }

}
