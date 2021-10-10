import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {SocialEventComponent} from './components/social-event/social-event.component';

const routes: Routes = [
  {
    path: '',
    component: SocialEventComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SocialEventRoutingModule { }
