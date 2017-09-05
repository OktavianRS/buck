import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmployeeTaxPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee-tax',
  templateUrl: 'employee-tax.html',
})
export class EmployeeTaxPage {

  arrayOfEmployes: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.arrayOfEmployes = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeTaxPage');
  }

  employeeSelected(employeesCount: number) {
    console.log(employeesCount);
    for(let i: number = 0; i < employeesCount; i++) {
      this.arrayOfEmployes.push({
        name: '',
        value: i,
      });
    }
    console.log(this.arrayOfEmployes);
  }

}
