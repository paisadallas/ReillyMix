import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeklyAdminComponent } from './components/weekly-admin/weekly-admin.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WeeklyAdminComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class WeeklyAdminRoutingModule { }
