import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';

import {Observable} from 'rxjs';

import {io, Socket} from 'socket.io-client';

import {LocalStorageService} from '@common';

import {Message} from '@data-layer/message';

import {environment} from '../../../../environment';
import * as fromActions from './actions';

@Injectable()
export class WebsocketService {
  private socket: Socket;

  constructor(
    private localStorageService: LocalStorageService,
    private store: Store,
  ) {
  }

  public getMessages(): Observable<{
    type: "GET ALL" | "NEW MESSAGE";
    data: Message | Message[];
  }> {
    return new Observable(observer => {
      this.socket.on('message', (data) => {
        const parsedData: Message[] | Message = JSON.parse(data);

        observer.next(
          Array.isArray(parsedData) ?
            {data: parsedData, type: 'GET ALL'} :
            {data: parsedData, type: 'NEW MESSAGE'}
        );
      });
    });
  }

  public setupSocketConnection(): void {
    const token = this.localStorageService.getData<string>('token');

    this.socket = io(environment.SERVER_URL, {extraHeaders: {Authorization: `Bearer ${token}`}});
    this.store.dispatch(fromActions.connectionIsSet());
  }

  public sendMessage(message: Message): void {
    this.socket.emit('message', JSON.stringify(message));
  }

  public getAllMessages(chatId: string): void {
    this.socket.emit('all_messages', {chat: chatId});
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
      this.store.dispatch(fromActions.connectionClosed());
    }
  }
}
