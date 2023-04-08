import { createReducer, on } from '@ngrx/store';

import * as fromActions from '../../actions/actions';

export const key = 'userLoading';

export interface State {
  loadInProgress: boolean;
}

export const initialState: State = {
  loadInProgress: false,
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
);

