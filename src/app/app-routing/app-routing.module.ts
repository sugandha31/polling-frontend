import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { ProfileComponent } from '../profile/profile.component';
import { CreatePollComponent } from '../create-poll/create-poll.component';
import { QuestionComponent } from '../question/question.component';
import { ListComponent } from '../list/list.component';
import { LivePollComponent } from '../live-poll/live-poll.component';

const appRoutes: Routes = [
  {
    path : 'profile',
    component : ProfileComponent
  },
  {
    path : 'createPoll',
    component : CreatePollComponent
  },
  {
    path : 'question',
    component : QuestionComponent
  },
  {
    path : 'dashboard',
    component : ListComponent
  },
  {
    path : 'livepoll',
    component : LivePollComponent
  }
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
