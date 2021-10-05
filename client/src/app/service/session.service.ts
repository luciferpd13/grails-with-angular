import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../constants/appconstant';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  apiURL: string = AppConstants.baseURL;

  constructor(private httpClient: HttpClient) { }

  createSession = (session: any) => {
    return this.httpClient.post(`${this.apiURL}session`, session);
  }
  
  getSessionByFilter = (filter: any) => {
    return this.httpClient.post(`${this.apiURL}session/findsessionbyfilter`, filter );
  }
}
