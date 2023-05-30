import {createReducer, on} from '@ngrx/store';
import {createEntityAdapter, EntityState} from '@ngrx/entity';

import * as fromActions from '../../actions/actions';
import {Message} from '../../../../models';

export const key = 'message';

export interface State extends EntityState<Message> { }

export const adapter = createEntityAdapter<Message>();

export const initialState: State = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(fromActions.getAllSuccess, (state, res) => adapter.setAll(res.messages, state)),
  on(fromActions.getNewSuccess, (state, res) => adapter.setOne(res.message, state)),
  on(fromActions.clear, (state) => adapter.removeAll(state)),
);

