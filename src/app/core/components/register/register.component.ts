import {Component, OnInit} from '@angular/core';
import {FirebaseService} from "../../services/firebase.service";
import {EmailValidationService} from "../../services/email-validation.service";
import {EntranceService} from "../../services/entrance.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isSignedIn = false;
  email: string;
  password: string;
  canRegister: Promise<boolean>;

  constructor(public firebaseService: FirebaseService,
              public emailValidationService: EmailValidationService,
              public entranceService: EntranceService) {
  }

  ngOnInit(): void {
    this.isSignedIn = localStorage.getItem('user') !== null;
  }

  // onSignUp
  async onSignUp(email: string, password: string): Promise<boolean> {
    await this.firebaseService.register(email, password);
    this.isSignedIn = (this.firebaseService.isLoggedIn) && (this.emailValidationService.validateEmail(email));

    return this.isSignedIn;
  }

  entranceregister() {
    this.canRegister = this.onSignUp(this.email, this.password);
  }
}

/*
  isSignedIn = false;

  constructor(public firebaseService : FirebaseService,
              public emailValidationService : EmailValidationService) {}

  ngOnInit(): void {
    this.isSignedIn = localStorage.getItem('user') !== null;
  }

  // onSignUp
  async onSignUp(email: string, password: string) {
    await this.firebaseService.register(email, password);
    if( (this.firebaseService.isLoggedIn) && (this.emailValidationService.validateEmail(email)) )
      this.isSignedIn = true;
  }

  // Logout
  handleLogout() {
    this.isSignedIn = false;
  }
 */
