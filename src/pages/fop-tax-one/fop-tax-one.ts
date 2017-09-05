import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PayFopPage } from '../pay-fop/pay-fop';
import { TemplatesPage } from '../templates/templates';
/**
 * Generated class for the FopTaxOnePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fop-tax-one',
  templateUrl: 'fop-tax-one.html',
})
export class FopTaxOnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FopTaxOnePage');
  }

  nextFop() {
    this.navCtrl.push(PayFopPage);
  }

  openTemplates() {
    this.navCtrl.push(TemplatesPage);
  }
}
