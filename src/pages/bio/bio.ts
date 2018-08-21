import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the BioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bio',
  templateUrl: 'bio.html',
})
export class BioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private api:ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BioPage');
  }

}
