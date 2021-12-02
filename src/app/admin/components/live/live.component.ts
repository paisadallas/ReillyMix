import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.scss']
})
export class LiveComponent implements OnInit {

  check:boolean = false;
  newUrl = new FormControl('',Validators.required);
  constructor(
    private ft: AngularFirestore,
  ) { }

  ngOnInit(): void {
  }

 async upLive(){
  const live =  this.ft.collection('live').doc('video');

  await live.update({
    url: this.newUrl.value,
  }).finally(()=>{
    this.check = true
  })
  }

}
