import { Component } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  collapsed = true;
  
  home : any;
  create_poll : any;
  live_poll : any;
  profile : any;
  faq : any;
  contact : any;

  name : any;
  userid : any;
  email : any;
  password : any;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    if(this.collapsed == true){
      this.home = '';
      this.create_poll = '';
      this.live_poll = '';
      this.profile = '';
      this.faq = '';
      this.contact = '';
    }else{
      this.home = 'Home';
      this.create_poll = 'Create Poll';
      this.live_poll = 'Live Poll';
      this.profile = 'Profile';
      this.faq = 'FAQ';
      this.contact = 'Contact';
    }
  }

  login(email:any, password:any){
    console.log(email+"---"+password);
  }
}
