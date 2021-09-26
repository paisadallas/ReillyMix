import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NightComponent } from './components/night/night.component';
import { NightRoutingModule } from './night-routing.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [NightComponent],
  imports: [
    CommonModule,
    NightRoutingModule,
    IvyCarouselModule,
    MaterialModule
  ]
})
export class NightModule { }
