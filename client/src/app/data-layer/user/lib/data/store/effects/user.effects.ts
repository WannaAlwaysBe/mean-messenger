import { Injectable } from '@angular/core';

import { catchError, map, of, switchMap } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromActions from '../actions/actions';
import { UserRestService } from '../../../rest/services/user-rest.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private http: UserRestService,
  ) {}

  load$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadAll),
    switchMap(({searchText}) => this.http.getAll(searchText).pipe(
      map(users => fromActions.loadAllSuccess({users})),
      catchError(httpErrorResponse => of(fromActions.loadAllFailure({httpErrorResponse}))),
    )),
  ));

  loadCurrent$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadCurrent),
    switchMap(() => this.http.getCurrent().pipe(
      map(user => fromActions.loadCurrentSuccess({user})),
      catchError(httpErrorResponse => of(fromActions.loadCurrentFailure({httpErrorResponse}))),
    )),
  ));

  loadOne$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.loadOne),
    switchMap(({userId}) => this.http.getOne(userId).pipe(
      map(user => fromActions.loadOneSuccess({user})),
      catchError(httpErrorResponse => of(fromActions.loadOneFailure({httpErrorResponse}))),
    )),
  ));
}
