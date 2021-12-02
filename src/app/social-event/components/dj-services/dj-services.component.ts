import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dj-services',
  templateUrl: './dj-services.component.html',
  styleUrls: ['./dj-services.component.scss']
})
export class DjServicesComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit(): void {
  }

}
