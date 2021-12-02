import { Component, OnInit } from '@angular/core';
import { DataNight } from '../../dataNight.model';
import {ActivatedRoute, Params} from '@angular/router';
import {DataNightService} from '../../../core/services/data/data-night.service';
@Component({
  selector: 'app-night',
  templateUrl: './night.component.html',
  styleUrls: ['./night.component.scss']
})
export class NightComponent implements OnInit {

  data:DataNight[];
  constructor(    
    private dataNight: DataNightService,
    private route: ActivatedRoute,) { 

      // this.dataNight.pasarDatos().subscribe((data:DataNight[])=>{
      //   console.log(data)
      //   this.data=data
      // })
  }

  ngOnInit(): void {

    this.route.params.subscribe((params:Params) =>{
      this.data = this.dataNight.getDiscos();
      console.log(this.data)
    })
  }
}
