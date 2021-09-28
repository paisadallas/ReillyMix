import { Component, OnInit } from '@angular/core';
import { DataNight } from '../../dataNight.model';

@Component({
  selector: 'app-night',
  templateUrl: './night.component.html',
  styleUrls: ['./night.component.scss']
})
export class NightComponent implements OnInit {

  constructor() { }

  data: DataNight = {
    day:'Monday',
    banner: '../../../../assets/images/discoSample.jpg',
    video:'../../../../assets/video/Waltz_On_CLouds_Finished.mp4',
    preholder:'../../../../assets/images/missing.jpg',
    text:'LoremIsu',
    map:'../../../../assets/images/map.jpg',
    plano:'../../../../assets/images/plane.jpg'
  }


  ngOnInit(): void {
  }

}
