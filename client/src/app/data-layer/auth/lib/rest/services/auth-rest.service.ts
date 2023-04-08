import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthData, LoginData, RegisterData } from '../../models';

@Injectable()
export class AuthRestService {
  private registerUrl = '/auth/registration';
  private loginUrl = '/auth/login';

  constructor(
    private http: HttpClient,
  ) { }

  public register(registerData: RegisterData): Observable<AuthData> {
    return this.http.post<AuthData>(this.registerUrl, registerData);
  }

  public login(loginData: LoginData): Observable<AuthData> {
    return this.http.post<AuthData>(this.loginUrl, loginData);
  }
}
