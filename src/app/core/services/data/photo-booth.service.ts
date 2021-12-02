import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoBoothService {

  constructor() { }

  data=[
    {      
      title:'PHOTO BOOTH',
      services:[
                {                  
                  name:  "ALL PACKAGES WILL INCLUDE",
                },
                {
                  name:'• Mirror photo booth',
                },
                {
                  name:'• Professional photo booth attendant',
                },
                {
                  name:'• Delivery, set-up and breakdown of booth',
                },
                {
                  name:'• Unlimited use of photo booth for the hours reserved',
                },
                {
                  name: '• Unlimited prints',
                },
                {
                  name:   '• Red carpet',
                }
    
    ],
    servicesEs:[
              {                          
                name:  "Todos los paquetes incluiran",
              },
              {
                name:'• El mirror photo booth',
              },
              {
                name:'• Asistente profesional',
              },
              {
                name:'• Entrega, preparada y descompostura de photo booth',
              },
              {
                name:'• Uso ilimitado de photo booth para las horas que están reservado',
              },
              {
                name: '• Uso ilimitado de impresiones de fotos',
              },
              {
                name:   '• Carpeta roja',
              }
      ] 
    },
    {      
      title:'Photo Booth PACKAGE 1',
      services:[
                {                  
                  name:  "• 2 hours of unlimited use of photo booth",
                },
                {
                  name:'• Everything listed above',
                }
    
    ],
    servicesEs:[
              {                          
                name:  "• 2 horas de uso limitado de photo booth ",
              },
              {
                name:'• Todo lo mencionado arriba',
              }
      ] 
    },
    {      
      title:'Photo Booth PACKAGE 2',
      services:[
                {                  
                  name:  "• 3 hours of unlimited use of photo booth",
                },
                {
                  name:'• Everything listed above',
                },
                {
                  name:'• Customized background for prints',
                },
                {
                  name:'• USB of all photos taken that day',
                },
                {
                  name:'• Choice of color glitter background ',
                }
    
    ],
    servicesEs:[
              {                          
                name:  "• 3 Horas de uso ilimitado de photo booth",
              },
              {
                name:'• Todo lo mencionado arriba',
              },
              {
                name:'• Fondo personalizado para impresiones',
              },
              {
                name:'• USB de todas la fotos tomadas ese día',
              },
              {
                name:'• Elección del color para el fondo del brillo',
              }
      ] 
    },
    {      
      title:'Photo Booth PACKAGE 3',
      services:[
                {                  
                  name:  "• 4 hours of unlimited use of photo booth",
                },
                {
                  name:'• Everything listed above',
                },
                {
                  name:'• Customized background for prints ',
                },
                {
                  name:'• USB of all photos taken that day',
                },
                {
                  name:'• Choice of color glitter background ',
                },
                {
                  name: '• Choice of photo strips scrapbook ',
                }
    
    ],
    servicesEs:[
              {                          
                name:  "4 horas de uso ilimitado de photo booth",
              },
              {
                name:'• Todo lo mencionado arriba',
              },
              {
                name:'• Fondo personalizado para impresiones ',
              },
              {
                name:'• USB de todas las fotos ese dia',
              },
              {
                name:'• Eleccion de color del fondo del brillo',
              },
              {
                name: '• Elección del álbum para las photo strips ',
              }
      ] 
    },
    
  ]

  getUs(){
    return this.data
  }


}
