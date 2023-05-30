import { Injectable } from '@angular/core';

import {Actions, ofType} from '@ngrx/effects';

import * as fromActions from '../store/actions/actions';

@Injectable()
export class ChatActionsService {
  constructor(
    private actions$: Actions
  ) { }

  loadAll$ = this.actions$.pipe(ofType(fromActions.loadAll));
  loadAllSuccess$ = this.actions$.pipe(ofType(fromActions.loadAllSuccess));
  loadAllFailure$ = this.actions$.pipe(ofType(fromActions.loadAllFailure));

  create$ = this.actions$.pipe(ofType(fromActions.create));
  createSuccess$ = this.actions$.pipe(ofType(fromActions.createSuccess));
  createFailure$ = this.actions$.pipe(ofType(fromActions.createFailure));
}
