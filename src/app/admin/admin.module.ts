import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import { EmailsComponent } from './components/emails/emails.component';
import { GiveawaysComponent } from './components/giveaways/giveaways.component';
import { NightClubsComponent } from './components/night-clubs/night-clubs.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { UploadPictureComponent } from './components/upload-picture/upload-picture.component';


@NgModule({
  declarations: [AdminComponent, EmailsComponent, GiveawaysComponent, NightClubsComponent, PaginatorComponent, UploadPictureComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
