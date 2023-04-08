import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";

import { User } from '@data-layer/user';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  private usersUrl = '/users';
  private currentUserUrl = '/user';

  constructor(
    private http: HttpClient,
  ) {}

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public getCurrent(): Observable<User> {
    return this.http.get<User>(this.currentUserUrl);
  }
}
