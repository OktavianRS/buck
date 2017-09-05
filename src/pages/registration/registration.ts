import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { RegistrationService } from './registration.service';

/**
 * Generated class for the RegistrationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  private user = {
    id: '',
    number: '',
    pip: '',
    state: '',
    city: '',
    summary: '',
    destination: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private registrationService: RegistrationService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  submitRegistration() {
    // this.registrationService
    //   .registration(this.user)
    //     .then((data) => {
          this.navCtrl.push(HomePage);
        // });
  }

}
// AIzaSyDPU30Mq7g7ZGzn6PoZqBCSrYYd9sE5uCM