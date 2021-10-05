import { Injectable } from '@angular/core';
import { ImageModel } from '../../model/imageModel.model';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GaleryService {

  constructor(
    private fb:AngularFirestore
  ) { }

  data: ImageModel[] = []

  getGalery(){
    //return this.data;
   return this.fb.collection('galery').valueChanges();

  }
}
