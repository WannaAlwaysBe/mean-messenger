import {combineReducers, createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromUserReducer from './reducers/users/user.reducer';
import * as fromUserLoadingReducer from './reducers/users/user-loading.reducer';
import * as fromCurrentUserReducer from './reducers/currentUser/current-user.reducer';
import * as fromCurrentUserLoadingReducer from './reducers/currentUser/current-user-loading.reducer';

export const featureKey = '[DATA LAYER] USER';

export interface FeatureState {
  [featureKey]: State;
}

export interface State {
  [fromUserReducer.key]: fromUserReducer.State;
  [fromUserLoadingReducer.key]: fromUserLoadingReducer.State;
  [fromCurrentUserReducer.key]: fromCurrentUserReducer.State;
  [fromCurrentUserLoadingReducer.key]: fromCurrentUserLoadingReducer.State;
}

export const featureReducer = combineReducers({
  [fromUserReducer.key]: fromUserReducer.reducer,
  [fromUserLoadingReducer.key]: fromUserLoadingReducer.reducer,
  [fromCurrentUserReducer.key]: fromCurrentUserReducer.reducer,
  [fromCurrentUserLoadingReducer.key]: fromCurrentUserLoadingReducer.reducer,
});

export const featureSelector = createFeatureSelector<State>(featureKey);

/*
* User selectors
* */
export const userSelector = createSelector<FeatureState, [State], fromUserReducer.State>(
  featureSelector,
  (state) => state[fromUserReducer.key],
);
export const userSelectors = fromUserReducer.adapter.getSelectors<FeatureState>(userSelector);
export const userLoadingSelector = createSelector<FeatureState, [State], fromUserLoadingReducer.State>(
  featureSelector,
  (state) => state[fromUserLoadingReducer.key],
);

/*
* Current user selectors
* */
export const currentUserSelector = createSelector<FeatureState, [State], fromCurrentUserReducer.State>(
  featureSelector,
  (state) => state[fromCurrentUserReducer.key],
);
export const currentUserLoadingSelector = createSelector<FeatureState, [State], fromCurrentUserLoadingReducer.State>(
  featureSelector,
  (state) => state[fromCurrentUserLoadingReducer.key],
);
