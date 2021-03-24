import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ForgetpwdComponent} from './components/forgetpwd/forgetpwd.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ContentComponent} from './components/content/content.component';
import {DialogComponent} from './components/dialog/dialog.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {EventsComponent} from './components/events/events.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from "@angular/material/menu";
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgetpwdComponent,
    NavbarComponent,
    ContentComponent,
    DialogComponent,
    CalendarComponent,
    EventsComponent,
    ],
  exports: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgetpwdComponent,
    DialogComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatRadioModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MatDialogModule,
  ]
})
export class CoreModule {
}
