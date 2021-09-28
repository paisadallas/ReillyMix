import { Component, Input, OnInit } from '@angular/core';
import { DataNight } from '../../dataNight.model';

@Component({
  selector: 'app-disco',
  templateUrl: './disco.component.html',
  styleUrls: ['./disco.component.scss']
})
export class DiscoComponent implements OnInit {

  @Input() data : DataNight;
  constructor() { }

  ngOnInit(): void {
  }

}
