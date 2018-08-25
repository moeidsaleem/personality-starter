import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AdMob } from 'ionic-admob';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, admob: AdMob, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //admob
      admob.banner.show({ id: "ca-app-pub-3853585275749980/4146373549" }).then(runn=> console.log(`it ran`)).catch(err=> console.log(err))

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

