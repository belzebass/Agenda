import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isActive = false;

  isReady = false;
  check = (event) => {
    if (!this.isReady) {
      event.preventDefault();
    }
  }

  @Output() isLogout = new EventEmitter<void>(); // can be removed
  disabled: any;
  route: any;

  constructor(public authService: AuthService,
              public dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
  }
}
