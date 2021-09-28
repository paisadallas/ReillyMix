import { Injectable } from '@angular/core';
import {DataNight} from '../../../night/dataNight.model';


@Injectable({
  providedIn: 'root'
})
export class DataNightService {

  discos: DataNight[]=[
    {
      day:'Thursday',
      banner: '../../../../assets/images/discoSample.jpg',
      video:'../../../../assets/video/Waltz_On_CLouds_Finished.mp4',
      preholder:'../../../../assets/images/missing.jpg',
      text:'LoremIsu',
      map:'../../../../assets/images/map.jpg',
      plano:'../../../../assets/images/plane.jpg'
    },
    {
      day:'Friday',
      banner: '../../../../assets/images/discoSample.jpg',
      video:'../../../../assets/video/Waltz_On_CLouds_Finished.mp4',
      preholder:'../../../../assets/images/missing.jpg',
      text:'LoremIsu',
      map:'../../../../assets/images/map.jpg',
      plano:'../../../../assets/images/plane.jpg'
    },
    {
      day:'Saturday',
      banner: '../../../../assets/images/discoSample.jpg',
      video:'../../../../assets/video/Waltz_On_CLouds_Finished.mp4',
      preholder:'../../../../assets/images/missing.jpg',
      text:'LoremIsu',
      map:'../../../../assets/images/map.jpg',
      plano:'../../../../assets/images/plane.jpg'
    },
    {
      day:'Saturday After',
      banner: '../../../../assets/images/discoSample.jpg',
      video:'../../../../assets/video/Waltz_On_CLouds_Finished.mp4',
      preholder:'../../../../assets/images/missing.jpg',
      text:'LoremIsu',
      map:'../../../../assets/images/map.jpg',
      plano:'../../../../assets/images/plane.jpg'
    },
    {
      day:'Sunday',
      banner: '../../../../assets/images/discoSample.jpg',
      video:'../../../../assets/video/Waltz_On_CLouds_Finished.mp4',
      preholder:'../../../../assets/images/missing.jpg',
      text:'LoremIsu',
      map:'../../../../assets/images/map.jpg',
      plano:'../../../../assets/images/plane.jpg'
    }
  ]

  getDiscos(){
    return this.discos;
  }

  constructor() { }
}
