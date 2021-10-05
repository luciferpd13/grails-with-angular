import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../constants/appconstant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiURL: string = AppConstants.baseURL;

  constructor(private httpClient: HttpClient) { }

  authenticate = (login: any) => {
    return this.httpClient.post(`${this.apiURL}api/login`, login);
  }

  getUserData = (user: any) => {
    return this.httpClient.post(`${this.apiURL}user/finduserbyusername`, user);
  }
}
