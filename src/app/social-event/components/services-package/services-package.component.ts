import { Component, Input, OnInit } from '@angular/core';
import {DataPacket} from '../../../core/model/dataPacket.model'

@Component({
  selector: 'app-services-package',
  templateUrl: './services-package.component.html',
  styleUrls: ['./services-package.component.scss']
})
export class ServicesPackageComponent implements OnInit {

  constructor() { }

  @Input() data:DataPacket;

  ngOnInit(): void {
  }

}
