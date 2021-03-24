import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailValidationService {

  constructor() {
  }

  // Masking of the e-mail validation
  validateEmail(email: string): boolean {
    const pattern = /^[0-9a-zA-Z.-]{6,30}@(student|[a-z]){3,7}([.]uni-pannon[.]hu)/;
    return pattern.test(email);
  }

}
