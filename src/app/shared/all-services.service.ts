
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

  login(email: string, password: string) {
       return this.http.post(myGlobals.Login,{ email: email, password: password });
  }

  logout() {
    localStorage.removeItem('userToken');
}
}