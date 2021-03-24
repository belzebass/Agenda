import {Injectable} from '@angular/core';
import {FirebaseService} from "./firebase.service";
import {EmailValidationService} from "./email-validation.service";

@Injectable({
  providedIn: 'root'
})
export class EntranceService {

  constructor() {
  }

}

/*
  isSignedIn = false;

  constructor(public firebaseService : FirebaseService,
              public emailValidationService : EmailValidationService) {}

  // onSignUp
  async onSignUp(email: string, password: string) {
    await this.firebaseService.register(email, password);
    if( (this.firebaseService.isLoggedIn) && (this.emailValidationService.validateEmail(email)) )
      this.isSignedIn = true;
  }

  // onLogin
  async onLogin(email: string, password: string) {
    await this.firebaseService.login(email, password);
    if( (this.firebaseService.isLoggedIn) && (this.emailValidationService.validateEmail(email)) )
      this.isSignedIn = true;
  }
 */

/*

  // onSignUp
  async onSignUp(email: string, password: string) : Promise<boolean> {
    await this.firebaseService.register(email, password);
    this.isSignedIn = (this.firebaseService.isLoggedIn) && (this.emailValidationService.validateEmail(email));

    return this.isSignedIn;
  }

  // onLogin
  async onLogin(email: string, password: string) : Promise<boolean> {
    await this.firebaseService.login(email, password);
    this.isSignedIn = (this.firebaseService.isLoggedIn) && (this.emailValidationService.validateEmail(email));

    return this.isSignedIn;
  }

 */
