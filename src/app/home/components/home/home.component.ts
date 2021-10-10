import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PackagesService} from '../../../core/services/data/packages.service';
import {ExtrasService} from '../../../core/services/data/extras.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  freeAways:boolean = false;
  extras:boolean = false;
  dataEvents:boolean = false;
  dataDJ: boolean = false;
  dataPackage;
  dataExtras;
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

 myClick() {     
      console.log("Click");  
  }

  freeAwaysFuntion(){
    this.freeAways = !this.freeAways;
  }

  extrasFuntion(){
    this.extras = !this.extras;
  }

  openEvents(){
    this.dataEvents = ! this.dataEvents;
  }

  openDJ(){
    this.dataDJ = !this.dataDJ;
  }

   

}

 
