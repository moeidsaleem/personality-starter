import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AwardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-awards',
  templateUrl: 'awards.html',
})
export class AwardsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AwardsPage');
  }


  items=[
    {photo:'./assets/imgs/oxford.png', heading:'Oxford University Hall of Fame.',sub:'Oxford University'},
    {photo:'./assets/imgs/oxford.png', heading:'Keble College, Oxford, honorary fellow',sub:'Oxford University'},
    {photo:'./assets/imgs/oxford.png', heading:'Lifetime achievement award, Asian jewel awards',sub:'London, 8 July 2004'},
    {photo:'./assets/imgs/award.png', heading:'Humanitarian award, Asian sports awards',sub:'Kuala Lumpur, 13 December 2007'},
    {photo:'./assets/imgs/award.png', heading:'Jinnah award',sub:'Pakistan - 2011'},
    {photo:'./assets/imgs/award.png', heading:'Royal College of Physicians of Edinburgh, honorary fellowship',sub:' 28 July 2012'},
  ]

}
