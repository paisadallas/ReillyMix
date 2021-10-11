import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-extras',
  templateUrl: './services-extras.component.html',
  styleUrls: ['./services-extras.component.scss']
})
export class ServicesExtrasComponent implements OnInit {

  constructor() { }

  @Input() dataService;
  @Input() dataPrice;

  ngOnInit(): void {
  }

}
