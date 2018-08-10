import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { ProfileComponent } from '../profile/profile.component';

const appRoutes: Routes = [
  {
    path : 'profile',
    component : ProfileComponent
  }
  // {
  //   path : 'login',
  //   component : LoginComponent  
  // },
  // {
  //   path : 'signup',
  //   component : SignupComponent
  // }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
