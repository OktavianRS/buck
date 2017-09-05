import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeTaxPage } from './employee-tax';

@NgModule({
  declarations: [
    EmployeeTaxPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeTaxPage),
  ],
})
export class EmployeeTaxPageModule {}
