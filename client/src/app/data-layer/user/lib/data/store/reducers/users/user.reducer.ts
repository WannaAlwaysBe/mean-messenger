import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';

import * as fromActions from '../../actions/actions';
import { User } from '../../../../models';

export const key = 'user';

export interface State extends EntityState<User> { }

export const adapter = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(fromActions.loadAllSuccess, (state, res) => adapter.setAll(res.users, state)),
);

