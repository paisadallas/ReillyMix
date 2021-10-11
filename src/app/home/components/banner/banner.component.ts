import { Component, OnInit } from '@angular/core';
import {BannerHomeService} from '../../../core/services/data/banner-home.service';

import {Banner} from '../../../core/model/banner.model';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  data: Banner[];

  constructor(
    private bannerServices: BannerHomeService,
    
  ) { 
    this.bannerServices.getData().subscribe((banner:Banner[])=>{
      console.log(banner);
      this.data = banner;
    })
  }

  ngOnInit(): void {
  }

}
