import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDataComponent } from './components/form-data/form-data.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [FormDataComponent, HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
