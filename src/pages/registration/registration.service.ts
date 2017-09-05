import { Injectable }    from '@angular/core';
import { NgModule } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { IonicPageModule } from 'ionic-angular';
import { RegistrationPage } from './registration';

@NgModule({
  declarations: [
    RegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistrationPage),
  ],
})

@Injectable()
export class RegistrationService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private registerUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }

  registration(params: object): Promise<any> {
    return this.http
      .post(this.registerUrl, JSON.stringify(params), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as any)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}