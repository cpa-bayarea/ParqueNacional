import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-ajuda',
  templateUrl: 'ajuda.html',
})
export class AjudaPage {

  constructor(public navAj: NavController, public navParams: NavParams) {
  }

  home(){
    this.navAj.setRoot(HomePage);
  }

}
