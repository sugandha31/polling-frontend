import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { NodeService } from './node.service';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { StorageService, StorageServiceModule } from 'angular-webstorage-service';
import { QuestionComponent } from './question/question.component';
import { ListComponent } from './list/list.component'; 
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { LivePollComponent } from './live-poll/live-poll.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CreatePollComponent,
    QuestionComponent,
    ListComponent,
    LivePollComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    HttpModule,
    StorageServiceModule
  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
