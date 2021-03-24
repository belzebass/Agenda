import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AngularFireModule} from '@angular/fire';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {FirebaseService} from './core/services/firebase.service';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCv6KzWwdpLnL2vDxtI4uFWf3RZ1SwhjEo",
      authDomain: "agenda-nd7.firebaseapp.com",
      projectId: "agenda-nd7",
      storageBucket: "agenda-nd7.appspot.com",
      messagingSenderId: "839591463719",
      appId: "1:839591463719:web:1b56ec1c19939da74df702"
    }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
