import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";

import { Chat, ChatInitialData } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ChatRestService {
  private chatsUrl = '/chats';

  constructor(
    private http: HttpClient,
  ) {}

  public getAll(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.chatsUrl);
  }

  public create(chatInitialData: ChatInitialData): Observable<Chat> {
    return this.http.post<Chat>(this.chatsUrl, chatInitialData);
  }
}
