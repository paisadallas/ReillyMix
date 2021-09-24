import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatCardModule
  ],
  exports:[
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class MaterialModule { }
