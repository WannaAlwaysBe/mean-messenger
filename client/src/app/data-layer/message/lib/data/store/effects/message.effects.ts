import {Injectable} from '@angular/core';

import {exhaustMap, filter, map, Observable, takeUntil, tap} from 'rxjs';

import {Actions, createEffect, EffectNotification, ofType} from '@ngrx/effects';

import {ChatDataService} from "@data-layer/chat";

import {connectionClosed, connectionIsSet} from '../../../../../../common/services/websocket/actions';
import {WebsocketService} from '../../../../../../common/services/websocket/websocket.service';
import * as fromActions from '../actions/actions';
import {Message} from '../../../models';

@Injectable()
export class MessageEffects {
  private messages$ = this.ws.getMessages();

  constructor(
    private actions$: Actions,
    private ws: WebsocketService,
    private chatDataService: ChatDataService,
  ) {}

  getAll$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.getAll),
    tap(({chatId}) => {
      this.ws.getAllMessages(chatId);
    }),
  ), {dispatch: false});

  getAllSuccess$ = createEffect(() => this.messages$.pipe(
    filter(message => message.type === 'GET ALL'),
    map(({data}) => fromActions.getAllSuccess({messages: data as Message[]})),
  ));

  getNewSuccess$ = createEffect(() => this.messages$.pipe(
    filter(message => message.type === 'NEW MESSAGE'),
    tap(() => this.chatDataService.loadAll()),
    map(({data}) => fromActions.getNewSuccess({message: data as Message})),
  ));

  send$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.send),
    tap(({message}) => {
      this.ws.sendMessage(message);
    }),
  ), {dispatch: false});

  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<any> {
    return this.actions$.pipe(
      ofType(connectionIsSet),
      exhaustMap(() => resolvedEffects$.pipe(takeUntil(this.actions$.pipe(ofType(connectionClosed))))),
    );
  }
}
