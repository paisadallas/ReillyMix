import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {finalize} from 'rxjs/operators'
import {FormBuilder, FormGroup, Validator} from '@angular/forms';
@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.scss']
})
export class UploadPictureComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private storage: AngularFireStorage,
    private fb:AngularFirestore,
  ) {
    this.buildForm();
   }

  url$: Observable<any>
  uploadImage:boolean = true;
  ngOnInit(): void {
  }

  uploadFile(event){
    const file = event.target.files[0];
    console.log(file.name);
    
    const name = 'bannerHome/'+file.name;
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);

    task.snapshotChanges().pipe(finalize(()=>
     {
       this.url$ = fileRef.getDownloadURL();
       this.url$.subscribe(urldata =>{
         console.log(urldata)

        this.fb.collection('bannerHome').doc().set({
         url: urldata
       })

      // docRef.set({
      //     url: urldata
      //   });



       })
      //  this.url$.subscribe(url =>{
      //    console.log(this.url$)
      //  })

      this.uploadImage = false;
     }
    )).subscribe();
  }

  private buildForm(){
    //DATA Formulario
    this.form = this.formBuilder.group({
      id:'',
      name:'',
      date:'',
      url:''
    })
  }

  async deleteData(){
     await this.fb.collection('bannerHome').doc().delete();
    
  }



  async getId(){
    const da= this.fb.collection('bannerHome').snapshotChanges().subscribe(res =>{
      res.map(a =>{
        console.log(a.payload.doc.id) 
        this.fb.collection('bannerHome').doc(a.payload.doc.id).delete();
      })
    })
     
   }

}
