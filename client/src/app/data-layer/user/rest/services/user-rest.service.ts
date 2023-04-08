import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  public userUrl = '';
  public userIdUrl = (id: string): string => `${this.userUrl}/${id}`;

  constructor(
    private http: HttpClient,
  ) { }

  public getAll(users: User[]): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  public getOne(userId: string): Observable<User> {
    return this.http.get<User>(this.userIdUrl(userId));
  }
}
