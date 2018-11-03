import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisocPage } from '../pages/regisoc/regisoc';
import { RegistrarocorrenciaPage} from "../pages/registrarocorrencia/registrarocorrencia";
import { AjudaPage} from "../pages/ajuda/ajuda";
import { InfoPage} from "../pages/info/info";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav2: Nav;
  
  rootPage:any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
      {title: 'Registrar Ocorrência', component: RegistrarocorrenciaPage},
      { title: 'Visualizar Ocorrência', component: RegisocPage},
      { title: 'Info', component: InfoPage},
      {title: 'Ajuda', component: AjudaPage},

    ];
  }
  openPage(page) {
   
    this.nav2.setRoot(page.component);
  }
}
  


