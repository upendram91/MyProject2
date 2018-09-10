import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabOnePage } from '../tab-one/tab-one';
import { TabTwoPage } from '../tab-two/tab-two';

/**
 * Generated class for the MyTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-tab',
  templateUrl: 'my-tab.html'
})
export class MyTabPage {

  tabOneRoot = TabOnePage
  tabTwoRoot = TabTwoPage


  constructor(public navCtrl: NavController) {}

}
