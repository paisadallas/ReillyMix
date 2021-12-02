import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-book',
  templateUrl: './photo-book.component.html',
  styleUrls: ['./photo-book.component.scss']
})
export class PhotoBookComponent implements OnInit {

  @Input() data;

  constructor(

  ) { }

  ngOnInit(): void {


  }

}
