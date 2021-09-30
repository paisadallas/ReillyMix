import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor() { }

  data =[
    {
    title:'Package 1',
    image: '../../../../assets/images/packageSample.jpg',
    services:[
        {
          name:'• MASTER CEREMONY'
        },
        {
          name:"• 5 HOURS OF SERVICES"
        },
        {
          name:"• SOUND CAPACITY FOR A VENUE OF 200 PEOPLE"
        },
        {
          name:"• 4 LIGHTS"
        },
        {
          name:"• LED DJ BOOTH"
        },
        {
          name:"• 2 FOG MACHINES"
        }
      ],
    servicesEs:[
      {
        name:'• MAESTRO DE CEREMONIA'
      },
      {
        name:'• 5 HORAS DE SERVICIO'
      },
      {
        name:'• SONIDO APTO PARA SALON DE 200 PERSONAS'
      },
      {
        name:'• 4 LUCES'
      },
      {
        name:'• CABINAS ILUMINADAS'
      },
      {
        name:'• 2 MAQUINAS DE HUMO'
      },
    ]
    },
    {
    title:'Package 2',
    image: '../../../../assets/images/packageSample2.jpg',
    services:[
        {
          name:'• MASTER OF CEREMONY'
        },
        {
          name:"• HOURS OF SERVICES 6-1"
        },
        {
          name:"• SOUND FOR A 250 PEOPLE VENUE"
        },
        {
          name:"• 4 ROBOTIC LIGHTS WITH LIGHTING ENGINEER"
        },
        {
          name:"• DJ BOOTH WITH TV DISPLAYS"
        },
        {
          name:"• 5 TV SCREENS / CUSTOM NAME"
        },
      ],
      servicesEs:[
        {
          name:'• MAESTRO DE CEREMONIA'
        },
        {
          name:'• HORAS DE SERVICIO 6-1'
        },
        {
          name:'• SONIDO APTO PARA SALON DE 250 PERSONAS'
        },
        {
          name:'• 4 LUCES ROBOTICAS CON INGENIERO'
        },
        {
          name:'• CABINAS CON TVS'
        },
        {
          name:'• 5 TVS DE PRESENTACION NOMBRE PERSONALIZADO'
        },
      ]
    },

    {
      title:'Package 3',
      image: '../../../../assets/images/packageSample3.jpg',
      services:[
          {
            name:'• MASTER OF CEREMONY'
          },
          {
            name:"• 7 HOURS OF SERVICES "
          },
          {
            name:'• SOUND CAPACITY FOR A VENUE OF 500 PEOPLE'
          },
          {
            name:"• 8 ROBOTIC LIGHTS"
          },
          {
            name:'• LED DJ BOOTH'
          },
          {
            name:"• 3 TV DISPLAYS"
          },
          {
            name:"• ILUMINATED COLUMNS ON THE DANCE FLOOR"
          },
        ],
        servicesEs:[
          {
            name:'• MAESTRO DE CEREMONIA'
          },
          {
            name:'• 7 HORAS DE SERVICIO'
          },
          {
            name:'• SONIDO APTO PARA SALON DE 500 PERSONAS'
          },
          {
            name:'• 8 LUCES ROBOTICAS'
          },
          {
            name:'• CABINAS ILUMINADAS'
          },
          {
            name:'• 3 TVS DE PRESENTACION'
          },
          {
            name:'• COLUMNAS ILUMINADAS EN LA PISTA'
          },
        ]
      }
  
  
  ]

  getPackage(){
    return this.data
  }
}
