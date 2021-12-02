import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-photo-book-package',
  templateUrl: './photo-book-package.component.html',
  styleUrls: ['./photo-book-package.component.scss']
})
export class PhotoBookPackageComponent implements OnInit {

  @Input() data;
  constructor(

  ) {

    
   }

  ngOnInit(): void {


  }

}
