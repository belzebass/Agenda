import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";
import {EmailValidationService} from "../../services/email-validation.service";
import {EntranceService} from "../../services/entrance.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isSignedIn = false;
  email: string;
  password: string;
  canLogin: Promise<boolean>;

  constructor(public firebaseService: FirebaseService,
              public emailValidationService: EmailValidationService,
              public entranceService: EntranceService) {
  }

  ngOnInit(): void {
    this.isSignedIn = localStorage.getItem('user') !== null;
  }

  // onLogin
  async onLogin(email: string, password: string): Promise<boolean> {
    await this.firebaseService.login(email, password);
    this.isSignedIn = (this.firebaseService.isLoggedIn) && (this.emailValidationService.validateEmail(email));

    return this.isSignedIn;
  }

  entrancelogin() {
    this.canLogin = this.onLogin(this.email, this.password);
  }

}

/*
  isSignedIn = false;

  constructor(public firebaseService : FirebaseService,
              public emailValidationService : EmailValidationService) {}

  ngOnInit(): void {
    this.isSignedIn = localStorage.getItem('user') !== null;
  }

  // onLogin
  async onLogin(email: string, password: string) {
    await this.firebaseService.login(email, password);
    if( (this.firebaseService.isLoggedIn) && (this.emailValidationService.validateEmail(email)) )
      this.isSignedIn = true;
  }

  // Logout
  handleLogout() {
    this.isSignedIn = false;
  }
 */
