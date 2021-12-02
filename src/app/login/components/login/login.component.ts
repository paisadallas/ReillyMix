import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import { flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userFiel = new FormControl('');
  passwordFiel = new FormControl('');

  constructor(
    private fb:AngularFirestore,
  ) { }

  ngOnInit(): void {
  }


 async quickstart() {

    const docRef = this.fb.collection('users').doc();

    await docRef.set({
      first: 'hernando',
      last: 'Lovelace',
      born: 1992
    });
    
  }

  async updateData(){
    const docRef = this.fb.collection('users').doc('alovelace');

    await docRef.update({
      first: 'hernando',
      last: 'Reyes',
      born: 1992
    });
  }

  async readData(){
    const read =  this.fb.collection('users').valueChanges();

    const order = await read.subscribe(data =>{
      console.log(data)
    })
   // console.log(order)
  }
  async filter(){
    const read =  this.fb.collection('users',ref => ref.where('born','==',1992)).valueChanges().subscribe(data =>{
      console.log(data)
      
    })
   
  }

  async deleteData(){
    const userscollection =  await this.fb.collection('users')
    userscollection.doc('M8lcdQlSa8aq2bs8aXzM').delete();
  }

  async getId(){
   const da= this.fb.collection('users').snapshotChanges().subscribe(res =>{
     res.map(a =>{
       console.log(a.payload.doc.id) 
     })
   })
    
  }
  sendData(){





  let dataForm = {
    userFiel: this.userFiel.value,
    passwordFiel: this.passwordFiel.value

    



  }
console.log(dataForm);

  }

  checkPassword(){
        if(this.passwordFiel.value == "reilly"){
       //   window.open("http://localhost:4200/admin","_self");
        //  window.open('https://reillymixent.web.app//admin',"_self");
      
    }
  }



}
