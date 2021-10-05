import { Component, Input, OnInit } from '@angular/core';
import { ImageModel } from 'src/app/core/model/imageModel.model';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})
export class CardImageComponent implements OnInit {

  constructor() { }

  @Input() data: ImageModel

  ngOnInit(): void {
  }

}
