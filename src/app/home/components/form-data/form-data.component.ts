import { Component, OnInit } from '@angular/core';
import {FreeawaysService} from './../../../core/services/data/freeaways.service';
import {Banner} from '../../../core/model/banner.model';
import {TitleFreeAways} from '../../../core/model/titleFreeaways.model';
import { FormControl } from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.scss']
})
export class FormDataComponent implements OnInit {

  nameFiel = new FormControl('');
  emailFiel = new FormControl('');
  phoneFiel = new FormControl('');

  endData:boolean = false;
  data: Banner[];
  title: TitleFreeAways[];
  title_string: string;
  constructor(
    private freeAways: FreeawaysService,
    private ft: AngularFirestore,
  ) {
   //IMAGES BANNER

    this.freeAways.getData().subscribe((banner:Banner[])=>{
      console.log(banner);
      this.data = banner;
    })

    //TITLE FREEAWAYS

    // this.freeAways.getTitle().subscribe((res:TitleFreeAways[])=>{
    //   console.log(res);
    //   this.title = res;
    // })

    const read =  this.ft.collection('free_aways').valueChanges();

     read.subscribe((data:TitleFreeAways[]) =>{
      console.log(data)
      this.title = data

      this.title_string = this.title[0].event
      console.log(this.title_string)
    })
    
   }

  ngOnInit(): void {
    // this.freeAways.getTitle().subscribe((res:TitleFreeAways[])=>{
    //   console.log(res.values);
    //   this.title = res;
    // })

  }

  async quickstart() {

    const docRef = this.ft.collection('users').doc();

    await docRef.set({
      first: 'hernando',
      last: 'Lovelace',
      born: 1992
    });
    
  }

  sendData(){

    const docRef = this.ft.collection('emails').doc();
    let dataForm = {
      userFiel: this.nameFiel.value,
      emailFiel: this.emailFiel.value,
      phoneFiel: this.phoneFiel.value,
    }

  console.log(dataForm);

   docRef.set(dataForm).finally(()=>{
     console.log('CORRECTO');
     this.endData = true;
   })
   
  
    }

}
