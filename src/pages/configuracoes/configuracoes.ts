import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

  items = [
    'Conta',
    'Notificações',
    'Ajuda'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemSelected(item: string){
    console.log("Selected Item", item);
  }
}
