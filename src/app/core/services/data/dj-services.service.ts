import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DJServicesService {

  constructor() { }


  data = [
    {
      id:'id Dj',
      image:'../../../../assets/images/DJ_Sample2.png',
      name:'name Dj',
      descripcion:'who are you',
      video:'video promo'
    },
    {
      id:'cualqiera',
      image:'../../../../assets/images/DJ_Sample2.png',
      name:'DJ 2',
      descripcion:'who are you',
      video:'video promo'
    },
    {
      id:'id Dj',
      image:'../../../../assets/images/DJ_Sample2.png',
      name:'Dj 3',
      descripcion:'who are you',
      video:'video promo'
    },

  ]


  dj:string[] =[
    '../../../../assets/images/DJ_Sample2.png',
    '../../../../assets/images/DJ_Sample2.png',
    '../../../../assets/images/DJ_Sample2.png',
    '../../../../assets/images/DJ_Sample2.png',

  ]


  
 
     
   

     

  
  
          
      
 
    
    
  
  


  getDj(){
    return this.dj
  }

  getData(dj){
    return this.data[dj]
  }

  
}

