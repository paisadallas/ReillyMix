import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PackagesService} from '../../../core/services/data/packages.service';
import {ExtrasService} from '../../../core/services/data/extras.service';
import {PhotoBoothService} from '../../../core/services/data/photo-booth.service';
import {DJServicesService} from '../../../core/services/data/dj-services.service';
@Component({
  selector: 'app-social-event',
  templateUrl: './social-event.component.html',
  styleUrls: ['./social-event.component.scss']
})
export class SocialEventComponent implements OnInit {

  dataPackage;
  dataExtras;
  dataBooth;
  dataDj;
  cellIndex=0;
  
dj:string[];

  // dj:string[] =[
  //   '../../../../assets/images/DJ_Sample2.png',
  //   '../../../../assets/images/DJ_Sample2.png',
  //   '../../../../assets/images/DJ_Sample2.png',
  //   '../../../../assets/images/DJ_Sample2.png',

  // ]




  extras:boolean = false;
  constructor(
    private dataServices:PackagesService,
    private dataExtrasServies: ExtrasService,
    private photoBooth:PhotoBoothService,
    private djServices:DJServicesService,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
      this.dataPackage = this.dataServices.getPackage();
    })
  
    this.route.params.subscribe((param:Params)=>{
      this.dataExtras = this.dataExtrasServies.getData();
    })

    this.route.params.subscribe((params:Params) =>{
      this.dataBooth = this.photoBooth.getUs()
    })

    this.route.params.subscribe((params:Params) =>{
      this.dataDj = this.djServices.getData(this.cellIndex)
    })
    this.route.params.subscribe((params:Params) =>{
      this.dj = this.djServices.getDj()
    })

    console.log(this.dj)
    
  }
  extrasFuntion(){
    this.extras = !this.extras;
  }

  getDj(){   
    this.route.params.subscribe((params:Params) =>{
      this.dataDj = this.djServices.getData(1)
    })
  }

  handleCarouselEvents($event:any){
    console.log($event)
  // this.cellIndex = 1;
   //this.ngOnInit()

   if($event.cellIndex == 1){
     this.cellIndex=1;
     this.ngOnInit()
   }
  }
  
}
