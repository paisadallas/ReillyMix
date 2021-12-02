import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-night-club',
  templateUrl: './night-club.component.html',
  styleUrls: ['./night-club.component.scss']
})
export class NightClubComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Wensday'},
    {value: 'pizza-1', viewValue: 'Thursday'},
    {value: 'tacos-2', viewValue: 'Friday'},
    {value: 'tacos-2', viewValue: 'Saturday'},
    {value: 'tacos-2', viewValue: 'Saturday-after'},
    {value: 'tacos-2', viewValue: 'Sunday'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
