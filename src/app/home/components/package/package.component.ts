import { Component, OnInit } from '@angular/core';
import {DataPacket} from '../../dataPacket.model';
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {
  data = {
  title: 'Package one',
  image:'imageOne',
  services: [
    {
      name:"services"
    },
    {
      name:"One"
    },

    {
      name:'tree'
    }
  ]
}

dataArray : DataPacket[]=[
  {
  title:'hola',
  image: 'mundo',
  services:[
      {
        name:'services'
      },
      {
        name:"services"
      }
    ]
  },
  {
  title:'hola',
  image: 'mundo',
  services:[
      {
        name:'services'
      },
      {
        name:"services"
      }
    ]
  }


]


  constructor() { }


  ngOnInit(): void {
  }

}
