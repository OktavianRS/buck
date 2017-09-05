import { BrowserModule } from '@angular/platform-browser';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule }    from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistrationPage } from '../pages/registration/registration';
import { RegistrationService } from '../pages/registration/registration.service';
import { LoginPage } from '../pages/login/login';
import { LoginService } from '../pages/login/login.service';
import { FopTaxOnePage } from '../pages/fop-tax-one/fop-tax-one';
import { PayFopPage } from '../pages/pay-fop/pay-fop';
import { TemplatesPage } from '../pages/templates/templates';
import { EmployeeTaxPage } from '../pages/employee-tax/employee-tax';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '9f4e9038'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    FopTaxOnePage,
    PayFopPage,
    TemplatesPage,
    EmployeeTaxPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Назад',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
    }
    ),
    CloudModule.forRoot(cloudSettings)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    FopTaxOnePage,
    PayFopPage,
    TemplatesPage,
    EmployeeTaxPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    RegistrationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
