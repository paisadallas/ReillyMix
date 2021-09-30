import { Component, Input, OnInit } from '@angular/core';
import {DataPacket} from '../../dataPacket.model';
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {

@Input() data;


  constructor() { }


  ngOnInit(): void {
  }

}
