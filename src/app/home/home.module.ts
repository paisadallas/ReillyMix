import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDataComponent } from './components/form-data/form-data.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import {MaterialModule} from '../material/material.module';
import { PackageComponent } from './components/package/package.component';
import { ServicesPackageComponent } from './components/services-package/services-package.component';
import { ExtrasComponent } from './components/extras/extras.component';
import { RouterModule } from '@angular/router';
import { ServicesExtrasComponent } from './components/services-extras/services-extras.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [FormDataComponent, HomeComponent, PackageComponent, ServicesPackageComponent, ExtrasComponent, ServicesExtrasComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    RouterModule,
    SharedModule
  ]
})
export class HomeModule { }
