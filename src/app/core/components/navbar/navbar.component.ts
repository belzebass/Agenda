import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from "@angular/material/dialog";

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

  @Output() isLogout = new EventEmitter<void>()
  disabled: any;
  route: any;

  constructor(public firebaseService: FirebaseService,
              public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  ngOnInit(): void {
  }

  logout() {
    this.firebaseService.logout();
    this.isLogout.emit();
  }
}
