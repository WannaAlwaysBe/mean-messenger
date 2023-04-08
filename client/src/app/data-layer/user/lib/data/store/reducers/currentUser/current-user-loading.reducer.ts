import { createReducer, on } from '@ngrx/store';

import * as fromActions from '../../actions/actions';

export const key = 'currentUserLoading';

export interface State {
  loadInProgress: boolean;
}

export const initialState: State = {
  loadInProgress: false,
};

export const reducer = createReducer(
  initialState,
  on(
    fromActions.loadCurrent,
    (state) => ({...state, loadInProgress: true}),
  ),
  on(
    fromActions.loadCurrentSuccess,
    fromActions.loadCurrentFailure,
    (state) => ({...state, loadInProgress: false}),
  ),
);

