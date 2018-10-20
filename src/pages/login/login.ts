import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormBuilder, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm: any;
  errorEmail = false;
  errorPassword = false;
  messageEmail = "";
  messagePassword = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, formBuilder:FormBuilder) {
    this.loginForm = formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])]
    })
  }

  home(){
    this.navCtrl.setRoot(HomePage);
  }
  
  login(){
    let {email, password} = this.loginForm.controls;
    if(!this.loginForm.valid){
      if(!email.valid){
        this.errorEmail = true;
        this.messageEmail = 'Ops! Email inválido'
      }
      else {
        this.messageEmail = '';
      }

      if(!password.valid){
        this.errorPassword = true;
        this.messagePassword = 'A senha precisa ter entre 6 a 20 caracteres'
      }
      else{
        this.messagePassword = '';
      }
    }
    else{
      alert("Login Realizado");
    }
  }

}
