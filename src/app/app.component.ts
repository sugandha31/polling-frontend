import { Component, Inject } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { NodeService } from './node.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Polling System';
  collapsed = true;
  
  constructor(private service: NodeService, @Inject(SESSION_STORAGE) private storage: StorageService) {}

  home : any;
  create_poll : any;
  live_poll : any;
  profile : any;
  faq : any;
  contact : any;
  show : boolean;
  //Question: String[] = [];

  ngOnInit(){
    if(this.storage.get('show')==true){
      this.show = false;
      //this.getAll();
    }else{
      this.show = true;
     // this.getAll();
    }
  }

  pgReload(){
    window.location.reload(true);
  }

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

  login(email:String, password:String){
    this.service.login(email, password).subscribe((result: any)=>{
      if(result.status == true){
        this.storage.set('show', true );
        this.storage.set('user', {
          'email': email,
          'password': password
        });
        this.show = false;
      }else{
        this.storage.set('show', false );
        this.show = true;
      }
    })
  }

  signup(name: String, user_name: String, email: String, password: String){
    this.service.signup(email, name, user_name, password).subscribe((result: any)=>{
      alert("You are successfully SignedUp. Login to proceed.");
    })
  }

  logout(email: String){
    this.service.logout(email).subscribe((result:any)=>{
      if(result.status == true){
        this.storage.set('show', false );
        alert('You are successfully logged out.');
        this.show = true;
      }
    });
  }
}