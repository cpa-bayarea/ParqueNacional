import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NotificacoesPage } from '../notificacoes/notificacoes';
import { RegisocPage } from '../regisoc/regisoc';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { SobrePage } from '../sobre/sobre';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) {

  }
  openLoginPage(){
    this.nav.setRoot(LoginPage);
  }
  openNotificacoesPage(){
    this.nav.push(NotificacoesPage);
  }
  openMenu(){

  }
  openRegisocPage(){
    this.nav.push(RegisocPage);
  }
  openConfiguracoesPage(){
    this.nav.push(ConfiguracoesPage);
  }

  openSobrePage(){
    this.nav.push(SobrePage);
  }
  
 
  
}

