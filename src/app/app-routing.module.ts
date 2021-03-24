import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './core/components/register/register.component';
import {LoginComponent} from './core/components/login/login.component';
import {HomeComponent} from './core/components/home/home.component';
import {UserIsAuthenticatedService} from './core/services/user-is-authenticated.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [UserIsAuthenticatedService]
  },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
