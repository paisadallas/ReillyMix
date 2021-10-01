import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {WeeklyPicturesComponent} from './components/weekly-pictures/weekly-pictures.component';

const routes: Routes = [
  {
    path: '',
    component: WeeklyPicturesComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[RouterModule]
})
export class WeeklyPicturesRoutingModule { }
