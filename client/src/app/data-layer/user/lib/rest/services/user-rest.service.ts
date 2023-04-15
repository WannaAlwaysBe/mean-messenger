import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from "rxjs";

import { User } from '@data-layer/user';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  private usersUrl = '/users';
  private userIdUrl = (userId: string) => `/user/${userId}`;
  private currentUserUrl = '/user';

  constructor(
    private http: HttpClient,
  ) {}

  public getAll(searchText: string): Observable<User[]> {
    const params = new HttpParams().append('start', searchText);

    return this.http.get<User[]>(this.usersUrl, {params});
  }

  public getOne(userId: string): Observable<User> {
    return this.http.get<User>(this.userIdUrl(userId));
  }

  public getCurrent(): Observable<User> {
    return this.http.get<User>(this.currentUserUrl);
  }
}
