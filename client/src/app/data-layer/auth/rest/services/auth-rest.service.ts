import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthData, NewUserData } from '../../models';
import { User } from '../../../user/models';

@Injectable({
  providedIn: 'root'
})
export class AuthRestService {
  public authUrl = '';

  constructor(
    private http: HttpClient,
  ) { }

  public create(newUserData: NewUserData): Observable<User> {
    return this.http.post<User>(this.authUrl, newUserData);
  }

  public login(authData: AuthData): Observable<User> {
    return this.http.post<User>(this.authUrl, authData);
  }
}
