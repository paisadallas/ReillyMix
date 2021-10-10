import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {ImageModel} from '../../../core/model/imageModel.model';
import {GaleryService} from '../../../core/services/data/galery.service';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {


galery: ImageModel[] =[];
galeryShow:boolean = false;

  constructor(
    private route:ActivatedRoute,
    private dataGalery: GaleryService
  ) { }

  club:boolean = false;

  ngOnInit(): void {
 
     this.dataGalery.getGalery().subscribe( 
       (image:ImageModel[]) =>{
         console.log(image)
         this.galery = image
       }
     )    
  }

  getDate(type:string,$event: MatDatepickerInputEvent<Date>){
    console.log($event.value)
  }

  openClub(){
    this.club = ! this.club;
  }

  openGalery(){
    this.galeryShow = !this.galeryShow;
  }

}
