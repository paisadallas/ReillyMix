import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   userFiel = new FormControl('');
  passwordFiel = new FormControl('');

  constructor() { }

  ngOnInit(): void {
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
        //  window.open("http://localhost:4200/admin","_self");
          window.open('https://reillymixent.web.app//admin',"_self");
      
    }
  }



}
