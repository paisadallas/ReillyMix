import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }
  bannerShow:boolean = false;
  emailShow:boolean = false;
  liveShow:boolean = false;
  giveawaysShow:boolean = false;
  nightShow:boolean = false;

  ngOnInit(): void {
  }

  showBanner(){
    this.bannerShow = !this.bannerShow;
  }

  showEmail(){
    this.emailShow = !this.emailShow;
  }

  showLive(){

  }

  showGiveaways(){
    this.giveawaysShow = !this.giveawaysShow;
  }

  showNight(){
    // window.open('http://localhost:4200/discos', "_self");
    window.open('https://reillymixent.web.app/discos', "_self");
  }

}
