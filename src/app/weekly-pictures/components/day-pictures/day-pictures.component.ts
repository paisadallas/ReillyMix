import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';


interface Item {
  Password: string,
  User:string,
  
};

@Component({
  selector: 'app-day-pictures',
  templateUrl: './day-pictures.component.html',
  styleUrls: ['./day-pictures.component.scss']
})



export class DayPicturesComponent implements OnInit {

item:Observable<any[]>;

  constructor(private firestore: AngularFirestore) {  
    
   }

 public size:80;
  ngOnInit(): void {
  }

getData(){
   
    this.item = this.firestore.collection('Authentication').valueChanges();
    this.item.subscribe(res => console.log(res)); 

 }


}
