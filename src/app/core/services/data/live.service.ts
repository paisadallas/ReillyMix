import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  constructor(
    private fb:AngularFirestore
  ) { }

  getLive(){
    return this.fb.collection('live').valueChanges();
  }
}
