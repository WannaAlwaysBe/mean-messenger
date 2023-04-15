import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

import * as fromActions from '../actions/actions';
import { Chat } from '../../../models';

export const key = 'chats';

export interface State extends EntityState<Chat> { }

export const adapter = createEntityAdapter<Chat>();

export const initialState: State = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(fromActions.loadAllSuccess, (state, res) => adapter.setAll(res.chats, state)),
  on(fromActions.createSuccess, (state, res) => adapter.setOne(res.chat, state)),
);

