import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDataComponent } from './components/form-data/form-data.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import {MaterialModule} from '../material/material.module';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { BannerComponent } from './components/banner/banner.component';
import { VideoComponent } from './components/video/video.component';
@NgModule({
  declarations: [FormDataComponent, HomeComponent, BannerComponent, VideoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    RouterModule,
    SharedModule,
    IvyCarouselModule
  ]
})
export class HomeModule { }
