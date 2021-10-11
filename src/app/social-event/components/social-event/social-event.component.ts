import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PackagesService} from '../../../core/services/data/packages.service';
import {ExtrasService} from '../../../core/services/data/extras.service';

@Component({
  selector: 'app-social-event',
  templateUrl: './social-event.component.html',
  styleUrls: ['./social-event.component.scss']
})
export class SocialEventComponent implements OnInit {

  dataPackage;
  dataExtras;
  extras:boolean = false;
  constructor(
    private dataServices:PackagesService,
    private dataExtrasServies: ExtrasService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
      this.dataPackage = this.dataServices.getPackage();
    })
  
    this.route.params.subscribe((param:Params)=>{
      this.dataExtras = this.dataExtrasServies.getData();
    })
  }
  extrasFuntion(){
    this.extras = !this.extras;
  }
}
