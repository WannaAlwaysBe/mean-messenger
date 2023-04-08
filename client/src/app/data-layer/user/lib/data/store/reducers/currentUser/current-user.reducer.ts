import { createReducer, on } from '@ngrx/store';

import * as fromActions from '../../actions/actions';
import { User } from '../../../../models';

export const key = 'currentUser';

export type State = User;

export const initialState: State = {} as User;

export const reducer = createReducer(
  initialState,
  on(fromActions.loadCurrentSuccess, (state, res) => res.user),
);

