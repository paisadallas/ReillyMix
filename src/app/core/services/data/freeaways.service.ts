import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FreeawaysService {

  constructor(
    private fb:AngularFirestore
  ) { }

  getData(){
    return this.fb.collection('bannerHome').valueChanges();
  }

  getTitle(){
    return this.fb.collection('free_aways').valueChanges();
  }
}
