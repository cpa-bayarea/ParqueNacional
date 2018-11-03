import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnimaisperdidosPage } from '../animaisperdidos/animaisperdidos';
import { AnimaisselvagensPage } from '../animaisselvagens/animaisselvagens';
import { EstruturaparquePage } from '../estruturaparque/estruturaparque';
import { NovasespeciesPage } from '../novasespecies/novasespecies';
import { CrimesambientaisPage } from '../crimesambientais/crimesambientais';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-regisoc',
  templateUrl: 'regisoc.html',
})
export class RegisocPage {

  constructor(public navCtr2: NavController, public navParams: NavParams) {
  }

  animaisPerdidos(){
    this.navCtr2.push(AnimaisperdidosPage);
  
  }
  animaisSelvagens(){
    this.navCtr2.push(AnimaisselvagensPage);
  }
  estruturaParque(){
    this.navCtr2.push(EstruturaparquePage);
  }
  novasEspecies(){
    this.navCtr2.push(NovasespeciesPage);
  }
  crimesAmbientais(){
    this.navCtr2.push(CrimesambientaisPage);
  }
  home(){
    this.navCtr2.setRoot(HomePage);
  }

}
