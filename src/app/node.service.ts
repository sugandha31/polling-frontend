import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class NodeService {

  Response: any;

  private loginApi = "http://localhost:3000/api/login";
  private signupApi = "http://localhost:3000/api/signup";
  private logoutApi = "http://localhost:3000/api/logout"
  private getAll = "http://localhost:3000/api/getAllPolls";

  constructor(private http: HttpClient) { }

  signup(email, name, user_name, password) : Observable <any>{
    return this.http.post(this.signupApi, {"email": email,
                                          "user_name": user_name,
                                          "password": password,
                                          "name": name});
  }

  login(email, password) : Observable <any>{
    return this.http.post(this.loginApi, {"email": email,
                                           "password": password});
  }

  logout(email) : Observable <any>{
    return this.http.get(this.logoutApi, {
      params: new HttpParams().set('email', email)
    })
  }

  getAllPolls() : Observable <any>{
    return this.http.get(this.getAll);
  }
}
