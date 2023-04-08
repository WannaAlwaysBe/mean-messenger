import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthData, NewUserData } from '../../models';
import { User } from '../../../../user/lib/models';

@Injectable()
export class AuthRestService {
  private registerUrl = '/auth/registration';
  private loginUrl = '/auth/login';

  constructor(
    private http: HttpClient,
  ) { }

  public register(newUserData: NewUserData): Observable<User> {
    return this.http.post<User>(this.registerUrl, newUserData);
  }

  public login(authData: AuthData): Observable<User> {
    return this.http.post<User>(this.loginUrl, authData);
  }
}
