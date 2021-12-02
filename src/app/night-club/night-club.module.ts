import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NightClubComponent } from './components/night-club/night-club.component';
import {NightClubRoutingModule} from './night-club-routing.module';
import {MaterialModule} from './../material/material.module';
import { UploadImageComponent } from './components/upload-image/upload-image.component';


@NgModule({
  declarations: [NightClubComponent, UploadImageComponent],
  imports: [
    CommonModule,
    NightClubRoutingModule,
    MaterialModule
  
  ],
  exports:[NightClubComponent],
 
})
export class NightClubModule { }
