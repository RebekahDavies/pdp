import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private httpClient: HttpClient) { }
  baseUrl = '/api/auth';

  // makes a post request to the auth/login endpoint with the username and password, then persists the returned access token
  login(email: string, password: string) {
    console.log('logging in....');
    return this.httpClient.post<{access_token: string}>(this.baseUrl + '/login', {email, password}).pipe(tap(res => {
      console.log('success');
      localStorage.setItem('access_token', res.access_token);
    }));
  }

  register(email:string, password:string) {
    return this.httpClient.post<{access_token: string}>(this.baseUrl + '/register', {email, password}).pipe(tap(res => {
      this.login(email, password);
    }));
  }

  logout() {
    localStorage.removeItem('access_token');
  };

  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
  }
}
