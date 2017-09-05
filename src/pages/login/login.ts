import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegistrationPage } from '../registration/registration';
import { HomePage } from '../home/home';
import { LoginService } from './login.service';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {
    login: '',
    password: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private loginService: LoginService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  pushRegistration() {
    this.navCtrl.push(RegistrationPage);
  }

  submitAuth() {
    // this.loginService
    //   .login(this.user.login, this.user.password)
    //     .then((data) => {
          this.navCtrl.push(HomePage);
        // });
  }

}
