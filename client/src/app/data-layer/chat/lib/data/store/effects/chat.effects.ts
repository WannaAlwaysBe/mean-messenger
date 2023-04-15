import { Injectable } from '@angular/core';

import { catchError, map, of, switchMap } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromActions from '../actions/actions';
import { ChatRestService } from '../../../rest/services/chat-rest.service';

@Injectable()
export class ChatEffects {
  constructor(
    private actions$: Actions,
    private http: ChatRestService
  ) {}

  load$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadAll),
    switchMap(() => this.http.getAll().pipe(
      map(chats => fromActions.loadAllSuccess({chats})),
      catchError(httpErrorResponse => of(fromActions.loadAllFailure({httpErrorResponse}))),
    )),
  ));

  create$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.create),
    switchMap(({chatInitialData}) => this.http.create(chatInitialData).pipe(
      map(chat => fromActions.createSuccess({chat})),
      catchError(httpErrorResponse => of(fromActions.createFailure({httpErrorResponse}))),
    )),
  ));
}
