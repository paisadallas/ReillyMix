import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklyPicturesComponent } from './components/weekly-pictures/weekly-pictures.component';
import { NightClubComponent } from './components/night-club/night-club.component';
import {WeeklyPicturesRoutingModule} from './weekly-pictures-routing.module';
import { DayPicturesComponent } from './components/day-pictures/day-pictures.component';
import {MaterialModule} from '../material/material.module';
import { PaginatorComponent } from './components/paginator/paginator.component';


@NgModule({
  declarations: [WeeklyPicturesComponent, NightClubComponent, DayPicturesComponent, PaginatorComponent],
  imports: [
    CommonModule,
    WeeklyPicturesRoutingModule,
    MaterialModule
  ]
})
export class WeeklyPicturesModule { }
