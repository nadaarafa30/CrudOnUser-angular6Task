
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { loginUser } from 'src/app/shared/DataModel';
import * as myGlobals from './global';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AllServicesService {
  constructor(private http: Http) { }
  isLoggedin: boolean = false;

  login(email: string, password: string) {
    return this.http.post(myGlobals.Login, { email: email, password: password });
  }

  GetallUsers(pageNumber) {
    return this.http.get(myGlobals.allUsers + '?page=' + pageNumber);
  }
  
  logout() {
    localStorage.removeItem('userToken');
  }

  isLoggedIn() {
    if (localStorage.getItem("userToken") == null) {
      this.isLoggedin = false;
      return this.isLoggedin;
    }
    else {
      return true;
    }
  }

}
