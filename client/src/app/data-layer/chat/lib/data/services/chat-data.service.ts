import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as fromStore from '../store/store';
import * as fromActions from '../store/actions/actions';

import { ChatInitialData } from '../../models';

@Injectable()
export class ChatDataService {
  public loading$ = this.store$.pipe(select(fromStore.chatLoadingSelector));
  public list$ = this.store$.pipe(select(fromStore.chatSelectors.selectAll));
  public ids$ = this.store$.pipe(select(fromStore.chatSelectors.selectIds));
  public entities$ = this.store$.pipe(select(fromStore.chatSelectors.selectEntities));
  public count$ = this.store$.pipe(select(fromStore.chatSelectors.selectTotal));

  constructor(
    private store$: Store<fromStore.FeatureState>
  ) { }

  public loadAll(): void {
    this.store$.dispatch(fromActions.loadAll());
  }

  public create(chatInitialData: ChatInitialData): void {
    this.store$.dispatch(fromActions.create({chatInitialData}));
  }
}
