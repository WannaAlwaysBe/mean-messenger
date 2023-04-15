import { createReducer, on } from '@ngrx/store';

import * as fromActions from '../actions/actions';

export const key = 'chatsLoading';

export interface State {
  loadInProgress: boolean;
  createInProgress: boolean;
}

export const initialState: State = {
  loadInProgress: false,
  createInProgress: false,
};

export const reducer = createReducer(
  initialState,
  on(
    fromActions.loadAll,
    (state) => ({...state, loadInProgress: true})
  ),
  on(
    fromActions.loadAllSuccess,
    fromActions.loadAllFailure,
    (state) => ({...state, loadInProgress: false})
  ),

  on(
    fromActions.create,
    (state) => ({...state, createInProgress: true})
  ),
  on(
    fromActions.createSuccess,
    fromActions.createFailure,
    (state) => ({...state, createInProgress: false})
  ),
);

