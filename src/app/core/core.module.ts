import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataNightService} from './services/data/data-night.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    DataNightService
  ]
})
export class CoreModule { }
