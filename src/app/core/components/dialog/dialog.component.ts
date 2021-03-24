import {Component} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  user = this.firebaseAuth.currentUser;
  uid: any;

  constructor(public firebaseAuth: AngularFireAuth) {

    console.log(this.user);

    if (this.user != null) {
      this.uid = this.user;
      console.log(this.uid);
    }
  }

}
