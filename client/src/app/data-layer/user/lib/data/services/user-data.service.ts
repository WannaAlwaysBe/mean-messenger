import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as fromStore from '../store/store';
import * as fromActions from '../store/actions/actions';

@Injectable()
export class UserDataService {
  public loading$ = this.store$.pipe(select(fromStore.userLoadingSelector));
  public list$ = this.store$.pipe(select(fromStore.userSelectors.selectAll));
  public ids$ = this.store$.pipe(select(fromStore.userSelectors.selectIds));
  public entities$ = this.store$.pipe(select(fromStore.userSelectors.selectEntities));
  public count$ = this.store$.pipe(select(fromStore.userSelectors.selectTotal));

  public current$ = this.store$.pipe(select(fromStore.currentUserSelector));
  public currentLoading$ = this.store$.pipe(select(fromStore.currentUserLoadingSelector));

  constructor(
    private store$: Store<fromStore.FeatureState>
  ) { }

  public loadAll(searchText: string): void {
    this.store$.dispatch(fromActions.loadAll({searchText}));
  }

  public clear(): void {
    this.store$.dispatch(fromActions.clear());
  }

  public loadCurrent(): void {
    this.store$.dispatch(fromActions.loadCurrent());
  }

  public loadOne(userId: string): void {
    this.store$.dispatch(fromActions.loadOne({userId}));
  }
}
