import { Component, Input, OnInit } from '@angular/core';
import { DataNight } from '../../dataNight.model';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit {

  discoOne:boolean = false;
  discoTwo:boolean = false;

  @Input() data: DataNight;
  constructor() { }

  one(){
    this.discoOne = !this.discoOne
  }
  two(){
    this.discoTwo = !this.discoTwo
  }

  ngOnInit(): void {
  }


  
 
}
