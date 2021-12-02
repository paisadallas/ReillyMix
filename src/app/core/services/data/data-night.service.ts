import { Injectable } from '@angular/core';
import {DataNight} from '../../../night/dataNight.model';
import {AngularFirestore} from '@angular/fire/firestore';
import { FEB } from '@angular/material/core';


@Injectable({
  providedIn: 'root'
})
export class DataNightService {

  constructor(private fb:AngularFirestore) { 

  }

  dataSample:DataNight[]

 pasarDatos(){

  return this.fb.collection('image_Wednesday', ref => ref.orderBy("id")).valueChanges();
}


  discos: DataNight[]=[
    {
      day:'Wednesdays',
      banner: [] =[
        '../../../../assets/images/wednesday_us.jpg',
        '../../../../assets/images/wednesday_es.jpg',
        '../../../../assets/images/s.jpg',

      ],
      video:'../../../../assets/video/wednesday.MOV',
      preholder:'../../../../assets/images/wednesday_es.jpg',
      text:'LoremIsu',
      map:'../../../../assets/images/map.jpg',
      plano:'../../../../assets/images/plane.jpg'
    },
    {
      day:'Thursday',
      banner: [] =[
        '../../../../assets/images/thursday.jpg',
        '../../../../assets/images/thursday_halloween.jpg',
      ],
      video:'../../../../assets/video/thursday.MOV',
      preholder:'../../../../assets/images/thursday.jpg',
      text:'LoremIsu',
      map:'../../../../assets/images/map.jpg',
      plano:'../../../../assets/images/plane.jpg'
    },
    {
      day:'Friday',
      banner: [] =['../../../../assets/images/friday.jpeg',],
      video:'../../../../assets/video/Waltz_On_CLouds_Finished.mp4',
      preholder:'../../../../assets/images/friday.jpeg',
      text:'LoremIsu',
      map:'../../../../assets/images/map.jpg',
      plano:'../../../../assets/images/plane.jpg'
    },
    {
      day:'Saturday',
      banner: [] =['../../../../assets/images/discoSample.jpg',],
      video:'../../../../assets/video/Waltz_On_CLouds_Finished.mp4',
      preholder:'../../../../assets/images/missing.jpg',
      text:'LoremIsu',
      map:'../../../../assets/images/map.jpg',
      plano:'../../../../assets/images/plane.jpg'
    },
    {
      day:'Saturday After',
      banner: [] =['../../../../assets/images/saturday.jpg',],
      video:'../../../../assets/video/saturday_velvet.mov',
      preholder:'../../../../assets/images/saturday.jpg',
      text:'LoremIsu',
      map:'../../../../assets/images/map.jpg',
      plano:'../../../../assets/images/plane.jpg'
    },
    {
      day:'Sunday',
      banner: [] =['../../../../assets/images/discoSample.jpg',],
      video:'../../../../assets/video/Waltz_On_CLouds_Finished.mp4',
      preholder:'../../../../assets/images/missing.jpg',
      text:'LoremIsu',
      map:'../../../../assets/images/map.jpg',
      plano:'../../../../assets/images/plane.jpg'
    }
  ]

  getDiscos(){
    return this.discos;
    console.log(this.discos)
   this.fb.collection('image_Wednesday').valueChanges().subscribe((data:DataNight[])=>{
    this.dataSample[0] = data[0];
   // return this.dataSample;
    
  })

  }


}
