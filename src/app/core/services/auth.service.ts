import {Injectable} from '@angular/core';
import {FirebaseService} from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userIsAuthenticated = false;

  constructor(private firebaseService: FirebaseService) {
  }

  getUserIsAuthenticated(): boolean {
    this.firebaseService.getIfUserIsLoggedIn().then(result => {
      return result;
    });
    return false;
  }

  logout(): void {
    this.firebaseService.logout();
  }
}
