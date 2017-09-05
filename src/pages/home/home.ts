import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FopTaxOnePage } from '../fop-tax-one/fop-tax-one';
import { EmployeeTaxPage } from '../employee-tax/employee-tax';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  FopTaxOneClicked() {
    this.navCtrl.push(FopTaxOnePage);
  }

  EmployeeTaxClicked() {
    this.navCtrl.push(EmployeeTaxPage);
  }
}
