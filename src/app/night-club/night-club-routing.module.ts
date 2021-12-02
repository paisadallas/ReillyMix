import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {NightClubComponent}  from './components/night-club/night-club.component';

const routes: Routes = [
  {
    path: '',
    component: NightClubComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class NightClubRoutingModule { }
