import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialEventComponent } from './components/social-event/social-event.component';
import {SocialEventRoutingModule} from './social-event-routing.module';


@NgModule({
  declarations: [SocialEventComponent],
  imports: [
    CommonModule,
    SocialEventRoutingModule
  ]
})
export class SocialEventModule { }
