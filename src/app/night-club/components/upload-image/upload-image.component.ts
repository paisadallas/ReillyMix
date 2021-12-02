import { Component, OnInit } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {finalize} from 'rxjs/operators'




interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  
  selectedValue:string = "Wednesday";
   dataBanner:string[];
  constructor(
    private storage: AngularFireStorage,
    private fb:AngularFirestore,
    
  ) { }

  ngOnInit(): void {

    console.log('hola mundo')
    
    
  }


  foods: Food[] = [
    {value: 'Wednesday', viewValue: 'Wednesday'},
    {value: 'Thursday', viewValue: 'Thursday'},
    {value: 'Friday', viewValue: 'Friday'},
    {value: 'Saturday', viewValue: 'Saturday'},
    {value: 'Saturday-after', viewValue: 'Saturday-after'},
    {value: 'Sunday', viewValue: 'Sunday'},
  ];

day(){
  console.log(this.selectedValue)
}


  url$: Observable<any>;
  url_video$: Observable<any>;
  uploadImage:boolean = true;
  uploadVideo:boolean = true;

 up_image_DiscoFile(event){

 // const admin = require('firebase-admin');
   
    const file = event.target.files[0];
    console.log(file.name);
    
    const name = this.selectedValue+'_image/'+file.name;
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);
    

    task.snapshotChanges().pipe(finalize(()=>
     {
       this.url$ = fileRef.getDownloadURL();
       this.url$.subscribe(urldata =>{
         console.log(urldata)
          this.fb.collection('image_'+this.selectedValue).doc(  this.selectedValue
          ).update({ 
          //  banner: admin.firestore.FieldValue.arrayUnion('urldata')      
            //  arrayUnion(urldata)

          })
       })

      this.uploadImage = false;
     }
    )).subscribe();
  }

  up_video_DiscoFile(event){
    const file = event.target.files[0];
    console.log(file.name);
    
    const name = this.selectedValue+'_video/'+file.name;
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);
    this.dataBanner[0]="hola";
    this.dataBanner[1]="mundo";

    task.snapshotChanges().pipe(finalize(()=>
     {
       this.url_video$ = fileRef.getDownloadURL();
       this.url_video$.subscribe(urldata =>{
         console.log(urldata)
          this.fb.collection('video_'+this.selectedValue).doc().set({
          url: urldata,
          id:"exampleId"
        })
       })

      this.uploadVideo = false;
     }
    )).subscribe();
  }

}
