import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public navInfo: NavController, public navParams: NavParams) {
  }

  home(){
    this.navInfo.setRoot(HomePage);
  }

}
