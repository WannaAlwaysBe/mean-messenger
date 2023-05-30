import {Injectable} from '@angular/core';

import {select, Store} from '@ngrx/store';

import * as fromStore from '../store/store';
import * as fromActions from '../store/actions/actions';
import {Message} from '../../models';

@Injectable()
export class MessageDataService {
  public list$ = this.store$.pipe(select(fromStore.messageSelectors.selectAll));
  public ids$ = this.store$.pipe(select(fromStore.messageSelectors.selectIds));
  public entities$ = this.store$.pipe(select(fromStore.messageSelectors.selectEntities));
  public count$ = this.store$.pipe(select(fromStore.messageSelectors.selectTotal));

  constructor(
    private store$: Store<fromStore.FeatureState>
  ) { }

  public getAll(chatId: string): void {
    this.store$.dispatch(fromActions.getAll({chatId}));
  }

  public send(message: Message): void {
    this.store$.dispatch(fromActions.send({message}));
  }

  public clear(): void {
    this.store$.dispatch(fromActions.clear());
  }
}
