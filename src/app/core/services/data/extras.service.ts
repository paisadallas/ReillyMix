import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtrasService {

  constructor() { }

  data =[
    {
    title:'Waltz & Pyrotechnics',
    image: '../../../../assets/images/packageSample.jpg',
    services:[
        {
          name:'• Waltz & Pyrotechnics | Vals & Pirotecnia',
          price:'$800'
        },
        {
          name:'• Waltz | Vals',
          price: '$350'
        },
        {
          name:'• Pyrotechnics | Pirotecnia',
          price:'$450'
        }       
      ]  
    },
    {
    title:'Column Lights',
    image: '../../../../assets/images/packageSample.jpg',
    services:[
        {
          name:'• 4 Columns lights | 4 Columnas de luces',
          price:'$750'
        },
        {
          name:'• 2 Columns lights | 2 Columnas de luces',
          price: '$450'
        }      
      ]  
    },
    {
    title:'LED Screen',
    image: '../../../../assets/images/packageSample.jpg',
    services:[
        {
          name:'• LED Screen 32 panels | Pantalla LED 32 paneles',
          price:'$2500'
        },
        {
          name:'• LED Screen 24 panels | Pantalla LED 24 paneles',
          price:'$1500'
        },
        {
          name:'• LED Screen 18 panels | Pantalla LED 18 paneles',
          price:'$1000'
        },
        {
          name:'• LED Screen 12 panels | Pantalla LED 12 paneles',
          price:'$800'
        },
        {
          name:'• LED Screen 32 panels | Pantalla LED 32 paneles',
          price:'$600'
        }      
      ]  
    },
    {
    title:'Robot Show',
    image: '../../../../assets/images/packageSample.jpg',
    services:[
        {
          name:'• 2 Robot show 30 min ',
          price:'$700'
        },
        {
          name:'• 1 Robot / 30 min',
          price: '$350'
        }   
      ]  
    },
    {
    title:'Co2 + Yet + Explosion',
    image: '../../../../assets/images/packageSample.jpg',
    services:[
        {
          name:'• 4  Co2 + Yet + 3 explosion | 4  Co2 + Yet + 3 explociones',
          price:'$800'
        },
        {
          name:'• 2  Co2 + Yet + 3 explosion | 2  Co2 + Yet + 3 explociones',
          price: '$500'
        },
        {
          name:'• Add confetti | Agregar confetti',
          price:'$150'
        }       
      ]  
    },
    {
    title:'Hora Loca',
    image: '../../../../assets/images/packageSample.jpg',
    services:[
        {
          name:'• Hora loca + 2 stilt walkers ',
          price:'$600'
        },
        {
          name:'• 100 Balloons | 100 Globos',
          price: '$150'
        },
        {
          name:'• 100 Glow stickes bulk | 100 Palos luminosos',
          price:'$250'
        },       
        {
          name:'• 50 Party glow stickes',
          price:'$100'
        }

      ]  
    },
  
  
  ]

  getData(){
    return this.data;
  }
}
