import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeeklyAdminRoutingModule} from './weekly-admin-routing.module';
import { ClubsComponent } from './components/clubs/clubs.component'
import {WeeklyAdminComponent} from './components/weekly-admin/weekly-admin.component';
import { UploadPicturesComponent } from './components/upload-pictures/upload-pictures.component';
import {MaterialModule} from '../material/material.module';
import { CardImageComponent } from './components/card-image/card-image.component';


@NgModule({
  declarations: [ClubsComponent, WeeklyAdminComponent, UploadPicturesComponent, CardImageComponent],
  imports: [
    CommonModule,
    WeeklyAdminRoutingModule,
    MaterialModule,
  ]
})
export class WeerklyAdminModule { }
