import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NightComponent } from './components/night/night.component';
import { NightRoutingModule } from './night-routing.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MaterialModule} from '../material/material.module';
import { DaysComponent } from './components/days/days.component';
import { DiscoComponent } from './components/disco/disco.component';
import { CarouselNightComponent } from './components/carousel-night/carousel-night.component';

@NgModule({
  declarations: [NightComponent, DaysComponent, DiscoComponent, CarouselNightComponent],
  imports: [
    CommonModule,
    NightRoutingModule,
    IvyCarouselModule,
    MaterialModule
  ]
})
export class NightModule { }
