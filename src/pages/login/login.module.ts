import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { Http } from '@angular/http';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {
	private loginUrl = 'api/heroes';  // URL to web api

	constructor(private http: Http) { }

	login(email: string, password: string): Promise<any[]> {
	  return this.http
	  	.post(this.loginUrl, {email, password})
	             .toPromise()
	             .then(response => response.json().data as any[])
	             .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error);
	  return Promise.reject(error.message || error);
	}

}
